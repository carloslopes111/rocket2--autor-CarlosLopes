

const start = () => {
    while(true){
        let opcao = 'sair'
        switch(opcao){
            case 'cadastrar':
                console.log('Vamos cadastrar')
                break
            case 'listar':
                console.log('vamos listar')
                break
            case 'sair':
                console.log("Saiu")
                return
        }
    }
};

start();