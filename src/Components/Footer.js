import {Link} from 'react-router-dom'

const Footer = ({blogFooter}) => {
    return ( 
        <footer class=footer> 
<p>&copy; This is a footer. circa 2023 </p>
            <Link to='/about' activeStyle>
              About
            </Link>
            <Link to='/services' activeStyle>
              Services
            </Link>
        </footer>
    );
  };
  
  export default Footer;