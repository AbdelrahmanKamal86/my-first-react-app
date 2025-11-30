type HeaderParams ={
    text : string;
    textsub? : string;
}


function Header (props : HeaderParams){
    return(
    <>
    <h3>{props.text}</h3>
    <h6>{props.textsub}</h6>
    </>
    )
}
export default Header;