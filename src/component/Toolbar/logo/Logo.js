import classes from './Logo.module.css'

const Logo = () =>{
const style = {
    width:'350px'
}
    return(
        <div  className={classes.Logo}>
            <img  style={style} src={require('../../../image/HODLINFO.png').default} alt='HODLINFO'/>
            {/* div<img  src='' alt='HODLINFO'/> */}
            <p>Powered By <span>Finstreet</span></p>
        </div>
    )
}

export default Logo