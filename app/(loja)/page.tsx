'use client'
import CartaoProduto from "@/components/produto/cartaoProduto";
import Pagina from "@/components/template/pagina";
import produtos from "@/data/constantes/produtos";


export default function Home() {
  return (
    <Pagina>
      <div className="flex gap-5 justify-center flex-wrap">
        {produtos.map(produto => (
          <CartaoProduto key={produto.id} produto={produto}/>
        ))}
      </div>
    </Pagina>
  );
}
