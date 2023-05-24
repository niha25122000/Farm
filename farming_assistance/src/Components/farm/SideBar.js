import React from 'react';
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { NavLink, useNavigate } from 'react-router-dom';
import { GiFarmer } from "react-icons/gi";
import './SideBar.css';

export const SideBar = () => {
  const navigate = useNavigate();
  //const [showMenu, setShowMenu] = useState(false);
  
    // const toggleMenu = () => {
    //   setShowMenu(!showMenu);
    // };
  const handleSellCropsClick = () => {
    navigate('/GETSellCrops');
  };
  
  // const handleAcceptedCropsClick = () => {
  //   navigate('/EditCropModal');
  // };
  const handleAdvertisementsClick = () => {
    navigate('/ViewAdvertisements');
  };
  const handlecomplaintsClick = () => {
    navigate('/Viewcomplaints');
  };
  const handleTipsClick = () => {
    navigate('/ViewFarmingTips');
  };

  return (
   
    <nav className="Sidebar">
      <ul>
        <li>
          <GiFarmer size={65}/>
        <h1> Farmer</h1>
         
          
        </li>
        <li>
          <NavLink to="/GETSellCrops" activeClassName="active">
           Sell Crops
          </NavLink>
        </li>
        <li>
          <NavLink to="/ViewComplaints" activeClassName="active">
            Complaints
          </NavLink>
        </li>
        <li>
          <NavLink to="/ViewAdvertisements" activeClassName="active">
           Advertisements
          </NavLink>
        </li>
        <li>
          <NavLink to="/ViewFarmingTips" activeClassName="active">
          Farming Tips
          </NavLink>
        </li>
      </ul>
    </nav>
    

  );
};

export default SideBar;
