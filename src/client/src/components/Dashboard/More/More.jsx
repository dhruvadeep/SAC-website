// import React, { useState, useEffect } from 'react';
// import { FaHome, FaRegCalendar, FaBars } from 'react-icons/fa';
// import { HiAnnotation, HiDotsHorizontal } from 'react-icons/hi';
// import { IoPeopleSharp } from 'react-icons/io5';
// import { GiAerialSignal } from 'react-icons/gi';
// import { Link } from 'react-router-dom';


// const MoreLayout = () => {    
//     const [isLeftVisible, setIsLeftVisible] = useState(true);
//     const [isMoreExpanded, setIsMoreExpanded] = useState(true);

//     const handleHamburgerClick = () => {
//         setIsLeftVisible(!isLeftVisible);
//     };

//     const handleMoreClick = () => {
//         setIsMoreExpanded(!isMoreExpanded);
//     };

//     useEffect(() => {
//         const changeDisplay = () => {
//             const lftmnu = document.querySelector('.leftMenu');
//             if (window.innerWidth < 1440) {
//                 lftmnu.style.backgroundColor = 'white';
//                 lftmnu.style.height = '5rem';
//                 lftmnu.style.width = '5rem';
//                 setIsLeftVisible(false);
//             } else {
//                 lftmnu.style.backgroundColor = 'white';
//                 lftmnu.style.height = '100%';
//                 lftmnu.style.width = '20rem';
//                 setIsLeftVisible(true);
//             }
//         };

//         changeDisplay();

//         const handleResize = () => {
//             if (window.innerWidth < 1440) {
//                 setIsLeftVisible(false);
//             }
//             changeDisplay();
//         };

//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     return (
//         <div className="leftMenu">
//             <div className="leftHamburg" onClick={handleHamburgerClick}>
//                 <FaBars size={40} />
//             </div>
//             <div className="dash-left" style={{ display: isLeftVisible ? 'inline-flex' : 'none', width: '20rem', left: 0 }}>
//                 <div id="navbarText" style={{ paddingBottom: '1rem', width: 'inherit' }}>
//                     <span className="navbar-text active" style={{ color: 'black', fontSize: '140%', paddingLeft: '5rem' }}>
//                         Student Affairs Council
//                         <p style={{ fontSize: '58%', paddingLeft: '5rem' }}>Indian Institute of Technology Palakkad</p>
//                     </span>
//                 </div>
//                 <div className="d-inline-flex" style={{ backgroundColor: 'rgb(250 199 170)', width: 'inherit' }}>
//                     <ul className="nav flex-column" style={{ width: 'inherit', paddingLeft: '0rem' }}>
//                         <Link className="dropdown-item" to="/dashboard">
//                             <li className="dash-dashboard lylist lylistmid nav-item" style={{ borderTop: '1px solid #e2dbdb' }}>
//                                 <FaHome size={35} style={{ margin: '0rem 0.8rem' }} />
//                                 Dashboard
//                             </li>
//                         </Link>
//                         <Link className="dropdown-item" to="/clubs">
//                             <li className='dash-clubs lylist lylistmid nav-item'>
//                                 <IoPeopleSharp size={35} style={{ margin: '0rem 0.8rem' }} />
//                                 Clubs
//                             </li>
//                         </Link>

//                         <Link className="dropdown-item" to="/announcements">
//                             <li className='dash-Announcements lylist lylistmid nav-item' >
//                                 <HiAnnotation size={35} style={{ margin: '0rem 0.8rem' }} />
//                                 Announcements
//                             </li>
//                         </Link>

//                         <Link className="dropdown-item" to="/calendar" >
//                             <li className='dash-calendar lylist lylistmid nav-item' >
//                                 <FaRegCalendar size={35} style={{ margin: '0rem 0.8rem' }} />
//                                 Calendar
//                             </li>
//                         </Link>

//                         <Link className="dropdown-item" to="/live-events">
//                             <li className='dash-live-events lylist lylistmid nav-item' >
//                                 <GiAerialSignal size={35} style={{ margin: '0rem 0.8rem' }} />
//                                 Live Events
//                             </li>
//                         </Link>

//                         <Link className="dropdown-item" to="/opportunities">
//                             <li className='dash-opporunities lylist lylistmid nav-item' >
//                                 <GiAerialSignal size={35} style={{ margin: '0rem 0.8rem' }} />
//                                 Opportunities
//                             </li>
//                         </Link>

//                         <Link className="dropdown-item" to="/more">
//                             <li className='dash-more lylist nav-item' style={{ backgroundColor:'rgb(243 130 33)' }} onClick={handleMoreClick}>
//                                 <HiDotsHorizontal size={35} style={{ margin: '0rem 0.8rem' }} />
//                                 More
                           
//                             </li>
//                         </Link>

//                         {isMoreExpanded && (
//                             <>
//                                 <Link className="dropdown-item" to="/static-data">
//                                     <li className="dash-more lylist nav-item" >
//                                         Static Data
//                                     </li>
//                                 </Link>
//                                 <Link className="dropdown-item" to="/budget-tracking">
//                                     <li className="dash-more lylist nav-item" >
                                       
//                                         Budget Tracking
//                                     </li>
//                                 </Link>
//                                 <Link className="dropdown-item" to="/project-approval">
//                                     <li className="dash-more lylist nav-item" >
                                        
//                                         Project Approval
//                                     </li>
//                                 </Link>
//                             </>
//                         )}
                        
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MoreLayout;




import React from 'react'
import LayoutLeft from '../Layout/LayoutLeft/LayoutLeft'
import LayoutRight from '../Layout/LayoutRight/LayoutRight'

const More = () => {
  return (
        <div className='d-flex flex-row'>
            <div style={{ width: '20rem' }}>
                <LayoutLeft ele='more' />
                
            </div>
            <div className='' style={{ width: '40rem', margin: '10rem 4rem', textAlign: 'justify'}}>
                
            </div>
            <div style={{ width: '20rem' }}>
                <LayoutRight />
            </div>
        </div>
    )
}

export default More