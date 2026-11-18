# Site v2 de Eduardo Alencar (prévia)

Versão nova e mais simples de eduardocnalencar.com: seis salas (Início, Vídeos, Livro, Newsletter, Pesquisa e dados, Sobre), PT e EN completos, ES e IT com uma página. Ação principal: assinar a newsletter.

Esta é a **prévia**, não indexada pelos buscadores. O site oficial continua em `eduardocna/eduardo-alencar-site`.
A troca só acontece com aprovação. A volta é a etiqueta `site-v1-2026-11-15` do repositório oficial.

- Build local: `npm ci && npm run build`
- Critérios de aceite: `python3 scripts/check_v2.py dist <base> <dist do v1>`
- Contador de visitas (GoatCounter, sem cookies): definir `PUBLIC_GOATCOUNTER=<código>` no build.
