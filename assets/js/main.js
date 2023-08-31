/**
 * O jQuery é usado entre parentes e sifrão
 * O comando sem o jQuery era feito assim:
 * console.log(document.querySelector('header button'))
 * 
 * Agora para chamar uma tag só precisamos fazer assim:
 * consolo.log($("header button"))
 */

$(document).ready(function(){

    //Jeito antigo de chamar uma função 
    document.querySelector('header button').addEventListener('click', function(e){

    })

    //Para chamarmos um função de click é bem simples
    $('header button').click(function(){
        
        //Aqui colocamos um alerta para que quando clicarmos no button abra uma janela de alerta
        //alert('Expandir formulário')

        //Vamos criar uma função para o menu aparecer
        $('form').slideDown();
    })
    
    //Aqui estamos fazendo com que quando paertamos o botão de cancelar o menu recolha
    $('#botao-cancelar').click(function (e){
        $('form').slideUp();
    })


    //Para paramos o efeito padrão da pagina de atualizar quando clicarmos no botão
    $('form').on('submit', function(e){
        
        //Chamando a função
        e.preventDefault();

        /**
         * Agora iremos criar uma função para quando clicarmos no botão de nova imagem ele  poder coletar essa imagem.
         * O Ponto val substitui o .value. O val é uma função
         * Adicionamos a tag img para colocarmos ela em um lista apos adicionada
         * Chamamos a div que foi criada na li 
         * Chamamos a ul 
         * Deixamos o input em branco apos adicionar a imagem 
         * Aplicamos um dislpay none na li para a imagem quando ser adicionada não parecer 
         * E agora iremos criar um efeito para a imagem aparecer 
         */

        const enderecoNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
    $(`<img src ="${enderecoNovaImagem}"/>`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');

        //Alterando o tempo da animação
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val(' ')
    })

})