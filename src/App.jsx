// змінити url адресу

import {  Route, Routes } from "react-router-dom";
import UsersPage from "./pages/UsersPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import PubPage from "./components/Pub.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import Header from "./components/Header/Header.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ProductReviewsPage from "./pages/ProductReviewsPage.jsx";


function App() {
 


  return (
    <div>
   <Header/>
    
      <div>
    
   
    <Routes>
    <Route path="/" element={<PubPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/products" element={<ProductsPage />} />
            
            <Route
              path="/products/:productId"
              element={<ProductDetailsPage />}>
                <Route path="reviews" element={<ProductReviewsPage />} />
              </Route>
            
            <Route path="*" element={<NotFoundPage />} />
      
    </Routes>
    </div>
    </div>
  )
}

export default App;