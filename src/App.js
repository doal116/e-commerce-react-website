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
import { cartItems } from './cartItemsContext';
import { useState } from 'react';


function App() {
    //Redux should be used instead of useSate here
    const [cartItemsValue, setCartItemsValue] = useState(0);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <>
                        <cartItems.Provider value={{ cartItemsValue, setCartItemsValue }}>
                            <Header />
                        </cartItems.Provider >
                        <HomePage />
                        <Footer footerData={footerData} />
                    </>
                } />
                <Route path="/category" element={<>
                    <cartItems.Provider value={{ cartItemsValue, setCartItemsValue }}>
                        <Header />
                    </cartItems.Provider >
                    <Category />
                    <Footer footerData={footerData} />
                </>}>
                    <Route path="Bakery" element={<>
                        <cartItems.Provider value={{ cartItemsValue, setCartItemsValue }}>
                            <Header />
                        </cartItems.Provider >
                        <Category />
                        <Footer footerData={footerData} />
                    </>} />
                    <Route path="FruitsAndVegetables" element={<>
                        <cartItems.Provider value={{ cartItemsValue, setCartItemsValue }}>
                            <Header />
                        </cartItems.Provider >
                        <Category />
                        <Footer footerData={footerData} />
                    </>} />
                    <Route path="MeatAndFish" element={<>
                        <cartItems.Provider value={{ cartItemsValue, setCartItemsValue }}>
                            <Header />
                        </cartItems.Provider >
                        <Category />
                        <Footer footerData={footerData} />
                    </>} />
                    <Route path="Drinks" element={<>
                        <cartItems.Provider value={{ cartItemsValue, setCartItemsValue }}>
                            <Header />
                        </cartItems.Provider >
                        <Category />
                        <Footer footerData={footerData} />
                    </>} />
                    <Route path="Kitchen" element={<>
                        <cartItems.Provider value={{ cartItemsValue, setCartItemsValue }}>
                            <Header />
                        </cartItems.Provider >
                        <Category />
                        <Footer footerData={footerData} />
                    </>} />
                    <Route path="SpecialNutrition" element={<>
                        <cartItems.Provider value={{ cartItemsValue, setCartItemsValue }}>
                            <Header />
                        </cartItems.Provider >
                        <Category />
                        <Footer footerData={footerData} />
                    </>} />
                    <Route path="Baby" element={<>
                        <cartItems.Provider value={{ cartItemsValue, setCartItemsValue }}>
                            <Header />
                        </cartItems.Provider >
                        <Category />
                        <Footer footerData={footerData} />
                    </>} />
                    <Route path='Pharmacy' element={<>
                        <cartItems.Provider value={{ cartItemsValue, setCartItemsValue }}>
                            <Header />
                        </cartItems.Provider >
                        <Category />
                        <Footer footerData={footerData} />
                    </>} />
                </Route>
                <Route path="/product" element={
                    <>
                        <cartItems.Provider value={{ cartItemsValue, setCartItemsValue }}>
                            <Header />
                            <ProductDisplay />
                        </cartItems.Provider >
                        <Footer footerData={footerData} />
                    </>
                }
                />
                <Route path="/billing" element={
                    <>
                        <cartItems.Provider value={{ cartItemsValue, setCartItemsValue }}>
                            <Header />
                        </cartItems.Provider >
                        <Billing />
                        <Footer footerData={footerData} />
                    </>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
