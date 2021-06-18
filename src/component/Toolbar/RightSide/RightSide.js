import classes from './RightSide.module.css'
import {FaTelegramPlane} from 'react-icons/fa'

const RightSide = () =>{
 

    return(

       <div className={classes.RightSide}>
           <div className={classes.RightSide1}>timer</div>
           <div className={classes.RightSide2}>
               <FaTelegramPlane />
               <span>Connect Telegram</span>
          </div>
           <div className={classes.RightSide3}>Modes</div>
       </div>

    )
}

export default RightSide