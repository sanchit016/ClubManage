import React from 'react'
import './Features.css'
export default function Features() {
  return (
    <div>
      <div className="py-5 service-11">
        <div className='features-head'  ><h1 className="display-4" style={{ color: '#21e6c1', fontWeight:'400' }}>Our Features</h1>
        <p className="lead mb-0" style={{ color: 'white' }}>Know about are family</p>
        </div>
        
    <div className="container mt-0">
        <div className="row">
            <div className="col-md-4 wrap-service11-box"  >
                <div className="card card-shadow border-0 mb-4" style={{ backgroundColor: '#278ea5' }}>
                    <div className="p-4">
                        <div className="icon-space">
                        <div className="icon-round text-center d-inline-block rounded-circle " style={{ backgroundColor: '#1f4287' }}><i className="fa-solid fa-user-plus" ></i></div>
                        
                        </div>
                        <h5 className="font-weight-medium" style={{ color: 'white', fontWeight:'900' }}>Members</h5>
                        <p className="mt-3" style={{ color: 'white' }}>
                            We have a team of 20+ members!
                        </p>
                        
                    </div>
                </div>
            </div>
            <div className="col-md-4 wrap-service11-box">
                <div className="card card-shadow border-0 mb-4" style={{ backgroundColor: '#278ea5' }}>
                    <div className="p-4">
                        <div className="icon-space">
                        <div className="icon-round text-center d-inline-block rounded-circle " style={{ backgroundColor: '#1f4287' }}><i className="fa-regular fa-calendar-days"></i></div>
                        
                        </div>
                        <h5 className="font-weight-medium" style={{ color: 'white', fontWeight:'900' }}>Events</h5>
                        <p className="mt-3" style={{ color: 'white' }}>
                            Our club has organized 10+ events!
                        </p>
                        
                    </div>
                </div>
            </div>
            <div className="col-md-4 wrap-service11-box">
                <div className="card card-shadow border-0 mb-4" style={{ backgroundColor: '#278ea5' }}>
                    <div className="p-4">
                        <div className="icon-space"  >
                            <div className="icon-round text-center d-inline-block rounded-circle" style={{ backgroundColor: '#1f4287' }}><i className="fa-solid fa-face-smile-wink" ></i></div>
                        </div>
                        <h5 className="font-weight-medium" style={{ color: 'white', fontWeight:'900' }}>Unlimited Fun</h5>
                        <p className="mt-3" style={{ color: 'white' }}>
                            We have unlimited fun through activities & events.
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
