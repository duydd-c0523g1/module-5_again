import axios from "axios";
export const getAllCategory= async ()=>{
    try{
        return await axios.get("http://localhost:8080/category")
    }catch (e){
        return [];
    }
}
export const getAllProduct= async (nameSearch,categorySearch)=>{
    try{
        return await axios.get(`http://localhost:8080/products?name_like=${nameSearch}&category.name_like=${categorySearch}`)
    }catch (e){
        return [];
    }
}

export const createProduct = async (product)=>{
    try {
        return await axios.post("http://localhost:8080/products",product)
    }catch (e){
        console.log("Loi")
    }
}

export const updateProduct = async (product)=>{
    try {
        return await axios.patch("http://localhost:8080/products/"+product.id,product)
    }catch (e){
        console.log("Loi")
    }
}
export const deleteProduct = async (id)=>{
    try {
        return await axios.delete("http://localhost:8080/products/"+id)
    }catch (e){
        console.log("Loi")
    }
}

export const getProductById = async (id)=>{
    try {
        return await axios.get("http://localhost:8080/products/"+id)
    }catch (e){
        console.log("Loi")
    }
}