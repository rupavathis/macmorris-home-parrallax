function CaseStudiesIrish() {
  return (
    <section id="our-portfolio" className="bglight padding">
    <div className="container">
       <div className="row">
          <div className="col-md-8 offset-md-2 col-sm-12 text-center">
             <div className="heading-title wow fadeInUp" data-wow-delay="300ms">
                <span>Treoracha Foghlama</span>
                <h2 className="darkcolor bottom10">Cás-staidéir</h2>
                <p className="heading_space">Bain úsáid as na cás-staidéir má tá tú ag iarraidh níos mó a 
                fhoghlaim faoin tionscadal agus faoin dóigh is fearr le leas a bhaint as an suíomh </p>
             </div>
          </div>
       </div>
       <div id="flat-gallery" className="cbp dark_overlay">
          <div className="cbp-item web logo">
            <img src="images/case-studies/Historical Overview.jpg" alt="" />
             <div className="overlay center-block whitecolor">
              <a className="plus" data-fancybox="gallery" href="images/gallery-flat1.jpg"></a>
              <h4 className="top30">Case study 1</h4>
              <p style={{ padding: "10px" }}>Case study Detail Here</p>
            </div>
          </div>

          <div className="cbp-item">
            <img src="images/case-studies/Networking Women.png" alt="" />
            <div className="overlay center-block whitecolor">
              <a className="plus" data-fancybox="gallery" href="images/gallery-flat4.jpg"></a>
              <h4 className="top30">Mná sna Líonraí</h4>
              <p style={{ padding: "10px" }}>Tugtar eolas anseo faoi na líonraí agus faoi chuid de na mná sa
               bhunachar sonraí</p>
              
            </div>
            
          </div>

          <div className="cbp-item web print graphic">
            <img src="images/case-studies/Historical Overview.jpg" alt="" />
          <div className="overlay center-block whitecolor">
              <h4 className="top30">Léargas Stairiúil</h4>
              <p style={{ padding: "10px" }}>Tugtar eolas anseo faoin tréimhse achrannach, 
              lán le coinbhleacht, le claochlú, agus le nuálaíocht a d'athraigh an tír ó bhonn.</p>
            </div>
            
          </div>

          <div className="cbp-item">
            <img src="images/case-studies/Spenser in Munster.jpeg" alt="" />
            <div className="overlay center-block whitecolor">
              <a className="plus" data-fancybox="gallery" href="images/gallery-flat4.jpg"></a>
              <h4 className="top30">Spenser i gCúige Mumhan</h4>
              <p style={{ padding: "10px" }}>Cérbh é Edmund Spenser agus cén bhaint a bhí aige le Cúige Mumhan??</p>
            </div>
          </div>
          <div className="cbp-item">
            <img src="images/case-studies/Staging Early Modern Drama Today.jpg" alt="" />
            <div className="overlay center-block whitecolor">
              <a className="plus" data-fancybox="gallery" href="images/gallery-flat4.jpg"></a>
              <h4 className="top30">Drámaíocht ón Nua-Aois Luath á cur ar an staitse sa lá atá inniu ann</h4>
              <p style={{ padding: "10px" }}>Machnamh ar léiriú Hic Et Ubique in Smock Alley Theatre</p>
            </div>
          </div>

          <div className="cbp-item web print graphic">
            <img src="images/case-studies/Using Gaelic Sources.png" alt="" />
            <div className="overlay center-block whitecolor">
              <h4 className="top30">Ag baint leasa as foinsí Gaelacha</h4>
              <p style={{ padding: "10px" }}>Tugtar eolas anseo faoin dóigh is fearr le leas a bhaint as foinsí Gaelacha.</p>
            </div>
          </div>
          <div className="cbp-item web print graphic">
            <img src="images/case-studies/What is Bardic Poetry.jpg" alt="" />
            <div className="overlay center-block whitecolor">
              <h4 className="top30">Cad atá i gceist le Filíocht na Sgol?</h4>
              <p style={{ padding: "10px" }}>Tugtar eolas anseo faoi thírdhreach liteartha na hÉireann sa Nua-Aois Luath
               agus faoin sórt filíochta a bhí á chumadh ag filí gairmiúla na sgol.
              </p>
            </div>
          </div>
          <div className="cbp-item print">
            <img src="images/case-studies/munster.png" alt="" />
            <div className="overlay center-block whitecolor">
              <h4 className="top30">Ag Cruthú Léarscáil Dhomhain</h4>
              <p style={{ padding: "10px" }}>Cad atá i gceist le Léarscáil Dhomhain agus cén dóigh a ligeann a léithéid
               dúinn léargas a fháil ar ghníomhaíochtaí cultúrtha i gCúige Mumhan?</p>
            </div>
          </div>
        </div>
    </div>
 </section>
  );
}

export default CaseStudiesIrish;
