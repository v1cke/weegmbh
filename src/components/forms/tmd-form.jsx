import React from "react";

const TmdForm = (item) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="sd-form tmd-form">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-4">
            <div className="single-input-field mb-30">
              <input type="text" placeholder="Name" />
              <i className="fas fa-user"></i>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-input-field mb-30">
              <input type="text" placeholder="Telefon" />
              <i className="fas fa-phone-alt"></i>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-input-field mb-30">
              <input type="text" placeholder="Email" />
              <i className="fas fa-envelope"></i>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="single-input-field textarea mb-30">
              <textarea placeholder="Nachricht"></textarea>
              <i className="fas fa-edit"></i>
            </div>
          </div>
          <div className="col-lg-12 text-center">
            <button className="fill-btn clip-btn" type="submit">
              Anfrage schicken
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TmdForm;
