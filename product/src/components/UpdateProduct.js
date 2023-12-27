import {Formik,Field,Form,ErrorMessage} from "formik";
import * as Yup from "yup";
import * as productService from "../services/productService"
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router-dom";
import {getProductById} from "../services/productService";
export function UpdateProduct(){
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [productUpdate, setProductUpdate] = useState();
    const {id} = useParams();

    console.log(productUpdate   )

    useEffect(() => {
        getAllCategory();
        getProductById();
    }, []);

    const getAllCategory = async ()=>{
        const res = await productService.getAllCategory();
        setCategories(res.data);
    }

    const getProductById = async () => {
        const res = await productService.getProductById(id);
        setProductUpdate(res.data);
    }

    if(!productUpdate){
        return null;
    }
    const initValue = {
        ...productUpdate,
        category: JSON.stringify(productUpdate.category)
    }

    const validateObject = {
        name: Yup.string()
            .required("Ten khong dc de trong!"),
        inputDate: Yup.date()
            .required("Ngay nhap khong dc de trong")
            .min(new Date(),"Ngay nhap khon dc nho hon")
    }

    const update = async (values)=>{
        values.total = values.price*values.quantity;
        values.category = JSON.parse(values.category);
        const res = await productService.updateProduct(values);
        if(res.status===200){
            toast.success("Sua thanh cong!");
            navigate("/");
        }
    }

    return(
        <>
            <h2>Them Moi</h2>
            <Formik
                initialValues={initValue}
                onSubmit={values => {
                    update(values);
                }}
                validationSchema={Yup.object(validateObject)}
            >
                <Form>
                    <label>Ten</label><br/>
                    <Field name="name"></Field>
                    <ErrorMessage name="name" component="small" className="text-danger" /><br/>
                    <label>Ngay nhap</label><br/>
                    <Field type="date" name="inputDate"></Field>
                    <ErrorMessage name="inputDate" component="small" className="text-danger" /><br/>
                    <label>Gia</label><br/>
                    <Field type="number" name="price"></Field><br/>
                    <label>So luong</label><br/>
                    <Field type="number" name="quantity"></Field><br/>
                    <label>Loai san pham</label><br/>
                    <Field as="select" name="category">
                        {
                            categories.map(category => (
                                <option key={category.id} value={JSON.stringify(category)}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </Field><br/>
                    <button type="submit">Luu</button>
                </Form>
            </Formik>
        </>
    )
}