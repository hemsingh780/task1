import classes from './FourthComponent.module.css'

const FourthComponent = () => {

    return(
      <div className={classes.FourthComponent}>
        <img src={require('../../image/image2.png').default}/>
      </div>
    )
}

export default FourthComponent