document.addEventListener("DOMContentLoaded", () => {

      fetch("dados-elita.json")
        .then(response => {
          if (!response.ok) {
            throw new Error("Não foi possível carregar os dados.");
          }
          return response.json();
        })

        .then(data => {

          const conteudo = document.getElementById("conteudo");

          conteudo.innerHTML = `

                <section class="introducao">
                    <h2>${data.titulo}</h2>
                    <p>${data.subtitulo}</p>
                </section>

                <section class="etapas-wrapper">

                    ${data.etapas.map((etapa, index) => {

            const icone = etapa.status === "concluido"
              ? "✓"
              : index + 1;

            return `
                            <div class="etapa-item ${etapa.status}">

                                <div class="etapa-icone">
                                    ${icone}
                                </div>

                                <div class="etapa-texto">
                                    <h3>${etapa.titulo}</h3>
                                    <p>${etapa.descricao}</p>
                                </div>

                            </div>
                        `;

          }).join("")}

                </section>

                <section class="aviso-fatura">

                    <div class="icone-fatura">
                        <svg width="40" height="40" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor"
                            stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <path d="M14 2v6h6"/>
                            <path d="M8 13h8"/>
                            <path d="M8 17h5"/>
                        </svg>
                    </div>

                    <div class="texto-aviso">
                        <h3>Fique de olho!</h3>
                        <p>
                            Em breve sua primeira fatura da Bulbe estará disponível,
                            e você poderá consultar os valores e acompanhar seus descontos.
                        </p>
                    </div>

                </section>

                <button class="btn-continuar">
                    Continuar
                </button>

            `;
        })

        .catch(error => {
          console.error("Erro:", error);

          document.getElementById("conteudo").innerHTML =
            '<p class="erro">Não foi possível carregar suas etapas.</p>';
        });

    });