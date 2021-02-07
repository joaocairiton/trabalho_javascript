let seuvotopara = document.querySelector(".d-1-1 span");
let cargo = document.querySelector(".d-1-2 span");
let descricao = document.querySelector(".d-1-4");
let aviso = document.querySelector(".d-2");
let lateral = document.querySelector(".d-1-right");
let numeros = document.querySelector(".d-1-3");

let etapaAtual = 0;
let numero = '';
let votobranco = false;
let votos = [];

function comecarEtapa() {
    let etapa = etapas[etapaAtual];
    let numeroHtml = '';
    numero = '';
    votobranco = false;

    for (let i = 0; i < etapa.numeros; i++) {
        if (i === 0) {
            numeroHtml += '<div class="numero pisca"></div>';
        } else {
            numeroHtml += '<div class="numero"></div>';
        }
    }

    seuvotopara.style.display = "none";
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = "";
    aviso.style.display = "none";
    lateral.innerHTML = "";
    numeros.innerHTML = numeroHtml;
}

function atualizaInterface() {
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item) => {
        if (item.numero === numero) {
            return true;

        } else {
            return false;
        }

    });

    if (candidato.length > 0) {
        candidato = candidato[0];
        aviso.style.display = 'block';
        seuvotopara.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.nome} <br/> Partido: ${candidato.partido}`;

        let fotosHtml = '';

        for (let i in candidato.fotos) {
            if (candidato.fotos[i].small) {
                fotosHtml += `<div class="d-1-image small"><img src="images/${candidato.fotos[i].url}" alt="" class="alt" />${candidato.fotos[i].legenda}</div>`;
            }else{
                fotosHtml += `<div class="d-1-image"><img src="images/${candidato.fotos[i].url}" alt="" class="alt" />${candidato.fotos[i].legenda}</div>`;
            }
           
        }

        lateral.innerHTML = fotosHtml;

    }else{
        aviso.style.display = 'block';
        seuvotopara.style.display = 'block';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>'


    }

}

function clicou(n) {
    let numerop = document.querySelector(".numero.pisca");
    if (numerop !== null) {
        numerop.innerHTML = n;
        numero = `${numero}${n}`;

        numerop.classList.remove("pisca");
        if (numerop.nextElementSibling !== null) {
            numerop.nextElementSibling.classList.add("pisca");
        } else {
            atualizaInterface();
        }
    }
}
function branco() {
    if (numero === '') {
        votobranco = true;
        seuvotopara.style.display = 'block';
        aviso.style.display = 'block';
        numeros.innerHTML = '';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>';
        
    }
}

function corrigir() {
    comecarEtapa();
}

function confirmar() {
    let etapa = etapas[etapaAtual];
    let votoConf = false;

    if (votobranco === true) {
        votoConf = true;
        votos.push([{

            etapa: etapas[etapaAtual].titulo,
            voto: 'branco'

        }]);
        
    }else if (numero.length === etapa.numeros){
        votoConf = true;
        votos.push([{

            etapa: etapas[etapaAtual].titulo,
            voto: numero

        }]);

    }
    if (votoConf) {
        etapaAtual++;
        if (etapas[etapaAtual] !== undefined) {
            comecarEtapa();


            
        }else{
            document.querySelector('.tela').innerHTML = '<div class="aviso--gigante pisca">FIM!</div>';
            console.log(votos);
        }
        
    }
}
comecarEtapa();
