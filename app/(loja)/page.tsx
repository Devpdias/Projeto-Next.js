'use client'
import Pagina from "@/components/template/pagina";
import useCarrinho from "@/data/hooks/useCarrinho";



export default function Home() {
  const {numero, decrementar, incrementar} = useCarrinho()
  return (
   <Pagina><div>Inicio: {numero}</div>
   <button onClick={incrementar}>Incrementar</button>
   <button onClick={decrementar}>Decrementar</button>
   </Pagina>
  );
}
