import { createContext, useEffect, useState, type ReactNode } from "react"

export interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
}

interface ProductContextType{
    products: Product[]
    cart: Product[]
    addCart: (product: Product) => void
    removeCart: (id: number) => void
    addProduct: (data: Omit<Product, 'id'>) => void
    editProduct: (id: number, data: Partial<Product>) => void
    deleteProduct: (id: number) => void
    loading: boolean
    error: string | null
}

export const ProductContext = createContext<ProductContextType> ({
    products:[],
    cart: [],
    addCart: () => {},
    removeCart: () => {},
    addProduct: () => {},
    editProduct: () => {},
    deleteProduct: () => {},
    loading: false,
    error: null,
})

export const ProductProvider = ({children} : {children: ReactNode}) => {
    const [products, setProducts] = useState<Product[]>([])
    const [cart, setCart] = useState<Product[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    
    useEffect(() => {
        const fetchProducts = async() => {
            try {
                setLoading(true)
                const res = await fetch("https://fakestoreapi.com/products")
                const data = await res.json()
                setProducts(data)
            } catch (err: any) {
                setError(err.message)
            }finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])

    const addProduct = (data: Omit<Product, 'id'>) => {
        const newProduct = {...data, id: Date.now()}
        setProducts((prev) => [...prev, newProduct])
    }

    const editProduct = (id: number, data: Partial<Product>) => {
        setProducts((prev) => prev.map((p) => (p.id === id ? {...p, ...data} : p)))
    }

    const deleteProduct = (id: number) => {
        setProducts((prev) => prev.filter((p) => p.id !== id))
    }

    const addCart = (product: Product) => {
        setCart((prev) => [...prev, product])
    }

    const removeCart = (id: number) => {
        setCart((prev) => prev.filter((p) => p.id !== id))
    }

    return (
    <ProductContext.Provider
      value={{products, cart, addCart, removeCart, addProduct, editProduct, deleteProduct, loading, error}}
    >
      {children}
    </ProductContext.Provider>
  )
} 