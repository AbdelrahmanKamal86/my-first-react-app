type FooterParams ={
    text : string;
}


function Footer(props : FooterParams){
    return(
        <h4>{props.text}</h4>
    )
}
export default Footer;