function CaseStudies({ setSelectedCS }) {
  return (
    <section id="our-portfolio" className="bglight padding">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 col-sm-12 text-center">
            <div className="heading-title wow fadeInUp" data-wow-delay="300ms">
              <span>Our Learning guides</span>
              <h2 className="darkcolor bottom10">Case Studies</h2>
              <p className="heading_space">Explore our case studies to learn more about the project
                and how to navigate the visualisations </p>
            </div>
          </div>
        </div>
        <div id="flat-gallery" className="cbp dark_overlay">
          <div className="cbp-item web logo">
            <img src="images/case-studies/Historical Overview.jpg" alt="" />
            <div className="overlay center-block whitecolor">
              <a className="plus" data-fancybox="gallery" href="images/gallery-flat1.jpg"></a>
              <h4 className="top30">Case study 1</h4>
              <p style={{ "padding": "10px" }}>Case study Detail Here</p>
            </div>
          </div>

          <div className="cbp-item">
            <img src="images/case-studies/Networking Women.png" alt="" />
            <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
              onClick={() => setSelectedCS("network-women")}>
              <a className="plus" data-fancybox="gallery" href="images/gallery-flat4.jpg"></a>
              <h4 className="top30">Networking Women</h4>
              <p style={{ "padding": "10px" }}>Learn about our network and some of the women in our
                database</p>
            </div>
          </div>


          <div className="cbp-item web print graphic">
            <img src="images/case-studies/Historical Overview.jpg" alt="" />
            <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
              onClick={() => setSelectedCS("historic-overview")}>
              <h4 className="top30">Historical Overview</h4>
              <p style={{ "padding": "10px", "cursor": "pointer" }}>Learn more about the dramatic period of conflict,
                change, and innovation which transformed Ireland.</p>
            </div>
          </div>

          <div className="cbp-item">
            <img src="images/case-studies/Spenser in Munster.jpeg" alt="" />
            <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
              onClick={() => setSelectedCS("munster")}>
              <a className="plus" data-fancybox="gallery" href="images/gallery-flat4.jpg"></a>
              <h4 className="top30">Spenser in Munster</h4>
              <p style={{ "padding": "10px" }}>Who was Edmund Spenser and what was his connection to Munster?</p>
            </div>
          </div>
          <div className="cbp-item">
            <img src="images/case-studies/Staging Early Modern Drama Today.jpg" alt="" />
            <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
              onClick={() => setSelectedCS("modern-drama")}>
              <a className="plus" data-fancybox="gallery" href="images/gallery-flat4.jpg"></a>
              <h4 className="top30">Staging Early Modern Drama today</h4>
              <p style={{ "padding": "10px" }}>A reflection on the staging of Hic Et
                Ubique in Smock Alley Theatre</p>
            </div>
          </div>

          <div className="cbp-item web print graphic">
            <img src="images/case-studies/Using Gaelic Sources.png" alt="" />
            <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
              onClick={() => setSelectedCS("gaelic")}>
              <h4 className="top30">Using Gaelic Sources</h4>
              <p style={{ "padding": "10px" }}>Explore ways to use and engage with Gaelic sources.</p>
            </div>
          </div>
          <div className="cbp-item web print graphic">
            <img src="images/case-studies/What is Bardic Poetry.jpg" alt="" />
            <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
              onClick={() => setSelectedCS("bardic-poetry")}>
              <h4 className="top30">What is Bardic Poetry?</h4>
              <p style={{ "padding": "10px" }}>Learn more about the literary landscape of Early Modern Ireland and
                the poetry
                composed by the professional caste of poets (or filidh) trained in the bardic schools.
              </p>
            </div>
          </div>
          <div className="cbp-item print">
            <img src="images/case-studies/munster.png" alt="" />
            <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
              onClick={() => setSelectedCS("deep-map")}>
              <h4 className="top30">Deep Mapping</h4>
              <p style={{ "padding": "10px" }}>What is Deep Mapping and how does that allow us to explore
                cultural activity in Munster?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
