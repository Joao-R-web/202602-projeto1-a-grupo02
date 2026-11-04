# Mapa de jornada do usuário

> Entregável da aula 19.

## Persona

- **Nome e idade:** Henrique, 44 anos
- **Contexto:** Viu o anúncio da Bulbe com "15% de desconto" e "economia todo mês" e aderiu online, esperando economizar de R$ 40 a R$ 50 numa conta acima de R$ 400.
- **Objetivo:** Receber a economia anunciada e entender, em números, quanto economizou em cada fatura.
- **Medos e dúvidas:** Não entende por que o desconto foi de R$ 29,95 num mês e de R$ 0,17 no outro; acha que a oferta de 15% não é cumprida; teme pagar sem ter economia.
- **Canais que usa:** E-mail, WhatsApp, Google, Reclame Aqui

## Mapa

![Mapa de jornada](wireframes/jornada.png)

| Fase | Ações | Pontos de contato | Pensamentos | Emoção | Dor (com evidência da Bulbe) | Oportunidade |
|---|---|---|---|---|---|---|
| Descoberta e cadastro | Vê a promessa de desconto, calcula a economia e faz o cadastro online | Anúncios, canais oficiais e site da Bulbe | "Vou economizar uns R$ 40 a R$ 50 por mês" | Animado | O anúncio diz "15%", mas o site da Bulbe diz "até 15%", conforme perfil e créditos disponíveis | — |
| Primeira fatura | Abre a fatura e compara com o que esperava | Fatura Bulbe, App Bulbe | "Veio menos do que calculei, mas deixo passar" | Dúvida | Desconto de R$ 29,95 numa conta acima de R$ 400, sem explicação do cálculo (reclamação no Reclame Aqui, 14/09/2026) | Mostrar o desconto real na fatura |
| Segunda fatura | Confere o demonstrativo e vê o desconto de R$ 0,17 | Fatura Bulbe, App Bulbe | "A Bulbe não injetou os créditos e fiquei com o prejuízo" | Raiva | A FAQ da Bulbe prevê meses sem créditos, com valor igual ao da distribuidora; o cliente só descobre pela fatura (reclamação no Reclame Aqui, 14/09/2026: desconto de R$ 0,17) | Mostrar o desconto real na fatura, com o motivo quando for menor que o anunciado |
| Reclamação e saída | Escreve uma reclamação formal e pede cancelamento | E-mail, Ouvidoria, Reclame Aqui | "Só quero sair, com protocolo e comprovante" | Frustrado | Reclamação no Reclame Aqui (14/09/2026): contratou "15% de desconto" e recebeu R$ 29,95 e R$ 0,17 em faturas acima de R$ 400; pede cancelamento, isenção de taxas, estorno dos créditos e protocolo com comprovante de desvinculação junto à Cemig | — |

Fonte da evidência: Reclame Aqui, página da Bulbe Energia (https://www.reclameaqui.com.br/empresa/bulbe-energia), reclamação de 14/09/2026.

## Oportunidades registradas como Issues

- [x] #3 Informar o desconto real na fatura e explicar o motivo quando for menor que o anunciado