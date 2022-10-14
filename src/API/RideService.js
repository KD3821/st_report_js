import axios from "axios";

export default class RideService {
    static async getAll(page=1) {
        const response = await axios.get('http://127.0.0.1:8000/rides/', {
            params: {
                page: page
            }
        })
        return response
    }
}