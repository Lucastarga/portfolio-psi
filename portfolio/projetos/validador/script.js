const btn_enviar = document.querySelector('#enviar');
const btn_reset = document.querySelector('#reset');
const form = document.querySelector('#form-validator'); //armazena os valores dos campos do formulario
const area_resultado = document.querySelector('.container-result');
const result = document.querySelector('.resultado'); //usada para adicionar o texto de acordo com o resultado do script
const img_resultado = document.querySelector('.img-resultado'); //usada para adiconar a imagem que ira aparecer
const data_atual = new Date; //armazena a data atual 
const ano_atual = data_atual.getFullYear(); // armazena o ano da data atual


// funcao que retorna a data atual , e adicina ao input como valor maximo da data de nascimento
window.onload = function dataMaxima() { 
    form.date.setAttribute('max', ano_atual);
}

// funcao que executa a logica do script e retorna imagem e texto de acordo com o resultado
function setResultado() {
    
    function getResultado(event) {
        event.preventDefault();
        const idade = ano_atual - form.date.value;
        const valueSexo = form.sexo.value;
        area_resultado.style.display = 'block';

        if((idade > 0 && idade < 15) && valueSexo !== '' ) {
            if( valueSexo == "M"){
                img_resultado.setAttribute('src', './menino.png');
                result.innerHTML = `Identificamos uma criança de ${idade} anos do sexo <strong>masculino</strong>.`;
                
            } else if(valueSexo == "F") {
                img_resultado.setAttribute('src', './menina.png')
                result.innerHTML = `Identificamos uma criança de ${idade} anos do sexo <strong>feminino</strong>.`;
            }
        }

        else if((idade >= 15 && idade < 30) && valueSexo !== '' ){
            if( valueSexo == "M"){
                img_resultado.setAttribute('src', './garoto.png');
                result.innerHTML = `Identificamos um jovem de ${idade} anos do sexo <strong>masculino</strong>.`;
                
            } else if( valueSexo == "F") {
                img_resultado.setAttribute('src', './garota.png')
                result.innerHTML = `Identificamos uma jovem de ${idade} anos do sexo <strong>feminino</strong>.`;
            }

        }

        else if((idade >= 30 && idade < 60) && valueSexo !== '' ){
            if( valueSexo == "M"){
                img_resultado.setAttribute('src', './homem.png');
                result.innerHTML = `Identificamos um homem de ${idade} anos do sexo <strong>masculino</strong>.`;
                
            } else if(valueSexo == "F") {
                img_resultado.setAttribute('src', './mulher.png');
                result.innerHTML = `Identificamos uma mulher de ${idade} anos do sexo <strong>feminino</strong>.`;
            }

        }

        else if((idade >= 60 && idade < 120) && valueSexo !== '' ){
            if( valueSexo == "M"){
                img_resultado.setAttribute('src', './idoso.png');
                result.innerHTML = `Identificamos um senhor de ${idade} anos do sexo <strong>masculino</strong>.`;
                
            } else if(valueSexo == "F") {
                img_resultado.setAttribute('src', './idosa.png');
                result.innerHTML = `Identificamos uma senhora de ${idade} anos do sexo <strong>feminino</strong>.`;
            }

        }
        else{
            if(idade === ano_atual){
                img_resultado.setAttribute('src', './erro.png');
                result.innerHTML = `Erro, o campo data de nascimento não pode estar vazio.`;
                console.log('entrou no else', valueSexo)

            }

            else if(valueSexo === ''){
                img_resultado.setAttribute('src', './erro.png');
                result.innerHTML = `Erro, o campo sexo não pode estar vazio.`;
                console.log('entrou no else', valueSexo)

            }

            else{
                img_resultado.setAttribute('src', './erro.png');
                result.innerHTML = `Erro, verifique as informações e tente novamente.`;
                console.log('entrou no else', valueSexo)
            }
        }
    }

    btn_enviar.addEventListener('click', getResultado);

    btn_reset.addEventListener('click', () =>{
        area_resultado.style.display = 'none';
    })
}
setResultado();

