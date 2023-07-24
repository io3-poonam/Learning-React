import React from "react";
const Footer=()=>{
    const year =new Date() .getFullYear();
    return(<>
    <div className="footer">
        <p>Copyright &#169; {year}
</p>
</div>
    </>)
}
export default Footer;