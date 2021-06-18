import classes from './ThirdComponent.module.css'

const ThirdComponent = () =>{
    return(
        <div className={classes.ThirdComponent}>
            <div className={classes.ThirdComponent1}> 
              <p>0.67%</p>
              <p>5 Mins</p>
            </div>
            <div className={classes.ThirdComponent2}> 
            <p>1.37%</p>
            <p>1 Hour</p>
            </div>
            <div className={classes.ThirdComponent3}> 
              <p> ₹27,77,447</p>
              <p>Average BTC/INR net price including commission</p>
            </div>
            <div className={classes.ThirdComponent4}> 
            <p>8.42%</p>
            <p>1 Day</p>
             </div>
            <div className={classes.ThirdComponent5}> 
             <p>12.23%</p>
             <p>7 Days</p>

            </div>
        </div>
    )
}

export default ThirdComponent