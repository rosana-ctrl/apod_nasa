$('#submit').click(function () {

    var imagem = `<img class="imagemApod" src="https://gifs.eco.br/wp-content/uploads/2021/08/imagens-e-gifs-de-loading-39.gif" alt="" /> `
    $("#divResult").html(imagem);

    $.ajax({
        url: 'https://api.nasa.gov/planetary/apod?api_key=hbUcVCKes59CdggGUQYvUg4zksOrvPDAwqKvnzG2&date=' + $("#dataDesejada").val(),

        success: function (resposta) {
            console.log(resposta)

            var elemento = '';

            if (resposta.media_type == 'image') {
                var elemento = `<img class="imagemApod" src="${resposta.url}" alt="" /> `

            } else if (resposta.media_type == 'video') {
                var elemento = `<iframe class="video iframeVideo" src="${resposta.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            }

            if (elemento) {
                elemento += `<p class="p-strong">${resposta.title}</p>`;
                elemento += `<p>${resposta.explanation}</p>`;

                $("#divResult").html(elemento);
            } else {
                $("#divResult").html('');
            }
        },
        error: function (erro) {
            console.log(erro)
            $("#divResult").html(`<p>${erro.responseJSON.msg}</p>`)

        },
    })
})