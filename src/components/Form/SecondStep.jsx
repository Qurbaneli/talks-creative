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
  setEvents,
  city,
  setCity,
  eventDate,
  setEventDate,
  eventName,
  setEventName
  
}) {
  
const[eventError,setEventError]=useState("")
  const handleEvents = (e,city,event_date,event_name) => {
    if (!events.includes(e.target.value)) {
      setEvents([...events, e.target.value]);
      setCity(city)
      setEventDate(event_date)
      setEventName(event_name)
      console.log(events);
    }
  };
  const register = (e) => {
    e.preventDefault();
    if(events.length>0)
    {
      setFormStep(3)
    }
    else
    {
      setEventError("Zəhmət olmasa təlim seçin")
    }    
    

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
          {eventError && (<p className="error error-event">{eventError}</p>)}
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
                          handleEvents(e,el.city_name,el.cast_date,el.event_name);
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
            <button className="btn-next" >
              Növbəti
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SecondStep;
