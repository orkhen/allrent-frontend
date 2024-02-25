import React, { useContext } from 'react'
import './propertyPermits.css'
import { PropertyContext } from '../PropertyContext';

const PropertyPermits = () => {
    const { property } = useContext(PropertyContext);
    const permissions = property.permissions;

    // console.log(permissions)

  return (
    <div className="property-detailed-permits">
        <div className="permits-header">
            <h5>İcazələr</h5>
        </div>

        <div className="permits-icons d-flex gap-3 flex-wrap">
            {permissions.map((permission, index) => (
                <div className={permission.status ? "permits-icon-true" : "permits-icon-false"}>
                    <img class="details-name-favorite" src={permission.status ? permission.img_1 : permission.img_2} alt="permit icon"/>
                    <span className="permits-description">{permission.name_az}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PropertyPermits
