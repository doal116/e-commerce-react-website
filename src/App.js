import './App.css';
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import HomePage from './components/HomePage/homePage';
import Category from './components/category/category.js'
import Footer from './components/footer/footer';
import Header from './components/header/header';
import ProductDisplay from './components/productDisplay/productDisplay';
import Billing from './components/billing/billing';
import footerData from './components/footer/footerData';

const categoryPage = <>
    <Header />
    <Category />
    <Footer footerData={footerData} />
</>;

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <>
                        <Header />
                        <HomePage />
                        <Footer footerData={footerData} />
                    </>
                } />
                <Route path="/category" element={categoryPage}>
                    <Route path="Bakery" element={categoryPage} />
                    <Route path="FruitsAndVegetables" element={categoryPage} />
                    <Route path="MeatAndFish" element={categoryPage} />
                    <Route path="Drinks" element={categoryPage} />
                    <Route path="Kitchen" element={categoryPage} />
                    <Route path="SpecialNutrition" element={categoryPage} />
                    <Route path="Baby" element={categoryPage} />
                    <Route path='Pharmacy' element={categoryPage} />
                </Route>
                <Route path="/product" element={
                    <>
                        <Header />
                        <ProductDisplay />
                        <Footer footerData={footerData} />
                    </>
                }
                />
                <Route path="/billing" element={
                    <>
                        <Header />
                        <Billing />
                        <Footer footerData={footerData} />
                    </>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
