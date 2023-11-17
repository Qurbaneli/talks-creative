import React, { useState } from "react";
import ok from "../../assets/images/ok.svg";
import api from "../../api/api";
import "./style.scss";

function Result() {
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
            register(e);
          }}
          action=""
        >
        
        <div className="result-box">

            <div className="result-row">
            <div className="result-item">
                <span className="result-title">Ad</span>
                <span className="result-value">Jhon</span>
            </div>

            <div className="result-item">
                <span className="result-title">Soyad</span>
                <span className="result-value">Doe</span>
            </div>
            </div>

            <div className="result-row">
            <div className="result-item">
                <span className="result-title">Təhsil</span>
                <span className="result-value">Bakalavr</span>
            </div>

            <div className="result-item">
                <span className="result-title">İş yeri</span>
                <span className="result-value">Mas Solution</span>
            </div>
            </div>

            <div className="result-row">
            <div className="result-item">
                <span className="result-title">Seçilmiş səhər</span>
                <span className="result-value">Baki</span>
            </div>

            <div className="result-item">
                <span className="result-title">Secilmiş tarix</span>
                <span className="result-value">12 noyabr</span>
            </div>

            </div>

            <div className="result-row">
            <div className="result-item">
                <span className="result-title">Secilmiş tədbir</span>
                <span className="result-value">Yaradıcı Kinematoqrafiya: Ssenaridən ekrana</span>
            </div>
            </div>


        </div>


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

export default Result;
