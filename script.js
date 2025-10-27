function mudarVisual(cor, imagem) {
    const body = document.querySelector("body");
    const tenis = document.querySelector(".imagemtenis");
    const textoHero = document.querySelector(".texto-hero");
    const headerLinks = document.querySelectorAll("header a");
    const botoes = document.querySelectorAll(".botoes");

    body.style.background = cor;
    tenis.src = imagem;

    localStorage.setItem("corSelecionada", cor);
    localStorage.setItem("imagemSelecionada", imagem);

    if (cor === "#ffffff") {
        {
            body.style.color = "#000000";
            textoHero.querySelectorAll("h1, h2, h3, li, a").forEach(elemento => {
                elemento.style.color = "#000000";
            });
            document.querySelectorAll(".saibamais").forEach(botao => {
                botao.style.backgroundColor = "#000000ff";
                botao.style.color = "#ffffff";
            });
            headerLinks.forEach(link => {
                link.style.color = "#000000";
            });
            botoes.forEach(button => {
                button.style.border = "1px solid #000000";
            }); document.querySelectorAll(".buttongb").forEach(botao => {
                botao.style.border = "2px solid #000000ff";
                botao.style.color = "#000000ff";
            }
            );
        }
    } else {
        body.style.color = "#ffffff";
        textoHero.querySelectorAll("h1, h2, h3, li, a").forEach(elemento => {
            elemento.style.color = "#ffffff";
        });
        document.querySelectorAll(".saibamais").forEach(botao => {
            botao.style.backgroundColor = "#ffffff";
            botao.style.color = "#000000";
        });
        headerLinks.forEach(link => {
            link.style.color = "#ffffff";
        });
        botoes.forEach(button => {
            button.style.border = "1px solid #ffffff";
        });
        document.querySelectorAll(".buttongb").forEach(botao => {
            botao.style.border = "2px solid #ffffffff";
            botao.style.color = "#ffffffff";
        });
        document.querySelector("footer").forEach(elemento => {
            elemento.style.backgroundColor = "#ffffffff";
        });
    }
}

function cliqueino128() {
    document.querySelector(".price h1").innerText = "R$9.750,00";
}

function cliqueino256() {
    document.querySelector(".price h1").innerText = "R$10.250,00";
}

function irParaSaibaMais() {
    window.location.href = "./saibamais";
}

function irParaSobre() {
    window.location.href = "./sobre";
}

window.addEventListener("DOMContentLoaded", () => {
    const corSalva = localStorage.getItem("corSelecionada");
    const imagemSalva = localStorage.getItem("imagemSelecionada");

    if (corSalva && imagemSalva) {
        mudarVisual(corSalva, imagemSalva);
    }
});

function rolarParaContato(event) {
  event.preventDefault(); 
  const footer = document.getElementById("contato");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
}
