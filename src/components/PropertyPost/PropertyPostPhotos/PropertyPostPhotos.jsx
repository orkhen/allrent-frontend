import React, { useEffect, useContext } from 'react'
import './propertyPostPhotos.css'
import { PropertyPostContext } from '../../../pages/PropertyPostPage/PropertyPostPage'

const PropertyPostPhotos = () => {
  const { switchStep, step, setData, data } = useContext(PropertyPostContext)

  const photos_1 = [
    'Örtük şəkli yükləyin*',
    'Yataq otağı şəkli yükləyin*'
  ]

  const photos_2 = [
    'Qonaq otağı şəkli yükləyin*',
    'Hamam otağı şəkli yükləyin*',
    'Mətbəx şəkli yükləyin*'
  ]

  useEffect(() => {
    if (step === 7) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    }, [step]);

  return (
    <div className={`property-post-photos d-flex justify-content-center ${step !== 7 ? 'hide' : 'slide-top'}`}>
      <div className="property-post-photos-container property-post-container d-flex flex-column mb-5">
        <div className="property-photos-title">
          <h4>Obyektinizin şəkillərini əlavə edin</h4>
          <p className='mb-0 mt-3'>Hər başlıq üçün maksimum 5 şəkil yükləyə bilərsiniz</p>
        </div>

        <div className="property-photos">
          <div className="property-photos-row1">
            {photos_1.map((photoName, index) => {
              return (
              <div key={index} className="property-photo noselect">
                <div className="photo-holder text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                    <path d="M35.999 43C29.919 43 24.999 38.08 24.999 32C24.999 25.92 29.919 21 35.999 21C42.079 21 46.999 25.92 46.999 32C46.999 38.08 42.079 43 35.999 43ZM35.999 27C33.239 27 30.999 29.24 30.999 32C30.999 34.76 33.239 37 35.999 37C38.759 37 40.999 34.76 40.999 32C40.999 29.24 38.759 27 35.999 27Z" fill="#1D1D1D"/>
                    <path d="M60.001 91.001H36.001C14.281 91.001 5.00098 81.721 5.00098 60.001V36.001C5.00098 14.281 14.281 5.00098 36.001 5.00098H52.001C53.641 5.00098 55.001 6.36098 55.001 8.00098C55.001 9.64098 53.641 11.001 52.001 11.001H36.001C17.561 11.001 11.001 17.561 11.001 36.001V60.001C11.001 78.441 17.561 85.001 36.001 85.001H60.001C78.441 85.001 85.001 78.441 85.001 60.001V40.001C85.001 38.361 86.361 37.001 88.001 37.001C89.641 37.001 91.001 38.361 91.001 40.001V60.001C91.001 81.721 81.721 91.001 60.001 91.001Z" fill="#1D1D1D"/>
                    <path d="M85 23.001H63C61.36 23.001 60 21.641 60 20.001C60 18.361 61.36 17.001 63 17.001H85C86.64 17.001 88 18.361 88 20.001C88 21.641 86.64 23.001 85 23.001Z" fill="#1D1D1D"/>
                    <path d="M74.001 34C72.361 34 71.001 32.64 71.001 31V9C71.001 7.36 72.361 6 74.001 6C75.641 6 77.001 7.36 77.001 9V31C77.001 32.64 75.641 34 74.001 34Z" fill="#1D1D1D"/>
                    <path d="M10.6792 78.7993C9.71922 78.7993 8.75922 78.3193 8.19922 77.4793C7.27922 76.1193 7.63922 74.2393 8.99922 73.3193L28.7192 60.0793C33.0392 57.1993 38.9992 57.5193 42.9192 60.8393L44.2392 61.9993C46.2392 63.7193 49.6392 63.7193 51.5992 61.9993L68.2392 47.7193C72.5192 44.0793 79.1592 44.0793 83.4392 47.7193L89.9592 53.3193C91.1992 54.3993 91.3592 56.2793 90.2792 57.5593C89.1992 58.7993 87.3192 58.9593 86.0392 57.8793L79.5192 52.2793C77.5192 50.5593 74.1192 50.5593 72.1592 52.2793L55.5192 66.5593C51.2792 70.1993 44.5992 70.1993 40.3192 66.5593L38.9992 65.3993C37.1592 63.8393 34.1192 63.6793 32.0792 65.0793L12.3992 78.3193C11.8392 78.6393 11.2392 78.7993 10.6792 78.7993Z" fill="#1D1D1D"/>
                  </svg>

                  <p className='mb-0 mt-4'>{photoName}</p>
                </div>
              </div>            
            )})}
          </div>

          <div className="property-photos-row2">
            {photos_2.map((photoName, index) => {
                return (
                <div key={index} className="property-photo noselect">
                  <div className="photo-holder text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                      <path d="M35.999 43C29.919 43 24.999 38.08 24.999 32C24.999 25.92 29.919 21 35.999 21C42.079 21 46.999 25.92 46.999 32C46.999 38.08 42.079 43 35.999 43ZM35.999 27C33.239 27 30.999 29.24 30.999 32C30.999 34.76 33.239 37 35.999 37C38.759 37 40.999 34.76 40.999 32C40.999 29.24 38.759 27 35.999 27Z" fill="#1D1D1D"/>
                      <path d="M60.001 91.001H36.001C14.281 91.001 5.00098 81.721 5.00098 60.001V36.001C5.00098 14.281 14.281 5.00098 36.001 5.00098H52.001C53.641 5.00098 55.001 6.36098 55.001 8.00098C55.001 9.64098 53.641 11.001 52.001 11.001H36.001C17.561 11.001 11.001 17.561 11.001 36.001V60.001C11.001 78.441 17.561 85.001 36.001 85.001H60.001C78.441 85.001 85.001 78.441 85.001 60.001V40.001C85.001 38.361 86.361 37.001 88.001 37.001C89.641 37.001 91.001 38.361 91.001 40.001V60.001C91.001 81.721 81.721 91.001 60.001 91.001Z" fill="#1D1D1D"/>
                      <path d="M85 23.001H63C61.36 23.001 60 21.641 60 20.001C60 18.361 61.36 17.001 63 17.001H85C86.64 17.001 88 18.361 88 20.001C88 21.641 86.64 23.001 85 23.001Z" fill="#1D1D1D"/>
                      <path d="M74.001 34C72.361 34 71.001 32.64 71.001 31V9C71.001 7.36 72.361 6 74.001 6C75.641 6 77.001 7.36 77.001 9V31C77.001 32.64 75.641 34 74.001 34Z" fill="#1D1D1D"/>
                      <path d="M10.6792 78.7993C9.71922 78.7993 8.75922 78.3193 8.19922 77.4793C7.27922 76.1193 7.63922 74.2393 8.99922 73.3193L28.7192 60.0793C33.0392 57.1993 38.9992 57.5193 42.9192 60.8393L44.2392 61.9993C46.2392 63.7193 49.6392 63.7193 51.5992 61.9993L68.2392 47.7193C72.5192 44.0793 79.1592 44.0793 83.4392 47.7193L89.9592 53.3193C91.1992 54.3993 91.3592 56.2793 90.2792 57.5593C89.1992 58.7993 87.3192 58.9593 86.0392 57.8793L79.5192 52.2793C77.5192 50.5593 74.1192 50.5593 72.1592 52.2793L55.5192 66.5593C51.2792 70.1993 44.5992 70.1993 40.3192 66.5593L38.9992 65.3993C37.1592 63.8393 34.1192 63.6793 32.0792 65.0793L12.3992 78.3193C11.8392 78.6393 11.2392 78.7993 10.6792 78.7993Z" fill="#1D1D1D"/>
                    </svg>

                    <p className='mb-0 mt-4'>{photoName}</p>
                  </div>
                </div>            
              )})}
          </div>
        </div>

        <div className="inputs-property-buttons d-flex justify-content-between mb-5">
            <div className="button-back d-flex align-items-start gap-2" onClick={() => switchStep(-1)}>
                <p className='m-0'>Geri</p>
            </div>

            <div className={`button-next d-flex align-items-start gap-2 ${'enabled'}`} onClick={() => switchStep(1)}>
                <p className='m-0'>Davam et</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyPostPhotos