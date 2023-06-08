import Pokemon from "../assets/poke-logo.svg";

const Header = () => {
    return ( 
        <header className="bg-danger d-flex justify-content-center align-items-center">
                <img src={Pokemon} className="logo" alt="Pokemon-logo"/>
        </header>
     );
}
 
export default Header;