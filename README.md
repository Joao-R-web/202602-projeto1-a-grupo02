# Guia de Entendimento do Cliente Bulbe

> Projeto em Ciência de Dados I · Ibmec BH · 2º semestre de 2026
> Cliente: **Bulbe Energia** · Turma **A** · Squad **02**

Guia explicativo, em linguagem simples, sobre como funciona a Bulbe e de onde vem o desconto, para o cliente novo, da adesão ao pagamento da primeira fatura.

---

## 1. Problema

O problema escolhido pelo grupo é a falta de entendimento do produto e de onde vem o desconto: 27,7% do churn da Bulbe é causado por esse problema.

- **Dor escolhida:** clientes não entendem como o produto funciona nem o que é energia solar por assinatura.
- **Evidência:** 27,7% do churn acontece por não compreensão do produto.
- **Indicadores que a solução pretende mover:** compreensão do produto pelo usuário · churn · comunicação com o cliente antes e depois da adesão.

## 2. Personas e jornadas

Cada integrante criou uma persona e o mapa de jornada dela.

| Persona | Integrante | Mapa de jornada |
| --- | --- | --- |
| **Antônio**, 63 anos, aposentado de Betim (MG). A filha fez a adesão no celular dele e, sem entender o que contratou, ele acha que o desconto veio da Cemig e trata a cobrança da Bulbe como golpe. | Thiago Peixoto | [docs/jornada-thiagopeixotogarcia.md](docs/jornada-thiagopeixotogarcia.md) |
| **Carla Mendes**, 38 anos, analista administrativa de Contagem (MG). Aderiu pelo site atraída pela economia, mas não entende como o produto funciona e, quando chega a 1ª fatura, fica insegura e pode atrasar o pagamento ou cancelar. | João Pedro Roenick | [docs/jornada-joao.md](docs/jornada-joao.md) |
| **Henrique**, 44 anos. Aderiu esperando R$ 40 a R$ 50 de desconto numa conta acima de R$ 400, recebeu R$ 29,95 num mês e R$ 0,17 no outro, sem explicação, e acha que a oferta de 15% não é cumprida. | Leandro Pacheco | [docs/jornada-leandro.md](docs/jornada-leandro.md) |
| **Mariana**, 34 anos, confeiteira MEI de Contagem (MG). Vai mudar o ateliê para Betim e, sem saber o que acontece com o contrato, acha que vai ter que cancelar e recomeçar do zero. | Pedro Henrique Lima | [docs/jornada-pedro.md](docs/jornada-pedro.md) |
| **Lucas**, 25 anos, estagiário de Tecnologia em Belo Horizonte (MG). Achou que a Bulbe substituía a Cemig e, ao receber as duas faturas, acha que paga duas vezes, deixa a da Bulbe sem pagar e pensa em cancelar. | Sandro Viglioni | [docs/jornada-sandro.md](docs/jornada-sandro.md) |
| **Maria**, 35 anos, assistente financeira de Betim (MG). Aderiu por indicação, mas não sabe em que etapa está a adesão nem quando chega a fatura da Bulbe, e teme estar sofrendo um golpe. | Elita Rodrigues | [docs/jornada-elita.md](docs/jornada-elita.md) |

## 3. Solução

Um conjunto de telas do app da Bulbe que explicam, em linguagem simples, o produto, o desconto e as faturas, da adesão ao pagamento. Cada tela nasce da jornada de uma das personas.

| Tela | O que faz | História relacionada |
| --- | --- | --- |
| Como funciona a Bulbe? | Explica de onde vem o desconto e como a energia é produzida nas usinas solares, com ilustração e linguagem simples | HU01 |
| Consumo e Cenários de consumo | Mostra a economia acumulada e compara o consumo com casas similares; os cenários explicam como o desconto muda conforme os créditos de energia do mês | HU05 |
| Acompanhe suas etapas | Linha do tempo: adesão concluída, aguardar contato, continuar pagando a Cemig, fatura da Bulbe disponível, pagar a Bulbe, rastrear o pagamento e pagamento realizado | HU03 |
| Entenda suas faturas | Explica a fatura da Cemig e a fatura da Bulbe e responde "por que ainda recebo a fatura da Cemig?", com botão "Entendi a cobrança" | HU04 |
| Veja como fica a conta de luz | Compara a conta de antes com a de agora (Cemig + Bulbe) e mostra a economia do mês | HU04 |
| Confira a mensagem | Prévia da mensagem com o resumo das contas do mês, enviada pelo WhatsApp | HU04 |
| Informe seus dados, Veja como fica a conta e Confira a mensagem | Cadastro feito por um familiar: dados do titular e de quem cadastra, uma fatura que vira duas (Cemig + Bulbe) com a economia mensal e a prévia da mensagem enviada ao titular pelo WhatsApp | HU02 |
| Perguntas frequentes | Respostas em sanfona sobre a Bulbe | HU06 |
| Mudei de endereço, como faço? | Explica como funciona a mudança, com botões "Pedir transferência" e "Falar no WhatsApp" | HU06 |

