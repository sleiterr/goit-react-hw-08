import "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <label htmlFor="email" className={styles.label}>
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        className={styles.input}
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className={styles.error}>{formik.errors.email}</div>
      ) : null}

      <label htmlFor="password" className={styles.label}>
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        className={styles.input}
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password ? (
        <div className={styles.error}>{formik.errors.password}</div>
      ) : null}

      <button type="submit" className={styles.button}>
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
