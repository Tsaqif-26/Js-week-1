import { Link } from "react-router-dom";
import type { Product } from "../contexts/ProductContext";


interface Props{
    product: Product
}

export default function ProductCard({product} : Props) {
    return(
        <div className="card bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col justify-between">

            <img src={product.image} alt={product.title} className="h-48 object-contain mb-4"/>

            <div>
                <h3 className="font-semibold text-gray-800 line-clamp-1">{product.title}</h3>

                <p className="text-gray-500 text-sm mb-2">{product.category}</p>
                <p className="font-bold text-blue-600 mb-4">${product.price}</p>
            </div>

            <Link to={`/products/${product.id}`} className="mt-auto text-center bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition">
                Detail
            </Link>
        </div>
    )
}