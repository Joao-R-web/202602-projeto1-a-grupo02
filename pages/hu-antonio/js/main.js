import { formatarReais, mascararWhatsApp, whatsAppValido } from '../../../assets/js/main.js';

/* =========================================================
   HU do Antônio — Explicar as duas contas ao titular
   Telas em pages/hu-antonio/: index.html (dados) → como-fica.html (conta) → mensagem.html (prévia)
   O envio ao titular é SIMULADO: nenhuma mensagem real é enviada.
   As funções genéricas (valores em reais, máscara e validação de WhatsApp)
   vêm do JavaScript comum do grupo (assets/js/main.js).
   ========================================================= */

// Valores de EXEMPLO. Na versão real, vêm da conta de luz enviada pelo cliente.
const VALORES = {
  antes: 281.93,      // conta só da Cemig, antes da Bulbe
  cemig: 52.06,       // taxas e iluminação pública que continuam na Cemig
  bulbe: 199.87       // energia solar com desconto, cobrada pela Bulbe
};
VALORES.total = VALORES.cemig + VALORES.bulbe;
VALORES.economia = VALORES.antes - VALORES.total;

// Endereço de EXEMPLO. Na versão real, vem do cadastro da instalação.
const ENDERECO_EXEMPLO = 'Rua das Acácias, 120, Betim';

const CHAVE_CADASTRO = 'bulbe-cadastro';

/* ---------- Utilitários ---------- */

// sessionStorage pode falhar (aba anônima, bloqueio do navegador): nunca deixa a página quebrar.
function salvarCadastro(dados) {
  try {
    sessionStorage.setItem(CHAVE_CADASTRO, JSON.stringify(dados));
  } catch (erro) {
    console.warn('Não foi possível salvar o cadastro nesta sessão.', erro);
  }
}

function lerCadastro() {
  try {
    const bruto = sessionStorage.getItem(CHAVE_CADASTRO);
    return bruto ? JSON.parse(bruto) : null;
  } catch (erro) {
    return null;
  }
}

function primeiroNome(nomeCompleto) {
  const nome = (nomeCompleto || '').trim().split(/\s+/)[0];
  return nome || 'Titular';
}

// Preenche elementos marcados com data-valor="antes|cemig|bulbe|total|economia".
function preencherValores(raiz = document) {
  raiz.querySelectorAll('[data-valor]').forEach((el) => {
    const chave = el.dataset.valor;
    if (chave in VALORES) el.textContent = formatarReais(VALORES[chave]);
  });
}

/* ---------- Tela 1: Informe seus dados ---------- */

function iniciarTelaDados() {
  const form = document.getElementById('form-dados');
  const grupoTitular = document.getElementById('grupo-titular');
  const avisoFamiliar = document.getElementById('aviso-familiar');
  const tituloSeusDados = document.getElementById('titulo-seus-dados');
  const botao = document.getElementById('botao-proximo');

  const campos = {
    titularNome: document.getElementById('titular-nome'),
    titularWhats: document.getElementById('titular-whats'),
    seuNome: document.getElementById('seu-nome'),
    seuWhats: document.getElementById('seu-whats')
  };

  const modoAtual = () => form.querySelector('input[name="para-quem"]:checked').value;

  // Regras simples de validação (esboço).
  const valido = {
    nome: (v) => v.trim().length >= 3,
    whats: whatsAppValido
  };

  function campoValido(input) {
    if (input.closest('[hidden]')) return true; // campo escondido não conta
    const regra = input.type === 'tel' ? valido.whats : valido.nome;
    return regra(input.value);
  }

  function mostrarErro(input) {
    const erro = document.getElementById(`${input.id}-erro`);
    const ok = campoValido(input);
    input.setAttribute('aria-invalid', String(!ok));
    erro.hidden = ok;
  }

  function atualizarModo() {
    const outraPessoa = modoAtual() === 'outra';
    grupoTitular.hidden = !outraPessoa;
    avisoFamiliar.hidden = !outraPessoa;
    tituloSeusDados.textContent = outraPessoa ? 'Seus dados' : 'Seus dados (titular da conta)';
    atualizarBotao();
  }

  function atualizarBotao() {
    botao.disabled = !Object.values(campos).every(campoValido);
  }

  form.querySelectorAll('input[name="para-quem"]').forEach((r) =>
    r.addEventListener('change', atualizarModo)
  );

  Object.values(campos).forEach((input) => {
    input.addEventListener('input', () => {
      if (input.type === 'tel') input.value = mascararWhatsApp(input.value);
      if (input.getAttribute('aria-invalid') === 'true') mostrarErro(input);
      atualizarBotao();
    });
    input.addEventListener('blur', () => mostrarErro(input));
  });

  form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    Object.values(campos).forEach(mostrarErro);
    if (botao.disabled) return;

    const outraPessoa = modoAtual() === 'outra';
    salvarCadastro({
      modo: outraPessoa ? 'outra' : 'mim',
      titularNome: outraPessoa ? campos.titularNome.value.trim() : campos.seuNome.value.trim(),
      titularWhats: outraPessoa ? campos.titularWhats.value : campos.seuWhats.value,
      seuNome: campos.seuNome.value.trim(),
      seuWhats: campos.seuWhats.value
    });
    window.location.href = 'como-fica.html';
  });

  atualizarModo();
}

