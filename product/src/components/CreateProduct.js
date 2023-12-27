import {Formik,Field,Form,ErrorMessage} from "formik";
import * as Yup from "yup";
import * as productService from "../services/productService"
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
export function CreateProduct(){
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getAllCategory();
    }, []);
    const getAllCategory = async ()=>{
        const res = await productService.getAllCategory();
        setCategories(res.data);
    }

    const initValue = {
        name:"",
        inputDate:"",
        price:"",
        quantity:"",
        total:"",
        category:"",
    }

    // const d = new Date();
    // d.setFullYear(d.getFullYear()-18)
    // console.log(d)

    // const date = `${d.getFullYear()-18}-${d.getMonth()+1}-${d.getDate()}`
    // console.log(date)

    const validateObject = {
        name: Yup.string()
            .required("Ten khong dc de trong!"),
        inputDate: Yup.date()
            .required("Ngay nhap khong dc de trong")
            .min(new Date(),"Ngay nhap khon dc nho hon")
    }

    const create = async (values)=>{
        values.total = values.price*values.quantity;
        values.category = JSON.parse(values.category);
        const res = await productService.createProduct(values);
        if(res.status===201){
            toast.success("Them moi thanh cong!");
            navigate("/");
        }
        console.log(res)
    }
    return(
        <>
        <h2>Them Moi</h2>
            <Formik
                initialValues={initValue}
                onSubmit={values => {
                    create(values);
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
                        <option value="">---Loai san pham---</option>
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