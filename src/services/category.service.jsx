import {axiosService} from "./axios.service.jsx";
import {urls} from "../constants/index.js";


const categoryService = {
    getAllCategory: () => axiosService.get(urls.category)
        .then(value => value.data),
};

export {
    categoryService
}