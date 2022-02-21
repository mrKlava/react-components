import React from 'react'

function Card(props) {
  return (
    <div className="card">
      <div className="front">
        <div className="content">
          front
        </div>
      </div>
      <div className="back">
        <div className="content">
          back
        </div>
      </div>
    </div>
  );
}

export default Card