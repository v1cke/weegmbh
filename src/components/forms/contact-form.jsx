import React from "react";
import { useFormik } from "formik";
// internal
import { contact_schema } from "@utils/validation-schema";
import ErrorMsg from "./error-msg";
import NiceSelect from "@ui/niceSelect";

const ContactForm = () => {
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phone: "",
        company: "",
        msg: "",
      },
      validationSchema: contact_schema,
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        resetForm();
      },
    });

  const selectHandler = e => { }
  return (
    <form id="contact-form" onSubmit={handleSubmit}>
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
                { value: "Thema wählen", text: "Thema wählen" },
                { value: "Subject One", text: "Zug / Zugführer mieten" },
                { value: "Subject Two", text: "Weiterbildung / Prüfung" },
                { value: "Subject Three", text: "Allgemeines" },
              ]}
              defaultCurrent={0}
              onChange={selectHandler}
              name="Select Subject"
            />
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
          <button type="submit" className="fill-btn clip-btn">Nachricht senden</button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
