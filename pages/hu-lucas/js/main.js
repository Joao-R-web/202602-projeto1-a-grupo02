/* =========================================================
   HU01 (Sandro/Lucas) · JavaScript próprio das telas

   Carregado como módulo, depois do JavaScript comum do grupo.
   A formatação em reais vem do main.js comum.
   ========================================================= */

import { formatarReais } from '../../../assets/js/main.js';

// Valores de exemplo para a simulação do cliente
const VALORES = {
  antes: 320.00,  // Conta antiga, só Cemig
  cemig: 52.00,   // Taxa de distribuição e iluminação
  bulbe: 219.50   // Energia limpa da Bulbe
};

VALORES.total = VALORES.cemig + VALORES.bulbe;
VALORES.economia = VALORES.antes - VALORES.total;

// Tela 2 (resumo-mes.html): preenche os valores na tela
function preencher(id, valor) {
  const elemento = document.getElementById(id);
  if (elemento) {
    elemento.textContent = formatarReais(valor);
  }
}

preencher('val-antes', VALORES.antes);
preencher('val-cemig', VALORES.cemig);
preencher('val-bulbe', VALORES.bulbe);
preencher('val-total', VALORES.total);
preencher('val-economia', VALORES.economia);

// Tela 3 (mensagem.html): botão de enviar (simulação)
const botaoEnviar = document.getElementById('botao-enviar');
if (botaoEnviar) {
  botaoEnviar.addEventListener('click', () => {
    alert('Mensagem enviada com sucesso!');
  });
}