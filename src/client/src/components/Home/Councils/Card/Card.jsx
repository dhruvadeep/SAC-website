import React from 'react';


const Card = (props) => {

  const handleClick = () => {
    if (props.linkUrl) {
      window.history.pushState(null, null, window.location.href);
      window.location.href = props.linkUrl;
    } else {
      console.error("linkUrl is undefined");
    }
  };

  return (
    <div className="card crd" style={{ width: '22rem', height: '20rem', margin: '2rem 1.5rem 0rem' }} onClick={handleClick}>
      <img src={props.imgUrl} className="card-img-top crdimg" alt="..." style={{ width: '22rem', height: '16rem' }} />
      <div className="card-body crdtit">
        <p className="card-text" style={{ textAlign: 'center', fontSize: '150%' }}>{props.title}</p>
      </div>
    </div>
  );
};

export default Card;
