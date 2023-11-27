import React, { useEffect, useState } from "react";
import ok from "../../assets/images/ok.svg";
import posterModal from "../../assets/images/bigposter.jpg";
import location from "../../assets/images/location.svg";
import clock from "../../assets/images/clock.svg";
import "./style.scss";
import { MainContext, useContext } from "../../context";

function SecondStep() {
  const {
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
    eventStatus,
    setEventStatus,
  } = useContext(MainContext);

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
      <div className="poster">
        <img src={posterModal} alt="talks-creative-poster" />
      </div>
      <div className="form-content">
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
                        <div className="form-item-detail">
                          <label htmlFor={el.event_name}>{el.event_name}</label>
                          <div className="clock-location">
                            {el.event_time && (
                              <span className="clock">
                                {" "}
                                <img src={clock} alt="clock" /> {el.event_time}
                              </span>
                            )}
                            {el.address && (
                              <span className="location">
                                <img src={location} alt="location" />{" "}
                                {el.address}
                              </span>
                            )}
                          </div>
                        </div>

                        <div>
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
                      </div>
                    );
                  })}
                </div>
              );
            })}

            <div className="btn-row">
              <button
                disabled={!eventStatus ? true : false}
                className="btn-next"
              >
                Növbəti
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SecondStep;
