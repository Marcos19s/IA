const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como a crescente adoção de carros elétricos pode influenciar a qualidade do ar em áreas urbanas?",
        alternativas: [
            {
                texto: "Carros elétricos reduzem poluentes atmosféricos em áreas urbanas, melhorando a qualidade do ar. Eles não emitem gases nocivos, como óxidos de nitrogênio e partículas finas.",
                afirmacao: "Carros elétricos reduzem a poluição do ar urbano ao não emitir poluentes diretamente."
            },
            {
                texto: "Os benefícios para a qualidade do ar dependem da fonte de eletricidade usada para carregar os veículos. Se a eletricidade vem de fontes não renováveis, a melhoria pode ser limitada.",
                afirmacao: "A origem da eletricidade usada para carregar carros elétricos afeta a melhoria da qualidade do ar."
            }
        ]
    },
    {
        enunciado: "Quais são os desafios ambientais associados à produção e descarte de baterias de carros elétricos?",
        alternativas: [
            {
                texto: "A produção de baterias para carros elétricos pode causar impactos ambientais, como degradação do solo e poluição, devido à mineração de minerais raros.",
                afirmacao: "A produção de baterias para carros elétricos pode causar impactos ambientais significativos."
            },
            {
                texto: "O descarte inadequado de baterias pode levar ao acúmulo de resíduos tóxicos. Melhorar a reciclagem e a gestão de resíduos é essencial para reduzir esses impactos.",
                afirmacao: "O descarte inadequado de baterias pode resultar em resíduos tóxicos e poluição."
            }
        ]
    },
    {
        enunciado: "De que maneira a infraestrutura de recarga para carros elétricos pode impactar o planejamento urbano e a ambientação das cidades?",
        alternativas: [
            {
                texto: "A expansão de estações de recarga pode alterar o uso do solo e o planejamento urbano, exigindo a criação de novos espaços e ajustes no design das cidades.",
                afirmacao: "Estações de recarga podem influenciar o planejamento urbano e a utilização do espaço."
            },
            {
                texto: "A infraestrutura de recarga pode promover o desenvolvimento urbano sustentável e incentivar a adoção de carros elétricos, ajudando a reduzir a pegada de carbono das cidades.",
                afirmacao: "Infraestrutura de recarga pode fomentar um desenvolvimento urbano mais sustentável."
            }
        ]
    },
    {
        enunciado: "Como a integração de veículos elétricos em frotas de transporte público pode afetar a sustentabilidade e a eficiência energética das cidades?",
        alternativas: [
            {
                texto: "Veículos elétricos em transporte público reduzem emissões e melhoram a eficiência energética, tornando as cidades mais sustentáveis.",
                afirmacao: "Veículos elétricos no transporte público ajudam a reduzir emissões e melhorar a sustentabilidade urbana."
            },
            {
                texto: "Desafios como custos iniciais e necessidade de infraestrutura de recarga devem ser superados para maximizar os benefícios ambientais e energéticos.",
                afirmacao: "A eficácia na integração de veículos elétricos depende de superar custos e desafios de infraestrutura."
            }
        ]
    },
    {
        enunciado: "Qual é o papel das energias renováveis na maximização dos benefícios ambientais dos carros elétricos?",
        alternativas: [
            {
                texto: "Usar energias renováveis para carregar carros elétricos é crucial para maximizar seus benefícios ambientais e reduzir emissões de carbono.",
                afirmacao: "Energias renováveis são essenciais para maximizar os benefícios ambientais dos carros elétricos."
            },
            {
                texto: "A expansão das energias renováveis pode reduzir custos de eletricidade e incentivar a adoção de veículos elétricos.",
                afirmacao: "A expansão das energias renováveis pode diminuir custos e promover a adoção de veículos elétricos."
            }
        ]
    },
    {
        enunciado: "Como a autonomia limitada dos carros elétricos pode influenciar a escolha de locais para novas estações de recarga e seu impacto na mobilidade sustentável?",
        alternativas: [
            {
                texto: "A autonomia limitada dos carros elétricos exige uma rede densa de estações de recarga, afetando o planejamento urbano e a gestão do espaço.",
                afirmacao: "A autonomia limitada dos carros elétricos pode exigir mais estações de recarga e impactar o planejamento urbano."
            },
            {
                texto: "Soluções inovadoras, como estações móveis e recarga rápida, podem ajudar a superar limitações de autonomia e melhorar a mobilidade sustentável.",
                afirmacao: "Soluções inovadoras de recarga podem melhorar a mobilidade sustentável apesar das limitações de autonomia."
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();