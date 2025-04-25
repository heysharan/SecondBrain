import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"

export const useContent = () => {
    const [contents, setContents] = useState([])

    const refresh = async () => {
        const response = await axios.get(`${BACKEND_URL}/api/v1/notes/content`, {
            headers: {
                token: localStorage.getItem('token')
            }
        })

        setContents(response.data.content)
    }

    useEffect(() => {
        refresh()
        const interval = setInterval(() => {
            refresh()
        }, 1000)
        return (
            clearInterval(interval)
        )
    }, [])

    return { contents, refresh }
}