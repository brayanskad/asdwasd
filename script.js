const btnBuscar = document.getElementById('btnBuscar');
const campoBusca = document.getElementById('campoBusca');
const resultadoArea = document.getElementById('resultado');
const msgErro = document.getElementById('msgErro');

function realizarBusca() {
    const nome = campoBusca.value.toLowerCase().trim();

    if (nome === "") {
        alert("Por favor, digite um nome, seu beta!")
        return;
    }

    const url = `https://pokeapi.co/api/v2/pokemon/${nome}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon não encontrado');
            }
            return response.json();
        })
        .then(data => {
            msgErro.classList.add('d-none');


            document.getElementById('pokeNome').textContent = data.name;
            document.getElementById('pokeId').textContent = data.id;
            document.getElementById('pokeAltura').textContent = data.height;
            document.getElementById('pokePeso').textContent = data.weight;
            document.getElementById('pokeTipo').textContent = data.types[0].type.name;
            document.getElementById('pokeImg').src = data.sprites.front_default;

            resultadoArea.classList.remove('d-none');

        })

        .catch(error => {
            resultadoArea.classList.add('d-none');
            msgErro.classList.remove('d-none');
            console.error('Erro Na Busca', error);
        });
}
btnBuscar.addEventListener('click', realizarBusca);

campoBusca.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        realizarBusca();
    }
})

//brayan da silva marques