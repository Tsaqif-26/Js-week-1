import { useProduct } from "../hooks/useProduct";



export default function Cart() {
    const {cart, removeCart} = useProduct()

    if(cart.length === 0) {
        return(
            <div className="flex justify-center items-center h-[80vh] text-gray-600 text-lg">
                Keranjang masih kosong
            </div>
        )
    }

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0 )

    return(
        <div className="min-h-screen bg-gray-50 py-10 px-6">

            <h1 className="text-3xl font-semibold text-center mb-8 text-gray-800"> Keranjang </h1>

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6 space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-3" >

            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain rounded-md" />

              <div>
                <h2 className="text-lg font-medium text-gray-800">{item.title}</h2>
                <p className="text-gray-500">${item.price.toFixed(2)}</p>
              </div>

            </div>

            <button
              onClick={() => removeCart(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition cursor-pointer">Hapus</button>
          </div>
        ))}

        <div className="flex justify-between items-center pt-4 border-t">

          <span className="text-xl font-semibold text-gray-700"> Total: </span>
          <span className="text-xl font-bold text-blue-600"> ${totalPrice.toFixed(2)} </span>

        </div>

        <button className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition cursor-pointer">
          Checkout Sekarang
        </button>
      </div>
      
    </div>
  )
}