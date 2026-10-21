# [Guia de Entendimento do Cliente Bulbe]

> Projeto em Ciência de Dados I · Ibmec BH · 2º semestre de 2026
> Cliente: **Bulbe Energia** · Turma **[A]** · Squad **[02]**

[Guia explicativo, em linguagem simples sobre como funciona a Bulbe e de onde vem o desconto ao cliente novo, da adesão ao pagamento da primeira fatura.]

---

## 1. Problema

[O problema escolhido pelo grupo foi o de falta de entendimento do produto e da onde vem o desconto, aonde 27,7% do churn é por conta deste problema.]

- **Dor escolhida:** [Clientes não entendem como o produto funciona e o que é energia solar]
- **Evidência:** [27,7% do churn é por não compreensão  do produto]
- **Indicador que a solução pretende mover:** [Melhora da compreensão do produto na parte do usuário | melhora no churn | melhora na comunicação com o cliente antes e depois da adesão]

## 2. Persona e jornada

- **Persona 1:** [Rosana Ferreira, 49 anos, secretária escolar de Contagem (MG), cuida das contas da casa; aderiu à Bulbe sem saber em que etapa estava e, ao receber o boleto junto com a conta menor da Cemig, achou que era cobrança duplicada ou golpe.]
- **Persona 2:** [Fernanda Lopes, 42 anos, MEI e dona de uma confeitaria em Contagem (MG), com conta de luz acima de R$ 400; esperava R$ 40 a R$ 50 de desconto, recebeu R$ 29,95 e depois R$ 0,17 sem explicação, e descobriu fidelidade de 24 meses com multa.]
- **Mapa de jornada:** [docs/jornada.md](docs/jornada.md)

## 3. Solução

[Descrição curta da solução e das principais telas.]

| Tela | O que faz | História relacionada |
| ---    | --- | --- |
| Como funciona a Bulbe? | Explica de onde vem o desconto e como a energia é produzida nas usinas solares, com ilustração e linguagem simples | HU01 |
| Quem pode ser cliente | Primeira etapa do fluxo de 3 passos: lista os requisitos para contratar e destaca a oferta de desconto | HU01 |
| Como funciona o desconto | Segunda etapa: compara visualmente quanto o cliente paga com e sem a Bulbe | HU01 |
| Economia estimada | Terceira etapa: mostra o percentual de economia estimado para o cliente | HU01 |
| Como o desconto é calculado | Texto explicando a conta do desconto, em tela cheia | HU02 |
| Acompanhe as etapas | Linha do tempo: adesão concluída, aguardar contato, continuar pagando a Cemig, fatura da Bulbe disponível, pagar a Bulbe, rastrear o pagamento e pagamento realizado | HU01 |
| Entendendo suas faturas | Explica a fatura da Cemig e a fatura da Bulbe e responde "por que ainda recebo a fatura da Cemig?", com botão "Entenda a cobrança" | HU01 |
| Seu resumo do mês | Mostra quanto o cliente economizou no mês, os créditos gerados e a composição da conta, com acesso às faturas detalhadas | HU01 |
| Fatura por WhatsApp | Mensagem com o resumo da fatura e a chave Pix para copiar e pagar | HU01 |
| Informe seus dados e veja como fica a conta | Formulário de dados, comparação de como a conta de luz fica e mensagem de WhatsApp com o boleto | HU01 |
| Perguntas frequentes | Respostas em sanfona sobre a Bulbe | HU01 |
| Mudei de endereço, como faço? | Explica como funciona a mudança, com botões "Pedir transferência" e "Falar no WhatsApp" | HU02 |
- **Histórias de usuário:** [docs/historias.md](docs/historias.md)
- **Wireframes:** [docs/wireframes/](docs/wireframes/)

## 4. Tecnologias

- HTML, CSS e JavaScript puro (vanilla)
- Dados fictícios em JSON, lidos com `fetch` (pasta [`data/`](data/))
- Git e GitHub (Issues, Projects e Pull Requests)

## 5. Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/[usuario]/202602-projeto1-[turma]-[squad].git
   ```
2. Abra a pasta no VS Code.
3. Instale a extensão **Live Server** (o VS Code vai sugerir automaticamente).
4. Clique com o botão direito em `index.html` e escolha **Open with Live Server**.

> Abrir o `index.html` direto no navegador (duplo clique) não funciona: o `fetch` dos arquivos JSON exige um servidor.

## 6. Estrutura do repositório

```
├── index.html            # Página inicial
├── pages/                # Demais telas da solução
├── assets/
│   ├── css/style.css     # Estilos
│   ├── js/main.js        # Lógica da página inicial
│   ├── js/api.js         # Leitura dos dados (fetch)
│   └── img/              # Imagens e ícones
├── data/                 # Dados fictícios em JSON
├── docs/                 # Jornada, histórias, wireframes e sprints
└── .github/              # Modelos de Issue e de Pull Request
```

## 7. Quadro do projeto

- **GitHub Projects:** [https://github.com/Joao-R-web/202602-projeto1-a-grupo02]

## 8. Equipe

| Integrante | GitHub | Papel principal |
| --- | --- | --- |
| [Nome] | [@usuario](https://github.com/usuario) | [ex.: Scrum Master, front-end, dados, documentação] |
| [Nome] | [@usuario](https://github.com/usuario) | [ ] |
| [Nome] | [@usuario](https://github.com/usuario) | [ ] |

## 9. Entregas

| Marco | Aula | Status |
| --- | --- | --- |
| Mapa de jornada | 19 | [ ] |
| Histórias de usuário | 20 | [ ] |
| Wireframes | 21–23 | [ ] |
| Sprint Review I | 24 | [ ] |
| Implementação | 25–28 | [ ] |
| Sprint Review II | 29 | [ ] |
| Versão final | 30 | [ ] |

---

> Todos os dados deste repositório são fictícios. Nenhum dado real de cliente da Bulbe Energia é utilizado.
