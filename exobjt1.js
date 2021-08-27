let genredes = () => {
    let vetredes = []
    for(let i=0;i<5;i++){
        let objeto = {
            codigo: Number(prompt(`Informe o código da rede social`)),
            nome: prompt(`Informe o nome da rede social`),
            link: prompt(`Informe o link da rede social`)
        }
        vetredes.push(objeto)
    }
    let vetusuarios = []
    let i = 0
    while(i<5){
        let objeto = {
            login: prompt(`Informe o login do usuário`),
            nome: prompt(`Informe o nome do usuário`),
            codredesocial: Number(prompt(`Informe o código da rede social`)),
            qtposts: Number(prompt(`Informe a quantidade de posts`))
        }
        let achou = false
        let j = 0
        while(!achou && j<5){
            if(vetredes[j].codigo == objeto.codredesocial){
                vetusuarios.push(objeto)
                achou = true
                alert(`Usuário inserido com sucesso`)
            }
            j++
        }
        if(!achou){
            alert(`Usuário não inserido, rede social não encontrada`)
        }
        i++
    }
    let codigo = Number(prompt(`Informe o código da rede social`))
    let conta = 0
    for(let i=0;i<5;i++){
        if(vetusuarios[i].codredesocial == codigo){
            conta = conta + vetusuarios[i].qtposts
        }
    }
    if(conta==0){
        console.log(`não houve postagem ou a rede social não existe`)
    }
    else{
        console.log(`A quantidade de posts na rede social ${codigo} foi ${conta}`)
    }
    for(let i=0;i<5;i++){
        let conta = 0
        for(let j=0;j<5;j++){
            if(vetredes[i].codigo == vetusuarios[j].codredesocial){
                conta = conta + vetusuarios[i].qtposts
            }
        }
        console.log(`A quantidade de posts da rede social ${vetredes[i].codigo} é ${conta}`) 
    }

    let login = prompt(`Informe o login do usuário desejado`)

    let somaposts = 0
    let achou = false
    for(let i=0;i<5;i++){
        if(login == vetusuarios[i].login){
            somaposts=somaposts+vetusuarios[i].qtposts
            achou=true
        }
    }
    if(achou){
        alert(`O usuário com login ${login} realizou ${somaposts}`)
    }
    else{
        alert(`Usuário não encontrado`)
    }

    let vetuserposts=[]
    for(let i=0;i<5;i++){
        let achou = false
        for(let j=0;j<vetuserposts.length;j++){
            if(vetusuarios[i].login == vetuserposts[j].login){
                vetuserposts[j].qtde = vetuserposts[j].qtde+vetusuarios.qtposts
                achou = true
            }
        }
        if(!achou){
            vetuserposts.push({
                login: vetusuarios[i].login,
                qtde: vetusuarios[i].qtposts
            })
        }
    }
    console.log(vetuserposts)
}
