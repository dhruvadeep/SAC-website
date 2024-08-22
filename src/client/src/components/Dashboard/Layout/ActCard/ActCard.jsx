import React from 'react'

const ActCard = (props) => {
    return (
        <div className='d-flex flex-row' style={{ width: '18rem', borderLeft: '8px solid orange', paddingLeft: '1rem',margin:'2.5rem 0rem' }}>
            <div class="">
                <img src={props.imgUrl} class="rounded-circle" alt="..." style={{ width: '3rem', height: '3rem' }} />
            </div>
            <div className='cont' style={{ marginLeft: '1rem' }}>
                <div style={{ fontSize: '110%' }}>
                    {props.name} <span style={{ color: 'rgb(129, 124, 124)' }}>has replied on</span> <span style={{ fontWeight: 'bolder' }}>
                        {props.club}
                    </span>
                </div>
                <div>{props.content}</div>
            </div>
        </div>
    )
}

export default ActCard
