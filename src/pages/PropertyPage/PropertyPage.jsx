import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import PageNav from '../../components/Navbar/Navbar';
import SearchbarProperty from '../../components/SearchbarProperty/SearchbarProperty';
import Placeholder from 'react-bootstrap/Placeholder';

import './propertypage.css'
import PropertyDetailed from '../../components/PropertyDetailed/PropertyDetailed';
import BottomNav from '../../components/BottomNav/BottomNav';
import PageFooter from '../../components/Footer/Footer';
import { AppContext } from '../../App';

import { PropertyProvider } from '../../components/PropertyDetailed/PropertyContext';

const PropertyPage = () => {
  const { windowWidth } = useContext(AppContext)
  const { propertyId } = useParams();

  const [property, setProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`https://allrent.io/api/api-properties?id=${propertyId}`);
        setProperty(response.data.properties[0])
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setIsLoading(false);
      };
    };

    fetchData();
  }, []);

  if (property === null) {
    return
  }

  console.log(property)
  const renderPlaceholder = () => {
    return (
      <div className="mb-4 properties-property">
        <div className="card">
          <Placeholder as="div" animation="glow">
            <Placeholder xs={12} className="card-img-top" />
          </Placeholder>
          <div className="card-body">
            <Placeholder as="h5" animation="glow">
              <Placeholder xs={7} />
            </Placeholder>
            <Placeholder as="p" animation="glow">
              <Placeholder xs={4} /> <Placeholder xs={8} />
            </Placeholder>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <PageNav hideBottomNav={true} />
      {windowWidth <= 768 && <SearchbarProperty/>}

      <PropertyProvider property={property}>
        <PropertyDetailed/>
      </PropertyProvider>

      <PageFooter/>
    </div>
  )
}

export default PropertyPage
