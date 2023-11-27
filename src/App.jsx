import React, { useState } from "react";
import Home from "./pages/Home";
import { MainContext } from "./context";
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [registerMessage, setRegisterMessage] = useState(false);
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

  const [eventDates, setEventDates] = useState({ first: "", second: "" });
  const [eventNames, setEventNames] = useState({ first: "", second: "" });
  const [condition, setCondition] = useState(false);

  const [errors, setErrors] = useState("");
  const [eventStatus, setEventStatus] = useState(false);

  const data = {
    modalIsOpen,
    setModalIsOpen,
    formStep,
    setFormStep,
    registerMessage,
    setRegisterMessage,
    region,
    setRegion,
    name,
    setName,
    surname,
    setSurname,
    email,
    setEmail,
    phone,
    setPhone,
    education,
    setEducation,
    work,
    setWork,
    firstEvent,
    setFirstEvent,
    secondEvent,
    setSecondEvent,
    city,
    setCity,
    eventDates,
    setEventDates,
    eventNames,
    setEventNames,
    condition,
    setCondition,
    errors,
    setErrors,
    eventStatus,
    setEventStatus,
  };
  return (
    <MainContext.Provider value={data}>
      <Home />
    </MainContext.Provider>
  );
}

export default App;
