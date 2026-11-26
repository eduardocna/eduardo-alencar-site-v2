"""Critérios de aceite do site v2 (plano v2, seção 4.6). Uso: python3 scripts/check_v2.py <dist> <base> <v1_dist>"""
import hashlib, json, re, sys
from html.parser import HTMLParser
from pathlib import Path

dist, base, v1 = Path(sys.argv[1]), sys.argv[2].rstrip('/') + '/', Path(sys.argv[3])
fails = []

def page_for(url_path):
    p = url_path.split('#')[0].split('?')[0]
    if not p.startswith(base): return None
    rel = p[len(base):]
    cand = dist / rel
    if rel == '' or rel.endswith('/'): cand = cand / 'index.html'
    return cand

class P(HTMLParser):
    def __init__(s): super().__init__(); s.links=[]; s.text=[]; s.ld=0; s.nav=0; s.in_nav=False; s.robots=None; s._skip=0
    def handle_starttag(s, t, a):
        a = dict(a)
        if t in ('a','link') and a.get('href'): s.links.append(a['href'])
        if t in ('img','video','script','iframe') and a.get('src'): s.links.append(a['src'])
        if t == 'video' and a.get('poster'): s.links.append(a['poster'])
        if t == 'script' and a.get('type') == 'application/ld+json': s.ld += 1
        if t == 'nav': s.in_nav = True
        if t == 'a' and s.in_nav: s.nav += 1
        if t == 'meta' and a.get('name') == 'robots': s.robots = a.get('content')
        if t in ('script','style'): s._skip += 1
    def handle_endtag(s, t):
        if t == 'nav': s.in_nav = False
        if t in ('script','style'): s._skip -= 1
    def handle_data(s, d):
        if not s._skip: s.text.append(d)

# 1. Endereços do v1 continuam respondendo
v1_urls = re.findall(r'<loc>https://eduardocnalencar\.com/([^<]*)</loc>', (v1 / 'sitemap.xml').read_text())
v1_urls += ['privacidade/', 'rss.xml'] + [f'publications/{p.name}/' for p in (v1 / 'publications').iterdir() if p.is_dir()]
missing = [u for u in v1_urls if not page_for(base + u).exists()]
if missing: fails.append(f'v1 sem resposta no v2: {missing}')
print(f'1. Endereços do v1: {len(v1_urls) - len(missing)}/{len(v1_urls)} respondem')

# 2. PDFs, imagens e vídeo idênticos
def tree(root): return {str(p.relative_to(root)): hashlib.sha256(p.read_bytes()).hexdigest() for p in root.rglob('*') if p.is_file()}
for sub in ('downloads', 'images', 'videos'):
    a, b = tree(v1 / sub), tree(dist / sub)
    atualizados = {'cv-eduardo-alencar-pt.pdf', 'cv-eduardo-alencar-en.pdf'}  # regerados em 26/11/2026 com 21.023 requerimentos
    diff = [k for k in a if a[k] != b.get(k) and not (sub == 'downloads' and k in atualizados and b.get(k))]
    if diff: fails.append(f'{sub} alterados ou ausentes: {diff}')
    print(f'2. {sub}: {len(a) - len(diff)}/{len(a)} arquivos idênticos ao v1')

# 3. Varredura das páginas
pages = list(dist.rglob('*.html'))
broken, words, no_ld, no_sub, navs, money = set(), {}, [], [], {}, []
for f in pages:
    p = P(); p.feed(f.read_text())
    rel = str(f.relative_to(dist))
    is_redirect = p.robots == 'noindex'
    for href in p.links:
        if href.startswith(base) or href.startswith('/'):
            t = page_for(href if href.startswith(base) else href)
            if t is None or not t.exists(): broken.add((rel, href))
    if is_redirect: continue
    text = ' '.join(' '.join(p.text).split())
    if p.ld == 0 and rel not in ('404.html',): no_ld.append(rel)
    if 'substack.com/subscribe' not in f.read_text(): no_sub.append(rel)
    navs[rel] = p.nav
    sem_oferta = re.sub(r'(não há|sem|no|sin|nessun)\s+(preço|price|precio|prezzo)', '', text, flags=re.I)  # "sem preço" não é oferta
    if re.search(r'R\$|US\$|(?<!registro de )\bpreço|\bprice\b|\bprecio\b|\bprezzo\b|contrat(e|ar) |orçamento sob|consultoria', sem_oferta, re.I): money.append(rel)
    if rel in ('pt/index.html', 'en/index.html', 'es/index.html', 'it/index.html'):
        main = f.read_text().split('<main', 1)[1].split('</main>', 1)[0]
        q = P(); q.feed('<main' + main); words[rel] = len(' '.join(q.text).split())
print(f'3. Páginas HTML: {len(pages)}; links internos quebrados: {len(broken)}')
for b in sorted(broken)[:15]: print('   QUEBRADO', b)
if broken: fails.append('links internos quebrados')
print(f'4. Palavras na página inicial (meta ≤ 500 depois do escopo ampliado de 26/11): {words}')
if any(v > 500 for v in words.values()): fails.append('página inicial acima de 500 palavras')
rooms6 = {k: v for k, v in navs.items() if k.startswith(('pt/', 'en/', 'es/', 'it/'))}
print(f'5. Itens no menu das salas PT/EN/ES/IT: {sorted(set(rooms6.values()))}')
if set(rooms6.values()) != {6}: fails.append(f'menu diferente de 6: {rooms6}')
print(f'6. Páginas sem JSON-LD: {no_ld or "nenhuma"}')
if no_ld: fails.append('JSON-LD ausente')
print(f'7. Páginas sem botão de assinatura: {no_sub or "nenhuma"}')
if no_sub: fails.append('botão de assinatura ausente')
print(f'8. Menção a preço/contratação: {money or "nenhuma"}')
if money: fails.append('menção comercial')
for extra in ('llms.txt', 'robots.txt', 'sitemap.xml', 'rss.xml'):
    print(f'9. {extra}:', 'ok' if (dist / extra).exists() else 'AUSENTE')
# 10. Números de destaque conferidos na fonte primária (fontes-numeros.json)
vault = Path(__file__).resolve().parents[4]
fontes = json.loads((Path(__file__).resolve().parents[1] / 'fontes-numeros.json').read_text())
for n in fontes['numeros']:
    fonte = vault / n['fonte']
    ok_fonte = fonte.exists() and n['trecho'] in fonte.read_text(errors='ignore')
    ok_site = n['numero'] in (dist / n['pagina']).read_text()
    print(f"10. {n['numero']}: fonte {'ok' if ok_fonte else 'NÃO CONFERE'}, site {'ok' if ok_site else 'AUSENTE'}")
    if not (ok_fonte and ok_site): fails.append(f"número {n['numero']} sem lastro na fonte ou ausente do site")

# 11. Ensaios: a Pesquisa lista todos os de essays.json, nos quatro idiomas, e o arquivo está em dia com as fontes
ess = json.loads((Path(__file__).resolve().parents[1] / 'src/data/essays.json').read_text())
for lang in ('pt', 'en', 'es', 'it'):
    html_r = (dist / lang / 'research' / 'index.html').read_text()
    n = html_r.count('class="essay"')
    print(f'11. {lang}/research: {n} ensaios listados (essays.json: {len(ess["itens"])})')
    if n != len(ess['itens']): fails.append(f'{lang}: ensaios listados {n} != {len(ess["itens"])}')
# 12. Lista de interesse e quatro idiomas completos
form = 'https://forms.gle/muWJztR86DSMQXSy9'
for lang in ('pt', 'en', 'es', 'it'):
    for room in ('', 'newsletter/'):
        ok = form in (dist / lang / room / 'index.html').read_text()
        print(f'12. {lang}/{room or "início"}: formulário da lista de interesse {"ok" if ok else "AUSENTE"}')
        if not ok: fails.append(f'formulário ausente em {lang}/{room}')
    for room in ('videos', 'book', 'newsletter', 'research', 'about'):
        if not (dist / lang / room / 'index.html').exists(): fails.append(f'sala ausente: {lang}/{room}')
# 13. Número antigo fora do site
velho = [str(f.relative_to(dist)) for f in dist.rglob('*.html') if re.search(r'13[.,]042', f.read_text())]
print(f'13. Páginas com o número antigo 13.042: {velho or "nenhuma"}')
if velho: fails.append('número 13.042 ainda no site')

print('\nRESULTADO:', 'APROVADO' if not fails else 'REPROVADO: ' + '; '.join(fails))
sys.exit(1 if fails else 0)
