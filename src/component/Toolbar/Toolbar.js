import Navigation from "./Navigation/Navigation"
import Logo from './logo/Logo'
import RightSide from "./RightSide/RightSide"
const Toolbar = () => {
    const style = {
        display:'flex',
        justifyContent:'space-around',
        padding:'1rem',
        flexWrap:'wrap'
    }
   return(
       <div style={style}>
           <Logo />
           <Navigation />
           <RightSide />
       </div>
   )
}


export default Toolbar