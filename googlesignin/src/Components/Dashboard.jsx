/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { UserData } from '../Context/User'; 
export default function Dashboard() {
  const { user } = useContext(UserData); 

  return (
    <div>
      <h1>Dashboard</h1>
      <br /><br />
        <div>
          <h3>Welcome</h3>
          <p style={{paddingTop : '10px'}}>{user.name}</p><br />
        </div>    
    </div>
  );
}
