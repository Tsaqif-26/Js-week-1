import React, { useState } from "react";
import type { Product } from "../contexts/ProductContext";


interface Props{
    initial?: Partial<Product>
    onSubmit: (data: Omit<Product, 'id'> | Partial<Product>) => void
    onCancel?: () => void
}

export default function ProductForm({initial = {}, onSubmit, onCancel}: Props) {

    const [title, setTitle] = useState(initial.title ?? '')
    const [price, setPrice] = useState(String(initial.price) ?? '')
    const [category, setCategory] = useState(initial.category ?? '')
    const [image, setImage] = useState(initial.image ?? '')
    const [description, setDescription] = useState(initial.description ?? '')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const payload = {
            title,
            price: Number(price),
            category,
            image,
            description
        }
        onSubmit(payload)
    }

    return(

         <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow p-6 w-full max-w-md"
    >
      <h2 className="text-xl font-semibold mb-4">
        {initial.id ? "Edit Product" : "Add Product"}
      </h2>

      <div className="flex flex-col gap-3">
        <div>
          <label className="block text-sm font-medium mb-1">Nama Produk</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Harga</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Kategori</label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Gambar URL</label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Deskripsi</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div className="flex gap-2 mt-3">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            Simpan
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition cursor-pointer"
          >
            Batalkan
          </button>
        </div>
      </div>
    </form>
  )
}

