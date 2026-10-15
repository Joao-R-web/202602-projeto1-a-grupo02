# Mapa de jornada do usuário

> Entregável da aula 19. Substitua os textos entre colchetes.

## Persona

- Lucas, 25 anos
- Lucas é estagiário de Tecnologia e mora num apartamento compartilhado no bairro Buritis, em Belo Horizonte (MG). Ele é extremamente conectado, resolve tudo pelo celular e fez o cadastro na Bulbe sozinho pelo Instagram, atraído pela promessa de "energia limpa com desconto na conta de luz".
Como Lucas nunca teve que gerenciar faturas de energia antes (sempre morou com os pais ou dividiu contas sem olhar os detalhes), ele assume que a Bulbe é uma alternativa que substitui a Cemig. Na cabeça dele, ao contratar a Bulbe, a Cemig deixaria de enviar cobranças.
Quando recebe a fatura mínima da Cemig (com a taxa de iluminação pública e distribuição) e, em paralelo, a fatura da Bulbe com o valor da energia injetada, ele não entende. Ele acha que está pagando duas vezes pelo mesmo serviço ("cobrança duplicada") e não entende o conceito de créditos de energia compensada nem a divisão de papéis entre a distribuidora (Cemig) e a geradora (Bulbe). Sentindo-se enganado por achar que a promessa de desconto virou um "custo duplo", ele deixa a fatura da Bulbe de lado sem pagar e pondera cancelar a adesão imediatamente.
- Pagar menos na conta do apartamento sem ter que decifrar termos técnicos. Ele quer entender de forma direta e visual por que chegam duas faturas, como a economia é calculada na prática e ter a certeza de que não está pagando a mais por um serviço duplicado.
- Ilusão de cobrança dupla: Acha que a Bulbe e a Cemig estão cobrando pelo mesmo consumo de energia no mês.
Incompreensão do sistema de créditos: Não entende o que significa "energia injetada/compensada" no demonstrativo e acha o cálculo confuso.
Falta de clareza sobre o papel da Cemig: Não entende por que ainda precisa pagar a Cemig se já contratou a Bulbe.
Risco de cancelamento por frustração: Por achar que o modelo é uma "pegadinha" que encareceu a conta em vez de baratear, ele ignora a cobrança da Bulbe, gera inadimplência e quer cancelar.
- Instagram, WhatsApp, Aplicativos bancários (Pix), Notificações de App e e-mail. Não lê comunicados longos em texto nem acessa portais complexos para baixar faturas.
- Frase Referencial: "Falta de entendimento do Produto"
## Mapa

![Mapa de jornada](wireframes/jornada.png)

|| Fase | Ações | Pontos de contato | Pensamentos | Emoção | Dor (com evidência da Bulbe) | Oportunidade |
| --- | --- | --- | --- | --- | --- | --- |
| 1. Descoberta e Adesão | Visualiza anúncio no Instagram e contrata a Bulbe direto pelo celular sozinho. | Instagram, Landing Page da Bulbe | "Legal, vou pagar mais barato na luz sem burocracia." | Ansioso / Otimista | Nenhuma nesta fase (promessa inicial atrativa). | Simplificar o onboarding com uma mensagem de boas-vindas educativa. |
| 2. Recebimento das Faturas | Recebe a fatura mínima da Cemig e a fatura da Bulbe em paralelo no e-mail/WhatsApp. | E-mail, Aplicativos bancários, WhatsApp | "Espera, por que a Cemig ainda está a cobrar se eu mudei para a Bulbe? Estou a pagar em duplicado!" | Confuso / Frustrado | Acha que há cobrança dupla ao receber a conta da Cemig e da Bulbe juntas. | Criar um guia visual rápido explicando o papel da distribuidora (Cemig) vs geradora (Bulbe)[cite: 7]. |
| 3. Análise de Créditos | Tenta ler o demonstrativo de consumo e créditos de energia injetada. | Fatura em PDF | "Não entendo nada desses termos técnicos de energia injetada/compensada, isso parece pegadinha." | Irritado / Desconfiado | Incompreensão total do sistema de créditos e cálculo de desconto[cite: 7]. | Traduzir termos técnicos para uma linguagem simples e visual (ex: "Créditos de economia")[cite: 7]. |
| 4. Decisão e Risco | Decide ignorar a cobrança da Bulbe por achar que foi enganado e pensa em cancelar. | Fatura pendente, E-mail | "Vou deixar de pagar isso e cancelar antes que saia mais caro." | Raiva / Desistência | Risco de inadimplência e cancelamento por frustração e falta de clareza[cite: 7]. | Enviar alerta amigável por WhatsApp com resumo do valor poupado e botão de ajuda rápida[cite: 7]. |

## Oportunidades registradas como Issues

- [x] #[1] Esclarecimento transparente sobre a separação de faturas (Cemig e Bulbe)
- [x] #[2] Simplificação visual do demonstrativo de créditos de energia
- [x] #[3] Notificações interativas via WhatsApp com foco na retenção e facilidade de pagamento
