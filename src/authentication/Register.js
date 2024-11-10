import React from "react";
import LoggedOutNav from "../components/LoggedOutNav";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, collection } from "firebase/firestore";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    try {
      const email = values.email;
      const password = values.password;

      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userCollection = collection(db, "users");
      const newUserDocRef = doc(userCollection, user.uid);

      await setDoc(newUserDocRef, {
        email: email,
        name: {
          firstName: values.firstName,
          lastName: values.lastName,
        },
        uid: user.uid,
        role: "Student",
      });

      console.log("Data successfully written to Firestore");

      setSubmitting(false);
      resetForm();
      navigate("/profile");
    } catch (error) {
      setSubmitting(false);
      console.error(error);
    }
  };

  return (
    <>
      <LoggedOutNav />
      <section className="bg-gray-50 dark:bg-gray-900">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            lastName: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .min(6, "Password must be at least 6 characters")
              .required("Required"),
          })}
          onSubmit={handleRegister}
        >
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-[#1a1a1a] ">
            <div className="w-full bg-gray-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-300 md:text-2xl dark:text-white">
                  Register
                </h1>
                <Form className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
                    >
                      First Name
                    </label>
                    <Field
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      required
                      className="bg-gray-50 border border-gray-300 text-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
                    >
                      Last Name
                    </label>
                    <Field
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      required
                      className="bg-gray-50 border border-gray-300 text-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
                    >
                      Your email
                    </label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Email"
                      required
                      className="bg-gray-50 border border-gray-300 text-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
                    >
                      Password
                    </label>
                    <Field
                      name="password"
                      type="password"
                      placeholder="Password"
                      required
                      className="bg-gray-50 border border-gray-300 text-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-gray-300 bg-primary-600 bg-blue-800  text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Register
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </Formik>
      </section>
    </>
  );
};

export default Register;
