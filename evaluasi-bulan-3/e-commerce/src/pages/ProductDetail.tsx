import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import { useAuth } from "../hooks/useAuth";


export default function ProductDetail() {

    const {id} = useParams()
    const {products, loading, error, addCart} = useProduct()
    const {user} = useAuth()

    if (loading)
    return (
      <div className="flex justify-center items-center h-[80vh] text-gray-600 text-lg">
        Memuat detail produk...
      </div>
    )

  if (error)
    return (
      <div className="flex justify-center items-center h-[80vh] text-red-500 text-lg">
        {error}
      </div>
    )

    const product = products.find((p) => p.id === Number(id))

    if(!product) 
        return (
        <div className="flex justify-center items-center h-[80vh] text-gray-600 text-lg">
            Product Tidak Ditemukan.
        </div>
        )

        return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 flex flex-col md:flex-row gap-10 justify-center">

      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-72 h-72 object-contain rounded-lg bg-white shadow"
        />
      </div>

      <div className="max-w-xl bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800"> {product.title} </h2>

        <p className="text-gray-500 mb-2 italic"> {product.category} </p>
        <p className="text-gray-700 mb-4"> {product.description} </p>
        <p className="text-2xl font-bold text-blue-600 mb-6"> ${product.price} </p>

        {user?.username === "admin" ? (
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition cursor-pointer"> Edit Produk </button>
                ) : (
            <button
            onClick={() => addCart(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"> Tambahkan ke Keranjang </button>
        )}

      </div>

    </div>
  )
}