function principal(){
    let op
    let idade
    let peso, altura
    let vetor = []
    do{
        op = Number(prompt(`Digite\n1.F1\n2.F2\n3.F3\n4.F4\n5.Sair`))
        switch(op){
            case 1: idade=Number(prompt(`Informe sua idade`))
                    idade = f1(idade)
                    break
            case 2: peso =Number(prompt(`Informe seu peso`))
                    f2(idade,peso)
                    break
            case 3: peso =Number(prompt(`Informe seu peso`))
                    idade=Number(prompt(`Informe sua idade`))
                    altura=Number(prompt(`Informe sua altura`))
                    f3(idade, peso, altura)
                    break
            case 4: vetor.push(1)
                    vetor.push(2)
                    vetor.push(3)
                    f4(vetor)
                    // passar um vetor como parâmetro é apssar uma refência do vetor
                    alert(vetor)
                    break
            case 5: alert(`Programa finalizado!`)
                    break
            default: alert(`Opção invalida!`)
                    break
        }
    }while(op!=5)
}
function f1(idade, peso, altura){
    alert(`chamada de F1, idade ${idade}.`)
    idade = idade + 10
    return idade
}
function f2(idade, peso, altura){
    alert(`chamada F2, idade ${idade}, peso ${peso}.`)
}
function f3(idade, peso, altura){
    alert(`chamda de F3, idade ${idade}, peso ${peso}, altura ${altura}.`)
}
function f4(vetor){
    vetor[0] = vetor[0] + 10
    vetor[1] = vetor[1] + 10
    vetor[2] = vetor[2] + 10
}