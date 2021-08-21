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
}