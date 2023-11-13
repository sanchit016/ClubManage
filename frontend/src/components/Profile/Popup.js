import React  from 'react'

export default function Popup({content, handlePopup}) {


  return (
    <div >
        <div  >
             <textarea className="popup-box" value={content}  >
            </textarea>
            <button className='pop-close' onClick={handlePopup}>
                Close
            </button>
        </div>
    </div>
  )
}
