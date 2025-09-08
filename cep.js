const cep = 88133597;
fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json()) // aqui ele vai converter as respostas para json
    .then(data => console.log(data))// e aqui esse vai mostrar no console as coisas
    .catch(error => console.error('Erro ao buscar o CEP:', error));// aqui e so se der erro