/* =====================================================
   JS PRÓPRIO DA TELA "COMO FUNCIONA A BULBE"
   Carrossel das 4 etapas + botão verde que leva até ele.
   ===================================================== */

const faixa = document.getElementById("faixa");

const slides = faixa.querySelectorAll(".slide");

const btnVoltar = document.getElementById("btn-voltar");

const btnAvancar = document.getElementById("btn-avancar");

const areaPontos = document.getElementById("indicadores");

let atual = 0;


/* Cria um indicador (bolinha) para cada slide */

const pontos = Array.from(slides, function (_, i) {

  const p = document.createElement("button");

  p.type = "button";

  p.className = "ponto";

  p.setAttribute("aria-label", "Ir para a etapa " + (i + 1));

  p.addEventListener("click", function () {

    irPara(i);

  });

  areaPontos.appendChild(p);

  return p;

});


/* Vai até um slide */

function irPara(i) {

  i = Math.max(0, Math.min(slides.length - 1, i));

  faixa.scrollTo({
    left: i * faixa.clientWidth,
    behavior: "smooth"
  });

}


/* Atualiza botões e indicadores */

function atualizar() {

  atual = Math.round(faixa.scrollLeft / faixa.clientWidth);

  pontos.forEach(function (p, i) {

    p.setAttribute(
      "aria-current",
      i === atual ? "true" : "false"
    );

  });

  btnVoltar.disabled = atual === 0;

  btnAvancar.disabled = atual === slides.length - 1;

}


/* Detecta a mudança de slide ao arrastar */

let esperando = false;

faixa.addEventListener("scroll", function () {

  if (esperando) return;

  esperando = true;

  requestAnimationFrame(function () {

    esperando = false;

    atualizar();

  });

});


/* Botão voltar */

btnVoltar.addEventListener("click", function () {

  irPara(atual - 1);

});


/* Botão avançar */

btnAvancar.addEventListener("click", function () {

  irPara(atual + 1);

});


/* Setas do teclado */

faixa.addEventListener("keydown", function (e) {

  if (e.key === "ArrowRight") {

    e.preventDefault();

    irPara(atual + 1);

  }

  if (e.key === "ArrowLeft") {

    e.preventDefault();

    irPara(atual - 1);

  }

});


/* Mantém o slide certo quando a tela muda de tamanho */

window.addEventListener("resize", function () {

  faixa.scrollTo({
    left: atual * faixa.clientWidth,
    behavior: "instant"
  });

});


/* Botão verde: rola até o carrossel */

document.getElementById("ir-carrossel").addEventListener("click", function () {

  document.getElementById("carrossel").scrollIntoView({

    block: "start",

    behavior: "smooth"

  });

  faixa.focus({
    preventScroll: true
  });

});


/* Inicializa o carrossel */

atualizar();