- **Histórias de usuário:** [Elita](docs/historias-elita.md) · [João](docs/historias-joao.md) · [Leandro](docs/historias-leandro.md) · [Pedro](docs/historias-pedro.md) · [Sandro](docs/historias-sandro.md) · [Thiago](docs/historias-thiagopeixotogarcia.md)
- **Wireframes:** [docs/wireframes/](docs/wireframes/)

## 4. Tecnologias

- HTML, CSS e JavaScript puro (vanilla)
- CSS e JavaScript comuns a todas as telas, em [`assets/`](assets/), com a identidade visual da Bulbe (fonte Poppins, azul `#08068D`, tela de 360 × 812)
- Dados fictícios em JSON, lidos com `fetch` (pasta [`data/`](data/))
- Git e GitHub (Issues, Projects e Pull Requests)

## 5. Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/Joao-R-web/202602-projeto1-a-grupo02.git
   ```
2. Abra a pasta no VS Code.
3. Instale a extensão **Live Server** (o VS Code vai sugerir automaticamente).
4. Clique com o botão direito em `index.html` e escolha **Open with Live Server**.

> Abrir o `index.html` direto no navegador (duplo clique) não funciona: o `fetch` dos arquivos JSON e os módulos JavaScript exigem um servidor.

## 6. Estrutura do repositório

```
├── index.html            # Página inicial
├── pages/
│   ├── exemplo.html      # Template das telas (base para copiar)
│   └── <pasta de cada integrante>/   # Telas, CSS e JS próprios de cada história
├── assets/
│   ├── css/style.css     # CSS comum do grupo (cores, fonte, cabeçalho, rodapé, botões, campos)
│   ├── js/main.js        # JavaScript comum do grupo (altura do app e funções genéricas)
│   ├── js/api.js         # Leitura dos dados (fetch)
│   └── img/              # Logos da Bulbe e ícones
├── data/                 # Dados fictícios em JSON
├── docs/                 # Jornadas, histórias, wireframes e sprints
└── .github/              # Modelos de Issue e de Pull Request
```

### Como criar uma tela

1. Copie o `pages/exemplo.html` para a sua pasta em `pages/` e ajuste os caminhos (`../assets/` vira `../../assets/`).
2. O template vem montado para telas de quem ainda não está logado (cadastro). Para uma tela de quem já está logado, tire o comentário dos blocos marcados com `LOGADO` e apague os blocos `CADASTRO` correspondentes.
3. Carregue primeiro os arquivos comuns e depois os seus, se tiver:
   ```html
   <link rel="stylesheet" href="../../assets/css/style.css">
   <link rel="stylesheet" href="css/style.css">
   <script type="module" src="../../assets/js/main.js"></script>
   <script type="module" src="js/main.js"></script>
   ```
4. O que é só da sua tela fica nos seus arquivos. Mudanças em `assets/` só com combinado do grupo, numa Pull Request separada.

## 7. Quadro do projeto

- **GitHub Projects:** [github.com/users/Joao-R-web/projects/1](https://github.com/users/Joao-R-web/projects/1)

## 8. Equipe

| Integrante | GitHub | Persona e entrega |
| --- | --- | --- |
| Elita Rodrigues | @elitarodrigues848-cyber | Maria: acompanhar as etapas da adesão |
| João Pedro Roenick | @Joao-R-web | Carla: entender como a Bulbe funciona |
| Leandro Pacheco | @lelegatite1227-cmyk | Henrique: conferir o desconto real do mês |
| Pedro Henrique Lima | @PhLima07 | Mariana: mudar de endereço sem cancelar |
| Sandro Viglioni | @SandroVig | Lucas: entender por que chegam duas faturas |
| Thiago Peixoto | @Thiagopeixotog | Antônio: explicar as duas contas ao titular |

## 9. Entregas

| Marco | Aula | Status |
| --- | --- | --- |
| Mapa de jornada | 19 | Concluído |
| Histórias de usuário | 20 | Concluído |
| Wireframes | 21–23 | Concluído |
| Sprint Review I | 24 | Concluído |
| Implementação | 25–28 | Concluído |
| Sprint Review II | 29 | Pendente |
| Versão final | 30 | Pendente |

---

> Todos os dados deste repositório são fictícios. Nenhum dado real de cliente da Bulbe Energia é utilizado.
