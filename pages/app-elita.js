// ========================================
// BULBE - TELA DE ACOMPANHAMENTO
// JavaScript individual - Elita
// ========================================

document.addEventListener("DOMContentLoaded", iniciarTela);

async function iniciarTela() {

    const conteudo = document.getElementById("conteudo");

    // Verifica se o conteúdo existe
    if (!conteudo) {
        console.error("Elemento #conteudo não encontrado.");
        return;
    }

    try {

        // Busca os dados do arquivo JSON
        const resposta = await fetch("dados-elita.json");

        if (!resposta.ok) {
            throw new Error("Não foi possível carregar os dados.");
        }

        const data = await resposta.json();

        // Verifica se os dados possuem as informações necessárias
        if (!data.titulo || !data.subtitulo || !Array.isArray(data.etapas)) {
            throw new Error("O arquivo JSON possui dados inválidos.");
        }

        // Monta o conteúdo da tela
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
                        stroke-linejoin="round" aria-hidden="true">

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
                        e você poderá consultar os valores e acompanhar seus descontos. Enquato isso, continue pagando a Cemig.
                    </p>

                </div>

            </section>

            <button type="button" class="btn-continuar">
                Continuar
            </button>

        `;

    } catch (error) {

        console.error("Erro ao carregar etapas:", error);

        conteudo.innerHTML = `
            <p class="erro">
                Não foi possível carregar suas etapas.
                Verifique sua conexão e tente novamente.
            </p>
        `;

    }

}