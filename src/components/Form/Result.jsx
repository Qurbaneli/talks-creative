import React, {useState} from "react";
import ok from "../../assets/images/ok.svg";
import api from "../../api/api";
import "./style.scss";

function Result({
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
  city,
  setCity,
  eventDates,
  setEventDates,
  eventNames,
  setEventNames,
  firstEvent,
  setFirstEvent,
  secondEvent,
  setSecondEvent,
}) {

  const saveData = (e) => {
    e.preventDefault();
    var events=[firstEvent]
    console.log("Ikinci"+secondEvent)
    if(secondEvent)
    {
     console.log("ikinci var")
    events=[firstEvent,secondEvent]
    }
    else
    {
      console.log("ikinci yoxdur")
      events=[firstEvent]
    }
    console.log(name);
    console.log(surname);
    console.log(education);
    console.log(work);
    console.log(email);
    console.log(phone);

    api
      .post("/register/events", {
        participant: {
          first_name: name,
          last_name: surname,
          phone: phone,
          email: email,
          education: education,
          workplace: work,
        },
        events: events,
      })
      .then((response) => {
        console.log(response)
        if(response.status==200 || response.status==201)
        {
          setFormStep(4)
        }
      });
  };

  return (
    <>
      <h1 className="form-title">Qeydiyyat</h1>
      <div className="steps">
        <div className="step active">
          <div className="step-circle">
            <img src={ok} alt="" />
          </div>
          <span>Şəxsi məlumatlar</span>
        </div>
        <div className="line"></div>
        <div className="step active">
          <div className="step-circle">
            <img src={ok} alt="" />
          </div>
          <span>Təlim seçimi</span>
        </div>
      </div>

      <div className="form-box">
        <form
          onSubmit={(e) => {
            saveData(e);
          }}
          action=""
        >
        
        <div className="result-box">

            <div className="result-row">
            <div className="result-item">
                <span className="result-title">Ad</span>
                <span className="result-value">{name}</span>
            </div>

            <div className="result-item">
                <span className="result-title">Soyad</span>
                <span className="result-value">{surname}</span>
            </div>
            </div>

            <div className="result-row">
            <div className="result-item">
                <span className="result-title">Təhsil</span>
                <span className="result-value">{education}</span>
            </div>

            <div className="result-item">
                <span className="result-title">İş yeri</span>
                <span className="result-value">{work}</span>
            </div>
            </div>

            <div className="result-row">
            <div className="result-item">
                <span className="result-title">Seçilmiş səhər</span>
                <span className="result-value">{city}</span>
            </div>

            <div className="result-item">
                <span className="result-title">Secilmiş tarix</span>
                <span className="result-value">{eventDates.first} {eventDates.second && ","+eventDates.second}</span>
            </div>

            </div>

            <div className="result-row">
            <div className="result-item">
                <span className="result-title">Secilmiş tədbir</span>
                <span className="result-value">{eventNames.first}</span>
                {eventNames.second && (<span className="result-value second">{eventNames.second}</span>)}
            </div>
            </div>


        </div>


          <div className="btn-row">
            <button className="btn-next">
              Göndər
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Result;
