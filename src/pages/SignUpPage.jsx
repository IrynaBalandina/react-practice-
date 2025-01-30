import css from "../components/AddProfileForm/AddProfileForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegisterUserSchema } from "../utils/schemas.jsx";
import { useDispatch } from "react-redux";
import {apiRegisterUser} from "../redux/phonebook/authOperations.js";

const INITIAL_VALUES = {
    name: "",
    email: "",
    password: "",
  };

const SignUpPage = () => {

    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
      dispatch(apiRegisterUser(values));
      actions.resetForm();
    };

  return (
    <div>
        <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={RegisterUserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <span>Name:</span>
            <Field
              type="text"
              name="name"
              className={css.input}
              placeholder="Ivan Ivanov"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="span"
            />
          </label>
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

          <button type="submit">🤷‍♂️ Sign Up</button>
        </Form>
      </Formik>
    </div>
  )
}

export default SignUpPage;