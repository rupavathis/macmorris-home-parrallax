function Database() {
    return (
        <div>
            <section className="half-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 nopadding">
                            <div className="image hover-effect img-container">
                                <div id="search" className="equalheight" style="padding-top: 30px;"></div>
                            </div>
                        </div>
                        <div className="col-lg-6 nopadding">
                            <div className="split-box text-center center-block container-padding equalheight">
                                <div className="heading-title padding">
                                    <span className=" wow fadeIn" data-wow-delay="300ms">Visualisation Interface</span>
                                    <h2 className="darkcolor bottom20 wow fadeIn" data-wow-delay="350ms">Search</h2>
                                    <p className="heading_space wow fadeIn" data-wow-delay="400ms">
                                        A Search interface to aid exploration of the different people and texts in our
                                        database </p>
                                    <a href="#our-work" className="button btnprimary pagescroll wow fadeInUp"
                                        data-wow-delay="450ms">
                                        Explore Search!</a>
                                </div>
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
                                <div className="heading-title padding">
                                    <span className=" wow fadeIn" data-wow-delay="300ms">Visualisation interface</span>
                                    <h2 className="darkcolor bottom20 wow fadeIn" data-wow-delay="350ms">Map</h2>
                                    <p className="heading_space wow fadeIn" data-wow-delay="400ms">
                                        Interact with our cultural Deep Map of Munster </p>
                                    <a href="#our-team" className="button btnsecondary pagescroll wow fadeInUp"
                                        data-wow-delay="450ms">Explore Map!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 nopadding">
                            <div className="image hover-effect img-container">
                                <div id="root" className="equalheight"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="half-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 nopadding">
                            <div className="image hover-effect img-container">
                                <div id="root1" className="equalheight"></div>
                            </div>
                        </div>
                        <div className="col-lg-6 nopadding">
                            <div className="split-box text-center center-block container-padding equalheight">
                                <div className="heading-title padding">
                                    <span className=" wow fadeIn" data-wow-delay="300ms">Visualisation Interface</span>
                                    <h2 className="darkcolor bottom20 wow fadeIn" data-wow-delay="350ms">Network</h2>
                                    <p className="heading_space wow fadeIn" data-wow-delay="400ms">Discover our network interface
                                        to
                                        see how people and texts connect in our database</p>

                                    <a href="#our-work" className="button btnprimary pagescroll wow fadeInUp"
                                        data-wow-delay="450ms">
                                        Explore Network!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Database;
