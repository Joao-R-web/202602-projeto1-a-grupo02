/* =====================================================
   AJUSTE DE ALTURA DA TELA
   ===================================================== */

function ajustarAltura() {
  document.documentElement.style.setProperty(
    "--altura-app",
    window.innerHeight + "px"
  );
}

ajustarAltura();

window.addEventListener("resize", ajustarAltura);

window.addEventListener("orientationchange", ajustarAltura);


/* =====================================================
   CARROSSEL
   ===================================================== */

(function () {

  const faixa = document.getElementById("faixa");

  const slides = faixa.querySelectorAll(".slide");

  const btnVoltar = document.getElementById("btn-voltar");

  const btnAvancar = document.getElementById("btn-avancar");

  const areaPontos = document.getElementById("indicadores");

  let atual = 0;


  /* =====================================================
     CRIAÇÃO DOS INDICADORES
     ===================================================== */

  const pontos = Array.from(slides, function (_, i) {

    const p = document.createElement("button");

    p.type = "button";

    p.className = "ponto";

    p.setAttribute(
      "aria-label",
      "Ir para a etapa " + (i + 1)
    );

    p.addEventListener("click", function () {

      irPara(i);

    });

    areaPontos.appendChild(p);

    return p;

  });


  /* =====================================================
     FUNÇÃO PARA IR ATÉ UM SLIDE
     ===================================================== */

  function irPara(i) {

    i = Math.max(
      0,
      Math.min(slides.length - 1, i)
    );

    faixa.scrollTo({
      left: i * faixa.clientWidth,
      behavior: "smooth"
    });

  }


  /* =====================================================
     ATUALIZAÇÃO DOS BOTÕES E INDICADORES
     ===================================================== */

  function atualizar() {

    atual = Math.round(
      faixa.scrollLeft / faixa.clientWidth
    );

    pontos.forEach(function (p, i) {

      p.setAttribute(
        "aria-current",
        i === atual ? "true" : "false"
      );

    });

    btnVoltar.disabled = atual === 0;

    btnAvancar.disabled = atual === slides.length - 1;

  }


  /* =====================================================
     DETECTA A MUDANÇA DE SLIDE
     ===================================================== */

  let esperando = false;

  faixa.addEventListener("scroll", function () {

    if (esperando) return;

    esperando = true;

    requestAnimationFrame(function () {

      esperando = false;

      atualizar();

    });

  });


  /* =====================================================
     BOTÃO VOLTAR
     ===================================================== */

  btnVoltar.addEventListener("click", function () {

    irPara(atual - 1);

  });


  /* =====================================================
     BOTÃO AVANÇAR
     ===================================================== */

  btnAvancar.addEventListener("click", function () {

    irPara(atual + 1);

  });


  /* =====================================================
     NAVEGAÇÃO PELO TECLADO
     ===================================================== */

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


  /* =====================================================
     AJUSTE QUANDO A TELA MUDA DE TAMANHO
     ===================================================== */

  window.addEventListener("resize", function () {

    faixa.scrollTo({
      left: atual * faixa.clientWidth,
      behavior: "instant"
    });

  });


  /* =====================================================
     BOTÃO VERDE: IR PARA O CARROSSEL
     ===================================================== */

  document.getElementById("ir-carrossel").addEventListener("click", function () {

    document.getElementById("carrossel").scrollIntoView({
      block: "start",
      behavior: "smooth"
    });

    faixa.focus({
      preventScroll: true
    });

  });


  atualizar();

})();