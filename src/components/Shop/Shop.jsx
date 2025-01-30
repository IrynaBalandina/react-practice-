import { useEffect } from "react";
import css from "./Shop.module.css";
import { apiGetProducts, apiGetProductsByQuery } from "../../redux/shop/operations.js";
import Loader from "../Loader/Loader.jsx";
import SearchProductForm from "../SearchProductForm/SearchProductForm.jsx";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Section from "../Section.jsx";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectProducts, selectProductsError, selectProductsIsLoading } from "../../redux/shop/selectors";

const Shop = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectProductsIsLoading);
  const error = useSelector(selectProductsError);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get("q");

  const onSearch = (searchTerm) => {
    setSearchParams({ q: searchTerm });
  };

  useEffect(() => {
    if (searchValue) {
      dispatch(apiGetProductsByQuery(searchValue));
    } else {
      dispatch(apiGetProducts());
    }
  }, [dispatch, searchValue]);
 
  return (
    <div className={css.shopPage}>
      <Section>
        <h1>Products catalog</h1>
        <div className={css.searchWrapper}>
          <SearchProductForm onSearch={onSearch} />
        </div>
      </Section>
      <Section title="Products list">
        {isLoading && (
          <div className={css.loaderWrapper}>
            <Loader />
          </div>
        )}
        {error && (
          <p>
            Oops, some error occured &quot;{error}&quot;. Please, try again
            later 🤷‍♂️.
          </p>
        )}
        <div className={css.list}>
          {Array.isArray(products) &&
            products.map((item) => {
              return (
                <Link
                  state={{
                    from: location,
                  }}
                  to={`/products/${item.id}`}
                  key={item.id}
                  className={css.listItem}
                >
                  <img
                    className={css.itemImg}
                    src={item.thumbnail}
                    alt={item.title}
                  />
                  <h3 className={css.itemTitle}>{item.title}</h3>
                  <p className={css.itemDescription}>{item.description}</p>
                  <p className={css.itemDescription}>Rating: {item.rating}</p>
                </Link>
              );
            })}
        </div>
      </Section>
    </div>
  );
};

export default Shop;