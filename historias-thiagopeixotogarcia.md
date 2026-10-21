# Histórias de usuário

> Entregável da aula 20. Cada história nasce de uma oportunidade do mapa de jornada e vira uma Issue com o label `historia`.

| ID | História | Oportunidade de origem | Prioridade | Issue |
| --- | --- | --- | --- | --- |
| HU01 | Como pessoa que está conhecendo a Bulbe pelo app, quero entender, em uma das primeiras telas da adesão, que a economia vem em duas contas (Cemig + Bulbe) para não ser surpreendida por uma segunda cobrança. | Fase 1 – Descoberta | média | #[ ] |
| HU02 | Como familiar que faz a adesão em nome do titular da conta de luz, quero informar que o cadastro é para outra pessoa e deixar meu contato para continuar recebendo as informações da conta dele. | Fase 2 – Adesão | alta | #[ ] |
| HU03 | Como familiar que fez o cadastro para o titular, quero enviar a ele pelo WhatsApp uma explicação simples das duas contas e do "antes × agora" para que ele entenda de onde vem a economia antes da primeira cobrança. | Fases 3 e 4 – Espera pela conexão e Primeira conta da Cemig | alta | #[ ] |
| HU04 | Como familiar que fez o cadastro para o titular, quero enviar a ele a primeira fatura Bulbe com o código de barras para que ele reconheça a cobrança como legítima e possa pagar na lotérica. | Fase 5 – Primeira cobrança da Bulbe | média | #[ ] |
| HU05 | Como familiar que fez o cadastro para o titular, quero ser avisado quando a primeira fatura dele estiver perto do vencimento sem pagamento para ajudá-lo antes que a dívida se acumule. | Fase 6 – Inadimplência | alta | #[ ] |
| HU06 | Como familiar que fez o cadastro para o titular, quero acompanhar a conta dele no seletor de instalações para ver o status dos pagamentos e agir quando algo estiver pendente. | Fase 7 – Corte de créditos | baixa | #[ ] |

## Critérios de aceite

### HU01
- [ ] Antes do aceite dos termos, uma das telas iniciais da adesão informa que a conta de luz passa a ser dividida em duas: Cemig e Bulbe.
- [ ] A explicação mostra um exemplo de valores com o total de antes e o total de depois (Cemig + Bulbe).
- [ ] O texto não usa termos técnicos como "créditos de energia" ou "geração distribuída".

### HU02
- [ ] A etapa Contato pergunta "Você está fazendo este cadastro para você ou para outra pessoa?", com as opções "Para mim" e "Para outra pessoa".
- [ ] Ao escolher "Para outra pessoa", o formulário pede nome e WhatsApp do titular e também nome e WhatsApp de quem está preenchendo.
- [ ] Não é possível avançar para a etapa Negócio sem preencher os dois WhatsApps.
- [ ] O contato de quem preencheu fica vinculado à instalação cadastrada.

### HU03
- [ ] Quando o cadastro foi feito para outra pessoa, a tela de Conexão exibe um card com o botão "Explicar para o titular pelo WhatsApp".
- [ ] O botão abre o WhatsApp com uma mensagem pronta, no mesmo formato do "Indicar por WhatsApp".
- [ ] A mensagem contém o nome do titular, o endereço da instalação, o aviso de que chegarão duas contas (Cemig e Bulbe) e a estimativa de valor antes × agora.
- [ ] O card fica disponível desde a adesão até o vencimento da primeira fatura.

### HU04
- [ ] Na tela de Faturas, a primeira fatura do titular tem o botão "Enviar ao titular".
- [ ] O envio compartilha pelo WhatsApp a fatura com o código de barras, pronta para pagamento na lotérica.
- [ ] A mensagem identifica a Bulbe, o nome do titular, o valor e a data de vencimento.

### HU05
- [ ] Quem fez o cadastro recebe uma notificação 3 dias antes do vencimento se a primeira fatura do titular estiver em aberto.
- [ ] Uma nova notificação é enviada no dia do vencimento se a fatura continuar em aberto.
- [ ] Nenhuma notificação é enviada depois que a fatura é paga.
- [ ] Tocar na notificação abre a fatura do titular.

### HU06
- [ ] O seletor de instalações mostra a conta gerenciada identificada como "Conta de [nome do titular]".
- [ ] A conta exibe o status atual: em análise, fatura em aberto, paga ou em atraso.
- [ ] A partir da conta, é possível reenviar a explicação da HU03, pagar a fatura e falar com o atendimento.