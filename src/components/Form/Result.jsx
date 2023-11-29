import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import posterModal from "../../assets/images/bigposter.jpg";
import ok from "../../assets/images/ok.svg";
import api from "../../api/api";
import "./style.scss";
import { MainContext, useContext } from "../../context";

function Result() {
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
    condition,
    setCondition,
  } = useContext(MainContext);

  const saveData = async (e) => {
    e.preventDefault();
    var events = [];
    if (firstEvent) {
      events.push(firstEvent);
    }
    if (secondEvent) {
      events.push(secondEvent);
    }

    try {
      const response = await api.post("/register/events", {
        participant: {
          first_name: name,
          last_name: surname,
          phone: phone,
          email: email,
          education: education,
          workplace: work,
        },
        events: events,
      });
      // console.log(response);
      if (response.status == 200 || response.status == 201) {
        setFormStep(4);
      }
    } catch (error) {
      toast.error("Xəta baş verdi", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(error);
    }
  };

  const handleCondition = () => {
    setCondition(!condition);
  };

  return (
    <>
      <div className="poster">
        <img src={posterModal} alt="talks-creative-poster" />
      </div>
      <div className="form-content">
        <ToastContainer autoClose={2000} hideProgressBar={false} />
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
                  <span className="result-value">
                    {eventDates.first}{" "}
                    {eventDates.first && eventDates.second && ","}
                    {eventDates.second && eventDates.second}
                  </span>
                </div>
              </div>

              <div className="result-row">
                <div className="result-item">
                  <span className="result-title">Secilmiş tədbir</span>
                  <span className="result-value">
                    {eventNames.first &&
                      eventNames.first + " - " + eventDates.first}
                  </span>
                  {eventNames.second && (
                    <span className="result-value second">
                      {eventNames.second} - {eventDates.second}
                    </span>
                  )}
                </div>
              </div>
              {city === "Quba" ? (
                <p className="note">
                  Bir təlimin (görüş/ustad dərs) müddəti 2 saatdır
                </p>
              ) : (
                <p className="note">
                  Bir təlimin (görüş/ustad dərs) müddəti 1 saat 30 dəqiqədir
                </p>
              )}
              <div className="condition">
                <p>
                  {" "}
                  <input onChange={handleCondition} type="checkbox" />
                  Fərdi məlumatlarımın "Fərdi məlumatlar haqqında" Azərbaycan
                  Respublikasının Qanununa və digər normativ hüquqi aktların
                  tələblərinə uyğun olaraq, Azərbaycan Respublikasının
                  Mədəniyyət Nazirliyinə ötürülməsinə, habelə Azərbaycan
                  Respublikasının Mədəniyyət Nazirliyi tərəfindən istifadəsinə
                  razılıq verirəm.
                </p>
              </div>
            </div>

            <div className="btn-row">
              <button disabled={!condition ? true : false} className="btn-next">
                Göndər
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Result;
