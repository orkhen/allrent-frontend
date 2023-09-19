import React from 'react'
import './propertyCategory.css'


const PropertyCategory = () => {
  return (
  <div className="property-detailed-category d-flex justify-content-between">
      <div className="property-detailed-category-text my-auto">
          <h5>A-frame</h5>
      </div>

      <div className="property-detailed-price">
          <p>
              <svg width="15" height="15" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 15V8C1 6.67392 1.52678 5.40215 2.46447 4.46447C3.40215 3.52678 4.67392 3 6 3C7.32608 3 8.59785 3.52678 9.53553 4.46447C10.4732 5.40215 11 6.67392 11 8V15M6 1V15" stroke="#35605E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              222 <span> / gecə</span>
          </p>
      </div>

  </div>
  )
}



export default PropertyCategory
