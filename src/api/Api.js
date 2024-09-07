import axios from "axios";
// creating an instance of axios
const Api=axios.create({
    baseURL: "http://localhost:5500",
    withCredentials:true,
    headers:{
        "Access-Control-Allow-Credentials": "true",
    }

});

const config = {
    headers : {
        'authorization' : `Bearer ${localStorage.getItem('token')}`
    }
}
 

//creating test api
// export const testApi= ()=> Api.get('/test')
export const testnewApi= ()=> Api.get('/print')
//creating register api
export const registerUserApi= (data)=>Api.post('/api/user/create',data)
export const loginUserApi= (data)=>Api.post('/api/user/login',data)
export const homepageUserApi= (data)=>Api.post('/api/user/homepage',data)
export const updateUserApi= (id,data)=>Api.put(`/api/user/update-profile/${id}`,data,config)
export const logoutUserApi= ()=>Api.get('/api/user/logout')
export const deleteUserApi = (id) => Api.delete(`api/user/delete_user/${id}`,config)
export const getAllUsersApi= ()=>Api.get(`/api/user/get_all_users`,config)
export const profileUserApi= (id)=>Api.get(`/api/user/profile/${id}`,config)
export const productApi= ()=>Api.get('/api/products/get_all_products')
export const singleProductApi= (id)=>Api.get(`/api/products/get_single_product/${id}`)
export const deleteProductApi= (id)=>Api.delete(`/api/products/delete_product/${id}`,config)
export const updateProductApi= (id,data)=>Api.put(`/api/products/update_product/${id}`,data, config)
export const createProductApi= (data)=>Api.post('/api/products/create',data)
export const searchProductApi= (data)=>Api.post('/api/products/search',data)
export const categoryApi= ()=>Api.get('/api/categories/get_all_categories')
export const createCategoryApi= (data)=>Api.post('/api/categories/create',data)
export const deleteCategoryApi= (id)=>Api.delete(`/api/categories/delete_category/${id}`,config)
export const updateCategoryApi= (id,data)=>Api.put(`/api/categories/update_category/${id}`,data,config)
export const singleCategoryApi= (id)=>Api.get(`/api/categories/get_single_category/${id}`)
export const addReviewApi = (data) => Api.post('/api/reviews/create', data);
export const fetchReviewsApi = (productId) => Api.get(`/api/reviews/${productId}`);
export const cartApi= (id)=>Api.get(`/api/carts/${id}`)
export const createCartApi= (data)=>Api.post('/api/carts/create',data)
export const deleteCartApi= (id)=>Api.delete(`/api/carts/delete_cart/${id}`,config)
export const updateCartApi= (id,data)=>Api.put(`/api/carts/update_cart/${id}`,data,config)
export const singleCartApi= (id)=>Api.get(`/api/carts/get_single_cart/${id}`)
export const orderApi= ()=>Api.get('/api/orders')
export const createOrderApi= (data)=>Api.post('/api/orders/create',data)
export const deleteOrderApi= (id)=>Api.delete(`/api/orders/${id}`,config)
export const updateOrderApi= (id,data)=>Api.put(`/api/orders/update_order/${id}`,data,config)
export const singleOrderApi= (id)=>Api.get(`/api/orders/${id}`)
export const singleOrderApiDetails= (id)=>Api.get(`/api/orders/get_single_order/${id}`)
export const userApi= ()=>Api.get('/api/user/get_all_users')
export const fetchProductDetails = (data) => Api.post('/api/products/bulk', data);
export const updateOrderPaymentStatus = (id, data) => Api.put(`/api/orders/update_payment_status/${id}`, data, config);







