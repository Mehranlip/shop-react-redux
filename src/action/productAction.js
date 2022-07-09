/* eslint-disable no-unused-vars */
import axios from "axios";


export const productListAction = () => async (dispatch) => {
    try {
        dispatch({ type: "PRODUCT_LIST-REQUEST" })

        const { data } = await axios.get("http://localhost:3000/products")

        dispatch({
            type: "PRODUCT_LIST_SUCCESS",
            payload: data,
        })
    } catch (error) {
        console.log(error);
    }
}


export const productDetailAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: "PRODUCT_DETAIL-REQUEST" })

        const { data } = await axios.get(`http://localhost:3000/products/${id}`)

        dispatch({
            type: "PRODUCT_DETAIL_SUCCESS",
            payload: data,
        })
    } catch (error) {
        console.log(error);
    }
}