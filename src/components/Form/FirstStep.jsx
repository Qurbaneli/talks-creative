import React from 'react'
import './style.scss'

function FirstStep({setFormStep,formStep}) {

  const nextStep=()=>{
    setFormStep(2)
  }
  return (
    <>
    <h1 className="form-title">Qeydiyyat</h1>
<div className="steps">
  <div className="step active">
    <div className="step-circle">1</div>
    <span>Şəxsi məlumatlar</span>
  </div>
  <div className="line"></div>
  <div className="step">
    <div className="step-circle">2</div>
    <span>Təlim seçimi</span>
  </div>
</div>

<div className="form-box">
  <form action="">

  
<div className="form-row">
  <div className="form-item">
    <label htmlFor="">Ad</label>
    <input type="text" name="ad"/>
  </div>

  <div className="form-item">
    <label htmlFor="">Soyad</label>
    <input type="text" name="surname"/>
  </div>
</div>

<div className="form-row">
  <div className="form-item">
    <label htmlFor="">Təhsil</label>
    <input type="text"  name="education"/>
  </div>

  <div className="form-item">
    <label htmlFor="">İş yeri</label>
    <input type="text" name="work"/>
  </div>
</div>

<div className="form-row">
  <div className="form-item">
    <label htmlFor="">Əlaqə nömrəsi</label>
    <input type="text" name="phone"/>
  </div>

  <div className="form-item">
    <label htmlFor=""> &nbsp;</label>
    <input type="text" />
  </div>
</div>

<div className="form-row">
  <div className="form-item">
    <label htmlFor="">Email</label>
    <input type="email" name="email"/>
  </div>
</div>

<div className="btn-row">
  <button onClick={nextStep} className="btn-next" type="submit">Növbəti</button>
</div>
</form>
</div></>
  )
}

export default FirstStep