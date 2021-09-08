function principal(){
    let op
    let idade
    let peso, altura
    do{
        op = Number(prompt(`Digite\n1.F1\n2.F2\n3.F3\n4.Sair`))
        switch(op){
            case 1: idade=Number(prompt(`Informe sua idade`))
                    peso =Number(prompt(`Informe seu peso`))
                    altura=Number(prompt(`Informe sua altura`))
                    f1(idade, peso, altura)
                    break
            case 2: idade=Number(prompt(`Informe sua idade`))
                    peso =Number(prompt(`Informe seu peso`))
                    altura=Number(prompt(`Informe sua altura`))
                    f2(idade,peso, altura)
                    break
            case 3: peso =Number(prompt(`Informe seu peso`))
                    idade=Number(prompt(`Informe sua idade`))
                    altura=Number(prompt(`Informe sua altura`))
                    f3(idade, peso, altura)
                    break
            case 4: alert(`Programa finalizado!`)
                    break
            default: alert(`Opção invalida!`)
                    break
        }
    }while(op!=4)
}
function f1(idade, peso, altura){
    alert(`chamada de F1, idade ${idade}, peso ${peso}, altura ${altura}.`)
}
function f2(idade, peso, altura){
    alert(`chamada F2, idade ${idade}, peso ${peso}, altura ${altura}.`)
}
function f3(idade, peso, altura){
    alert(`chamda de F3, idade ${idade}, peso ${peso}, altura ${altura}.`)
}