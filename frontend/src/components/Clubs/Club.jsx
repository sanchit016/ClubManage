import React from 'react';
import { Link } from 'react-router-dom'
export default function Club() {
  return (
    <div className="p-5 text-center bg-image rounded-3" style={{
      backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
      height: '400px',
      
    }}>
      <div className="masks" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', height:'100%'}}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">MagBoard</h1>
            <h4 className="mb-3">The place for Art and poetry</h4>
            <Link to='/studreq' className="btn btn-outline-light btn-lg" href="#!" role="button">Interested</Link>
          </div>
        </div>
      </div>
    </div>
  );
}


