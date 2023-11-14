import React, { useEffect } from 'react'
import './reservationsBody.css'

const ReservationsBody = () => {
    useEffect(() => {
        const checkWidth = () => {
          const infoText = document.querySelector('.info-text');
          if (infoText) {
            const textWidth = infoText.clientWidth;
            if (textWidth > 33.33) {
              infoText.classList.add('cut-words');
              console.log('greater')
            } else {
              infoText.classList.remove('cut-words');
              console.log('less')
            }
          }
        };
    
        // Initial check on component mount
        checkWidth();
    
        // Re-check on window resize
        window.addEventListener('resize', checkWidth);
    
        // Cleanup function
        return () => {
          window.removeEventListener('resize', checkWidth);
        };
      }, []);

  return (
    <div className='reservations-body'>
      <div className="reservations-body-container">
        <div className="reservations-body-nav d-flex">
            <div className="reservations-active">
                Aktiv olan 
            </div>

            <div className="reservations-finished">
                Bitmiş
            </div>

            <div className="reservations-canceled">
                Ləğv olunmuş
            </div>
        </div>

        <div className="reservations-body-properties d-flex flex-column gap-3">
            <div className="reservation-card d-flex justify-content-between">
                <div className="reservation-card-img">
                    <img src="https://s3-alpha-sig.figma.com/img/d12f/a656/e99bd4984ba1e25bc6075ac43c6690d7?Expires=1701043200&Signature=hq6uae89OZd3Dv2-x3EPC3OjOCzs9EyR71nmIemTup8u9rV5J6P7a3OjVBhyHDRRSfLl1OCRDQMaD3cLoaHuhWDNzC1pOQ1oFotFjeF3DEMw~J5iR9WOWc2eVTyruN5XRLVOTq7tMwrqNRJLZ1u54rD7ToGCBCbU4o~gk37l1~6koK2gpBtqfekPTFbGYDklJgon3-T3COo2jVE8XBlEXnZrJjr3fAj9KYTCIi6KLkmly3jOu9ibU-utxeXg-0MHJVlTOqZYQ-hm~YfLi6cS2Nw139OZ8ghKMNJIGCYqWC~vG~rrFdxDUxCo-bjed5BVgdMldCOI8sh34AOiIG336Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>

                <div className="reservation-card-left d-flex justify-content-between">
                    <div className="reservation-card-info">
                        <div className="info-header d-flex gap-4 mt-2">
                            <div className="info-title">
                                <h5>Quba/Azərbaycan</h5>
                            </div>

                            <div className="info-rating d-flex">
                                <p className='mb-0'>4.7</p>

                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 21 20" fill="none">
                                    <path d="M10.3333 14.416L7.25001 16.7702C7.09723 16.8952 6.93057 16.9541 6.75001 16.9468C6.56946 16.9402 6.40973 16.8882 6.27084 16.791C6.13196 16.6938 6.02446 16.5618 5.94834 16.3952C5.87168 16.2285 5.86807 16.048 5.93751 15.8535L7.12501 11.9993L4.10418 9.85352C3.93751 9.7424 3.83334 9.59657 3.79168 9.41602C3.75001 9.23546 3.75696 9.06879 3.81251 8.91602C3.86807 8.76324 3.96529 8.62768 4.10418 8.50935C4.24307 8.39157 4.40973 8.33268 4.60418 8.33268H8.33334L9.54168 4.33268C9.61112 4.13824 9.7189 3.98879 9.86501 3.88435C10.0106 3.78046 10.1667 3.72852 10.3333 3.72852C10.5 3.72852 10.6561 3.78046 10.8017 3.88435C10.9478 3.98879 11.0556 4.13824 11.125 4.33268L12.3333 8.33268H16.0625C16.257 8.33268 16.4236 8.39157 16.5625 8.50935C16.7014 8.62768 16.7986 8.76324 16.8542 8.91602C16.9097 9.06879 16.9167 9.23546 16.875 9.41602C16.8333 9.59657 16.7292 9.7424 16.5625 9.85352L13.5417 11.9993L14.7292 15.8535C14.7986 16.048 14.7953 16.2285 14.7192 16.3952C14.6425 16.5618 14.5347 16.6938 14.3958 16.791C14.257 16.8882 14.0972 16.9402 13.9167 16.9468C13.7361 16.9541 13.5695 16.8952 13.4167 16.7702L10.3333 14.416Z" fill="#40918B"/>
                                </svg>
                            </div>
                        </div>

                        <div className="info-description">
                            <div className="info-rooms">
                                <p className='mb-0'>8 nəfər | 4 otaq | 2 tualet</p>
                            </div>

                            <div className="info-text mt-2">
                                <p className='mb-0'>The home is situated in a quiet and family friendly neighborhood with well manicured yards and sidewalks for leisure walking. The home's ...</p>
                            </div>
                        </div>

                        <div className="info-note">
                            <p className='mb-0'>14.06.2022 -19.06.2022 tarixlərində istirahət etdiniz</p>
                        </div>

                    </div>

                    <div className="reservation-card-more d-flex flex-column justify-content-between mt-2">
                        <div className="card-more-price d-flex">
                            <p>7 gecə / <span>490 azn</span></p>
                        </div>

                        <div className="price-more-button text-center mb-3">
                            Daha çox
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default ReservationsBody
