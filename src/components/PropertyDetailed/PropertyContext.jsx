import React, { createContext, useState } from 'react';

export const PropertyContext = createContext();

export const PropertyProvider = ({ children, property }) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <PropertyContext.Provider value={{ isCalendarOpen, setIsCalendarOpen, property }}>
      {children}
    </PropertyContext.Provider>
  );
};
