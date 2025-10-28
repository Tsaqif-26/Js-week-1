import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useProduct } from "../hooks/useProduct";

export default function Products() {
  const { products, loading, error } = useProduct()
  const [search, setSearch] = useState("")

  if (loading)
    return (
      <div className="flex justify-center items-center h-[80vh] text-gray-600 text-lg">
        Loading produck...
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-[80vh] text-red-500  text-lg">
        {error}
      </div>
    );

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  )

  return (

    <div className="page-content min-h-screen py-10 px-6 bg-gray-100 text-gray-900 transition-colors duration-300">
      
      <h1 className="text-3xl font-semibold text-center mb-8">
        Product Catalog
      </h1>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Cari produk..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300  rounded-lg shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white  
                     text-gray-800  placeholder-gray-400 "
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-gray-500 ">
          Tidak ada produk ditemukan.
        </p>

      ) : (
       
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
      )}
    </div>
  );
}
