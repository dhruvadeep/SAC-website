import React from 'react'
import './Footer.css'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer p-3' style={{zIndex:'1'}}>
      <div className='mid d-flex flex-row'>
        <div className='drct d-flex flex-column' style={{width:'50%',paddingLeft:'2rem',paddingTop:'2rem'}}>
              <span style={{fontSize: '200%', marginBottom : '0rem' , marginLeft: '-2rem'}}>
              Student Affairs Council
              <p style={{ fontSize: '58%'}}>Indian Institute of Technology Palakkad</p>
              </span>
        </div>
        <div className='adrs d-flex justify-content-end' style={{width:'50%',float:'right'}}>
          <span style={{fontSize: '150%' }}>
            <p className='d-flex justify-content-end' style={{ fontSize: '130%', marginBottom: '0' }}>Address</p>
            <p className='d-flex justify-content-end' style={{ fontSize: '80%', marginBottom: '0' }}>Indian Institute of Technology Palakkad</p>
            <p className='d-flex justify-content-end' style={{ fontSize: '80%', marginBottom: '0' }}>Kanjikode | Palakkad</p>
            <p className='d-flex justify-content-end' style={{ fontSize: '80%', marginBottom: '0' }}>Kerala | Pin: 678623</p>
          </span>
        </div>
      </div>
      <div className='social d-flex justify-content-center mt-0' style={{textDecoration:'underline'}}>
      <FaGithub className='mx-3' size={30} style={{color:'white'}}/>
      <FaTwitter className='mx-3' size={30} style={{color:'white'}}/>
      <FaLinkedin className='mx-3' size={30} style={{color:'white'}}/>
      </div>
    </div>
  )
}

export default Footer;

