import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";


export default function Login() {

    const {login} = useAuth()
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const success = login(username, password)
        if(success) {
            navigate('/dashboard')
        } else {
            setError("Username atau Password ada yang Salah")
        }
    }


    return (
       <div className="page-content min-h-screen flex items-center justify-center">

            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6"> Login </h2>

        {error && (
          <div className="bg-red-100 text-red-600 p-2 rounded-md mb-4 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Username
            </label>
            
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Masukkan username (admin)"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password (adminGG123)"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg font-semibold hover:bg-indigo-600 transition duration-200 cursor-pointer" 
            > Masuk </button>
        </form>

      </div>

    </div>
  )
}