import React, { useState, useEffect } from 'react'
import './propertyPostPrice.css'

import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

const PropertyPostPrice = ({ step, switchStep, data }) => {
  const [price, setPrice] = useState(40)
  const [error, setError] = useState('')
  const [show, setShow] = useState(false)

  const navigate = useNavigate()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const total = price + (price * 0.1 )
  
  const handlePrice = (e) => {
    const val = e.target.value

    val < 40 ? setError('Günlük minimal məbləğ 40 AZN-dir') : setError('')

    setPrice(val)
  }

  const validate = () => {
    return (price >= 40)
  }

  useEffect(() => {
    if (step === 8) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    }, [step]);

  return (
    <div className={`property-post-price d-flex justify-content-center ${step !== 8 ? 'hide' : 'slide-top'}`}>
      <div className="property-post-price-container property-post-container d-flex flex-column mb-5">
        <div className="property-price-title">
          <h4>Obyektiniz üçün günlük qiyməti təyin edin</h4>
          <p className='mb-0 mt-3'>Qiyməti istədiyiniz zaman dəyişə bilərsiniz</p>
        </div>

        <div className="property-price-setter">
          <h5>Günlük qiyməti təyin edin</h5>

          <div className="price-setter-box">
            <input type="number" name="price" placeholder="40" value={price} onChange={handlePrice} />

            <p className={`mb-0 mt-2 ${error && 'price-error'}`}>{error ? error : `Sizin əldə edəcəyiniz məbləğ ${price} AZN-dir`}</p>
          </div>
        </div>

        <div className="property-price-rules d-flex flex-column gap-3">
          <h5>Hesablanma qaydası</h5>

          <div className="rules-box">
            <p>Sizin təyin etdiyiniz məbləğin üzərinə Allrent-in 10% komissiyası əlavə olunur.</p>
          </div>
        </div>

        <div className="property-price-preview">
          <div class="card">
            <img class="card-img-top" src="https://allrent.io/storage/mini_frame_house3-2fa5-b5e2-c56f-b290.webp" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">{data.location}/Azerbaijan</h5>
              <div className="info-mid">
                        <p>{data.guests} nəfər • {data.rooms} otaq • {data.bathrooms} tualet</p>
              </div>

              <div className="info-bottom d-flex justify-content-between">
                  <p className='m-0'>
                      <span className='card-price'>{parseInt(price, 10) + parseInt((price * 0.1), 10)} azn</span> 
                      <span className='card-price-per'>Günlük</span>
                  </p>
              </div>
            </div>
          </div>
        </div>

        <div className="inputs-property-buttons d-flex justify-content-between">
            <div className="button-back d-flex align-items-start gap-2" onClick={() => switchStep(-1)}>
                <p className='m-0'>Geri</p>
            </div>

            <div className={`button-next d-flex align-items-start gap-2 ${validate() && 'enabled'}`} onClick={() => validate() && handleShow()}>
                <p className='m-0'>Davam et</p>
            </div>
        </div>

        <Modal className='property-post-success-message' size='lg' show={show} onHide={handleClose} centered>
            {/* <Modal.Header closeButton /> */}
            <Modal.Body>
              <div className="success-img">
                <img src="https://s3-alpha-sig.figma.com/img/6741/c9dd/0af3656fbb0d09da7c323d8653052813?Expires=1701043200&Signature=qBd1RoGoV8sSy3uqdU9YdMwjZMZJIyPmcGzWuelaO-fPA4VE5d-cNFeKmWfSH~nzdAWF~OyMHQKzMG-LLcW2HaJl-F-kM3OiTVdnXpl1WOo~qe~WBogd-fcmP7zSm40YVKM22XuAFh0Ly2EfTjFdJS~bW8sKte8rfG9cH9ML~3pCtfwknO2gLN05mBshw8aXCc9Za6QNQAhWh2xMPOYnQOtBGnX97~66-ZpmmspMzrV3~Z1UMqvf5axQU4FLSi~OQqhdF8xzlUCa55mTM13AS0AfgoFBBSmDCDhAmM0hUdDmBIKxjRQLNHC7x98r16UBo5bT5I2M9g0PF007b~-n3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="success" />
              </div>

              <div className="success-text">
                <h5>Ev yerləşdirməniz müvəffəqiyyətlə bitmişdir</h5>
                <p className='mb-0'>Obyektiniz saytda Allrent komandası tərəfindən yoxlandıqdan sonra görünəcəkdir</p>
              </div>

              <div className="success-buttons">
                <div className="main-page-button" onClick={() => navigate('/')}>
                  Əsas səhifəyə keçid et
                </div>

                <div className="reservations-button">
                  Obyektlərim səhifəsinə keçid et
                </div>
              </div>
            </Modal.Body>
        </Modal>

      </div>
    </div>
  )
}

export default PropertyPostPrice
