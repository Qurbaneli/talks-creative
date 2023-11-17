import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ok from "../../assets/images/ok.svg"
import api from "../../api/api";
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
}) {
  const [events, setEvents] = useState([]);

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

    api
      .post("https://api-talks.creative.az/api/register/events", {
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
          toast.success("Qeydiyyatdan kecdiniz", {
            position: toast.POSITION.TOP_CENTER
          });
        }
      });
  };
  return (
    <>
    <ToastContainer autoClose={2000} hideProgressBar={false}/>
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
