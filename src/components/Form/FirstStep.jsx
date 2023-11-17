import React, { useState } from "react";
import "./style.scss";

function FirstStep({
  setFormStep,
  formStep,
  name,
  setName,
  surname,
  setSurname,
  work,
  setWork,
  education,
  setEducation,
  email,
  setEmail,
  phone,
  setPhone,
}) {
  const [errors, setErrors] = useState("");

  const nextStep = (event) => {
    event.preventDefault();

    let isValid = true;
    const newErrors = {};

    if (name.trim() == "") {
      newErrors.name = "Ad daxil olmayib";
      isValid = false;
    } else if (name.trim().length < 3) {
      newErrors.name = "Ad ən a 3 xarakter olmalıdır";
      isValid = false;
    }

    if (surname.trim() == "") {
      newErrors.surname = "Soyad daxil edilməyib";
      isValid = false;
    } else if (surname.trim().length < 3) {
      newErrors.surname = "Soyad ən a 3 xarakter olmalıdır";
      isValid = false;
    }

    if (education.trim() == "") {
      newErrors.education = "Təhsil daxil edilməyib";
      isValid = false;
    } else if (education.trim().length < 3) {
      newErrors.education = "Təhsil ən a 3 xarakter olmalıdır";
      isValid = false;
    }

    if (work.trim() == "") {
      newErrors.work = "İş yeri daxil edilməyib";
      isValid = false;
    } else if (work.trim().length < 2) {
      newErrors.work = "İş yeri ən a 2 xarakter olmalıdır";
      isValid = false;
    }

    if (phone.trim() == "") {
      newErrors.phone = "Telefon daxil edilməyib";
      isValid = false;
    } else if (phone.trim().length < 9) {
      newErrors.phone = "Telefon ən a 9 xarakter olmalıdır";
      isValid = false;
    }

    if (email.trim() == "") {
      newErrors.email = "Email daxil edilməyib";
      isValid = false;
    }

    setErrors(newErrors);
    isValid=true
    if (isValid) {
      setFormStep(2);
    }
  };
  return (
    <>
      <h1 className="form-title">Qeydiyyat</h1>
      <div className="steps">
        <div className="step active">
          <div className="step-circle">1</div>
          <span>Şəxsi məlumatlar</span>
        </div>
        <div className="line"></div>
        <div className="step">
          <div className="step-circle">2</div>
          <span>Təlim seçimi</span>
        </div>
      </div>

      <div className="form-box">
        <form onSubmit={nextStep}>
          <div className="form-row">
            <div className="form-item">
              <label htmlFor="">Ad</label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                name="first_name"
              />
              {errors.name && <p class="error">{errors.name}</p>}
            </div>

            <div className="form-item">
              <label htmlFor="">Soyad</label>
              <input
                onChange={(e) => {
                  setSurname(e.target.value);
                }}
                type="text"
                name="last_name"
              />
              {errors.surname && <p class="error">{errors.surname}</p>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-item">
              <label htmlFor="">Təhsil</label>
              <input
                onChange={(e) => {
                  setEducation(e.target.value);
                }}
                type="text"
                name="education"
              />
              {errors.education && <p class="error">{errors.education}</p>}
            </div>

            <div className="form-item">
              <label htmlFor="">İş yeri</label>
              <input
                onChange={(e) => {
                  setWork(e.target.value);
                }}
                type="text"
                name="work"
              />
              {errors.work && <p class="error">{errors.work}</p>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-item">
              <label htmlFor="">Əlaqə nömrəsi</label>
              <input
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="text"
                name="phone"
              />
              {errors.phone && <p class="error">{errors.phone}</p>}
            </div>

            <div className="form-item">
              <label htmlFor=""> &nbsp;</label>
              <input type="text" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-item">
              <label htmlFor="">Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                name="email"
              />
              {errors.email && <p class="error">{errors.email}</p>}
            </div>
          </div>

          <div className="btn-row">
            <button className="btn-next">Növbəti</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FirstStep;
