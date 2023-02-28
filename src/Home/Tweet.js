function Tweet() {
    return (
        <section id="our-tweet" className="half-section bglight">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-sm-6 nopadding">
                        {/* <!-- <div className="image hover-effect"><img src="images/split-blog.jpg" alt="our blog"
                             className="equalheight"></div> --> */}
                        <div style={{height: "500px", overflowY: "scroll"}}>
                            <a className="twitter-timeline" href="https://twitter.com/macmorr1s_?ref_src=twsrc%5Etfw">Tweets by
                                macmorr1s_</a>

                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="split-box text-center center-block equalheight container-padding">
                            <div className="heading-title padding_half wow fadeInUp" data-wow-delay="400ms">
                                <span>Read Our News</span>
                                <h2 className="darkcolor">Latest Tweets</h2>

                                <p className="heading_space">Stay connected with our latest tweets!</p>
                                <div>
                                    <a href="https://twitter.com/intent/tweet?screen_name=macmorr1s_&ref_src=twsrc%5Etfw"
                                        className="twitter-mention-button" data-size="large" data-text="Dear MACMORRIS,"
                                        data-show-count="false">
                                        Tweet to @macmorr1s_</a>
                                    {/* <!-- <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tweet;
