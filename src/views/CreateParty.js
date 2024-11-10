// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import AttendeeNav from "../components/AttendeeNav";
// import { db, auth } from "../firebase";
// import { collection, addDoc } from "firebase/firestore";
// import DatePicker from "react-datepicker";
// import TimePicker from "../components/Picker/TimePicker";

// const CreateParty = () => {
//   const navigate = useNavigate();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (values) => {
//     setIsSubmitting(true);

//     try {
//       const partiesCollectionRef = collection(db, "parties");
//       const formattedDate =
//         values.Date instanceof Date
//           ? values.Date.toISOString().split("T")[0]
//           : values.Date;

//       await addDoc(partiesCollectionRef, {
//         Name: values.Name || "",
//         Time: values.Time || "",
//         Date: formattedDate || "",
//         Phrase: values.Phrase || "",
//         Poster: values.Poster || "",
//         Price: values.Price || "",
//         Ratio: values.Ratio || "",
//         Host: values.Host || "",
//       });

//       //   navigate("/parties");
//     } catch (error) {
//       console.error("Error adding party: ", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="mx-auto min-h-screen bg-gray-900">
//       <div>
//         <AttendeeNav />

//         <section className="bg-gray-800 dark:bg-gray-900 pt-[4rem] w-[40rem] mx-auto  rounded-lg mt-20 py-4 px-8">
//           <Formik
//             initialValues={{
//               Name: "",
//               Time: "",
//               Date: "",
//               Phrase: "",
//               Poster: "",
//               Price: "",
//               Ratio: "",
//               Host: "",
//             }}
//             validationSchema={Yup.object({
//               Name: Yup.string()
//                 .max(30, "Must be 30 characters or less")
//                 .required("Required"),
//               Phrase: Yup.string().max(100, "Must be 100 characters or less"),
//               Poster: Yup.string()
//                 .url("Invalid URL format")
//                 .required("Required"),
//               Price: Yup.number().required("Required").positive().integer(),
//               Ratio: Yup.number().required("Required").positive(),
//               Host: Yup.string()
//                 .max(50, "Must be 50 characters or less")
//                 .required("Required"),
//             })}
//             onSubmit={handleSubmit}
//           >
//             {({ isSubmitting }) => (
//               <Form className="space-y-4 md:space-y-6">
//                 <div className="text-xl text-white font-bold">Create party</div>
//                 <div className="grid gap-4 mb-4 sm:grid-cols-2">
//                   {/* Your Fields here */}
//                   <div>
//                     <label
//                       htmlFor="Name"
//                       className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
//                     >
//                       Party Name
//                     </label>
//                     <Field
//                       name="Name"
//                       type="text"
//                       placeholder="Party Name"
//                       className="bg-gray-50 border border-gray-300 text-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     />
//                     <ErrorMessage
//                       name="Name"
//                       component="div"
//                       className="text-red-500"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="Time"
//                       className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
//                     >
//                       Time
//                     </label>
//                     <Field name="Time">
//                       {({ field, form }) => (
//                         <div className="relative">
//                           <TimePicker
//                             value={form.values.Time}
//                             onChange={(time) =>
//                               form.setFieldValue("Time", time)
//                             }
//                           />
//                         </div>
//                       )}
//                     </Field>
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="Date"
//                       className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
//                     >
//                       Date
//                     </label>
//                     <Field name="Date">
//                       {({ field, form }) => (
//                         <DatePicker
//                           selected={form.values.Date}
//                           onChange={(date) => form.setFieldValue("Date", date)}
//                           className="rounded-lg"
//                           placeholderText="Select date"
//                         />
//                       )}
//                     </Field>
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="Phrase"
//                       className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
//                     >
//                       Phrase
//                     </label>
//                     <Field
//                       name="Phrase"
//                       type="text"
//                       placeholder="Catchphrase"
//                       className="bg-gray-50 border border-gray-300 text-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     />
//                     <ErrorMessage
//                       name="Phrase"
//                       component="div"
//                       className="text-red-500"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="Poster"
//                       className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
//                     >
//                       Poster URL
//                     </label>
//                     <Field
//                       name="Poster"
//                       type="text"
//                       placeholder="Poster URL"
//                       className="bg-gray-50 border border-gray-300 text-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     />
//                     <ErrorMessage
//                       name="Poster"
//                       component="div"
//                       className="text-red-500"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="Price"
//                       className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
//                     >
//                       Price
//                     </label>
//                     <Field
//                       name="Price"
//                       type="number"
//                       placeholder="Price"
//                       className="bg-gray-50 border border-gray-300 text-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     />
//                     <ErrorMessage
//                       name="Price"
//                       component="div"
//                       className="text-red-500"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="Ratio"
//                       className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
//                     >
//                       Ratio
//                     </label>
//                     <Field
//                       name="Ratio"
//                       type="number"
//                       placeholder="Ratio"
//                       className="bg-gray-50 border border-gray-300 text-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     />
//                     <ErrorMessage
//                       name="Ratio"
//                       component="div"
//                       className="text-red-500"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="Host"
//                       className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
//                     >
//                       Host Name
//                     </label>
//                     <Field
//                       name="Host"
//                       type="text"
//                       placeholder="Host Name"
//                       className="bg-gray-50 border border-gray-300 text-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     />
//                     <ErrorMessage
//                       name="Host"
//                       component="div"
//                       className="text-red-500"
//                     />
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? "Creating..." : "Create Party"}
//                 </button>
//               </Form>
//             )}
//           </Formik>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default CreateParty;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import AttendeeNav from "../components/AttendeeNav";
import { db, auth } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import DatePicker from "react-datepicker";
import TimePicker from "../components/Picker/TimePicker";
import "react-datepicker/dist/react-datepicker.css";
import Sidebar from "../components/Sidebar";

