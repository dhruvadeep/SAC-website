import React, { useState, useEffect } from 'react';
import LayoutLeft from '../../Layout/LayoutLeft/LayoutLeft';
import LayoutRight from '../../Layout/LayoutRight/LayoutRight';
import StaticDataComponent from './StaticDataComponent';

const StaticData = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/items');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='d-flex flex-row'>
      <div style={{ width: '20rem' }}>
        <LayoutLeft ele='statdat' />
      </div>
      <div className='d-flex justify-content-center' style={{ width: 'calc(100% - 43rem)' }}>
        <div className='' style={{ width: '50rem', margin: '3rem 1rem', textAlign: 'justify' }}>
          <div className='staticDataHead' style={{ marginLeft: '5rem' }}>
            <h1>Static Data</h1>
          </div>
          <div className="staticDataContainer container">
            {items.map(item => (
              <div className="anncCont mt-5" key={item.heading}>
                <StaticDataComponent heading={item.heading} overview={item.overview} link={item.link} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ width: '20rem' }}>
        <LayoutRight />
      </div>
    </div>
  );
}

export default StaticData;


