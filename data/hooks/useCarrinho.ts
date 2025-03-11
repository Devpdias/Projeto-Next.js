import { useContext } from "react"
import ContextoCarrinho from "@/data/contexts/contextoCarrinho"

const useCarrinho = () => useContext(ContextoCarrinho)
export default useCarrinho