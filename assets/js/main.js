// =========================================================
// Bulbe · JavaScript comum do grupo (Squad 02)
//
// Toda página carrega este arquivo como módulo:
//   <script type="module" src="../../assets/js/main.js"></script>
//
// Ele faz o que serve para todas as páginas (ajustar a altura do app)
// e oferece funções genéricas. Para usar uma delas no SEU script:
//   import { formatarReais, mascararWhatsApp } from '../../assets/js/main.js';
//
// Regras do grupo:
// - Aqui fica só o que é genérico. A lógica da sua tela fica no SEU arquivo.
// - Mudança neste arquivo só com combinado do grupo, numa PR separada.
// =========================================================

import { buscarClientes } from './api.js';


// ---------- Altura do app ----------
// No celular, 100vh nem sempre desconta a barra do navegador.
// Usamos a altura real da janela na variável --altura-app do CSS.

function ajustarAltura() {
  document.documentElement.style.setProperty('--altura-app', `${window.innerHeight}px`);
}

ajustarAltura();
window.addEventListener('resize', ajustarAltura);
window.addEventListener('orientationchange', ajustarAltura);


// ---------- Funções genéricas ----------

// 1234.5 → "R$ 1.234,50"
export function formatarReais(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// "(31) 98908-2086" → "31989082086"
export function somenteDigitos(texto) {
  return texto.replace(/\D/g, '');
}

// "31989082086" → "(31) 98908-2086" (vai formatando enquanto a pessoa digita)
export function mascararWhatsApp(texto) {
  const d = somenteDigitos(texto).slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : '';
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

// Liga a máscara a um campo: aplicarMascaraWhatsApp(document.querySelector('#meu-campo'))
export function aplicarMascaraWhatsApp(campo) {
  if (!campo) return;
  campo.addEventListener('input', () => {
    campo.value = mascararWhatsApp(campo.value);
  });
}

// true quando o WhatsApp tem DDD + 9 dígitos
export function whatsAppValido(texto) {
  return somenteDigitos(texto).length === 11;
}


// ---------- Exemplo de dados: lista de clientes ----------
// Só roda nas páginas que têm <ul id="lista-clientes">.
// Os dados vêm de data/clientes.json, pelo api.js.

const STATUS = {
  aguardando_qualificacao: 'Aguardando qualificação',
  em_conexao: 'Em conexão',
  conectado: 'Conectado'
};

async function mostrarClientes(lista) {
  try {
    const clientes = await buscarClientes();
    lista.replaceChildren(...clientes.map((c) => {
      const item = document.createElement('li');
      const nome = document.createElement('strong');
      nome.textContent = c.nome;
      item.append(nome, ` · ${c.cidade} · ${STATUS[c.status] ?? c.status}`);
      return item;
    }));
  } catch (erro) {
    const item = document.createElement('li');
    item.textContent = 'Não foi possível carregar os dados. O projeto está aberto pelo Live Server?';
    lista.replaceChildren(item);
    console.error(erro);
  }
}

const listaClientes = document.querySelector('#lista-clientes');
if (listaClientes) {
  mostrarClientes(listaClientes);
}
