import {useEffect, useState} from "react";
import * as productService from "../services/productService"
import {NavLink} from "react-router-dom";
import {toast} from "react-toastify";
import {ErrorMessage, Field} from "formik";
export function ListProduct() {
    const [list, setList] = useState([]);
    const [idDelete, setIdDelete] = useState("");
    const [nameDelete, setNameDelete] = useState("");
    const [categories, setCategories] = useState([]);
    const [nameSearch, setNameSearch] = useState("");
    const [categorySearch, setCategorySearch] = useState("");
    const [productDetail, setProductDetail] = useState({});

    useEffect(() => {
        getAllCategory();
    }, []);

    useEffect(() => {
        getAllProduct();
    }, [nameSearch, categorySearch]);

    const getAllProduct = async ()=>{
        const res = await productService.getAllProduct(nameSearch,categorySearch);
        setList(res.data);
    }

    const getAllCategory = async () => {
        const res = await productService.getAllCategory();
        setCategories(res.data);
    }

    const showModal = (id,name)=>{
            setIdDelete(id);
            setNameDelete(name);
    }

    const handelDelete = async ()=>{
        const res = await productService.deleteProduct(idDelete);
        if(res.status===200){
            toast.success("Xoa san pham thanh cong");
            getAllProduct();
        }else {
            toast.error("xoa that bai!");
        }
    }

    const handleDetail = async (id)=>{
        const res = await productService.getProductById(id);
        setProductDetail(res.data);
    }
    return (
        <>
            <div className="container">
                <h2 className="text-center text-primary fw-bold">DANH SÁCH SẢN PHẨM</h2>
                <NavLink to="/create">Them moi</NavLink>
                <input type="text" onChange={(e) => setNameSearch(e.target.value)}/>
                <select onChange={(e) => setCategorySearch(e.target.value)}>
                    <option value="">Chọn loại sản pẩm</option>
                    {
                        categories.map(category => (
                            <option key={category.id}
                                    value={category.name}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
                <table className="table table-hover border">
                    <thead className="table-primary">
                    <tr>
                        <th>Stt</th>
                        <th>Tên sản phẩm</th>
                        <th>Loại sản phẩm</th>
                        <th>Ngày nhập</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tổng tiền</th>
                        <th colSpan={3}>Chức năng</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        list.map((product, index) => (
                            <tr
                                key={product.id}
                            >
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.category.name}</td>
                                <td>{product.inputDate}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.total}</td>
                                <td>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                            data-bs-target="#detailModal"
                                            onClick={() => handleDetail(product.id)}
                                    >
                                        Chi tiet
                                    </button>
                                </td>
                                <td>
                                    <NavLink to={`/update/${product.id}`}>
                                        Sửa
                                    </NavLink>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                            onClick={() => showModal(product.id, product.name)}
                                    >
                                        Xoa
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Xoa san pham</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {nameDelete}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Huy</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                                    onClick={handelDelete}
                            >Xac nhan
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="detailModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Chi tiet san pham</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <label>Ten: </label><span>{productDetail.name}</span><br/>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Dong</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
)
}