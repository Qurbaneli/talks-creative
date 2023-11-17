import React, { useState } from "react";
import ok from "../../assets/images/ok.svg"
import "./style.scss";

function SecondStep({
  setFormStep,
  formStep,
  region,
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
  events,
  setEvents
}) {
  

  const handleEvents = (e) => {
    if (!events.includes(e.target.value)) {
      setEvents([...events, e.target.value]);
      console.log(events);
    }
  };
  const register = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(surname);
    console.log(education);
    console.log(work);
    console.log(email);
    console.log(phone);
    
    setFormStep(3)

  };
  return (
    <>
      <h1 className="form-title">Qeydiyyat</h1>
      <div className="steps">
        <div className="step active">
          <div className="step-circle"><img src={ok} alt="" /></div>
          <span>Şəxsi məlumatlar</span>
        </div>
        <div className="line"></div>
        <div className="step active">
          <div className="step-circle">2</div>
          <span>Təlim seçimi</span>
        </div>
      </div>

      <div className="form-box">
        <form
          onSubmit={(e) => {
            register(e);
          }}
          action=""
        >
          {region.map((element) => {
            return (
              <div className="form-radio">
                <h2>{element.cast_date}</h2>

                {element.data.map((el) => {
                  return (
                    <div className="form-item">
                      <label htmlFor="">{el.event_name}</label>
                      <input
                        onChange={(e) => {
                          handleEvents(e);
                        }}
                        type="radio"
                        name={element.cast_date}
                        value={el.id}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}

          <div className="btn-row">
            <button className="btn-next" type="submit">
              Növbəti
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SecondStep;
