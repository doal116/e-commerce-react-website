import './App.css';
import Footer from './components/footer/footer';
import Header  from './components/header/header';
//import HomePage  from './components/HomePage/homePage';
import Category from './components/category/category.js'

// completed <HomePage />

function App() {
  return (
    <div className="App">
      <Header />
      <Category />
      <Footer sec1={[
                    {
                        title: "Get in touch",
                        option: [
                            "About Us",
                            "Careers",
                            "Press Releases",
                            "Blog"
                        ]

                    },
                    {
                        title: "Connections",
                        option: [
                            "Facebook",
                            "Twitter",
                            "Instagram",
                            "Youtube"
                        ]
                    },
                    {
                        title: "Earnings",
                        option: [
                            "Become an Affiliate",
                            "Advertise your product",
                            "Sell on Market"
                        ]
                    },
                    {
                        title: "Account",
                        option: [
                            "Your account",
                            "Returns Centre",
                            "100% purchase protection",
                            "Chat with us",
                            "Help"
                        ]
                    }
                ]} Tags={[
                    "Beans", "carrots",
                    "apple", "garlic",
                    "mushrooms", "tomatoes",
                    "Chilli peppers", "Broccoli",
                    "Cherries", "Meat", "Seo tag"
                    , "Bananas", "Grapes", "watermelons",
                    "meat", "fish", "fresh food",
                    "seo Tag", "broccoli"
                ]} />
    </div>
  );
}

export default App;
