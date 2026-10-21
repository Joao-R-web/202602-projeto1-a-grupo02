# Histórias de usuário

> Entregável da aula 20. Cada história nasce de uma oportunidade do mapa de jornada e vira uma Issue com o label `historia`.


| ID | História | Oportunidade de origem | Prioridade | Issue |
| --- | --- | --- | --- | --- |
| HU01 | Como Lucas, quero visualizar de forma clara e comparativa por que recebo duas faturas (Cemig e Bulbe) para entender que não estou a pagar duas vezes pelo mesmo serviço. | Esclarecimento sobre Cobrança Dupla e papéis da Cemig/Bulbe | Alta | #15 |
| HU02 | Como Lucas, quero ver um demonstrativo simples da economia e dos créditos de energia para entender facilmente o cálculo do meu desconto sem ler termos técnicos. | Explicação visual do sistema de créditos de energia | Média | #15 |
| HU03 | Como Lucas, quero receber alertas dinâmicos e resumidos por WhatsApp/E-mail com o resumo das contas do mês para não ignorar o pagamento nem correr o risco de cancelamento. | Notificações diretas nos canais habituais do cliente | Alta | #15 |

---

## Critérios de aceite

### HU01
- [ ] Exibir um gráfico visual explicativo separando a taxa de distribuição/iluminação (Cemig) do valor de energia injetada (Bulbe).
- [ ] Incluir uma secção de dúvida frequente com a pergunta: "Por que ainda recebo a fatura da Cemig?".

### HU02
- [ ] Mostrar o valor final economizado em reais de forma destacada.
- [ ] Traduzir "energia injetada/compensada" para termos simples (ex: "Créditos gerados").

### HU03
- [ ] Enviar mensagem automática no WhatsApp com o valor da fatura Bulbe e o valor real da economia do mês.
- [ ] Disponibilizar botão de pagamento rápido via Pix diretamente na mensagem.

---

## História desenvolvida na Sprint

**HU01 — Entender as duas contas e a economia mensal (prioridade Alta)**

Esta é a história escolhida para desenvolver. Ela consolida as HU01, HU02 e HU03 acima, que atuam nas fases 2 a 4 da jornada (Recebimento das Faturas, Análise de Créditos e Decisão e Risco).

Como Lucas, quero ver de forma clara e comparativa por que recebo duas faturas (Cemig e Bulbe), com um demonstrativo simples da minha economia e dos créditos de energia, e receber um resumo mensal das contas por WhatsApp/e-mail, para entender que não pago duas vezes pelo mesmo serviço, saber como é calculado o meu desconto sem termos técnicos e não deixar de pagar nem correr o risco de cancelamento.

### Critérios de aceite da história desenvolvida

- [ ] Exibir um gráfico visual explicativo separando a taxa de distribuição/iluminação (Cemig) do valor de energia injetada (Bulbe), com a dúvida frequente "Por que ainda recebo a fatura da Cemig?" (origem: HU01).
- [ ] Mostrar o total de antes (só Cemig) e o de depois (Cemig + Bulbe) lado a lado, com o valor economizado no mês em reais, de forma destacada (origem: HU02).
- [ ] Traduzir "energia injetada/compensada" para termos simples, como "Créditos gerados" (origem: HU02).
- [ ] Enviar mensagem automática no WhatsApp com o valor da fatura Bulbe e a economia do mês, com botão de pagamento rápido via Pix (origem: HU03).

### Wireframe

Três telas, salvas em `wireframes/`:

- `hu01-entenda-suas-faturas.png`: explica por que chegam duas faturas.
- `hu01-resumo-do-mes.png`: economia, créditos gerados e comparativo da conta.
- `hu01-mensagem-whatsapp.png`: mensagem com o resumo da fatura e o Pix.