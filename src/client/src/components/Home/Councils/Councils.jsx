import React, { useState, useEffect } from 'react';
import Card from './Card/Card';
import './Councils.css';

const Councils = () => {
  const [councils, setCouncils] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/councils');
      const data = await response.json();
      setCouncils(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div id='homeCouncils' className='container councils d-flex flex-column justify-content-center align-items-center mt-5 mb-5'>
      <h1 className='conHead position-relative d-inline-block pb-4'>Councils</h1>
      <div className='cards d-flex flex-row flex-wrap justify-content-center align-items-center'>
        {councils.map((council) => (
          <Card key={council.id} imgUrl={council.imgUrl} title={council.title} linkUrl={council.linkUrl} />
        ))}
      </div>
    </div>
  );
}

export default Councils;



// import React from 'react'
// import Card from './Card/Card'
// import './Councils.css'

// const Councils = (props) => {
//     const arr = [
//     {
//       'Title' : 'Tech Council',
//       'linkUrl': 'https://sac.iitpkd.ac.in:8090/technical',
//       'imgUrl' :'techn.jpeg'
      
//     },
//     {
//       'Title' : 'Hostel Council',
//       'linkUrl': 'https://sac.iitpkd.ac.in:8090/hostel',
//       'imgUrl' : 'https://imgs.search.brave.com/BMuYABP7oP4l8HymmSOQIH30nF_YQMtJm-y7Bz-vc6Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA'
//    },
//     {
//       'Title' : 'Cultural Council',
//       'linkUrl': 'https://sac.iitpkd.ac.in:8090/cultural',
//       'imgUrl' : 'https://imgs.search.brave.com/BMuYABP7oP4l8HymmSOQIH30nF_YQMtJm-y7Bz-vc6Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA'
//     },
//     {
//       'Title' : 'Sports Council',
//       'linkUrl': 'https://sac.iitpkd.ac.in:8090/sports',
//       'imgUrl' : 'https://imgs.search.brave.com/BMuYABP7oP4l8HymmSOQIH30nF_YQMtJm-y7Bz-vc6Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA'
//     },
//     {
//       'Title' : 'Acad Council',
//       'linkUrl': 'https://sac.iitpkd.ac.in:8090/academic',
//       'imgUrl' : 'https://imgs.search.brave.com/BMuYABP7oP4l8HymmSOQIH30nF_YQMtJm-y7Bz-vc6Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA'
//     },
//     {
//       'Title' : 'Acad Council',
//       'linkUrl': 'https://sac.iitpkd.ac.in:8090/academic',
//       'imgUrl' : 'https://imgs.search.brave.com/BMuYABP7oP4l8HymmSOQIH30nF_YQMtJm-y7Bz-vc6Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA'
//     },
//   ]
//   return (
//     <div id='homeCouncils' className='container councils d-flex flex-column justify-content-center align-items-center mt-5 mb-5'>
//     <h1 className='conHead position-relative d-inline-block pb-4'>Councils</h1>
//     <div className='cards d-flex flex-row flex-wrap justify-content-center align-items-center'>
//       {
//         arr.map((obj,i)=>(
//             <Card imgUrl = {obj.imgUrl} title = {obj.Title} linkUrl = {obj.linkUrl}/>
//         ))
//       }
//     </div>
//     </div>
//   )
// }

// export default Councils