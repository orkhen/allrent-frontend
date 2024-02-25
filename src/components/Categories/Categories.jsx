import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './categories.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Categories = () => {
  const categories = [
    'Villa',
    'Lüks villa',
    'Hovuzlu villa',
    'A-frame',
    'Kontenyer',
    'Şənlik üçün ev',
    'Kənd evi',
    'Bina evi',
    'Kooperativ',
    'Dənizkənarı evlər',
    'Bağ evləri',
    'Hovuzlu həyət evləri'
  ];

  const navigate = useNavigate();

  const navigateToCategory = useCallback((category) => {
    navigate(`/search?category=${encodeURIComponent(category)}`);
  }, [navigate]);

  return (
    <div className='categories'>
      <div className='categories-container'>
        <div className='categories-header'>
          <h4>Kateqoriyalar</h4>
        </div>

          <div className='categories-buttons'>
            <Splide options={{ type: 'slide',perPage: 4, rewind: false, drag: 'free', speed: 3000, gap: 0, arrows: false, pagination: false }}>
              {categories.map((category, index) => (
                <SplideSlide key={index}>
                  <a href='#' onClick={(e) => {e.preventDefault();navigateToCategory(category)}}>
                    <div className='categories-button'>{category}</div>
                  </a>
                </SplideSlide>
              ))}
            </Splide>
          </div>
      </div>
    </div>
  );
};

export default Categories;
