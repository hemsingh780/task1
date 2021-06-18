import PlatForm from "./Platform/Platform"
import classes from './Fifth.module.css'

const Fifth = () => {
    


    return(
        <div className={classes.Fifth}>
            <div className={classes.main}>
                <div>#</div>
                <div>PlatForm</div>
                <div>Last Traded Price</div>
                <div>Buy / Sell Price</div>
                <div>Difference</div>
                <div>Savings</div>
            </div>
            <PlatForm 
            no='1'
            src={require('../../image/task1Img1.png').default}
            PlatForm='Wazirx'
            lastTrade='28,11,000'
            buy='28,11,00 / 28,19,1718'
            Difference='1.00%'
            saving='27,894'
            />
            <PlatForm 
            no='2'
            src={require('../../image/icon2.png').default}
            PlatForm='Bitbns'
            lastTrade='28,15,881'
            buy='28,15,881 / 28,21,100'
            Difference='1.18%'
            saving='32,776'
            />
            <PlatForm 
            no='3'
            src={require('../../image/icon3.png').default}
            PlatForm='Giotus'
            lastTrade='28,89,990'
            buy='28,15,00 / 28,89,990'
            Difference='3.84%'
            saving='1,06,885'
            />           
            <PlatForm 
            no='4'
            src={require('../../image/icon4.png').default}
            PlatForm='Colodax'
            lastTrade='25,83,138'
            buy='25,75,167 / 26,08,984'
            Difference='-7.19%'
            saving='-1,99,967'
            />   
            <PlatForm 
            no='5'
            src={require('../../image/icon5.png').default}
            PlatForm='Zebpay'
            lastTrade='27,93,999'
            buy='28,00,000 / 27,86,111'
            Difference='.39%'
            saving='10,894'
            />       
           <PlatForm 
            no='6'
            src={require('../../image/icon6').default}
            PlatForm='CoinDCX'
            lastTrade='28,04,623'
            buy='28,01,608 / 28,09,035'
            Difference='0.77%'
            saving='21,518'
            />    
        </div>
    )
}

export default Fifth