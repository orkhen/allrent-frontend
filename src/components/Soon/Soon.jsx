import React from 'react'
import './soon.css'

const Soon = () => {
  return (
    <div className='soon'>
      <div className="soon-container d-flex">
        <div className="soon-left">
            <div className="soon-left-header">
                <h4>Allrent-də Tezliklə</h4>
            </div>

            <div className="soon-left-text">
                <li><span>Rezervasiya məbləğini hissə-hissə ödəmək imkanı</span></li>
                <li><span>İstirahət müddətində storilər paylaşa bilmə imkanı</span></li>
                <li><span>Xəritə vasitəsi ilə yaxınlıqda olan evləri rahat rezerv
                    etmək imkanı</span>
                </li>
            </div>
        </div>

        <div className="soon-right">
            <div className="soon-right-img">
                <img src='https://allrent.io/homepage/images/allrentsection.png' alt=''/>
            </div>
        </div>
      </div>
    </div>
  )
}


export default Soon
