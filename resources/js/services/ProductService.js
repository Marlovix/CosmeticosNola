import axios from "axios";

export default {
    getProducts: async function (page, nProducts, categoryId) {
        try {
            let category = categoryId != 0 ? "&category=" + categoryId : "";
            let url =
                "products?page=" + page + "&per_page=" + nProducts + category;
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};
