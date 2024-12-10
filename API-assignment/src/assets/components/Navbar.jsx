import {Link} from 'react-router-dom';
import "../styles/Navbar.css";




function Navbar(){
return (
    <nav>
    <h1>Seker</h1>
    <div>
      <ul>
        <li> <Link to="/images">Images</Link></li>
        <li><Link to="/videos">Videos</Link></li>
        <li> <Link to="/maps">Maps</Link></li>
        <li> <Link to="/news">News</Link></li>
        <li> <Link to="/product">Product</Link></li>
      </ul>
    </div>
    <div>
        <h2><Link to="/signIn">Sign in</Link></h2>
    </div>
  </nav>


);


}

export default Navbar;