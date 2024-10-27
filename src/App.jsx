import Navbar from './components/navbar';
import Main from './components/main';
import Categories from './components/categories';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
export default function App(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navbar />}>
                        <Route path='categories' element={<Categories />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            
        </>
    )
}