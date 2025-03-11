'use client'
import { ProvedorCarrinho } from "@/data/contexts/contextoCarrinho";

export default function Layout(props: any){
return <ProvedorCarrinho>
    {props.children}
</ProvedorCarrinho>
}