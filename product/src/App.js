import logo from './logo.svg';
import './App.css';
import {ListProduct} from "./components/ListProduct";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CreateProduct} from "./components/CreateProduct";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css"
import {UpdateProduct} from "./components/UpdateProduct";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ListProduct/>}></Route>
                    <Route path="/create" element={<CreateProduct/>}></Route>
                    <Route path="/update/:id" element={<UpdateProduct/>}></Route>
                    {/*<Route path="*" element={<CreateProduct/>}></Route>*/}
                </Routes>
            </BrowserRouter>
            <ToastContainer/>
        </>
    );
}

export default App;
