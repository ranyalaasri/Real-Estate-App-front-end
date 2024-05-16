import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:3500',
    headers:{
        'Content-Type': 'application/json'
    }
})

export function fetchListings() {
    return api.get('/listings/All')
}
export function fetchListingsById(id) {
    
    return api.get(`/listings/${id}`)
}





export default api