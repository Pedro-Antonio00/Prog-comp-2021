let genredes = () => {
    let redevet = []
    for(let i=0;i<2;i++){
        let redes = {
            codigo: Number(prompt(`Informe o código da rede social`)),
            nome: prompt(`Digite o nome da rede social`),
            link: prompt(`Insira o link da rede social`)
        }
        redevet.push(redes)
    }
    let usuvet = []
    let i = 0
    while(i<2){
        let usuarios = {
            login: prompt(`Informe o login do usuario`),
            nome: prompt(`Informe o nome do usuario`),
            codigorede: Number(prompt(`Informe o código de rede social`)),
            qtdp: Number(prompt(`Informe a quantidade de posts do usuario`))
        }
        let achou = false
        let j = 0
        while(!achou && j<2){
            if(redevet[j].codigo==usuarios.codigorede){
                usuvet.push(usuarios)
                achou = true
                alert(`Usuario inserido com sucesso`)
            }
            j++
        }
        if(!achou){
            alert(`codigo invalido`)
        }
        i++
    }
    let codigo = Number(prompt(`Informe o codigo da rede social`))
    let conta = 0
    
    for(let i=0;i<5;i++){
        if(usuvet[i].codigorede == codigo){
            conta = conta + usuvet[i].qtdp
        }
    }
    if(conta==0){
        console.log(`Não houve postagem ou a rede social não existe`)
    }
    else{
        console.log(`A quantidade de posts na rede social ${codigo} foi ${conta}`)
    }
}