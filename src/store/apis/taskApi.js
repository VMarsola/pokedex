import axios from "axios"

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json; charset=utf-8"
    }
})

export const getTasks = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await api.get("/tasks")
            resolve(response.data.tasks)
        } catch (error) {
            console.log("Algo deu ruim na API!")
            reject(error.response)
        }
    })
}

export const addTask = async (name) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await api.post("/tasks", JSON.stringify({ name: name }))
            resolve(response)
        } catch (error) {
            console.log("Algo deu ruim na API!")
            reject(error.response)
        }
    })
}