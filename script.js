const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual o tamanho da aquaponia?",
        alternativas: [
            {
                texto: "Pequeno",
                afirmacao: "Medidas(CxLxA): 1,5 x 1 x 0,9."
            },
            {
                texto: "Médio" ,
                afirmacao: "Medidas(CxLxA): 3 x 2 x 1,5." 
            },
            {
                texto: "Grande" ,
                afirmacao: "Medidas(CxLxA): 8 x 5 x 2." 
            }

        ]
    },
    {
        enunciado: "Que tipo de peixe você pretende criar?",
        alternativas: [
            {
                texto: "Peixes de água doce",
                afirmacao: " Peixes de água doce: Existem diversos tipos de peixes de água doce que podem ser usados na aquaponia! Alguns dos mais populares são: Tilápia, Truta, Peixe-gato (bagre), Largemouth bass, Pacu, Salmão, Carpas e Tambaqui.."
            },
            {
                texto: "Peixes de água salgada",
                afirmacao: " Peixes de água salgada: A aquaponia com água salgada é um pouco mais complexa, mas também muito interessante. Alguns dos peixes de água salgada mais comuns em sistemas aquapônicos são: Tilápia Marinha (Sparus aurata), Robalo (Dicentrarchus labrax) e Lambari Marinho (Lutjanidae)."
            }
        ]
    },
    {
        enunciado: "Quais plantas você pretende cultivar?",
        alternativas: [
            {
                texto: "Hortaliças de Folhas",
                afirmacao: "Na aquaponia, muitas hortaliças de folha se adaptam bem e podem prosperar em um sistema bem mantido. Aqui estão algumas opções populares: Alface, Couve, Espinafre, Rúcula, Mostarda, Acelga, Pak Choi, Hortelã, Endívia e Agrião."
            },
            {
                texto: "Hortaliças de Frutos",
                afirmacao: "Hortaliças de fruto podem ser cultivadas em aquaponia, mas exigem mais cuidados e atenção devido às suas necessidades complexas de nutrientes e espaço. Algumas opções são: Tomate, Pepino, Abobrinha, Pimentão, Beringela, Abóbora, Melância, Morango e Chuchu."
            }

        ]
    },

    {
        enunciado: "Como você pretende filtrar a água?",
        alternativas: [
            {
                texto: "Filtro Biológico",
                afirmacao: "Fitro Biológico: Utiliza bactérias benéficas para converter amônia e nitritos produzidos pelos peixes em nitratos, que são mais seguros para os peixes e nutritivos para as plantas. Exemplos incluem filtros de leito fixo e filtros de leito fluidizado."
            },
            {
                texto: "Filtro Mecânico",
                afirmacao:"Filtro Mecânico: Remove partículas sólidas e detritos da água, ajudando a manter a água limpa e prevenindo o entupimento das bombas e dos tubos. Exemplos incluem filtros de esponja, filtros de saco e filtros de cilindro."
            }

        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Aquaponia pronta! Confira a produção a seguir:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();