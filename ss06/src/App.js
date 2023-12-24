import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {StrictMode} from "react";
import AddNewPost from './components/AddNewPost';
import Table from './components/Table';
function App() {
    return (
        <>
            <StrictMode>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Table/>}/>
                        <Route path="/add" element={<AddNewPost/>}/>
                    </Routes>
                </BrowserRouter>
            </StrictMode>
        </>
    );
}

export default App;