import React from 'react'
import './propertyPost.css'

const PropertyPost = () => {
  return (
    <div className='property-post d-flex justify-content-center'>
      <div className="property-post-container d-flex flex-column mt-5">
        <div className="property-post-upper d-flex">
            <div className="property-post-content">
                <div className="property-post-header">
                    <h4>Obyektinizi Allrent-də paylaşın</h4>
                </div>

                <div className="property-post-description">
                    <p>
                        Mənzilini yerləşdirməyə elə indi başla. Uzun çəkməyəcək və detalları əlavə etdikcə necə rahat olduğunu görəcəksən. Allrent sənə bir neçə rahatlıq təklif edir.
                    </p>
                </div>

                <div className="property-post-points d-flex flex-column">
                    <div className="property-post-point d-flex gap-3">
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.2203 0.377493C15.5643 0.683258 15.5953 1.20999 15.2895 1.55397L6.40063 11.554C6.24249 11.7319 6.01582 11.8337 5.77779 11.8337C5.53975 11.8337 5.31309 11.7319 5.15495 11.554L0.710501 6.55397C0.404736 6.20998 0.43572 5.68326 0.779706 5.37749C1.12369 5.07173 1.65042 5.10271 1.95618 5.4467L5.77779 9.746L14.0438 0.446698C14.3496 0.102712 14.8763 0.0717284 15.2203 0.377493Z" fill="#FE4343"></path>
                        </svg>

                        <p>
                            Rahat mənzil yerləşdirmə imkanı
                        </p>
                    </div>

                    <div className="property-post-point d-flex gap-3">
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.2203 0.377493C15.5643 0.683258 15.5953 1.20999 15.2895 1.55397L6.40063 11.554C6.24249 11.7319 6.01582 11.8337 5.77779 11.8337C5.53975 11.8337 5.31309 11.7319 5.15495 11.554L0.710501 6.55397C0.404736 6.20998 0.43572 5.68326 0.779706 5.37749C1.12369 5.07173 1.65042 5.10271 1.95618 5.4467L5.77779 9.746L14.0438 0.446698C14.3496 0.102712 14.8763 0.0717284 15.2203 0.377493Z" fill="#FE4343"></path>
                        </svg>

                        <p>
                            Təqvimin idarəsi
                        </p>
                    </div>

                    <div className="property-post-point d-flex gap-3">
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.2203 0.377493C15.5643 0.683258 15.5953 1.20999 15.2895 1.55397L6.40063 11.554C6.24249 11.7319 6.01582 11.8337 5.77779 11.8337C5.53975 11.8337 5.31309 11.7319 5.15495 11.554L0.710501 6.55397C0.404736 6.20998 0.43572 5.68326 0.779706 5.37749C1.12369 5.07173 1.65042 5.10271 1.95618 5.4467L5.77779 9.746L14.0438 0.446698C14.3496 0.102712 14.8763 0.0717284 15.2203 0.377493Z" fill="#FE4343"></path>
                        </svg>

                        <p>
                            Ödənişin birbaşa hesaba köçürülməsi
                        </p>
                    </div>
                </div>
            </div>

            <div className="property-post-image">
                <div className="property-post-image-container">
                    <img src="https://allrent.io/homepage/images/home_upload/static/banner_home_upload.jpg" alt="Banner" loading='lazy'/>
                </div>
            </div>
        </div>

        <div className="property-post-lower d-flex justify-content-end">
            <button className="property-post-button" onClick={() => {}}>
                Obyekt paylaş
            </button>
        </div>
      </div>
    </div>
  )
}

export default PropertyPost
