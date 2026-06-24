$(document).ready(function() {

    /* ==========================================================
       OPÇÃO 2: GALERIA DE IMAGENS (Página de Produtos)
       ========================================================== */
    $('.miniatura').click(function() {
        // Remove a borda de destaque da miniatura que estava ativa e adiciona na nova clicada
        $('.miniatura').removeClass('ativa');
        $(this).addClass('ativa');

        // Pega o endereço da imagem clicada
        var novaImagem = $(this).attr('src');

        // Troca a foto principal aplicando uma transição suave (Fade)
        $('#imagem-destaque').fadeOut(200, function() {
            $(this).attr('src', novaImagem).fadeIn(200);
        });
    });


    /* ==========================================================
       OPÇÃO 1: VALIDAÇÃO DO FORMULÁRIO (Página de Contato)
       ========================================================== */
    $('#form-contato').submit(function(event) {
        var formulárioValido = true;

        // Remove avisos de erros antigos para não acumular na tela
        $('.msg-erro').remove();

        // 1. Validação do Nome (Obrigatório)
        var nome = $('#nome').val().trim();
        if (nome === "") {
            $('#nome').after('<span class="msg-erro">Por favor, preencha o seu nome completo.</span>');
            formulárioValido = false;
        }

        // 2. Validação do E-mail (Formato válido)
        var email = $('#email').val().trim();
        var filtroEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!filtroEmail.test(email)) {
            $('#email').after('<span class="msg-erro">Digite um endereço de e-mail válido.</span>');
            formulárioValido = false;
        }

        // 3. Validação da Mensagem (Mínimo de 20 caracteres)
        var mensagem = $('#mensagem').val().trim();
        if (mensagem.length < 20) {
            $('#mensagem').after('<span class="msg-erro">Sua mensagem está muito curta (mínimo de 20 caracteres).</span>');
            formulárioValido = false;
        }

        // Se encontrar qualquer erro, impede o formulário de ser enviado/recarregado
        if (!formulárioValido) {
            event.preventDefault();
        } else {
            alert("Sucesso! Sua mensagem foi enviada à equipe da Quantum Shirts.");
        }
    });

});