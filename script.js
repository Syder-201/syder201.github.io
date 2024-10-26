function recomendarFilme() {
    let idade = parseInt(document.getElementById("idade").value);
    let generosSelecionados = Array.from(document.getElementById("generos").selectedOptions).map(option => option.value);

    function obterRecomendacao(idade, generos) {
        generos = generos.map(g => g.toLowerCase());

        if (idade >= 5 && idade <= 8) {
            if (generos.includes("fantasia") && generos.includes("aventura")) {
                return "A Viagem de Chihiro";
            } else if (generos.includes("drama")) {
                return "Procurando Nemo";
            } else if (generos.includes("fantasia") && generos.includes("drama")) {
                return "O Mágico de Oz";
            }
        } else if (idade >= 9 && idade <= 12) {
            if (generos.includes("fantasia") && generos.includes("aventura")) {
                return "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa";
            } else if (generos.includes("drama") && generos.includes("aventura")) {
                return "O Menino que Queria Ser Rei";
            } else if (generos.includes("drama") && generos.includes("fantasia")) {
                return "A Fantástica Fábrica de Chocolate";
            }
        } else if (idade >= 13 && idade <= 15) {
            if (generos.includes("fantasia") && generos.includes("aventura")) {
                return "O Menino que Descobriu o Vento";
            } else if (generos.includes("drama")) {
                return "Extraordinário";
            } else if (generos.includes("aventura") && generos.includes("drama")) {
                return "Os Goonies";
            }
        } else if (idade >= 16 && idade <= 18) {
            if (generos.includes("fantasia") && generos.includes("aventura")) {
                return "O Senhor dos Anéis: A Sociedade do Anel";
            } else if (generos.includes("drama")) {
                return "A Culpa é das Estrelas";
            } else if (generos.includes("fantasia") && generos.includes("drama")) {
                return "O Labirinto do Fauno";
            }
        } else if (idade >= 18) {
            if (generos.includes("fantasia") && generos.includes("aventura")) {
                return "A Origem";
            } else if (generos.includes("drama")) {
                return "A Lista de Schindler";
            } else if (generos.includes("aventura") && generos.includes("drama")) {
                return "Na Natureza Selvagem";
            }
        }
        return "Desculpe, não encontramos uma recomendação para suas preferências.";
    }

    let recomendacao = obterRecomendacao(idade, generosSelecionados);
    document.getElementById("resultado").textContent = "Filme recomendado: " + recomendacao;
}
