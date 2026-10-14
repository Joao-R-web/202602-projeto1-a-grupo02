# Mapa de jornada do usuário

> Entregável da aula 19. Substitua os textos entre colchetes.

## Persona

- **Nome e idade:** [Carla Mendes, 38 anos]
- **Contexto:** [Analista administrativa, mora em Contagem (MG) com o marido e um filho. Conheceu a Bulbe por um anúncio no Google que prometia desconto na conta de luz e aderiu pelo site, atraída pela economia. Não entende direito como o produto funciona, e quando chega a 1ª fatura ela fica insegura e pode atrasar o pagamento ou cancelar.]
- **Objetivo:** [Pagar menos na conta de luz sem complicação e sem risco, entendendo de forma simples como funciona a economia.]
- **Medos e dúvidas:** [Tem medo de cair em um golpe, já que uma empresa que não é a Cemig cobra a conta de luz dela. Teme pagar em duplicidade, ficar sem energia por ter mudado de empresa, ficar presa a um contrato sem conseguir cancelar e perder o prazo por não receber as mensagens (o WhatsApp falha em cerca de 20% das entregas). Por trás disso estão dúvidas básicas, de onde vem o desconto, o que é energia compensável e usina, por que a fatura vem da Bulbe e não da Cemig, se ela continua pagando a Cemig, por que a 1ª fatura veio diferente do esperado, quando a economia começa e como confirmar quanto economizou, e o que acontece se ela se mudar ou quiser cancelar.]
- **Canais que usa:** [WhatsApp, Google, e-mail, SMS/RCS, Bulbe App (uso baixo), rádio e indicação de conhecidos.]

## Mapa

![Mapa de jornada](wireframes/jornada.png)

| Fase | Ações | Pontos de contato | Pensamentos | Emoção | Dor (com evidência da Bulbe) | Oportunidade |
| --- | --- | --- | --- | --- | --- | --- |
| Descoberta | Vê o anúncio, pesquisa sobre a Bulbe e compara com a conta atual | Google (busca e anúncios), rádio, indicação de conhecidos | "Será que dá para pagar menos na luz? Essa empresa é confiável?" | Curiosa e desconfiada | O produto é novo para o público e a promessa de desconto sozinha não explica como funciona. 30% da base vem de indicação (slide 3), o que mostra o peso da confiança | Explicar o funcionamento já no anúncio e na página de entrada, com linguagem simples |
| Adesão | Preenche o cadastro e envia os dados da conta de luz | Site, WhatsApp, e-mail | "Preciso entender o que estou contratando antes de confirmar" | Esperançosa, mas insegura | A economia não é comunicada de forma clara e há baixo nível de instrução ao usuário (slide 6) | Resumo da contratação em linguagem simples, com o que muda e o que não muda |
| Onboarding (primeiras semanas) | Recebe as mensagens de boas-vindas e espera o início da economia | WhatsApp, e-mail, SMS/RCS, app | "De onde vem esse desconto? Continuo pagando a Cemig?" | Ansiosa e confusa | As dúvidas "De onde vem o desconto" (D+2) e "Continue pagando a CEMIG" (D+17 e D+40) já são tratadas na régua (slide 18), mas há falha de entrega de cerca de 20% no WhatsApp e longos períodos sem mensagem (slide 17) | Garantir a entrega com canal alternativo e uma sequência de mensagens que explique o produto antes da 1ª fatura |


## Oportunidades registradas como Issues

- [ ] #[número] Explicar o funcionamento da Bulbe já no anúncio e na página de entrada
- [ ] #[número] Resumo da contratação em linguagem simples na adesão
- [ ] #[número] Reforçar a entrega da comunicação do onboarding com canal alternativo ao WhatsApp
- [ ] #[número] Fatura explicada com comparativo Bulbe x Cemig e economia do mês
- [ ] #[número] Central de explicação do produto com economia acumulada e perguntas frequentes
