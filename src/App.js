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

const footerData = [{
    title: "Get in touch", option: [
        "About Us",
        "Careers",
        "Press Releases",
        "Blog"
    ]
},
{
    title: "Connections", option: [
        "Facebook",
        "Twitter",
        "Instagram",
        "Youtube"
    ]
},
{
    title: "Earnings", option: [
        "Become an Affiliate",
        "Advertise your product",
        "Sell on Market"
    ]
},
{
    title: "Account", option: [
        "Your account",
        "Returns Centre",
        "100% purchase protection",
        "Chat with us",
        "Help"
    ]
}];
const footerTags = [
    "Beans", "carrots",
    "apple", "garlic",
    "mushrooms", "tomatoes",
    "Chilli peppers", "Broccoli",
    "Cherries", "Meat", "Seo tag"
    , "Bananas", "Grapes", "watermelons",
    "meat", "fish", "fresh food",
    "seo Tag", "broccoli"
]
const categoryPage = <>
    <Header />
    <Category />
    <Footer sec1={footerData} Tags={footerTags} />
</>;
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<>
                    <Header />
                    <HomePage />
                    <Footer sec1={footerData} Tags={footerTags} />
                </>} />
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
                <Route path="/product" element={<>
                    <Header />
                    <ProductDisplay />
                    <Footer sec1={footerData} Tags={footerTags} /></>}
                />
                <Route path="/billing" element={
                    <>
                        <Header />
                        <Billing />
                        <Footer sec1={footerData} Tags={footerTags} />
                    </>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
