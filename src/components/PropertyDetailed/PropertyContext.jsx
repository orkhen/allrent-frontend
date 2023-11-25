import React, { createContext, useState } from 'react';

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <PropertyContext.Provider value={{ isCalendarOpen, setIsCalendarOpen }}>
      {children}
    </PropertyContext.Provider>
  );
};
