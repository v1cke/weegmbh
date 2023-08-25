import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import emailjs from '@emailjs/browser';
import { useFormik } from "formik";
// internal
import { contact_schema } from "@utils/validation-schema";
import ErrorMsg from "./error-msg";
import NiceSelect from "@ui/niceSelect";

const ContactForm = () => {
  const form =useRef();

  const sendEmail = (e) =>{
    console.log(values);
    const resolveAfter3Sec = new Promise((resolve) =>
    setTimeout(resolve, 2000)
    );
    toast.promise(resolveAfter3Sec, {
      pending: "Nachricht wird verschickt",
      success: "Ihre Nachricht wurde verschickt!",
      error: "Nachricht konnte nicht verschickt werden 🤯",
    });
    e.preventDefault();

    // emailjs.sendForm('service_09qnshq', 'template_irfvadi', form.current, 'rRQgLnmvk_K0SZSsf')
    //   .then((result) => {
    //       console.log(result.text);
    //       console.log("message sent");
    //       // resetForm();
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  }

  
  const handleSelectChange = (value) => {
    if (value === "Select Subject") {
      setFieldValue("selectedValue", "");
    } else {
      setFieldValue("selectedValue", value);
      selectHandler(value);
    }
  };
  
  const selectHandler = (e) => {};
  // use formik
  const { handleChange, handleSubmit, handleBlur, setFieldValue, errors, values, touched } =
    useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      msg: "",
      selectedValue: "",
    },
    validationSchema: contact_schema,
      // onSubmit: (values, { resetForm }) => {
      //   console.log(values);
      //   resetForm();
      // },
    });
  

  // const selectHandler = e => { }
  return (
    <form form={form} id="contact-form" onSubmit={sendEmail}>
      <div className="row">
        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="single-input-field">
            <input
              name="name"
              defaultValue={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Ihr Name"
              id="name"
            />
            <i className="fas fa-user"></i>
            {touched.name && <ErrorMsg error={errors.name} />}
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="single-input-field">
            <input
              name="email"
              defaultValue={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              placeholder="Email Adresse"
              id="email"
            />
            <i className="fas fa-envelope"></i>
            {touched.email && <ErrorMsg error={errors.email} />}
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="single-input-field">
            <input
              name="phone"
              defaultValue={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Telefon"
              id="phone"
            />
            <i className="fas fa-phone-alt"></i>
            {touched.phone && <ErrorMsg error={errors.phone} />}
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="single-input-field select">
            <NiceSelect
              options={[
                { value: "Select Subject", text: "Thema wählen" },
                { value: "Subject One", text: "Zug / Zugführer mieten" },
                { value: "Subject Two", text: "Weiterbildung / Prüfung" },
                { value: "Subject Three", text: "Allgemeines" },
              ]}
              defaultCurrent={0}
              defaultValue={values.selectedValue}
              onChange={handleSelectChange}
              name="Select Subject"
            />
            {touched.selectedValue && values.selectedValue === "" && (
              <ErrorMsg error={errors.selectSubject} />
            )}
          </div>
        </div>
        <div className="col-xxl-12 col-xl-12 col-lg-12">
          <div className="single-input-field textarea">
            <textarea
              name="msg"
              rows="10"
              cols="10"
              defaultValue={values.msg}
              onChange={handleChange}
              onBlur={handleBlur}
              id="msg"
              placeholder="Ihre Nachricht"
            ></textarea>
            <i className="fas fa-edit"></i>
            {touched.msg && <ErrorMsg error={errors.msg} />}
          </div>
        </div>
        <div className="col-xxl-12 col-xl-12">
          <button type="submit" className="fill-btn clip-btn">
            Nachricht senden
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
