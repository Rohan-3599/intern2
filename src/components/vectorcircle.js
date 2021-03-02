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
                <Typography style={{fontFamily: 'Libre Baskerville',fontSize: '24px',fontStyle: 'normal',fontWeight: 600, lineHeight: '32px',letterSpacing: '0em' ,textAlign: 'cente', color:  '#0259EB'
}}>0</Typography>
              </div>
              <div className="label">
              <Typography style={{fontFamily: 'Nunito',fontSize: '16px',fontStyle: 'normal',fontWeight: 600, lineHeight: '32px',letterSpacing: '0em' ,textAlign: 'cente', color:  '#0259EB'
}}>Likes</Typography>
              </div>
             </div>
             </div>
         </div>
        
        </div>
    )
}

export default vectorcircle
