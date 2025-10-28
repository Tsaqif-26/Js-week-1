import { useContext, useMemo } from "react"
import { ProductContext } from "../contexts/ProductContext"


export const useProduct = () => {

    const context = useContext(ProductContext)

    if(!context) {
        throw new Error("useProduct harus dipakai Bareng ProductProvider");
    }
    const totalProduct = useMemo(() => context.products.length, [context.products])

    return {...context, totalProduct}
}