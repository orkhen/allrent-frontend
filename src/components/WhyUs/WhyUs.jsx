import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './whyus.css'

const WhyUs = () => {
  return (
    <div className='whyus d-flex'>
      <div className='whyus-container d-flex flex-column align-items-center'>
        <div className='whyus-header text-center'>
            <h1>
                Niyə Allrent ilə  rezervasiya etməliyəm ?
            </h1>
        </div>

        <div className='whyus-elements'>
            <div className='elements-container d-flex flex-row'>
                <div className='whyus-element'>
                    <div>
                        <img src='https://allrent.io/homepage/images/onlinesvg1.svg'/>
                    </div>

                    <div>
                        <h4>
                            Uyğun büdcə
                        </h4>
                    </div>

                    <div>
                        <p>
                            Uyğun büdcəyə daha çox mənzil, daha çox şərait, daha çox dəyər
                        </p>
                    </div>
                </div>

                <div className='whyus-element'>
                    <div>
                        <img src='https://allrent.io/homepage/images/online2.svg'/>
                    </div>

                    <div>
                        <h4>
                            Onlayn rezervasiya
                        </h4>
                    </div>

                    <div>
                        <p>
                            Onlayn rezervasiya zamanı 24/7 texniki dəstək
                        </p>
                    </div>
                </div>

                <div className='whyus-element'>
                    <div>
                        <img src='https://allrent.io/homepage/images/online3.svg'/>
                    </div>

                    <div>
                        <h4>
                            Rezervasiyanın ləğvi
                        </h4>
                    </div>

                    <div>
                        <p>
                            Rezervasiya ləğvi zamanı ödənişin geri qaytarılması
                        </p>
                    </div>
                </div>

                <div className='whyus-element'>
                    <div>
                        <img src='https://allrent.io/homepage/images/online4.svg'/>
                    </div>

                    <div>
                        <h4>
                            Uyğun büdcə
                        </h4>
                    </div>

                    <div>
                        <p>
                            Rieltor, əmlak agentlikləri və sosial şəbəkələrdən mənzil axtarmağa ehtiyyacın qalmaması
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className='whyus-slideshow'>
            <Carousel className='whyus-carousel' indicators={false} controls={false} interval={3000}>
                <Carousel.Item>
                    <div className='text-center'>
                        <div>
                            <img src='https://allrent.io/homepage/images/onlinesvg1.svg'/>
                        </div>

                        <div>
                            <h4>
                                Vaxta qənaət
                            </h4>
                        </div>

                        <div>
                            <p>
                                Uyğun büdcəyə daha çox mənzil, daha çox şərait, daha çox dəyər
                            </p>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className='text-center'>
                        <div>
                            <img src='https://allrent.io/homepage/images/online2.svg'/>
                        </div>

                        <div>
                            <h4>
                                Onlayn rezervasiya
                            </h4>
                        </div>

                        <div>
                            <p>
                                Onlayn rezervasiya zamanı 24/7 texniki dəstək
                            </p>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className='text-center'>
                        <div>
                            <img src='https://allrent.io/homepage/images/online3.svg'/>
                        </div>

                        <div>
                            <h4>
                                Rezervasiyanın ləğvi
                            </h4>
                        </div>

                        <div>
                            <p> 
                                Rezervasiya ləğvi zamanı ödənişin geri qaytarılması
                            </p>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className='text-center'>
                        <div>
                            <img src='https://allrent.io/homepage/images/online4.svg'/>
                        </div>

                        <div>
                            <h4>
                                Vaxta qənaət
                            </h4>
                        </div>

                        <div>
                            <p>
                                Rieltor, əmlak agentlikləri və sosial şəbəkələrdən mənzil axtarmağa ehtiyyacın qalmaması
                            </p>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
