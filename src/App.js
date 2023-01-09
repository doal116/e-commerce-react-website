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
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<>
                    <Header />
                    <HomePage />
                    <Footer sec1={footerData} Tags={footerTags} />
                </>} />
                <Route path="/category" element={<>
                    <Header />
                    <Category />
                    <Footer sec1={footerData} Tags={footerTags} /></>} />
                <Route path="/product" element={<>
                    <Header />
                    <ProductDisplay />
                    <Footer sec1={footerData} Tags={footerTags} /></>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
