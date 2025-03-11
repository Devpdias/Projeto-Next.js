'use client'
import { createContext } from "react"
import { useState } from "react"

interface contextoCarrinhoProps{     /**criada para mostrar quais sao os atributos disponiveis quando for utilizada na page de carrinho ou em qualquer outra
                                     antes dela ser criada: >>>const ContextoCarrinho = createContext<any>(null)<<<*/
    numero: number
    incrementar?: () => void
    decrementar?: () => void
}

const ContextoCarrinho = createContext<contextoCarrinhoProps>({} as any)

export function ProvedorCarrinho(props: any){
    const[numero, setNumero] = useState(1007)
return <ContextoCarrinho.Provider value={{
    numero,
    incrementar: () => setNumero(numero + 1),
    decrementar: () => setNumero(numero - 1),            
}}>{props.children}
</ContextoCarrinho.Provider>
}

export default ContextoCarrinho

/**agora quando eu navegar entre as paginas, o valor dque tem no carrinho que vai se desfazer, pois foi criado o contexto aqui */