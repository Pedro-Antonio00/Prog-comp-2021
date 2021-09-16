let operacao = () =>{
    let vetvendedores = []
    let op = Number(prompt(`Escolha a opção:\n1.Cadastrar vendedor\n2.Cadastrar venda\n3.Consultar as vendas do funcionário no mês\n4.Consultar total de vendas de um vendedor\n5.Mostrar o número do vendedor que mais vendeu no mês\n6.Mostrar o número do mês com mais vendas\n7.Finalzar programa`))
    let vetvendas = []
    
    while(op!=7){
        switch(op){
            case 1: cadastravendedor(vetvendedores)
                    break
            case 2: cadastravenda(vetvendas)
                    break
            case 3: 
                    let procura = Number(prompt(`Insira o código do vendedor`))
                    let prcorames = Number(prompt(`Insira o mês que deseja consultar`))
                    consultames(vetvendas, procura, prcorames)
                    break
            case 4: let procura1 = Number(prompt(`Insira o código do vendedor`))
                    let soma = 0 
                    for(let i =0;i<vetvendas.length;i++){
                        if(vetvendas[i].codigo==procura1){
                            soma=vetvendas[i].valor+soma
                        }
                    }
                    if(soma>0){
                        alert(`O vendedor com código ${procura1} fez ${soma} vendas.`)
                    }
                    else{
                        alert(`O vendedor não existe ou não fez nenhuma venda`)
                    }
                    break
            case 5: let procurames1 = Number(prompt(`Insira o número do mês que deseja consultar`))
                    let maior = 0
                    let maiorv = 0
                    for(let i=0;i<vetvendas.length;i++){
                        if(vetvendas[i].valor>maiorv && vetvendas[i].mes==procurames1){
                            maior=vetvendas[i].codigo
                            maiorv=vetvendas[i].valor
                        }
                    }
                    if(maior!=0)[
                        alert(`O vendedor com mais vendas no mês ${procurames1} é o com código ${maior}`)
                    ]
                    else{
                        alert(`Não foi realizado nenhuma venda no mês ${procurames1}`)
                    }
                    break
            case 6: let maiormes = 0
                    let maior1 = 0 
                    let aux = 0
                    for(let i=0;i<vetvendas.length;i++){
                        maior1=0
                        for(let j=0;j<vetvendas.length;j++){
                            if(vetvendas[i].mes == vetvendas[j].mes){
                                maior1=vetvendas[j].valor+maior1
                            }
                        }
                        if(maior1>aux){
                            aux=maior1
                            maiormes=vetvendas[i].mes
                        }
                    }
                    if(maiormes!=0){
                        alert(`O mês com mais vendas é o ${maiormes}`)
                    }
                    else{
                        alert(`Nenhuma venda realizada`)
                    }
                    break
            default: alert(`Opção Invalida!`)
                    break
        }
        op = Number(prompt(`Escolha a opção:\n1.Cadastrar vendedor\n2.Cadastrar venda\n3.Consultar as vendas do funcionário no mês\n4.Consultar total de vendas de um vendedor\n5.Mostrar o número do vendedor que mais vendeu no mês\n6.Mostrar o número do mês com mais vendas\n7.Finalzar programa`))
    }
}
let cadastravendedor = (vetvendedores) => {
    let objeto = {
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
}
let cadastravenda = (vetvendas) => {
    let objeto = {
        codigo: Number(prompt(`Informe o código do vendedor`)),
        mes: Number(prompt(`Informe o mês das vendas`)),
        valor: Number(prompt(`Informe o valor das vendas`))
    }
    let achou = false
    for(let i=0;i<vetvendas.length;i++){
        if(vetvendas[i].mes==objeto.mes && vetvendas[i].codigo==objeto.codigo){
            achou=true
        }
    }
    if(achou==false){
        vetvendas.push(objeto)
    }
    else{
        alert(`Não pode ser cadastrado`)
    }
}
let consultames = (vetvendas, procura, prcorames) => {
    let achou2 = false
    for(let i=0;i<vetvendas.length;i++){
        if(procura == vetvendas[i].codigo && prcorames == vetvendas[i].mes){
            alert(`O vendedor ${vetvendedores[i].nome} fez ${vetvendas[i].valor}-vendas no mês-${vetvendas[i].mes}`)
            achou2 = true
        }
    }
    if(achou2 == false){
        alert(`O vendedor não fez vendas neste mês`)
    }
}
let operacao2 = () =>{
    let pesquisa = []
    let somas = 0
    let somaf = 0
    let maior = 0
    let mulheres = 0
    let somaM = 0
    for(let i=0;i<3;i++){
        let achou = false
        let Object = {
            nome: prompt(`Insira seu nome:`),
            idade: Number(prompt(`Insira sua idade:`)),
            sexo: Number(prompt(`1.Homem\n2.Mulher\n3.Outro`)),
            salario: Number(prompt(`Insira seu salário:`)),
            filhos: Number(prompt(`Informe quantos filhos você tem:`))
        }
        for(let j=0;j<pesquisa.length;j++){
            if(Object.nome==pesquisa[j].nome && Object.idade==pesquisa[j].idade && Object.sexo==pesquisa[j].sexo){
                achou = true
            }
        }
        if(Object.sexo>3 || Object.sexo<=0){
            achou = true
        }
        if(!achou){
            pesquisa.push(Object)
            somas=somas+Object.salario
            somaf=somaf+Object.filhos
            if(Object.salario>maior){
                maior=Object.salario
            }
            if(Object.sexo==2){
                somaM++
            }
            if(Object.sexo==2 && Object.salario>1000){
                mulheres++
            }
        } 
        else{
            alert(`O participante ja esta registrado ou possui um dado invalido.`)
            i--
        } 
    }
    alert(`A média de salário da População é R$${(somas/pesquisa.length).toFixed(2)}`)
    alert(`A média de filhos da população é - ${(somaf/pesquisa.length).toFixed(2)}`)
    alert(`O maior salário é R$${(maior).toFixed(2)}`)
    if(somaM>0){
        alert(`O percentual de mulheres com salário acima dos R$1000,00 é - ${((mulheres*100)/somaM).toFixed(2)}%`)
    }
    else{
        alert(`Nehuma mulher registrada`)
    }
   

}