import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                        <a className="nav-link pagescroll" href="#home">Home</a>
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
            {/* <!--side menu open button--> */}
            <a href="javascript:void(0)" className="d-lg-inline-block sidemenu_btn" id="sidemenu_toggle">
               <span></span> <span></span> <span></span>
            </a>
         </nav>

         {/* <!-- side menu --> */}
         <div className="side-menu">
            <div className="inner-wrapper">
               <span className="btn-close" id="btn_sideNavClose"><i></i><i></i></span>
               <nav className="side-nav">
                  <ul className="navbar-nav w-100">
                     <li className="nav-item active">
                        <a className="nav-link pagescroll" href="#home">Home</a>
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
                  </ul>
               </nav>

               <div className="side-footer w-100">
                  <ul className="social-icons-simple white top40">
                     <li><a href="javascript:void(0)"><i className="fa fa-twitter"></i> </a> </li>
                  </ul>
               </div>
            </div>
         </div>
         <a id="close_side_menu" href="javascript:void(0);"></a>
         {/* <!-- End side menu --> */}
      </header>
   );
}

export default Header;
