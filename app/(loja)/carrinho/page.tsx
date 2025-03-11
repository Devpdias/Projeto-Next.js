'use client'
import Pagina from "@/components/template/pagina"   
import useCarrinho from "@/data/hooks/useCarrinho"


export default function PaginaCarrinnho(){  
    const {numero} = useCarrinho()

    return(
        <Pagina>
            carrinho: {numero}
        </Pagina>
    )
}