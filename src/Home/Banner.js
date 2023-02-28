import { height } from "@mui/system";

function Banner() {
  return (
    <section className="no-padding wow fadeIn no-transition" id="home">
    <div id="rev_single_wrapper" className="rev_slider_wrapper fullscreen-container rev-slider"
       data-alias="inspiration-header" data-source="gallery" style={{"backgroundColor":"transparent", "padding":"0px"}}>
       {/* <!-- start revolution slider 5.4.1 fullscreen mode --> */}
       <div id="rev_single" className="rev_slider fullscreenbanner" style={{"display":"none"}}
        data-version="5.4.1">
          <ul> 
              {/* <!-- slide --> */}
              <li data-index="rs-layers" data-transition="fade" data-slotamount="default" data-hideafterloop="0"
                data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="500"
                data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2=""
                data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8=""
                data-param9="" data-param10="" data-description="">
                {/* <!-- main image --> */}
                {/* <img src="images/case-studies/munster.png" data-bgcolor="#e0e0e0" alt="" data-bgposition="center center"
                   data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg"
                   data-no-retina /> */}
                       <img src="images/transparent-bg.png" data-bgcolor="#e0e0e0" alt="" data-bgposition="center center"
                   data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg"
                   data-no-retina />
                {/* <!-- layers --> */}

                {/* <!-- layer nr. 1 --> */}
                <div className="tp-caption tp-resizeme rs-parallaxlevel-16" id="layers-one"
                   data-x="['left','left','left','left']" data-hoffset="['-264','-264','-240','-264']"
                   data-y="['top','top','top','top']" data-voffset="['30','30','50','80']" data-width="none"
                   data-height="none" data-whitespace="nowrap" data-type="image" data-basealign="slide"
                   data-responsive_offset="on"
                   data-frames='[{"from":"x:left;rZ:-90deg;","speed":2500,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                   data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]"
                   data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"
                   style={{"zIndex": "5", "borderWidth":"0px"}}><img src="images/man.tiff" alt=""
                      data-ww="['650px','650px','650px','650px']" data-hh="['500px','500px','500px','500px']"
                      width="650" height="500" data-no-retina /> </div>

                {/* <!-- layer nr. 2 --> */}
                <div className="tp-caption tp-resizeme rs-parallaxlevel-15" id="layers-two"
                   data-x="['right','right','right','right']" data-hoffset="['-5','-5','-70','-144']"
                   data-y="['top','top','top','top']" data-voffset="['-40','-40','-80','-80']" data-width="none"
                   data-height="none" data-whitespace="nowrap" data-type="image" data-basealign="slide"
                   data-responsive_offset="on"
                   data-frames='[{"from":"x:right;y:-500px;rZ:90deg;","speed":2500,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                   data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]"
                   data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"
                   style={{"zIndex": "6","borderWidth":"0px"}}><img src="images/top_right_1.png" alt=""
                      data-ww="['550px','550px','550px','550px']" data-hh="['471px','471px','471px','471px']"
                      width="550" height="471" data-no-retina /> </div>

                {/* <!-- layer nr. 3 --> */}
                <div className="tp-caption tp-resizeme rs-parallaxlevel-10" id="layers-three"
                   data-x="['left','left','left','left']" data-hoffset="['-392','-392','-540','-638']"
                   data-y="['bottom','bottom','bottom','bottom']" data-voffset="['-484','-484','-520','-522']"
                   data-width="none" data-height="none" data-whitespace="nowrap" data-type="image"
                   data-basealign="slide" data-responsive_offset="on"
                   data-frames='[{"from":"x:left;rZ:45deg;","speed":2500,"to":"o:1;","delay":650,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                   data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]"
                   data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"
                   style={{"zIndex": "7", "borderWidth":"0px"}}>
                     <img src="images/banner/harp-edit-1.png" alt=""
                      data-ww="['900px','900px','900px','900px']" data-hh="['1000px','1000px','1000px','1000px']"
                      width="900" height="1000" data-no-retina /> </div>

                {/* <!-- layer nr. 4 --> */}
                <div className="tp-caption tp-resizeme rs-parallaxlevel-12" id="layers-four"
                   data-x="['left','left','left','left']" data-hoffset="['134','134','-2','-57']"
                   data-y="['bottom','bottom','bottom','bottom']" data-voffset="['67','67','50','6']"
                   data-width="none" data-height="none" data-whitespace="nowrap" data-type="image"
                   data-basealign="slide" data-responsive_offset="on"
                   data-frames='[{"from":"y:bottom;rZ:90deg;","speed":1500,"to":"o:1;","delay":1050,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                   data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]"
                   data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"
                   style={{"zIndex": "8", "borderWidth":"0px"}}><img src="images/header_marker_1.png" alt=""
                      data-ww="['200px','200px','200px','200px']" data-hh="['300px','300px','300px','300px']"
                      width="200" height="300" data-no-retina /> </div>

                {/* <!-- layer nr. 5 --> */}
                <div className="tp-caption tp-resizeme rs-parallaxlevel-15" id="layers-five"
                   data-x="['left','left','left','left']" data-hoffset="['181','181','30','-39']"
                   data-y="['bottom','bottom','bottom','bottom']" data-voffset="['-170','-170','-190','-212']"
                   data-width="none" data-height="none" data-whitespace="nowrap" data-type="image"
                   data-basealign="slide" data-responsive_offset="on"
                   data-frames='[{"from":"y:bottom;rZ:-90deg;","speed":1500,"to":"o:1;","delay":1250,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                   data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]"
                   data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"
                   style={{"zIndex": "9", "borderWidth":"0px"}}><img src="images/banner/harp-edit.png" alt=""
                      data-ww="['300px','300px','300px','300px']" data-hh="['400px','400px','400px','400px']"
                      width="300" height="400" data-no-retina /> </div>

                {/* <!-- layer nr. 8 --> */}
                <div className="tp-caption tp-resizeme rs-parallaxlevel-11" id="layers-six"
                   data-x="['right','right','right','right']" data-hoffset="['-364','-364','-479','-553']"
                   data-y="['bottom','bottom','bottom','bottom']" data-voffset="['-155','-155','-180','-202']"
                   data-width="none" data-height="none" data-whitespace="nowrap" data-type="image"
                   data-basealign="slide" data-responsive_offset="on"
                   data-frames='[{"from":"x:right;rZ:-65deg;","speed":1500,"to":"o:1;","delay":700,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                   data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]"
                   data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"
                   style={{"zIndex": "12", "borderWidth":"0px"}}><img src="images/bottom_right_1.png" alt=""
                      data-ww="['730px','730px','730px','730px']" data-hh="['520px','520px','520px','520px']"
                      width="730" height="520" data-no-retina /> </div>

                {/* <!-- layer nr. 9 --> */}
                <div className="tp-caption tp-resizeme rs-parallaxlevel-15" id="layers-sev"
                   data-x="['right','right','right','right']" data-hoffset="['222','222','105','8']"
                   data-y="['bottom','bottom','bottom','bottom']" data-voffset="['8','8','-17','-10']"
                   data-width="none" data-height="none" data-whitespace="nowrap" data-type="image"
                   data-basealign="slide" data-responsive_offset="on"
                   data-frames='[{"from":"x:right;rZ:90deg;","speed":1500,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                   data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]"
                   data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"
                   style={{"zIndex": "13", "borderWidth":"0px"}}><img src="images/banner/harp-edit-1.png" alt=""
                      data-ww="['300px','300px','300px','300px']" data-hh="['500px','500px','500px','500px']"
                      width="300" height="500" data-no-retina /> </div>

                <div className="tp-caption tp-resizeme" data-x="['center','center','center','center']"
                   data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']"
                   data-voffset="['-70','-70','-70','-70']" data-whitespace="nowrap" data-responsive_offset="on"
                   data-width="['none','none','none','none']" data-type="text"
                   data-textalign="['center','center','center','center']" data-transform_idle="o:1;"
                   data-transform_in="x:-50px;opacity:0;s:2000;e:Power3.easeOut;"
                   data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-start="1000"
                   data-splitin="none" data-splitout="none">
                   <h2 className="text-capitalize font-xlight darkcolor">Fáilte go</h2>
                </div>

                <div className="tp-caption tp-resizeme" data-x="['center','center','center','center']"
                   data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']"
                   data-voffset="['0','0','0','0']" data-whitespace="nowrap" data-responsive_offset="on"
                   data-width="['none','none','none','none']" data-type="text"
                   data-textalign="['center','center','center','center']" data-transform_idle="o:1;"
                   data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                   data-transform_out="s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-start="1000"
                   data-splitin="none" data-splitout="none">
                   <h1 className="text-capitalize fontbold darkcolor"> MACMORRIS </h1>
                </div>
                <div className="tp-caption tp-resizeme whitecolor" data-x="['center','center','center','center']"
                   data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']"
                   data-voffset="['70','70','70','70']" data-whitespace="nowrap" data-responsive_offset="on"
                   data-width="['none','none','none','none']" data-type="text"
                   data-textalign="['center','center','center','center']" data-fontsize="['24','24','20','20']"
                   data-transform_idle="o:1;"
                   data-transform_in="z:0;rX:0deg;rY:0;rZ:0;sX:2;sY:2;skX:0;skY:0;opacity:0;s:1000;e:Power2.easeOut;"
                   data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                   data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-start="1500" data-splitin="none"
                   data-splitout="none">
                   <h4 className="darkcolor font-light text-center">
                      An IRC Laureate project that seeks to map the full range and richness of cultural activity,
                      across languages and ethnic groups, in Ireland from 1541 to 1691.
                   </h4>
                </div>
                {/* <!-- <div className="tp-caption tp-resizeme whitecolor" data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']"
                data-voffset="['70','70','70','70']" data-whitespace="nowrap" data-responsive_offset="on"
                data-width="['none','none','none','none']" data-type="text"
                data-textalign="['center','center','center','center']" data-fontsize="['24','24','20','20']"
                data-transform_idle="o:1;"
                data-transform_in="z:0;rX:0deg;rY:0;rZ:0;sX:2;sY:2;skX:0;skY:0;opacity:0;s:1000;e:Power2.easeOut;"
                data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-start="1500" data-splitin="none"
                data-splitout="none">
                <h4 className="darkcolor font-light text-center">
                   Tionscnamh gradaim de chuid na Comhairle um Thaighde in Éirinn (IRC) is ea MACMORRIS, a bhfuil 
                   sé mar aidhm aige saibhreas agus fairsinge ghníomhachtaí cultúrtha na hÉireann sna blianta 1541-1660 a léiriú.
                </h4> --> */}
                {/* <!-- </div> --> */}
                <div className="tp-caption tp-resizeme whitecolor" data-x="['center','center','center','center']"
                   data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']"
                   data-voffset="['100','100','100','100']" data-whitespace="nowrap" data-responsive_offset="on"
                   data-width="['none','none','none','none']" data-type="text"
                   data-textalign="['center','center','center','center']" data-fontsize="['24','24','20','20']"
                   data-transform_idle="o:1;"
                   data-transform_in="z:0;rX:0deg;rY:0;rZ:0;sX:2;sY:2;skX:0;skY:0;opacity:0;s:1000;e:Power2.easeOut;"
                   data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                   data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-start="1500" data-splitin="none"
                   data-splitout="none">
                   <h4 className="darkcolor font-light text-center">
                      It opens a window on a world on the cusp of drastic change but where, for the moment,
                      everything is still in play.
                   </h4>
                </div>
                
                <div className="tp-caption tp-resizeme" data-x="['center','center','center','center']"
                   data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']"
                   data-voffset="['160','160','160','160']" data-whitespace="nowrap" data-transform_idle="o:1;"
                   data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1500;e:Power4.easeInOut;"
                   data-transform_out="s:900;e:Power2.easeInOut;s:900;e:Power2.easeInOut;" data-start="2000"
                   data-splitin="none" data-splitout="none" data-responsive_offset="on">
                   <a className="button btnprimary pagescroll" href="#our-process">Learn More</a>
                </div>

                {/* <!-- layer nr. 15 --> */}
                <div className="tp-caption rev-scroll-btn revs-dark" id="layers-thir"
                   data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                   data-y="['bottom','bottom','bottom','bottom']" data-voffset="['90','90','70','50']" data-width="30"
                   data-height="45" data-whitespace="nowrap" data-type="button" data-responsive_offset="on"
                   data-actions='[{"event":"click","action":"scrollbelow","offset":"px","delay":"","speed":1000}]'
                   data-basealign="slide"
                   data-frames='[{"from":"y:-50px;opacity:0;","speed":1500,"to":"o:1;","delay":800,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                   data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]"
                   data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"
                   style={{zIndex: "19", minWidth: "35px", maxWidth: "35px", maxWidth: "55px", 
                   maxWidth: "55px", whiteSpace: "nowrap", fontWeight: "400",
                   borderColor:"rgba(0, 0, 0, 1.00)",borderStyle:"solid",
                   borderWidth:"2px",borderRadius:"23px 23px 23px 23px",
                   boxSizing: "border-box","MozBoxSizing":"border-box",
                   "WebkitBoxSizing":"border-box",cursor:"pointer"}}>
                   <span></span>
                </div>
             </li>
          </ul>
          <div className="tp-bannertimer tp-bottom" style={{visibility: "hidden !important"}}></div>
       </div>
    </div>
 </section>
  );
}

export default Banner;
