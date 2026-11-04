/* =========================================================
   HU da Mariana: Explicar e facilitar a mudança de endereço
   Telas em pages/hu-mariana/: index.html (FAQ) → mudanca-endereco.html
   → novo-endereco.html → pedido-enviado.html
   O pedido de transferência e o WhatsApp são SIMULADOS: nada é enviado.
   ========================================================= */

const CHAVE_PEDIDO = 'bulbe-pedido-transferencia';

/* ---------- Utilitários ---------- */

const somenteDigitos = (texto) => texto.replace(/\D/g, '');

function mascararCep(texto) {
  const d = somenteDigitos(texto).slice(0, 8);
  return d.length > 5 ? `${d.slice(0, 5)}-${d.slice(5)}` : d;
}

// sessionStorage pode falhar (aba anônima, bloqueio do navegador): nunca deixa a página quebrar.
function salvarPedido(dados) {
  try {
    sessionStorage.setItem(CHAVE_PEDIDO, JSON.stringify(dados));
  } catch (erro) {
    console.warn('Não foi possível salvar o pedido nesta sessão.', erro);
  }
}

function lerPedido() {
  try {
    const bruto = sessionStorage.getItem(CHAVE_PEDIDO);
    return bruto ? JSON.parse(bruto) : null;
  } catch (erro) {
    return null;
  }
}

/* ---------- Tela 2: Mudei de endereço ---------- */

function iniciarTelaMudanca() {
  // Simulação: na versão real, o link abre o WhatsApp oficial da Bulbe.
  document.getElementById('botao-whatsapp').addEventListener('click', (evento) => {
    evento.preventDefault();
    document.getElementById('status-whatsapp').hidden = false;
  });
}

/* ---------- Tela 3: Informe o novo endereço ---------- */

function iniciarTelaEndereco() {
  const form = document.getElementById('form-endereco');
  const botao = document.getElementById('botao-enviar');

  const campos = {
    cep: document.getElementById('cep'),
    rua: document.getElementById('rua'),
    cidade: document.getElementById('cidade'),
    conta: document.getElementById('conta')
  };

  // Regras simples de validação (esboço).
  const valido = {
    cep: (campo) => somenteDigitos(campo.value).length === 8,
    // Precisa de número (ou "s/n"), como pede o rótulo "Rua e número".
    rua: (campo) => campo.value.trim().length >= 5 && /\d|\bs\/?n\b/i.test(campo.value),
    cidade: (campo) => campo.value.trim().length >= 2,
    conta: (campo) => campo.files.length > 0
  };

  const campoValido = (chave) => valido[chave](campos[chave]);

  function mostrarErro(chave) {
    const campo = campos[chave];
    const ok = campoValido(chave);
    campo.setAttribute('aria-invalid', String(!ok));
    document.getElementById(`${campo.id}-erro`).hidden = ok;
  }

  function atualizarBotao() {
    botao.disabled = !Object.keys(campos).every(campoValido);
  }

  Object.keys(campos).forEach((chave) => {
    const campo = campos[chave];
    const evento = chave === 'conta' ? 'change' : 'input';
    campo.addEventListener(evento, () => {
      if (chave === 'cep') campo.value = mascararCep(campo.value);
      if (campo.getAttribute('aria-invalid') === 'true') mostrarErro(chave);
      atualizarBotao();
    });
    campo.addEventListener('blur', () => mostrarErro(chave));
  });

  form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    Object.keys(campos).forEach(mostrarErro);
    if (botao.disabled) return;

    salvarPedido({
      cep: campos.cep.value,
      rua: campos.rua.value.trim(),
      cidade: campos.cidade.value.trim(),
      conta: campos.conta.files[0].name
    });
    window.location.href = 'pedido-enviado.html';
  });
}

/* ---------- Tela 4: Pedido enviado ---------- */

function iniciarTelaEnviado() {
  const pedido = lerPedido();
  if (!pedido) return; // sem pedido salvo, mantém o texto de exemplo do HTML

  // textContent (e não innerHTML) evita injetar HTML vindo do que o usuário digitou.
  document.getElementById('resumo-endereco').textContent =
    `${pedido.rua}, ${pedido.cidade} (CEP ${pedido.cep})`;
  document.getElementById('resumo-conta').textContent = pedido.conta;
}

/* ---------- Roteamento simples por página ---------- */

const telas = {
  mudanca: iniciarTelaMudanca,
  endereco: iniciarTelaEndereco,
  enviado: iniciarTelaEnviado
};

document.addEventListener('DOMContentLoaded', () => {
  const iniciar = telas[document.body.dataset.tela];
  if (iniciar) iniciar();
});
