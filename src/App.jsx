// змінити url адресу

import {  Route, Routes } from "react-router-dom";
import UsersPage from "./pages/UsersPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import PubPage from "./components/Pub.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import Header from "./components/Header/Header.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ProductReviewsPage from "./pages/ProductReviewsPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import ContactsPage from "./pages/ContactsPage.jsx";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUserDataIsRefreshing } from "./redux/phonebook/authSlice.js";
import { useEffect } from "react";
import { apiGetCurrentUser } from "./redux/phonebook/authOperations.js";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectUserDataIsRefreshing);

  useEffect(() => {
    dispatch(apiGetCurrentUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <div>Refreshing...</div>;
  }



  return (
    <div>
   <Header/>
    
      <div>
    
   
    <Routes>
    <Route path="/" element={<PubPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<SignUpPage />} />
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