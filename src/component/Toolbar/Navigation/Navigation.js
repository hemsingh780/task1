import classes from './Navigation.module.css'
import Option from './Option/Option'
const Navigation = () =>{
   return( <div className={classes.Navigation}>
            <div className={classes.Navigation1}>
                <select>
                     <Option>INR</Option>
                </select>
            </div>
            <div className={classes.Navigation2}> 
                <select>
                    <Option>BTC</Option>
                    <Option>ETH</Option>
                    <Option>USDT</Option>
                    <Option>XRP</Option>
                    <Option>TRX</Option>
                    <Option>DASH</Option>
                    <Option>ZEC</Option>
                    <Option>XEM</Option>
                    <Option>IOST</Option>
                    <Option>WIN</Option>
                    <Option>BIT</Option>
                    <Option>WRX</Option>
                </select>
            </div>
            <div className={classes.Navigation3}>
               <div>BUY BTC</div>
            </div>
    </div>
   )
}


export default Navigation 