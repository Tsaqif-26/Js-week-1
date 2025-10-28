import { createContext, useState, type ReactNode,  } from "react"

export interface User{
    username: string
    role: "admin" | "user"
}

interface AuthContextType {
    user: User | null
    login: (username: string, password: string) => boolean
    logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    login: () => false,
    logout: () => {}
})

export const AuthProvider = ({children} : {children: ReactNode}) => {
    const [user, setUser] = useState<User | null>(null)

    const login = (username: string, password: string) => {
        if(username === "admin" && password === "adminGG123") {
            setUser({username, role: "admin"})
            return true
        }

        if(username.trim() && password.trim()) {
            setUser({username, role: "user"})
            return true
        }
            return false
    }

    const logout = () => setUser(null)

    return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
    )
}