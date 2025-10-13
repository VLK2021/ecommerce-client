import { axiosService } from "./axios.service.jsx";
import { urls } from "../constants/index.js";


const productService = {
    getAllProducts: (params = {}) => {
        const queryParams = Object.fromEntries(
            Object.entries(params).filter(([_, v]) => v !== "" && v !== null && v !== undefined)
        );

        return axiosService
            .get(urls.product, { params: queryParams })
            .then((res) => res.data);
    },
};

export { productService };
