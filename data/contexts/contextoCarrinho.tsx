'use client'
import { createContext } from "react"
import { useState } from "react"
import ItemCarrinho from "../model/itemCarrinho"
import Produto from "../model/produto"

interface contextoCarrinhoProps {
    itens: ItemCarrinho[]
    qtdeItens: number
    adicionar: (item: Produto) => void
}

const ContextoCarrinho = createContext<contextoCarrinhoProps>({} as any)

export function ProvedorCarrinho(props: any) {
    const [itens, setItens] = useState<ItemCarrinho[]>([])

    function adicionar(produto: Produto) {
        const indice = itens.findIndex((i) => i.produto.id === produto.id)/*acha o produto pelo indice */

        if (indice === -1) {
            setItens([...itens, { produto, quantidade: 1 }])
        } else {
            const novosItens = [...itens]
            novosItens[indice].quantidade++
            setItens(novosItens)
        }
    }
    
    return(
<ContextoCarrinho.Provider
value={{
    itens,
    adicionar,
    get qtdeItens(){
        return itens.reduce((total, item) => total + item.quantidade, 0)
    }
}}
>
{props.children}
</ContextoCarrinho.Provider>
    );

}

export default ContextoCarrinho

/**agora quando eu navegar entre as paginas, o valor dque tem no carrinho que vai se desfazer, pois foi criado o contexto aqui */

/*estudar esta pagina denovo*/