const input = document.getElementById('input-busca');
const apiKey = 'ba1d6e88c1b5cc6ecece68d058fee71f';

const clientID =  'd6d3b4a6bb9d40e19a3720dda711de1a';
const clientSecret =  '3c1fbea33dbd4d2181326fff307bb9b7';

function botaoDeBusca() {
    const inputValue = input.value;

    movimentoInput(inputValue);
}

function fecharInput() {
    input.style.visibility = 'hidden';
    input.style.width = '40px';
    input.style.padding = '0.5rem 0.5rem 0.5rem 2.6rem';
    input.style.transition = 'all 0.5s ease-in-out 0s';
    input.value = "";

}


function abrirInput() {
    input.style.visibility = 'visible';
    input.style.width = '300px';
    input.style.padding = '0.5rem 0.5rem 0.5rem 3.1rem';
    input.style.transition = 'all 0.5s ease-in-out 0s';
    input.value = "";

}

function movimentoInput(inputValue) {
    const visibility = document.getElementById('input-busca').style.visibility;

    inputValue && procurarCidade(inputValue);

    visibility === 'hidden' ? abrirInput() : fecharInput();

}

input.addEventListener('keyup', function (event) {
    if (event.keycode === 13) {
        const valorInput = input.value;
        movimentoInput(valorInput)

    }
})

document.addEventListener('DOMContentLoaded', () => {
    fecharInput();
})


//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

async function procurarCidade(city) {
    try {
        const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`);

        if(dados.status === 200) {
            const resultado = await dados.json();
            mostrarClimaNaTela(resultado);
            console.log(resultado, '<<')
        } else {
           throw new Error
        }
       
    } catch {
        alert('A pesquisa por cidade resultou em erro!');
    }

}

function mostrarClimaNaTela(resultado) {
    document.querySelector('.icone-tempo').src = `./assets/${resultado.weather[0].icon}.png`
    document.querySelector('.nome-cidade').innerHTML = `${resultado.name}`;
    document.querySelector('.temperatura').innerHTML = `${resultado.main.temp.toFixed(1)}ºC`;
    document.querySelector('.maxTemperatura').innerHTML = `máx:${resultado.main.temp_max.toFixed(1)}ºC`;
    document.querySelector('.minTemperatura').innerHTML = `min:${resultado.main.temp_min.toFixed(1)}ºC`;
}

async function obterAcessoToken() {
    const credentials = `${clientID}:${clientSecret}`;
    const encodedCredentials = btoa(credentials);

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${encodedCredentials}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials',
    });
    
    const data = await response.json()
    

    return data.acess_token;
    console.log(data);
}


async function obterTopAlbunsPorPais() {
    try {
        const acessToken = await obterAcessoToken();

    const url = `https://api.spotify.com/v1/browse/featured-playlists?offset=0&limit=3&locale=pt-BR,pt;q%3D0.9,en-US;q%3D0.8,en;q%3D0.7`;

    const resultado = await fetch(`${url}`, {
        headers: {
            'Authorization': `Bearer ${acessToken}`
        }
    });
    if(resultado.status === 200) {
        const result = data.playlist.items.map(item => ({
            name: item.name,
            image: item.images[0].url
        }))
        console.log(result);
    } else {
        throw new Error
    }

    } catch {
        alert('A pesquisa por musica deu errado!')
    }

}

obterTopAlbunsPorPais()
