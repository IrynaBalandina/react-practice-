import { Formik, Form, ErrorMessage, Field } from "formik";
import { LoginUserSchema } from "../utils/schemas.jsx";
import { useDispatch } from "react-redux";
import { apiLoginUser } from "../redux/phonebook/authOperations.js";
import css from "../components/AddProfileForm/AddProfileForm.module.css";

const INITIAL_VALUES = {
    email: "",
    password: "",
  };
  
  const SignInPage = () => {
    const dispatch = useDispatch();
  
    const handleSubmit = (values, actions) => {
      dispatch(apiLoginUser(values));
      actions.resetForm();
    };
  
    return (
      <div>
        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={LoginUserSchema}
          onSubmit={handleSubmit}
        >
          <Form className={css.form}>
            <label className={css.label}>
              <span>Email:</span>
              <Field
                type="text"
                name="email"
                className={css.input}
                placeholder="example.email@example.com"
              />
              <ErrorMessage
                className={css.errorMessage}
                name="email"
                component="span"
              />
            </label>
            <label className={css.label}>
              <span>Password:</span>
              <Field
                type="password"
                name="password"
                className={css.input}
                placeholder="Enter your password"
              />
              <ErrorMessage
                className={css.errorMessage}
                name="password"
                component="span"
              />
            </label>
  
            <button type="submit">😜 Sign In</button>
          </Form>
        </Formik>
      </div>
    );
  };
  
  export default SignInPage;