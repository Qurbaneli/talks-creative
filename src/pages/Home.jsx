import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/images/logo.svg";
import api from "../api/api";
import "./style.scss";

import Modal from "../components/Modal/Modal";
import Map from "../components/Map";
import SecondStep from "../components/Form/SecondStep";
import FirstStep from "../components/Form/FirstStep";
import Result from "../components/Form/Result";
import Message from "../components/Form/Message";

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const[registerMessage,setRegisterMessage]=useState(false)
  const [region, setRegion] = useState([]);

  //Form inputs
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState("");
  const [work, setWork] = useState("");

  const [firstEvent, setFirstEvent] = useState("");
  const [secondEvent, setSecondEvent] = useState("");
  const [city, setCity] = useState("");
  const initialEventDates = { first: "", second: "" };
  const initialEventNames = { first: "", second: "" };

  const [eventDates, setEventDates] = useState({ first: "", second: "" });
  const [eventNames, setEventNames] = useState({ first: "", second: "" });

  const openModal = (id) => {
   
    getRegion(id);
    // console.log(id);
  };

  const getRegion = async (id) => {
    try {
      const response = await api.get(`/region/${id}/events`);

      setRegion(response.data);
      console.log(response.data);
      if (response.data.length > 0) {
        setModalIsOpen(true);
        document.querySelector(".modal-overlay").scrollIntoView();
      } else {
        toast.info("Tədbir olması planlaşdırılır", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    setFormStep(1);
    clearStates();
    setModalIsOpen(false);
  };

  const clearStates = () => {
    setName("");
    setSurname("");
    setEmail("");
    setPhone("");
    setEducation("");
    setWork("");

    setFirstEvent("");
    setSecondEvent("");

    setEventDates(initialEventDates);
    setEventNames(initialEventNames);
    setCity("")
  };

 const registerButton=()=>{
    setRegisterMessage(true)
 }
  return (
    <div className="container">
      <ToastContainer autoClose={2000} hideProgressBar={false} />

      <div id="main">
        <div className="logo-text">
          <div className="logo">
            <img src={logo} alt="logo talks-creative" />
          </div>

          <div className="text-detail">
            <p>
              “Yaradıcı müzakirələr” layihəsi paytaxt və regionlarda yaradıcı
              sənayelər sahəsində yeni istedadların aşkar olunması məqsədilə
              keçirilir. Layihə çərçivəsində 2023-cü ilin noyabr-dekabr
              aylarında 10-dan çox klaster üzrə 100 tədbir keçiriləcək.
              Tədbirlər 10 şəhər və rayonda – Bakı, Sumqayıt, Şamaxı, Şəki,
              Mingəçevir, Gəncə, Quba, Lənkəran, Naxçıvan, Şuşada təşkil
              olunacaq. Tədbirlər ustad dərsləri, tanınmış insanlarla görüşlər
              və təlimlərdən ibarət olacaq.{" "}
            </p>
            <button onClick={registerButton} className="btn-register">Qeydiyyat</button>
            {registerMessage && <p className="register-message">Xəritədən şəhər seçin</p>}
          </div>
        </div>
        <Map openModal={openModal}/>
      </div>

      {formStep == 1 && (
        <Modal variant={true} isOpen={modalIsOpen} closeModal={closeModal}>
          <FirstStep
            name={name}
            setName={setName}
            surname={surname}
            setSurname={setSurname}
            education={education}
            setEducation={setEducation}
            work={work}
            setWork={setWork}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
            formStep={formStep}
            setFormStep={setFormStep}
          />
        </Modal>
      )}
      {formStep == 2 && (
        <Modal variant={false} isOpen={modalIsOpen} closeModal={closeModal}>
          <SecondStep
            region={region}
            formStep={formStep}
            setFormStep={setFormStep}
            name={name}
            setName={setName}
            surname={surname}
            setSurname={setSurname}
            education={education}
            setEducation={setEducation}
            work={work}
            setWork={setWork}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
            firstEvent={firstEvent}
            setFirstEvent={setFirstEvent}
            secondEvent={secondEvent}
            setSecondEvent={setSecondEvent}
            city={city}
            setCity={setCity}
            eventDates={eventDates}
            setEventDates={setEventDates}
            eventNames={eventNames}
            setEventNames={setEventNames}
          />
        </Modal>
      )}
      {formStep == 3 && (
        <Modal variant={true} isOpen={modalIsOpen} closeModal={closeModal}>
          <Result
            region={region}
            formStep={formStep}
            setFormStep={setFormStep}
            name={name}
            setName={setName}
            surname={surname}
            setSurname={setSurname}
            education={education}
            setEducation={setEducation}
            work={work}
            setWork={setWork}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
            firstEvent={firstEvent}
            setFirstEvent={setFirstEvent}
            secondEvent={secondEvent}
            setSecondEvent={setSecondEvent}
            city={city}
            setCity={setCity}
            eventDates={eventDates}
            setEventDates={setEventDates}
            eventNames={eventNames}
            setEventNames={setEventNames}
          />
        </Modal>
      )}

      {formStep == 4 && (
        <Modal
          variant={true}
          message={true}
          isOpen={modalIsOpen}
          closeModal={closeModal}
        >
          <Message
            region={region}
            formStep={formStep}
            setFormStep={setFormStep}
            name={name}
            setName={setName}
            surname={surname}
            setSurname={setSurname}
            education={education}
            setEducation={setEducation}
            work={work}
            setWork={setWork}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
          />
        </Modal>
      )}
    </div>
  );
}

export default Home;
