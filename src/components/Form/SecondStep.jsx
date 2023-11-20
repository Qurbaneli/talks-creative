import React, { useEffect, useState } from "react";
import ok from "../../assets/images/ok.svg";
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
  const [eventStatus, setEventStatus] = useState(false);
  const handleEvents = (e, item, city, event_date, event_name) => {
    if (item == 0) {
      setFirstEvent(e.target.value);
      const updatedDates = { ...eventDates, ["first"]: event_date };
      setEventDates(updatedDates);
      const updatedNames = { ...eventNames, ["first"]: event_name };
      setEventNames(updatedNames);
    } else if (item == 1) {
      setSecondEvent(e.target.value);
      const updatedDates = { ...eventDates, ["second"]: event_date };
      setEventDates(updatedDates);
      const updatedNames = { ...eventNames, ["second"]: event_name };
      setEventNames(updatedNames);
    }
    setCity(city);
  };

  useEffect(() => {
    if (firstEvent || secondEvent) {
      setEventStatus(true);
    } else {
      setEventStatus(false);
    }
  }, [firstEvent, secondEvent]);

  const register = (e) => {
    e.preventDefault();
    if (firstEvent || secondEvent) {
      setFormStep(3);
    }
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
          {region.map((element, item) => {
            return (
              <div key={item} className="form-radio">
                <h2>{element.cast_date}</h2>

                {element.data.map((el) => {
                  return (
                    <div key={el.id} className="form-item">
                      <label htmlFor={el.event_name}>{el.event_name}</label>
                      <input
                        id={el.event_name}
                        onChange={(e) => {
                          handleEvents(
                            e,
                            item,
                            el.city_name,
                            el.cast_date,
                            el.event_name
                          );
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
            <button disabled={!eventStatus ? true : false} className="btn-next">
              Növbəti
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SecondStep;
