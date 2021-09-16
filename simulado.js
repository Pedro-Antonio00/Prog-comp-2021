let sistemaimobiliaria = () =>{
    let opcao
    let vet = []
    do
    {
        opcao = Number(prompt(`Informe\n1.cadastra\n2.consulta A\n3.consulta B\n4.consulta C\n5. sair`))
        switch(opcao){
            case 1: cadastro(vet)
                    break
            case 2: let tipo = prompt(`Qual tipo do imóvel A ou C`).toUpperCase()
                    consulta(vet, tipo)
                    break
            case 3: consultaT(vet)
                    break
            case 4: consultaG(vet)
                    break
            case 5: alert(`Programa Finalizada`)
                    break
            default: alert(`Opção Invalida!`)
        }
    }while(opcao!=5)
}
let cadastro = (vet) =>{
    let objeto = {
        codigo: Number(prompt(`Informe codigo do imóvel`)),
        tamanho: Number(prompt(`Informe o tamanho do imóvel`)),
        tipo: prompt(`Informe\nC.Casa\nA.Apartamento`).toUpperCase(),
        valor: Number(prompt(`Informe o valor do imóvel`)),
    }
    let achou = false
    for(let i=0;i<vet.length;i++){
        if(vet[i].codigo == objeto.codigo){
            achou = true
            alert(`código já existente`)
        }
    }
    if(!achou){
        vet.push(objeto)
        alert(`Imóvel cadastrado com sucesso`)
    }

}
let consulta = (vet, tipo) =>{
    for(let i=0;i<vet.length;i++){
        if(vet[i].tipo == tipo){
            console.log(vet[i])
        }
    }
}
let consultaT = (vet) => {
    let soma = 0
    for(let i=0;i<vet.length;i++){
            soma = soma+ vet[i].valor
    }
    alert(`O valor total dos imóveis é ${soma}`)
}
let consultaG = (vet) => {
    for(let i=0;i<vet.length;i++){
        if(vet[i].tamanho>100){
            console.log(vet[i])
        }
    }
}