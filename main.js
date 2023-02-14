    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            telefone: {
                required:true
            },
            email: {
                required:true,
                email: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            
        },
        messages: {
            email: 'Por favor, insira um e-mail válido'            
        },
        submitHandler: function(form) {
            console.log(form)
            alert('Seu formulário foi recebido com sucesso!')
            $("form")[0]. reset();
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })