import React from 'react'

const BalCard = (props) => {
    return (
        <div className='totBal d-flex flex-column' style={{ width: '100%', border: '1px solid black', borderRadius: '1rem' }}>
            <div className='totbalHead d-flex flex-row justify-content-between align-items-center' style={{ width: '100%', padding: '0.85rem', borderBottom: '1px solid black' }}>
                <div>
                    <p className='my-0'>{props.type}</p>
                </div>
                <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: '#3d3d3d', color: 'white', borderRadius: '2rem' }}>
                        All time
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
            <div style={{ padding: '0.85rem' }}>
                <p className='my-0' style={{fontWeight:'bold'}}>Rs. 1,80,000.00 </p>
            </div>
        </div>
    )
}

export default BalCard
