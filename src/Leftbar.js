import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import './sidebar.css'
import SettingsIcon from '@mui/icons-material/Settings';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';
import BlindIcon from '@mui/icons-material/Blind';
import BusAlertIcon from '@mui/icons-material/BusAlert';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import ConstructionIcon from '@mui/icons-material/Construction';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import ElderlyWomanIcon from '@mui/icons-material/ElderlyWoman';
import FingerprintIcon from '@mui/icons-material/Fingerprint';



const Sidebar = () => {
  const menuItems = [
    {
      title: "Hospital Setting",
      url: "/",
    },
    {
      title: "Employee Master",
      url: "/about",
    },
    {
      title: "Set Hospital Charge",
      url: "/products",
    },
    {
      title: "Nurse Roster",
      url: "/contact",
    },
    {
        title: "Add Consent Form",
        url: "/contact",
      },
      {
        title: "TPA",
        url: "/contact",
      },
      {
        title: "Room Management",
        url: "/contact",
      },
      {
        title: "Discharge Summary",
        url: "/contact",
      },
      {
        title: "Misc. Services Mapping",
        url: "/contact",
      },
      {
        title: "Vaccination",
        url: "/contact",
      },
      {
        title: "Nurse Station",
        url: "/contact",
      },
      {
        title: "Patient Demographic",
        url: "/contact",
      },
  ];

  const cardItems = [
    {
      name: "Create New User",
      icon: <PersonAddAltIcon sx={{fontSize:"90px"}} />,
    },
    {
        name: "Add New Service Head",
        icon: <VolunteerActivismIcon sx={{fontSize:"90px"}} />,
      },
      {
        name: "Add New Service Head",
        icon: <AddShoppingCartIcon sx={{fontSize:"90px"}} />,
      },
      {
        name: "Add New Service Head",
        icon: <AssistWalkerIcon sx={{fontSize:"90px"}} />,
      },
      {
        name: "Add New Service Head",
        icon: <BlindIcon sx={{fontSize:"90px"}} />,
      },
      {
        name: "Add New Service Head",
        icon: <BusAlertIcon sx={{fontSize:"90px"}} />,
      },
      {
        name: "Add New Service Head",
        icon: <ChildFriendlyIcon sx={{fontSize:"90px"}} />,
      },
      {
        name: "Add New Service Head",
        icon: <ConstructionIcon sx={{fontSize:"90px"}} />,
      },
      {
        name: "Add New Service Head",
        icon: <ElderlyWomanIcon sx={{fontSize:"90px"}} />,
      },
      {
        name: "Add New Service Head",
        icon: <CoronavirusIcon sx={{fontSize:"90px"}} />,
      },
  ];

  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const handleAccordionChange = (index) => {
    setExpandedAccordion(index === expandedAccordion ? null : index);
  };

  return (
    <div  className="nav_bar_main">
      <div className="nav_bar">
       <div className="master"><span>Master</span></div>
        <ul>
          {menuItems.map((menuItem, index) => (
            <li key={index}>
              <Accordion
              dividerColor="black"
              sx={{ backgroundColor: "rgb(33, 117, 190)",  borderBottom: '1px solid black',color:"white" }}
            className="accord"
               square="true"
                expanded={index === expandedAccordion}
                onChange={() => handleAccordionChange(index)}
              >
                <AccordionSummary
                expandIcon={
                    <ArrowForwardIosSharpIcon
                      fontSize="smal"
                      className={`icon ${
                        index === expandedAccordion && "iconExpanded"
                      }`}
                      />
                    }
                >
                    <span><SettingsIcon sx={{fontSize:"18px",marginRight:"10px"}}/></span>
                    <div className="menu_items">{menuItem.title}</div>
                  
                 
                </AccordionSummary>
                <AccordionDetails>
                 <div>1. URL Link</div>
                 <div>2. URL Link</div>
                 <div>3. URL Link</div>
                 <div>4. URL Link</div>
                 <div>5. URL Link</div>
                </AccordionDetails>              
              </Accordion>
             {/* <div className="accordion-bar"></div> */}
            </li>
          ))}
        </ul>
      </div>
      <div className="right_content">
     {
        cardItems.map((item)=>
        {
            return(
                 <Cards name={item.name} icon={item.icon}/>
            )
        })
     }
     
    
      </div>
    </div>
  );
};

export default Sidebar;

const Cards = ({name,icon}) => {
    return (
      <div className="card">
        <div className="card_icon"><div className="inner_icon">{icon}</div></div>  
       <div className="card_name">{name}</div>  
       
      </div>
    )
  }