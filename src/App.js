import logo from "./logo.svg";
import "./App.css";

import { Formik } from "formik";
import * as Yup from "yup";
import React, { useState, useEffect } from "react";

function App() {
  const [initialValues, setInitialValues] = useState({
    email: "1",
    password: "2",
    name: "3",
  });
  const formValidation = Yup.object().shape({
    email: Yup.string().email("not an email").required("missing"),
    password: Yup.string().required("missing"),
    name: Yup.string().when("password", {
      is: (value) => value == "abc",
      then: Yup.string().required("missing"),
    }),
  });

  console.log("initialValues", initialValues);

  useEffect(() => {
    // setCurrentUser(getCurrentUser())
    setTimeout(() => {
      setInitialValues({
        email: "A",
        password: "B",
        name: "C",
      });
    }, 3000);
  }, []);

  return (
    <>
      Formik
      <Formik
        enableReinitialize
        initialValues={{ ...initialValues }}
        validationSchema={formValidation}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          let result = await login(values);
          if (result.token) {
            console.log("Login success");
            // Redirect to some page
          } else {
            console.log("Login faild");
          }
          // setTimeout(() => {
          //   console.log("Submit", values);
          //   setSubmitting(false);
          //   setInitialValues({});
          //   resetForm();
          // }, 3000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          resetForm,
        }) => (
          <form onSubmit={handleSubmit}>
            Errors
            <div>{errors && JSON.stringify(errors, null, 2)}</div>
            <div>{errors.email && touched.email && errors.email}</div>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email || ""}
            />
            <div>{errors.password && touched.password && errors.password}</div>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password || ""}
            />
            <div>{errors.name && touched.name && errors.name}</div>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name || ""}
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <button
              type="button"
              onClick={() => {
                setInitialValues({});
                resetForm();
              }}
            >
              Reset
            </button>
          </form>
        )}
      </Formik>
    </>
  );
}

export default App;
