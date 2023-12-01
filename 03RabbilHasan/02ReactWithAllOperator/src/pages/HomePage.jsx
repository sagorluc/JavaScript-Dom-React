
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from './ProductPage.jsx'
import ProfilePage from './ProfilePage.jsx'
import NotFoundPage from './NotFoundPage.jsx'
import LinkToOtherPage from '../component/LinkToOtherPage.jsx';



const HomePage = () => {
    return (
        <div>
           <h1>Home page React Browser Router</h1>
           <BrowserRouter>
                <Routes>
                    <Route path="/product" element={<ProductPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/> 
                </Routes>
           </BrowserRouter>

        </div>
    );
};

export default HomePage;