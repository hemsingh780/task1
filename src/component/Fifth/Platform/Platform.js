import classes from './PlatForm.module.css'


const PlatForm = (props) => {
    return(
    <>
    <div className={classes.PlatForm}>
        <div className={classes.PlatForm1}>
          {props.no}
        </div>   
        <div className={classes.PlatForm2}>
          <img alt='icons' src={props.src}/>
          <span>{props.PlatForm}</span>
        </div>           
        <div className={classes.PlatForm3}>
           {props.lastTrade}
        </div>           
        <div className={classes.PlatForm4}>{props.buy}</div>           
        <div className={classes.PlatForm5}>{props.Difference}</div>           
        <div className={classes.PlatForm6}>{props.saving}</div>      
    </div>
    </>     
    )
}


export default PlatForm