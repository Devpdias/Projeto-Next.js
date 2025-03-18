import ContextoCarrinho from "@/data/contexts/contextoCarrinho"
import useCarrinho from "@/data/hooks/useCarrinho"
import Produto from "@/data/model/produto"
import Image from 'next/image'

export interface CartaoProdutoprops {
    produto: Produto
}

export default function CartaoProduto(props: CartaoProdutoprops) {
    const{adicionar} = useCarrinho()
    const { id, nome, preco, descricao, imagem,} = props.produto
    return (
        <div className="flex flex-col w-72 bg-zinc-900">
            <div className="relative w-72 h-52">
                <Image src={imagem} alt={nome} fill className="object-cover" />
            </div>
            <div className="flex-1 flex flex-col gap-4 p-5">
                <h2 className="text-lg font-semibold">{nome}</h2>
                <p className="flex-1 text-sm text-zinc-400">{descricao}</p>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold mt-2">{preco.toFixed(2)}</span>
                    <button onClick={() => adicionar(props.produto)} className="border rounded-full px-5 py-1 text-sm">Adicionar</button>
                </div>
            </div>
        </div>
    )
}