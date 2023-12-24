import axios from "axios";

export async function getAll() {
   try {
       const blogs = await axios.get("http://localhost:8080/blogs");
       return blogs.data;
   }catch (e){
       return false;
   }
}
export const createBlog = async (blog) => {
    try {
        await axios.post("http://localhost:8080/blogs",blog);
        return true;
    } catch (e) {
        return false;
    }
}
export const deleteBlogById = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/blogs/${id}`);
        return true;
    }catch (e){
        return false;
    }
}