class BinaryTree {
    // inicializa a raiz como nula
    constructor() {
        this.root = null
        // A linha 4 assegura que a árvore iniciará sem referências
        // Isso porque não há elementos dentro dela
    }



    //exibe o menor valor da arvore
    min() {
        let current = this.root
        // Declara uma varíavel interna que recebe a raíz da árvore
        if (current == null)
            return null
        // Verifica se a variável é nula, sendo verdadeiro, o return cessa o restante da função
        while (current.left != null)
            current = current.left
        // Enquanto a variável, que recebeu a raíz !null, for diferente de null - 
        // A variável receberá o nó menor da esquerda.
        // Exemplo: 
        // Lista:
        // 10 4 1 7 16 --> RLD
        // current = 10
        //          While
        // current = current.letf = 4
        // current = current.left = 1
        // current = 1

        return current.content
        // Retorna o menor nó da esquerda após o resultado no While
    }




    //exibe o maior valor da arvore
    max() {
        let current = this.root
        // Cria uma variável interna que recebe a raíz
        if (current == null)
            return null
        // Se a raíz for nula, encerra o restante da função 
        while (current.right != null)
            current = current.right
        // Enquanto a variável que recebeu o nó da direita for diferente de nulo -
        // Current passará sempre pelos nós da direita
        return current.content
        // Após o while encerrar, ocorre o return para a função com o maior valor da árvore
    }




    //insere o elemento da arvores
    insert(element) {

        this.root = this.insertNode(this.root, element)
        // A função Insert necessita de dois parâmetros
        // 1º Referência do Nó
        // 2º O elemento a ser inserido na árvore
        // Para inserir, o Insert chama a function recursiva *InsertNode*
        // this.root é donde começará a inserção, pois ele é a raíz
        // element é o componente que será inserido na árvore
        // Por fim, haverá o retorno da referência do Nó, pois a raíz deixa de ser nula e passa a conter algum valor
    }

    insertNode(rootNode, element) {
        if (rootNode == null)
            return new Node(element)
        if (element > rootNode.content)
            rootNode.right = this.insertNode(rootNode.right, element)
        else
            rootNode.left = this.insertNode(rootNode.left, element)
        return rootNode
        // Esta função é a recursiva de *Insert*
        // Nela iremos capturar os dois parâmetros necessários na função *Insert*
        // o 1º if Realiza uma condição para verificar se o Nó(elemento) está nulo, se verdadeiro, o Return não executa o restante do bloco de código da função
        // o 2º if Realiza um teste para verificar se o elemento é maior que a raíz, se sim, será deslocado a direita da raíz(rootnode)
        // o Else  implica que o elemento é menor que a raíz de referência, logo será deslocado a esquerda da raíz(rootnode)
    }




    //executa a função callback para cada nó, em ordem
    inOrderTraverse(callback) {
        this.inOrderVisitor(this.root, callback)
        // Esta função realiza a ordem da Àrvore do tipo ERD
        // Ela tem um parâmetro chamado callback. Indica que há substituição do verdadeiro nome no parâmetro tipo função.
        // Para isso, cria uma função recursiva chamada *inOrderVisitor*
    }

    inOrderVisitor(node, callback) {

        if (node == null)
            return
        this.inOrderVisitor(node.left, callback)
        // Utilização a recursividade passando o nó esquerdo ao callback que é a função de incluir
        callback(node.content)
        // Quando acaba a busca por conteúdos a esquerda, o callback exibe o conteúdo do nó raíz (root.node)
        this.inOrderVisitor(node.right, callback)
        // Realiza o mesmo procedimento de exibição dos elementos da esquerda,porém focado no lado DeviceOrientationEvent, obviamente

        // Como dito, Esta função é recursiva da *inOrderTraverse*
        // O If verifica se o nó é nulo, se verdadeiro, o return encerra o restante do código da função.

    }


    
    //executa a função callback para cada nó, em pré-ordem
    preOrderTraverse(callback) {
        this.preOrderVisitor(this.root, callback)
        // Criou uma função recursiva *this.preOrderVisitor para função this.preOrderTraverse
        // Novamente passou dois parâmetros na recursiva (nó ráiz, callback - faz menção à função incluir)
    }

    preOrderVisitor(node, callback) {
        if (node == null)
        // Verifica se o nó é nulo, se setTimeout, o return interrompe o restante da função
            return
        callback(node.content)
        // Exibi o nó raíz antes dos demais: esquerda e direita
        this.preOrderVisitor(node.left, callback)
        // Aqui exibe os nós da esquerda
        this.preOrderVisitor(node.right, callback)
        // Aqui exibe os nós da direita

        // A ordenação, tratada nesta fução, é do tipo RLD
    }



    //executa a função callback para cada nó, em pós-ordem
    postOrderTraverse(callback) {
        this.postOrderVisitor(this.root, callback)
        // Criou uma função recursiva chamada this.postOrderVisitor para this.inOrderTraverse
        // Um detalhe, o this é utilizado porque a função está dentro da classe BinaryTree e pertence ao próprio objeto
    }

