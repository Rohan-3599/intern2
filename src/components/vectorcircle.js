import React from 'react'
import {Typography} from '@material-ui/core'
import './styles.css'
import Vector from '../images/Vector.png'
const vectorcircle = () => {
    return (
        <div className="div-circle-2">
         <div className="circle">
           <div className="content">
             <div className="icon">
              <img src={Vector} />
              <div className="zero">
                <Typography style={{fontFamily: 'Libre Baskerville',fontSize: '24px',fontStyle: 'normal',fontWeight: 400, lineHeight: '32px',letterSpacing: '0em' ,textAlign: 'cente', color: '#FFFFFF'
}}>0</Typography>
              </div>
              <div className="label">
              <Typography style={{fontFamily: 'Nunito',fontSize: '16px',fontStyle: 'normal',fontWeight: 400, lineHeight: '32px',letterSpacing: '0em' ,textAlign: 'cente', color: '#FFFFFF'
}}>Label</Typography>
              </div>
             </div>
             </div>
         </div>
         <div className="substract">
         </div>
        </div>
    )
}

export default vectorcircle
