import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './SideNavigation.css';
import { GrUserAdmin } from "react-icons/gr";

export const SideNav = () => {
  const navigate = useNavigate();
  
 
  
  const handlecomplaintsClick = () => {
    navigate('/GetComplaints');
  };
  const handleTipsClick = () => {
    navigate('/Farmingtips');
  };

  return (
    <nav className="SideNav">
      <ul><li classnmae='admin'fontsize='large'>
      <GrUserAdmin size={50} />
     <h1>Admin</h1>
    
      </li>
        <li>
          <NavLink to="/GetComplaints" activeClassName="active">
           Complaints
          </NavLink>
        </li>
        <li>
          <NavLink to="/Farmingtips" activeClassName="active">
           FarmingTips
          </NavLink>
        </li>
      
      </ul>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    
     <p> 
      In Winter's Chill Or Summer's Heat,<br></br>A Farmer Works so that the World Can eat...!
      </p>
    </nav>
    

  );
};

export default SideNav;
