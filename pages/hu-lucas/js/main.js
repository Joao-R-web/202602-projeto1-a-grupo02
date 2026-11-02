/* =========================================================
   HU01 (Sandro/Lucas) — Script Principal
   ========================================================= */

// Valores de exemplo para a simulação do cliente
const VALORES = {
    antes: 320.00,  // Conta antiga só Cemig
    cemig: 52.00,   // Taxa de distribuição/iluminação
    bulbe: 219.50   // Valor da energia limpa Bulbe
};

// Cálculos automáticos
VALORES.total = VALORES.cemig + VALORES.bulbe;
VALORES.economia = VALORES.antes - VALORES.total;

// Formatação para BRL
const formatarReais = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

document.addEventListener("DOMContentLoaded", () => {
    // Atualiza valores dinâmicos na Tela 2 (como-fica.html)
    const elAntes = document.getElementById("val-antes");
    const elCemig = document.getElementById("val-cemig");
    const elBulbe = document.getElementById("val-bulbe");
    const elTotal = document.getElementById("val-total");
    const elEconomia = document.getElementById("val-economia");

    if (elAntes) elAntes.textContent = formatarReais(VALORES.antes);
    if (elCemig) elCemig.textContent = formatarReais(VALORES.cemig);
    if (elBulbe) elBulbe.textContent = formatarReais(VALORES.bulbe);
    if (elTotal) elTotal.textContent = formatarReais(VALORES.total);
    if (elEconomia) elEconomia.textContent = formatarReais(VALORES.economia);
});