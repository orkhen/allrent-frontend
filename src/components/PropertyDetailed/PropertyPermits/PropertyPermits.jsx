import React from 'react'
import './propertyPermits.css'

const PropertyPermits = () => {
  return (
    <div className="property-detailed-permits">
        <div className="permits-header">
            <h5>İcazələr</h5>
        </div>

        <div className="permits-icons d-flex gap-3 flex-wrap">
            <div className="permits-icon-true">
                <img class="details-name-favorite" src="https://allrent.io/homepage/images/svg/details/animal_perm_true.svg" alt="permit icon"/>
                <span className="permits-description">Ev heyvanları gətirilməsinə icazə var</span>
            </div>

            <div className="permits-icon-true">
                <img class="details-name-favorite" src="https://allrent.io/homepage/images/svg/details/children_perm_true.svg" alt="permit icon"/>
                <span className="permits-description">Uşaqlar üçün uyğundur</span>
            </div>

            <div className="permits-icon-false">
                <img class="details-name-favorite" src="https://allrent.io/homepage/images/svg/details/marriage_perm_false.svg" alt="permit icon"/>
                <span className="permits-description">Nikah şəhadətnaməsi zəruri deyil</span>
            </div>

            <div className="permits-icon-true">
                <img class="details-name-favorite" src="https://allrent.io/homepage/images/svg/details/cigarette_perm_true.svg" alt="permit icon"/>
                <span className="permits-description">Siqarət çəkilməsinə icazə verilir</span>
            </div>

            <div className="permits-icon-true">
                <img class="details-name-favorite" src="https://allrent.io/homepage/images/svg/details/party_perm_true.svg" alt="permit icon"/>
                <span className="permits-description">Şənliklər üçün uyğundur</span>
            </div>
            
        </div>
    </div>
  )
}

export default PropertyPermits
