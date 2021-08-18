let genredes = () => {
    let redevet = []
    let posts = []
    for(let i=0;i<2;i++){
        let redes = {
            codigo: Number(prompt(`Informe o código da rede social`)),
            nome: prompt(`Digite o nome da rede social`),
            link: prompt(`Insira o link da rede social`)
        }
        posts[i] = 0
        redevet.push(redes)
    }
    let usuvet = []
    let ptotal
    for(let i=0;i<2;i++){
        let usuarios = {
            login: prompt(`Informe o login do usuario`),
            nome: prompt(`Informe o nome do usuario`),
            codr: Number(prompt(`Informe o código de rede social`)),
            qtdp: Number(prompt(`Informe a quantidade de posts do usuario`))
        }
        let v = false
        let cont = 0
        while(v!=true && cont<2){
            if(redevet[cont].codigo==usuarios.codr){
                usuvet.push(usuarios)
                posts[cont] = usuarios.qtdp + posts[cont]
                ptotal = ptotal + usuarios.qtdp
                v = true
                alert(`Usuario inserido com sucesso`)
            }
            cont++
        }
        if(v==false){
            alert(`codigo invalido`)
            i--
        }
        
    }
    let loginu = prompt(`Informe o login do usuario`)
    alert(``)
}