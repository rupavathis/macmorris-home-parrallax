import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

function Header({changeIrish, setChangeIrish}) {

   return (
     <header className="site-header">
          <nav className="navbar navbar-expand-lg bg-transparent-light static-nav">
            <div className="container">
               <a className="navbar-brand" href="index.html">
               </a>
               <button className="navbar-toggler navbar-toggler-right collapsed d-none" type="button" data-bs-toggle="collapse"
                  data-bs-target="#xenav">
                  <span> </span>
                  <span> </span>
                  <span> </span>
               </button>
               <div className="collapse navbar-collapse" id="xenav">
                  <ul className="navbar-nav ms-auto">
                     <li className="nav-item active">
                        <Link to='/' className="nav-link pagescroll" href="#home">Home</Link>
                     </li>
                     <li className="nav-item active">
                        <a className="nav-link pagescroll" href="#about-us">What is MACMORRIS?</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link pagescroll" href="#our-viz">Visualization Interface</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link pagescroll" href="#our-portfolio">Case Studies</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link pagescroll" href="#our-team">Team</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link pagescroll" href="#our-testimonial">From the team</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link pagescroll" href="#our-tweet">Tweet</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link pagescroll" href="#contactus">contact</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link pagescroll" href="#" onClick={() => {
                           setChangeIrish(!changeIrish)}}>
                           {changeIrish && <span>View in English</span>}
                           {!changeIrish && <span>View in Irish</span>}
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
           
         </nav>

        
      </header>
   );
}

export default Header;
