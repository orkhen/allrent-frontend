import React, { useEffect, useState, useContext } from 'react'
import './propertyInputsGeneral.css'
import { PropertyPostContext } from '../../../pages/PropertyPostPage/PropertyPostPage'

const PropertyInputsGeneral = () => {
    const { switchStep, step } = useContext(PropertyPostContext)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [checkedCheckboxes, setCheckedCheckboxes] = useState('')

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
        validate()
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
        validate()
    }

    const handleCheckboxes = (e) => {
        e.target.checked ? setCheckedCheckboxes(e.target.value) : setCheckedCheckboxes('') 
    }

    const validate = () => {
        const isValid = title !== '' && description !== '' && checkedCheckboxes !== ''
        return isValid
    }

    useEffect(() => {
        const checkboxes = document.querySelectorAll('.category-checkbox input[type="checkbox"]');
    
        checkboxes.forEach((checkbox) => {
          checkbox.addEventListener('change', () => {
            checkboxes.forEach((otherCheckbox) => {
              if (otherCheckbox !== checkbox) {
                otherCheckbox.checked = false;
              }
            });
          });
        });
      }, []);
    
    useEffect(() => {
    if (step === 2) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    }, [step]);

  return (
    <div className={`property-inputs-general d-flex justify-content-center ${step !== 2 ? 'hide' : 'slide-top'}`}>
      <div className="property-inputs-general-container property-post-container d-flex flex-column">
        <div className="inputs-property-title">
            <h4>Obyekt başlığı</h4>

            <textarea placeholder='Obyekt başlığını daxil edin' value={title} onChange={handleTitleChange}></textarea>  
        </div>

        <div className="inputs-property-description">
            <h4>Obyektin ətraflı təsvirini verin</h4>

            <textarea placeholder='Obyektin ətraflı təsvirini verin' value={description} onChange={handleDescriptionChange}></textarea>
        </div>

        <div className="inputs-property-categories">
            <h4>Uyğun kateqoriyanı seçin</h4>

            <div className="categories-checkboxes">
                <div className="category-checkbox">
                    <input id="category1" type="checkbox" value="Villa" name="category" onChange={handleCheckboxes} />
                    <label for="category1">Villa</label>
                </div>

                <div className="category-checkbox">
                    <input id="category1" type="checkbox" value="Konteyner" name="category" onChange={handleCheckboxes} />
                    <label for="category1">Konteyner</label>
                </div>

                <div className="category-checkbox">
                    <input id="category1" type="checkbox" value="Kooperativ" name="category" onChange={handleCheckboxes} />
                    <label for="category1">Kooperativ</label>
                </div>

                <div className="category-checkbox">
                    <input id="category1" type="checkbox" value="Lüks villa" name="category" onChange={handleCheckboxes} />
                    <label for="category1">Lüks villa</label>
                </div>

                <div className="category-checkbox">
                    <input id="category1" type="checkbox" value="Şənlik üçün ev" name="category" onChange={handleCheckboxes} />
                    <label for="category1">Şənlik üçün ev</label>
                </div>

                <div className="category-checkbox">
                    <input id="category1" type="checkbox" value="Hotel" name="category" onChange={handleCheckboxes} />
                    <label for="category1">Hotel</label>
                </div>

                <div className="category-checkbox">
                    <input id="category1" type="checkbox" value="Hovuzlu villa" name="category" onChange={handleCheckboxes} />
                    <label for="category1">Hovuzlu villa</label>
                </div>

                <div className="category-checkbox">
                    <input id="category1" type="checkbox" value="Kənd evi" name="category" onChange={handleCheckboxes} />
                    <label for="category1">Kənd evi</label>
                </div>
            </div>
        </div>

        <div className="inputs-property-buttons d-flex flex-row">
            <div className="button-back d-flex align-items-start gap-2" onClick={() => switchStep(-1)}>
                <p className='m-0'>Geri</p>
            </div>

            <div className={`button-next d-flex align-items-start gap-2 ${validate() && 'enabled'}`} onClick={() => validate() && switchStep(1)}>
                <p className='m-0'>Davam et</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyInputsGeneral
