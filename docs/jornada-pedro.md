# Mapa de jornada do usuário

> Entregável da aula 19. Substitua os textos entre colchetes.

## Persona

- **Nome e idade:** Mariana, 34 anos
- **Contexto:** Mariana é confeiteira, MEI, e toca um ateliê de bolos dentro de casa no bairro Eldorado, em Contagem (MG). O forno elétrico e a geladeira industrial pesam na conta, e foi exatamente isso que fez ela prestar atenção quando um vendedor da Bulbe apareceu na porta oferecendo desconto pra pequeno negócio. Ela assinou o contrato ali mesmo, sem ler todas as cláusulas, animada com a promessa de sobra de caixa no fim do mês. O que ela não processou na hora foi o prazo de fidelidade: 24 meses, com multa proporcional se cancelar antes. Três meses depois, um fornecedor de insumos ofereceu prazo melhor em outra cidade, e Mariana cogitou mudar o ateliê de endereço. Foi aí que a filha dela, revisando os papéis, achou a cláusula de multa escondida no meio do contrato. Mariana entrou em pânico: achou que ia perder dinheiro de um jeito ou de outro, ficando ou saindo.
- **Objetivo:** Economizar na conta de luz do ateliê sem ficar presa a um contrato que ela não entende completamente. Quer saber, antes de decidir qualquer mudança, quanto custaria sair agora, se existe carência ou janela sem multa, e se dá pra transferir o contrato pro novo endereço em vez de cancelar.
- **Medos e dúvidas:** Não sabe se a multa de fidelidade incide sobre o valor total do contrato ou só sobre os meses que faltam, e ninguém explicou essa conta na hora da venda. Não entende se mudar o ateliê de endereço dentro da mesma concessionária conta como cancelamento ou como simples transferência de titularidade. Teme que ligar pra Bulbe só pra tirar essa dúvida já "ative" o processo de rescisão sem ela querer, e por isso evita o contato. Desconfia que, por ter assinado rápido e sem ler tudo, pode ter cláusulas escondidas além da multa, como reajuste automático ou taxa de religação. Como é MEI, também não sabe se consegue algum abatimento fiscal com a nota fiscal da fatura, e esse ponto nunca foi levantado pelo vendedor. No fundo, tem medo de qualquer decisão, seja ficar, seja sair, sair mais caro do que economizou até agora.
- **Canais que usa:** WhatsApp Business, Google, Instagram do ateliê, e atendimento por telefone quando o assunto é "dinheiro sério".

## Mapa

![Mapa de jornada](wireframes/jornada.png)

| Fase | Ações | Pontos de contato | Pensamentos | Emoção | Dor (com evidência da Bulbe) | Oportunidade |
| --- | --- | --- | --- | --- | --- | --- |
| 1. Venda na porta | Vendedor da Bulbe aparece no ateliê e oferece desconto pra pequeno negócio. | Vendedor presencial, contrato em papel | "Desconto na conta do forno e da geladeira? Quero." | Animada / Esperançosa | O prazo de 24 meses e a multa não são explicados na venda. | Vendedor entregar um resumo de uma página com prazo, multa e como sair. |
| 2. Assinatura | Assina ali mesmo, sem ler todas as cláusulas. | Contrato em papel | "Depois eu leio com calma." | Confiante / Apressada | Cláusulas ficam escondidas no meio do contrato e ninguém aponta o que importa. | Destacar fidelidade, multa e reajuste em linguagem simples antes da assinatura. |
| 3. Uso no dia a dia | Segue a rotina do ateliê e recebe as faturas por três meses. | Fatura, WhatsApp Business | "Parece que está tudo certo." | Tranquila | Nada lembra a fidelidade nem mostra quanto ela já economizou. | Mostrar na fatura a economia acumulada e o tempo restante de contrato. |
| 4. Cogita mudar de endereço | Fornecedor oferece prazo melhor em outra cidade e ela pensa em mudar o ateliê. A filha revisa os papéis e acha a cláusula de multa. | Contrato, filha, Google | "Mudar de endereço é cancelar? Vou pagar multa?" | Pânico / Surpresa | Não sabe se a multa incide sobre o contrato todo ou só sobre os meses que faltam, nem se mudar de endereço conta como cancelamento ou transferência. Ligado ao churn por falta de entendimento do produto (27,7%). | Simulador do custo de sair hoje e explicação clara de transferência de endereço. |
| 5. Paralisia | Evita falar com a Bulbe com medo de acionar a rescisão sem querer. Pesquisa sozinha. | Google, telefone, WhatsApp Business | "Se eu ligar, eles já cancelam? Tem mais cláusula escondida?" | Medo / Desconfiança | Sem canal seguro pra tirar dúvida; teme reajuste automático, taxa de religação e não sabe do abatimento fiscal da fatura como MEI. | Canal de dúvida que deixa explícito que consultar não inicia rescisão. |

## Oportunidades registradas como Issues

- [ ] #[a criar] Resumo simples do contrato (prazo, multa, reajuste) na venda e no app
- [ ] #[a criar] Simulador de custo de saída e de carência da fidelidade
- [ ] #[a criar] Transferência de contrato para novo endereço sem cancelar
- [ ] #[a criar] Canal de dúvida que não inicia rescisão
