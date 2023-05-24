import React,{useState} from 'react';

import {

FaBars,

FaUserAlt,

FaThList,

} from "react-icons/fa";

import { NavLink } from 'react-router-dom';
import './SideBar_Supplier.css';



const SideBar_Supplier = ({children}) => {

const[isOpen ,setIsOpen] = useState(false);

const toggle = () => setIsOpen (!isOpen);

const menuItem=[

{
path:"/Advertisements",
name:"Advertise",
 icon:<FaUserAlt/>
},

{
path:"/",

name:"Crop Recieved",

icon:<FaThList/>

},

]

return (

<div className="container">

<div style={{width: isOpen ? "200px" : "50px"}} className="Sidebar_Supplier">

<div className="top_section">

<h1 style={{display: isOpen ? "block" : "none"}} className="logo1">Supplier</h1>

<div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">

<FaBars onClick={toggle}/>

</div>

</div>

{
menuItem.map((item, index)=>(

<NavLink to={item.path} key={index} className="link" activeclassName="active">
<div className="icon">{item.icon}</div>
<div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
</NavLink>
))
}
</div>
<main>{children}</main>
</div>
);
};

export default SideBar_Supplier;