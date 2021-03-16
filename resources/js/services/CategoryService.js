import axios from 'axios';

export default {
    getCategories: async function() {
        try {
            let url = "categories";
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}