import Form from "./Form";
import HeroAbout from "./HeroAbout";
import Navbar from "./Navbar";

export default function Homepage(){
    return(
        <div>
            <HeroAbout/>
            <Navbar/>
            <Form/>
        </div>
    )
}