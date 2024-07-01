

const apikey = "ba1d6e88c1b5cc6ecece68d058fee71f"

function colocarNaTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src =`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apikey}&lang=pt_br`).then(resposta => resposta.json())

    colocarNaTela(dados)

}

function cliqueiNoBotao() {
    const cidade = document.querySelector('.input-cidade').value

    buscarCidade(cidade)
}