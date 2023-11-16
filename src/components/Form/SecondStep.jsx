import React from 'react'
import './style.scss'

function SecondStep({setFormStep,formStep}) {

    const nextStep=()=>{
        setFormStep(1)
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



<div className="form-radio">
  <div className="form-item">
    <label htmlFor="">Yaradıcı Kinematoqrafiya: Ssenaridən ekrana</label>
    <input type="radio" />
  </div>

  <div className="form-item">
    <label htmlFor="">Yaradıcı Kinematoqrafiya: Ssenaridən ekrana</label>
    <input type="radio" />
  </div>

  <div className="form-item">
    <label htmlFor="">Yaradıcı Kinematoqrafiya: Ssenaridən ekrana</label>
    <input type="radio" />
  </div>

  <div className="form-item">
    <label htmlFor="">Yaradıcı Kinematoqrafiya: Ssenaridən ekrana</label>
    <input type="radio" />
  </div>

  <div className="form-item">
    <label htmlFor="">Yaradıcı Kinematoqrafiya: Ssenaridən ekrana</label>
    <input type="radio" />
  </div>

  <div className="form-item">
    <label htmlFor="">Yaradıcı Kinematoqrafiya: Ssenaridən ekrana</label>
    <input type="radio" />
  </div>

</div>


<div className="btn-row">
  <button onClick={nextStep} className="btn-next" type="submit">Növbəti</button>
</div>
</form>
</div></>
  )
}

export default SecondStep