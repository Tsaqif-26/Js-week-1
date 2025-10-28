import { useCallback, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useProduct } from "../hooks/useProduct";
import ProductForm from "../components/ProductForm";


export default function Dashboard() {

    const {products, addProduct, editProduct, deleteProduct} = useProduct()
    const {user, logout} = useAuth()

    const [showForm, setShowForm] = useState(false)
    const [editData, setEditData] = useState<any>(null)

    const handleAdd = useCallback(() => {
        setEditData(null)
        setShowForm(true)
    }, [])

    const handleEdit = useCallback((products: any) => {
        setEditData(products)
        setShowForm(true)
    },[])

    const handleSubmit = useCallback((data: any) => {
        if(editData)
            editProduct(editData.id, data)
        else addProduct(data)
            setShowForm(false)
    },[editData,addProduct,editProduct])

    const handleDelete = useCallback((id: number) => {
        if(confirm("Yakin Mau menghapus Produk Ini??")) deleteProduct(id)
    },[deleteProduct])


    return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800"> Admin Dashboard </h1>

        <div className="flex items-center gap-4">
            
          <p className="text-gray-600">Hi, {user?.username}</p>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition cursor-pointer"
          >
            Logout
          </button>

        </div>

      </div>

      {!showForm ? (
        <>
          <div className="flex justify-end mb-4">

            <button
              onClick={handleAdd}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
            >
              Tambahkan Produk
            </button>

          </div>

          {products.length === 0 ? (
            <p className="text-center text-gray-500 mt-20"> Belum ada produk. </p>

          ) : (
            <div className="overflow-x-auto bg-white rounded-xl shadow p-4">

              <table className="min-w-full border border-gray-200">
                
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Image</th>
                    <th className="py-2 px-4 border-b text-left">Title</th>
                    <th className="py-2 px-4 border-b text-left">Price</th>
                    <th className="py-2 px-4 border-b text-left">Category</th>
                    <th className="py-2 px-4 border-b text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className="hover:bg-gray-50 transition-colors">
                      <td className="py-2 px-4 border-b">

                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-12 h-12 object-contain" />
                      </td>

                      <td className="py-2 px-4 border-b">{product.title}</td>
                      <td className="py-2 px-4 border-b">${product.price}</td>
                      <td className="py-2 px-4 border-b">
                        {product.category}
                      </td>

                      <td className="py-2 px-4 border-b text-center space-x-2">
                        <button
                          onClick={() => handleEdit(product)}
                          className="bg-yellow-400 text-white px-3 py-1 rounded-lg hover:bg-yellow-500 transition cursor-pointer"> Edit </button>

                        <button
                          onClick={() => handleDelete(product.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition cursor-pointer" > Hapus </button>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center">

          <ProductForm
            initial={editData}
            onSubmit={handleSubmit}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}

    </div>
  )
}