/* ---------- Tela 2: Veja como fica a conta ---------- */

// Alturas da ilustração proporcionais aos valores: a pilha "agora" (economia + Bulbe + Cemig)
// tem a mesma altura da fatura "antes". A fatura da Cemig tem altura mínima para o texto caber.
function preencherFaturas() {
  const ALTURA_TOTAL = 230;   // mesma altura da fatura de antes, no CSS
  const ESPACOS = 12;         // margens entre economia, Bulbe e Cemig
  const MINIMO_CEMIG = 52;

  const escala = (ALTURA_TOTAL - ESPACOS) / VALORES.antes;
  const economia = VALORES.economia * escala;
  const cemig = Math.max(MINIMO_CEMIG, VALORES.cemig * escala);
  const bulbe = ALTURA_TOTAL - ESPACOS - economia - cemig;

  const alturas = { economia, bulbe, cemig };
  Object.entries(alturas).forEach(([chave, altura]) => {
    const el = document.querySelector(`[data-altura="${chave}"]`);
    if (el) el.style.flexBasis = `${altura}px`;
  });
}

function iniciarTelaConta() {
  const cadastro = lerCadastro();
  const outraPessoa = !cadastro || cadastro.modo === 'outra';

  preencherValores();
  preencherFaturas();

  document.getElementById('titulo-conta').textContent = outraPessoa
    ? 'Veja como fica a conta de luz do titular'
    : 'Veja como fica a sua conta de luz';

  // O aviso ao titular só faz sentido quando o cadastro é para outra pessoa.
  document.getElementById('alerta-titular').hidden = !outraPessoa;
}

/* ---------- Tela 3: Prévia da mensagem no WhatsApp ---------- */

function iniciarTelaMensagem() {
  const cadastro = lerCadastro();
  const nome = primeiroNome(cadastro && cadastro.titularNome);

  preencherValores();
  // textContent (e não innerHTML) evita injetar HTML vindo do que o usuário digitou.
  document.querySelectorAll('[data-nome-titular]').forEach((el) => {
    el.textContent = nome;
  });
  document.getElementById('contato-nome').textContent =
    (cadastro && cadastro.titularNome) || 'Titular da conta';
  document.getElementById('endereco').textContent = ENDERECO_EXEMPLO;

  // Envio SIMULADO: nesta versão nada sai do app. Na versão real, a Bulbe envia pelo WhatsApp.
  const botaoEnviar = document.getElementById('botao-enviar');
  botaoEnviar.addEventListener('click', () => {
    const status = document.getElementById('status-envio');
    status.hidden = false;
    status.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    document.getElementById('aviso-previa').textContent = 'Mensagem enviada';
    botaoEnviar.textContent = 'Mensagem enviada';
    botaoEnviar.disabled = true;
  });
}

/* ---------- Roteamento simples por página ---------- */

const telas = {
  dados: iniciarTelaDados,
  conta: iniciarTelaConta,
  mensagem: iniciarTelaMensagem
};

// Módulos rodam depois que a página é lida, então o HTML já está pronto aqui.
const iniciar = telas[document.body.dataset.tela];
if (iniciar) iniciar();
