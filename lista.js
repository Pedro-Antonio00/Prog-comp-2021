let operacao = () =>{
    let vetvendedores = []
    let op = Number(prompt(`Escolha a opção:\n1.Cadastrar vendedor\n2.Cadastrar venda\n3.Consultar as vendas do funcionário no mês\n4.Consultar total de vendas de um vendedor\n5.Mostrar o número do vendedor que mais vendeu no mês\n6.Mostrar o número do mês com mais vendas\n7.Finalzar programa`))
    let vetvendas = []
    
    while(op!=7){
        switch(op){
            case 1: let objeto = {
                        nome: prompt(`Insira o nome do vendedor`),
                        codigo: Number(prompt(`Inserir o código do vendedor`))
                    }
                    let achou = false
                    for(let i=0;i<vetvendedores.length;i++){
                        if(objeto.codigo==vetvendedores[i].codigo){
                            achou = true
                        }
                    }
                    if(achou==false){
                        vetvendedores.push(objeto)
                    }
                    else{
                        alert(`Código ja existente`)
                    }
                    break
            case 2: let objeto1 = {
                        codigo: Number(prompt(`Informe o código do vendedor`)),
                        mes: Number(prompt(`Informe o mês das vendas`)),
                        valor: Number(prompt(`Informe o valor das vendas`))
                    }
                    let achou1 = false
                    for(let i=0;i<vetvendas.length;i++){
                        if(vetvendas[i].mes==objeto.mes && vetvendas[i].codigo==objeto.codigo){
                            achou=true
                        }
                    }
                    if(achou!=true){
                        vetvendas.push(objeto)
                    }
                    else{
                        alert(`Não pode ser cadastrado`)
                    }
                    break
        }
        op = Number(prompt(`Escolha a opção:\n1.Cadastrar vendedor\n2.Cadastrar venda\n3.Consultar as vendas do funcionário no mês\n4.Consultar total de vendas de um vendedor\n5.Mostrar o número do vendedor que mais vendeu no mês\n6.Mostrar o número do mês com mais vendas\n7.Finalzar programa`))
    }
}