/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
export const UserData = createContext();


export default function User({ children }) {
  const [user, setUser] = useState();

  return (
    <UserData.Provider value={{ user, setUser }}>
      {children}
    </UserData.Provider>
  );
}
