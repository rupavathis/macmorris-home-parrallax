import MapHome from './Map'
import Search from './Search'
import Network from './Network'
import { Link } from 'react-router-dom'
import SearchWrapper from './SearchWrapper'

function Viz({ changeIrish, setOpenNetwork }) {
    return (
        <div className="container" id="our-viz">
            <div className="row">
                <div className="col-md-8 offset-md-2 col-sm-12 text-center">
                    <div className="heading-title wow fadeInUp" data-wow-delay="300ms">
                        {changeIrish && <span>Déan iniúchadh ar thírdhreach cultúrtha na hÉireann sa Nua-Aois Luath</span>}
                        {!changeIrish && <span>Investigate the cultural landscape of Early Modern Ireland</span>}
                        {changeIrish && <h2 className="darkcolor bottom20">Bunachar Sonraí</h2>}
                        {!changeIrish && <h2 className="darkcolor bottom20">Database</h2>}


                    </div>
                </div>
                <section className="half-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 nopadding">
                               
                                    <SearchWrapper />
                                    
                            </div>
                            <div className="col-lg-6 nopadding">
                                <div className="split-box text-center center-block container-padding equalheight">
                                    {changeIrish && <div className="heading-title padding">
                                        <span className=" wow fadeIn" data-wow-delay="300ms">Léirshamhlú Idirghníomhach</span>
                                        <h2 className="darkcolor bottom20 wow fadeIn" data-wow-delay="350ms">Cuardaigh</h2>
                                        <p className="heading_space wow fadeIn" data-wow-delay="400ms">
                                            Comhéadan cuardaigh a chabhraíonn leat na daoine agus na téacsanna
                                            sa bhunachar sonraí a aimsiú</p>
                                        <Link to='search'>
                                            <div className="button btnsecondary pagescroll wow fadeInUp"
                                                data-wow-delay="450ms">Explore Search!</div>
                                        </Link>
                                    </div>}
                                    {!changeIrish && <div className="heading-title padding">
                                        <span className=" wow fadeIn" data-wow-delay="300ms">Visualisation Interface</span>
                                        <h2 className="darkcolor bottom20 wow fadeIn" data-wow-delay="350ms">Search</h2>
                                        <p className="heading_space wow fadeIn" data-wow-delay="400ms">
                                            A Search interface to aid exploration of the different people and texts in our
                                            database </p>
                                        <Link to='search'>
                                            <div className="button btnsecondary pagescroll wow fadeInUp"
                                                data-wow-delay="450ms">Explore Search!</div>
                                        </Link>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="half-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 nopadding">
                                <div className="split-box text-center center-block container-padding equalheight">
                                    {changeIrish && <div className="heading-title padding">
                                        <span className=" wow fadeIn" data-wow-delay="300ms">Léirshamhlú Idirghníomhach</span>
                                        <h2 className="darkcolor bottom20 wow fadeIn" data-wow-delay="350ms">Léarscáil</h2>
                                        <p className="heading_space wow fadeIn" data-wow-delay="400ms">
                                            Féach ar an Léarscáil Dhomhain de Chúige Mumhan</p>
                                        <Link to='map'>
                                            <div className="button btnsecondary pagescroll wow fadeInUp"
                                                data-wow-delay="450ms">Explore Map!</div>
                                        </Link>
                                    </div>}
                                    {!changeIrish && <div className="heading-title padding">
                                        <span className=" wow fadeIn" data-wow-delay="300ms">Visualisation interface</span>
                                        <h2 className="darkcolor bottom20 wow fadeIn" data-wow-delay="350ms">Map</h2>
                                        <p className="heading_space wow fadeIn" data-wow-delay="400ms">
                                            Interact with our cultural Deep Map of Munster </p>
                                        <Link to='map'>
                                            <div className="button btnsecondary pagescroll wow fadeInUp"
                                                data-wow-delay="450ms">Explore Map!</div>
                                        </Link>
                                    </div>}
                                </div>
                            </div>
                            <div className="col-lg-6 nopadding">
                                <div className="img-container" style={{height: 500}}>
                                    <MapHome className="equalheight" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="half-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 nopadding">
                                {/* <div className="image hover-effect img-container"> */}
                                <div className="img-container">
                                    <Network className="equalheight" />
                                </div>
                            </div>
                            <div className="col-lg-6 nopadding">
                                <div className="split-box text-center center-block container-padding equalheight">
                                    {changeIrish && <div className="heading-title padding">
                                        <span className=" wow fadeIn" data-wow-delay="300ms">Léirshamhlú Idirghníomhach</span>
                                        <h2 className="darkcolor bottom20 wow fadeIn" data-wow-delay="350ms">Líonraí</h2>
                                        <p className="heading_space wow fadeIn" data-wow-delay="400ms">
                                            Bain triail as an chomhéadan líonraí seo chun na naisc idir na daoine agus
                                            na téacsanna sa bhunachar sonraí a fheiceáil</p>

                                        <Link to='network'>
                                            <div className="button btnsecondary pagescroll wow fadeInUp"
                                                data-wow-delay="450ms">Explore Network!</div>
                                        </Link>
                                    </div>}
                                    {!changeIrish && <div className="heading-title padding">
                                        <span className=" wow fadeIn" data-wow-delay="300ms">Visualisation Interface</span>
                                        <h2 className="darkcolor bottom20 wow fadeIn" data-wow-delay="350ms">Network</h2>
                                        <p className="heading_space wow fadeIn" data-wow-delay="400ms">
                                            Discover our network interface
                                            to
                                            see how people and texts connect in our database</p>

                                        <Link to='network'>
                                            <div className="button btnsecondary pagescroll wow fadeInUp"
                                                data-wow-delay="450ms">Explore Network!</div>
                                        </Link>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Viz;
