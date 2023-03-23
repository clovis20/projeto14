$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: false
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            },            
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
    })
})

