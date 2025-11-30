
type YearParams ={
    text : string;
}

function Year (props : YearParams){
    return(
        <h5>{props.text}</h5>
    )
}
export default Year;