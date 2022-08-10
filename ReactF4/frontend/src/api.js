import axios from "./plugins/axios"


const fetchPosts = async (id) => {
    const result = await axios.get(`recipes/post_category/${id}/`).then(response => {
        return response
    })
    return result
}

const fetchCategories = async () => {
    const result = await axios.get(`recipes/all_categories/`).then(response => {
        return response
    })
    return result
}

const fetchAllPosts = async () => {
    const result = await axios.get(`recipes/all_posts/`).then(response => {
        return response
    })
    return result
}

const fetchPostDetail = async (id) => {
    const result = await axios.get(`recipes/post/${id}/`).then(response => {
        return response
    })
    return result
}

export default {fetchPosts, fetchCategories, fetchAllPosts, fetchPostDetail}