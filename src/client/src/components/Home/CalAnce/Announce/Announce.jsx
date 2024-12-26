import React, { useState, useEffect } from 'react';
import './Announce.css';

const Announce = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/announcements');
      const data = await response.json();
      setAnnouncements(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='homeAnnounce d-flex flex-column mt-5 mb-5'>
      <div className='homeAnnTitdiv'>
        <h1 className='homeAnnHead position-relative d-inline-block pb-4'>Announcements</h1>
      </div>
      <ul className='homeAnnList mt-4'>
        {announcements.map((announcement, index) => (
          <li key={index}><span>{announcement.content}</span></li>
        ))}
      </ul>
    </div>
  );
}

export default Announce;


// import React from 'react'
// import './Announce.css'

// const Announce = () => {
//   return (
//     <div className='homeAnnounce d-flex flex-column mt-5 mb-5'>
//     <div className='homeAnnTitdiv'>
//       <h1 className='homeAnnHead position-relative d-inline-block pb-4'>Announcements</h1>
//     </div>
//       <ul className='homeAnnList mt-4'>
//       <li><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae hic est voluptates sequi expedita itaque!</span></li>
//       <li><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, doloremque. Omnis delectus dolores cum aliquid!</span></li>
//       <li><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, doloremque. Omnis delectus dolores cum aliquid!</span></li>
//       <li><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, doloremque. Omnis delectus dolores cum aliquid!</span></li>
//       </ul>
//     </div>
//   )
// }

// export default Announce