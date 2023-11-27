import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/images/logo.svg";
import api from "../api/api";
import "./style.scss";
import { MainContext, useContext } from "../context";

//Components
import Modal from "../components/Modal/Modal";
import Map from "../components/Map";
import SecondStep from "../components/Form/SecondStep";
import FirstStep from "../components/Form/FirstStep";
import Result from "../components/Form/Result";
import Message from "../components/Form/Message";

function Home() {
  const initialEventDates = { first: "", second: "" };
  const initialEventNames = { first: "", second: "" };

  const {
    registerMessage,
    setRegisterMessage,
    modalIsOpen,
    setModalIsOpen,
    region,
    setRegion,
    setCondition,
    formStep,
    setFormStep,
    setName,
    setSurname,
    setEmail,
    setPhone,
    setEducation,
    setWork,
    setFirstEvent,
    setSecondEvent,
    setEventDates,
    setEventNames,
    setCity,
  } = useContext(MainContext);

  const openModal = (id, status) => {
    if (status) {
      setCondition(false);
      if (formStep == 3) {
        setFormStep(2);
      }

      if (formStep == 4) {
        setName("");
        setSurname("");
        setEmail("");
        setPhone("");
        setEducation("");
        setWork("");
        setFormStep(1);
      }

      //Reset radio buttons
      var radioButtons = document.querySelectorAll("input[type='radio']");
      radioButtons.forEach((el) => {
        el.checked = false;
      });

      getRegion(id);
      //Clear States
      setFirstEvent("");
      setSecondEvent("");

      setEventDates(initialEventDates);
      setEventNames(initialEventNames);
      setCity("");
    } else {
      toast.info("Qeydiyyat tezliklə başlayacaq", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  useEffect(() => {
    if (modalIsOpen) {
      document
        .querySelector(".modal-overlay")
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [modalIsOpen, region]);

  const getRegion = async (id) => {
    try {
      const response = await api.get(`/region/${id}/events`);
      setRegion(response.data);
      if (response.data.length > 0) {
        setModalIsOpen(true);
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
    setCity("");
  };

  const registerButton = () => {
    setRegisterMessage(true);
  };
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
            <button onClick={registerButton} className="btn-register">
              Qeydiyyat
            </button>
            {registerMessage && (
              <p className="register-message">Xəritədən şəhər seçin</p>
            )}
          </div>
        </div>
        <Map openModal={openModal} />
      </div>

      {formStep == 1 && (
        <Modal variant={true} isOpen={modalIsOpen} closeModal={closeModal}>
          <FirstStep />
        </Modal>
      )}
      {formStep == 2 && (
        <Modal variant={false} isOpen={modalIsOpen} closeModal={closeModal}>
          <SecondStep />
        </Modal>
      )}
      {formStep == 3 && (
        <Modal variant={true} isOpen={modalIsOpen} closeModal={closeModal}>
          <Result />
        </Modal>
      )}

      {formStep == 4 && (
        <Modal
          variant={true}
          message={true}
          isOpen={modalIsOpen}
          closeModal={closeModal}
        >
          <Message />
        </Modal>
      )}
    </div>
  );
}

export default Home;
