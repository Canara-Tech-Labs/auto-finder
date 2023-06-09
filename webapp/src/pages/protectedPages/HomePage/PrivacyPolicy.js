import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


export default function PrivacyPolicy(){
    return(
        <>
        <ul><Link to="/books"><ArrowLeftOutlined/></Link></ul>
        <h1>This is Privacy policy Page</h1>
        </>
    );

}