const CreateParty = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values) => {
    setIsSubmitting(true);

    try {
      const partiesCollectionRef = collection(db, "parties");
      const formattedDate =
        values.Date instanceof Date
          ? values.Date.toISOString().split("T")[0]
          : values.Date;

      await addDoc(partiesCollectionRef, {
        Name: values.Name || "",
        Time: values.Time || "",
        Date: formattedDate || "",
        Phrase: values.Phrase || "",
        Poster: values.Poster || "",
        Price: values.Price || "",
        Ratio: values.Ratio || "",
        Host: values.Host || "",
      });

      // navigate("/parties");
    } catch (error) {
      console.error("Error adding party: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto min-h-screen bg-[#1a1a1a] pb-8  ">
      <div>
        <Sidebar />

        <section className="bg-black dark:bg-gray-900 pt-[2rem] px-4 rounded-lg  py-4  w-full md:w-[40rem] mx-auto ml-0 md:ml-[35rem] sm:[35rem] sm:translate-y-[8rem]	">
          <div className="mt-4">
            <Formik
              initialValues={{
                Name: "",
                Time: "",
                Date: "",
                Phrase: "",
                Poster: "",
                Price: "",
                Ratio: "",
                Host: "",
              }}
              validationSchema={Yup.object({
                Name: Yup.string()
                  .max(30, "Must be 30 characters or less")
                  .required("Required"),
                Phrase: Yup.string().max(100, "Must be 100 characters or less"),
                Poster: Yup.string()
                  .url("Invalid URL format")
                  .required("Required"),
                Price: Yup.number().required("Required").positive().integer(),
                Ratio: Yup.string()
                  .matches(
                    /^[0-9]+:[0-9]+$/,
                    "Ratio must be two numbers separated by a colon"
                  )
                  .required("Required"),
                Host: Yup.string()
                  .max(50, "Must be 50 characters or less")
                  .required("Required"),
              })}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, setFieldValue }) => (
                <Form className="space-y-4 md:space-y-6 px-4 pb-8  ">
                  <div className="text-xl text-white font-bold">
                    Create party
                  </div>
                  <div className="grid gap-4 mb-4 sm:grid-cols-2">
                    {/* Your Fields here */}
                    <div>
                      <label
                        htmlFor="Name"
                        className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
                      >
                        Party Name
                      </label>
                      <Field
                        name="Name"
                        type="text"
                        placeholder="Party Name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-700 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      <ErrorMessage
                        name="Name"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="Time"
                        className="block mb-2 text-sm font-medium text-gray-300 dark:text-white flex justify-center"
                      >
                        Time
                      </label>
                      <Field name="Time">
                        {({ field, form }) => (
                          <div className="relative">
                            <TimePicker
                              value={form.values.Time}
                              onChange={(time) => setFieldValue("Time", time)}
                            />
                          </div>
                        )}
                      </Field>
                    </div>

                    <div>
                      <label
                        htmlFor="Date"
                        className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
                      >
                        Date
                      </label>
                      <Field name="Date">
                        {({ field, form }) => (
                          <div className="relative">
                            <DatePicker
                              selected={form.values.Date}
                              onChange={(date) =>
                                form.setFieldValue("Date", date)
                              }
                              className="w-full rounded-lg p-2.5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-700 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholderText="Select date"
                            />
                          </div>
                        )}
                      </Field>
                    </div>

                    <div>
                      <label
                        htmlFor="Phrase"
                        className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
                      >
                        Phrase
                      </label>
                      <Field
                        name="Phrase"
                        type="text"
                        placeholder="Catchphrase"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-700 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      <ErrorMessage
                        name="Phrase"
                        component="div"
                        className="text-red-600 text-sm pt-1"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="Poster"
                        className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
                      >
                        Poster URL
                      </label>
                      <Field
                        name="Poster"
                        type="text"
                        placeholder="Poster URL"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-700 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      <ErrorMessage
                        name="Poster"
                        component="div"
                        className="text-red-600 text-sm pt-1"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="Price"
                        className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
                      >
                        Price
                      </label>
                      <Field
                        name="Price"
                        type="number"
                        placeholder="Price"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-700 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      <ErrorMessage
                        name="Price"
                        component="div"
                        className="text-red-600 text-sm pt-1"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="Ratio"
                        className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
                      >
                        Ratio
                      </label>
                      <Field
                        name="Ratio"
                        type="text"
                        placeholder="Ratio"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-700 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      <ErrorMessage
                        name="Ratio"
                        component="div"
                        className="text-red-600 text-sm pt-1"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="Host"
                        className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
                      >
                        Host Name
                      </label>
                      <Field
                        name="Host"
                        type="text"
                        placeholder="Host Name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-700 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      <ErrorMessage
                        name="Host"
                        component="div"
                        className="text-red-600 text-sm pt-1"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-4 py-2.5 text-center focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      {isSubmitting ? "Creating..." : "Create Party"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CreateParty;