    postOrderVisitor(node, callback) {
        if (node == null)
            return
        // O mesmo processo de verificação utilizado nas últimas duas funções
        this.postOrderVisitor(node.left, callback)
        // O primeiro nó apresentado é o esquerdo.
        this.postOrderVisitor(node.right, callback)
        // O segundo nó apresentado é o direito
        callback(node.content)
        // Por fim, o nó por último exibido é o nó raíz.
    }


    
    //retorna true se o valor já existe na arvore
    //     Busca na árvore binária
    //    1. É nulo? o elemento não existe
    //    2. É igual ao conteúdo? achou
    //    3. É maior que o conteúdo?
    //       3.1 busca de direita
    //       3.2 busca na esquerda

    search(value) {
    // Função de busca dum elemento
        return this.searchVisitor(this.root, value)
    // Cria um função recursiva chamada *searchVisitor*
    // Esta função possui dois parâmetros: Raíz e valor
    }

    searchVisitor(node, element) {
            if (node == null)
            return false
            // Verifica se o nó é igual a nulo
            // Se sim, return finaliza as operações da função
        if (node.content == element)
            return true;
        // Se o nó é igual ao elemento, quer dizer que aquele elemento foi encontrado
        if (element > node.content)
            return this.searchVisitor(node.right, element)
        // Senão for igual, ele fará um busca nos nós da direita do nó raíz.leftSe não estiver no lado DeviceOrientationEvent, passará para o Else
        else
            return this.searchVisitor(node.left, element)
            // Faz a busca nos nós da esquerda do nó raíz 

    }




    //remove um elemento existente na arvore o retorna
    remove(value) {
        this.root = this.removeVisitor(this.root, value)
        // A raíz receberá a função recursiva de remove
        // Os parâmetros são: raíz e valor
    }

    removeVisitor(node, value) {
        if (node.content == value) {
        // Se o nó é igual ao valor passado, haverá outras condições
            // Agora vamos descobrir se este nó possui galhos
            if (node.left == node.right) {
            // Se o nó esquerdo é igual ao direito, significa que não há galhos
                //nao tem filhos - Grau 0
                return null
            // Retorna null porque o único nó existente é a própria raíz
            } else if (node.right == null) {
            // Verifica se há galhos na direita a partir da raíz
                //não tem filhos na direita, e tem nó na esqueda - Grau 1
                return node.left
            // Senão, então mostra os nós da esquerda da raíz
            // Esta sub'árvore' será reposicionada. 
            } else if (node.left == null) {
            // Mesma ação do Senão se anterior.
                //não tem filhos da esquerda, e tem nó da direita - Grau 1
                return node.right
            } else {
                // Todos os testes foram feitos para identificar se não haveria galhos -
                // Se haveria somente para o lado direito
                // Se haveria somente para o lado esquerdo

                // Passado todas essas condições, então implica dizer que há galhos para os dois lados
                
                // tem os dois ramos - Grau 2
                const newRoot = node.right
                // Para reposicionar os galhos, foi criado a variável newroot (novo raíz)
                // Percebe-se que oa nova raíz será o galho MutationRecord, por isso o nó da direita
                let current = node.right;
                // Esta variável recebe também o mesmo nó da direita
                while (current.left != null)
                    current = current.left
                current.left = node.left
                // Agora verifica a quantidade de nós a esquerda para adicionar como galhos ao nó raíz, que no caso foi o maior da direita
                return newRoot;
                // Por fim, a nova raíz é retornada
            }
        } else if (value < node.content) {
            node.left = this.removeVisitor(node.left, value)
            // Para facilitar a busca do elemento na árvore, verifica se ele menor que a raíz
            // Sendo, significa que está a esquerda da árvore
        } else {
            node.right = this.removeVisitor(node.right, value)
            // Se o valor passado é maior que o nó, significa que ele está a direita da raíz.
        }
        return node;
    }



    //exibe a altura da arvore
    height() {
        return this.heightVisitor(this.root)
    }

    heightVisitor(node) {
    // Função recursiva de *eight*
        if (!node)
            return -1
        // Se o nó é null, então retorna -1, pois não há altura
        let leftHeight = this.heightVisitor(node.left),
            rightHeight = this.heightVisitor(node.right)
        // Percorre os nós da esquerda e da direita para identificar o mais profundo
        return Math.max(leftHeight, rightHeight) + 1
        // após isSecureContext, recebe +1, porque o topo da árvore é grau 0.
        // Exemplo:
        // Lista:
        // 15 7 2 9 13 20 16 --> RLD
        // Sabemos que o 13 é maior galho. Para chegar até a raiz é preciso:
        // Passar pelo 9, 7 e chega na raíz. Ou seja, 3 passos.
    }




    // informa quantos nós existem na arvore
    size() {
        return this.sizeVisitor(this.root)
        // Esta função verifica a quantidade de elementos dentro da árvore
    }

    sizeVisitor(node) {
    // Função recursiva de *Size*
        if (!node)
            return 0
        // Verifica se o nó existe
        // Caso contrário, não há tamanho.
        return this.sizeVisitor(node.left) + this.sizeVisitor(node.right) + 1
        // Retorna a quantidade de nós da esquerda e direita + 1, que seria o valor da raíz.
    
    }
}
