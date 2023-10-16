import React from 'react'
import './Pending.css'

export default function Pending() {
  return (
    <div className='reqs-wrap' >
      <h2 className="req-head">Pending Requests: </h2>
      <ul className="list-group list-group-flush reqs-list">
      <li className="list-group-item  reqs-list">Cras justo odio</li>
      <li className="list-group-item  reqs-list">Dapibus ac facilisis in</li>
      <li className="list-group-item  reqs-list">Morbi leo risus</li>
      <li className="list-group-item reqs-list">Porta ac consectetur ac</li>
      <li className="list-group-item reqs-list">Vestibulum at eros</li>
    </ul>
    </div>
  )
}
