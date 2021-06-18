
import classes from './Option.module.css'

const Option  = (props) =>{
    return (
        <option className={classes.option}>{props.children}</option>
    )
}

export default Option