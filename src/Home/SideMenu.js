import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function SideMenu({ changeIrish, setChangeIrish }) {

    return (
        <header className="site-header">
            <nav className="navbar navbar-expand-lg bg-transparent-light static-nav">
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

export default SideMenu;
