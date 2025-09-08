const filmes = [
    { id: 1, titulo: "Matrix", ano: 1999, nota: 8.7, genero: "Ficção Científica" }, // 0
    { id: 2, titulo: "O Poderoso Chefão", ano: 1972, nota: 9.2, genero: "Drama" }, // 1
    { id: 3, titulo: "A Origem", ano: 2010, nota: 8.8, genero: "Ficção Científica" }, // 2
    { id: 4, titulo: "O Senhor dos Anéis: O Retorno do Rei", ano: 2003, nota: 9.0, genero: "Fantasia" }, // 3
    { id: 5, titulo: "Pulp Fiction", ano: 1994, nota: 8.9, genero: "Crime" },// 4
    ];

    const resumofilmes = ({ titulo, ano, nota }) => `${titulo} (${ano}) - Nota: ${nota}`; 

    const classicos = filmes.filter(filme => filme.ano > 2000);

    const titulos = filmes.map(filme => filme.titulo);

    const nome_do_catalogo = "cinetech";
    
    let totaldefilmes = filmes.length;

    const filmesdedrama = filmes.filter(filme => filme.genero === "Drama");

    const ficçaocientificaexelente = filmes.filter(filme => filme.genero === "Ficção Científica" && filme.nota >= 8.5);

    function classificarFilme(nota) {
        
        if (nota >= 9) {
            return 'Excelente';
        } else if (nota >= 8) {
            return 'Muito Bom';
        } else if (nota >= 7) {
            return 'Bom';
        }
    }

    function filmeclassico(ano) {
        if (ano < 2000){
            return 'Clássico';
        }
        else {
            return 'Moderno';
        }
    }

    function existefilmedogenero(genero) {
        if (filmes.some(filme => filme.genero === genero)) { 
            return 'Sim';
            
            
        }
    }

    function contarfilmesporgenero(filmes) {
        let relatorio = {}

        filmes.forEach(filme => {
            if (relatorio[filme.genero]) {
                relatorio[filme.genero]++; // se ja existir, ele so adiciona mais 1
            } else {
                relatorio[filme.genero] = 1; // se n existir, ele cria a chave e ja coloca 1
            }

        });
        return relatorio;
    }
    
    const resultado = contarfilmesporgenero(filmes);


    filmes.forEach(resumofilmes); 
    console.log('Bem-vindo ao catálogo ' + nome_do_catalogo);

    console.log('\n Temos ' + totaldefilmes + ' filmes no catálogo');

    console.log("\n títulos dos filmes: " + titulos);

    console.log("\n filmes de ficção científica com nota maior que 8.5: " + ficçaocientificaexelente.map(resumofilmes));

    console.log("\n filmes de drama: " + filmesdedrama.map(resumofilmes));

    console.log("\nresumo do filme: " + resumofilmes(filmes[2]));

    console.log("\n o filme é: " + filmeclassico(filmes[2].ano));

    console.log("\n nota do filme: " + filmes[2].nota + " classificação: " + classificarFilme(filmes[2].nota));

    console.log("\n existe filme do gênero fantasia? " + existefilmedogenero("Fantasia")); // ali tu troca o "fantasia" pelo genero q tu quer

    console.log("\n filme do id 3: " + resumofilmes(filmes.find(filme => filme.id === 3))); // ali tu troca o 3 pelo id q tu quer

    console.log("\n numeros de filmes por generos")
    
    console.log(resultado);

    
    