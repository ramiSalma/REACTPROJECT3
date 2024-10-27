import { Link, Outlet } from 'react-router-dom';
import myimage from  './jewleryimages/logo.png';
export default function  Navbar(){
    return(
        <section className="section1">
        <div className="phase0">
            <div className="phase1">
                
                <img src={myimage} className="img1"></img>
                <div className="icon">
                    <a><i className="fa-solid fa-magnifying-glass"></i></a>
                    <a><i className="fa-regular fa-heart"></i></a>
                    <a><i className="fa-solid fa-bag-shopping"></i></a>
                    <a className="bars"><i className="fa-solid fa-bars"></i></a>
                </div>
        
            </div>
            <div className="phase2">
                <a href="" className="parts" id="part1" >shop</a>
                {/* <div className="dropdown" id="dropdown1">
                    <div className="left">
                        <div style="display: flex;align-items: center;">
                            <img src="jew10.jpg" height="40px" width="40px" style="border-radius: 50%;"></img><a href="#link3"> necklesses</a>
                        </div>
                        <div style="display: flex;align-items: center;">
                        <img src="jew11.jpg" height="40px" width="40px" style="border-radius: 50%"></img><a href="#link1"> bracelets</a>
                        </div>
                        <div style="display: flex;align-items: center;">
                        <img src="jew12.jpg" height="40px" width="40px" style="border-radius: 50%"></img><a href="#link2">earnings</a>
                        </div>
                        <div style="display: flex;align-items: center;">
                        <img src="jew13.jpg" height="40px" width="40px" style="border-radius: 50%"></img><a href="#link2">anklets</a>
                        </div>
                        <div style="display: flex;align-items: center;">
                        <img src="jew14.jpg" height="40px" width="40px" style="border-radius: 50%"></img><a href="#link1">rings</a>
                        </div>
                    </div>
                    <div className="right">
                        <div style="align-items: center;display: block;">
                        <img src="jew10.jpg" className="im" title="the line of luxe"></img><p style="margin: -10px 60px;">the line of luxe</p>
                        </div>
                        <div style="align-items: center;display: block;">
                            <img src="jew2.jpg" className="im" ></img><p style="margin: -10px 60px;">tpersonalized</p>
                        </div>
                        <div style="align-items: center;display: block;">
                            <img src="jew3.jpg" className="im"></img><p style="margin: -10px 36px;">your everyday essentials</p>
                        </div>
                        <div style="align-items: center;display: block;">
                            <img src="jew11.jpg" className="im"></img><p style="margin: -10px 60px;">the line of luxe</p>
                        </div>
                        
                        
                    </div>
                </div> */}
        
                <a href="" className="parts" id="part2" >best sellers</a>
                {/* <div className="dropdown" id="dropdown2">
                    <div className="left">
                        <div style="display: flex;align-items: center;">
                            <img src="jew10.jpg" height="40px" width="40px" style="border-radius: 50%;"></img><a href="#link3"> necklesses</a>
                        </div>
                        <div style="display: flex;align-items: center;">
                        <img src="jew11.jpg" height="40px" width="40px" style="border-radius: 50%"></img><a href="#link1"> bracelets</a>
                        </div>
                        <div style="display: flex;align-items: center;">
                        <img src="jew12.jpg" height="40px" width="40px" style="border-radius: 50%"></img><a href="#link2">earnings</a>
                        </div>
                        <div style="display: flex;align-items: center;">
                        <img src="jew13.jpg" height="40px" width="40px" style="border-radius: 50%"></img><a href="#link2">anklets</a>
                        </div>
                        <div style="display: flex;align-items: center;">
                        <img src="jew14.jpg" height="40px" width="40px" style="border-radius: 50%"></img><a href="#link1">rings</a>
                        </div>
                    </div>
                    <div className="right">
                        <div style="align-items: center;display: block;">
                        <img src="jew10.jpg" className="im" title="the line of luxe"></img><p style="margin: -10px 60px;">the line of luxe</p>
                        </div>
                        <div style="align-items: center;display: block;">
                            <img src="jew2.jpg" className="im" ></img><p style="margin: -10px 60px;">tpersonalized</p>
                        </div>
                        <div style="align-items: center;display: block;">
                            <img src="jew3.jpg" className="im"></img><p style="margin: -10px 36px;">your everyday essentials</p>
                        </div>
                        <div style="align-items: center;display: block;">
                            <img src="jew11.jpg" className="im"></img><p style="margin: -10px 60px;">the line of luxe</p>
                        </div>
                        
                        
                    </div>
                </div> */}
                <Link path="/" className="logo">Lustrous</Link>
        
                <a href="" className="parts" id="part3" >new</a>
                    {/* <div className="dropdown" id="dropdown3">
                        <div className="left">
                            <div style="display: flex;align-items: center;">
                                <img src="jew10.jpg" height="40px" width="40px" style="border-radius: 50%;"></img><a href="#link3"> necklesses</a>
                            </div>
                            <div style="display: flex;align-items: center;">
                            <img src="jew11.jpg" height="40px" width="40px" style="border-radius: 50%"></img><a href="#link1"> bracelets</a>
                            </div>
                            <div style="display: flex;align-items: center;">
                            <img src="jew12.jpg" height="40px" width="40px" style="border-radius: 50%"></img><a href="#link2">earnings</a>
                            </div>
                            <div style="display: flex;align-items: center;">
                            <img src="jew13.jpg" height="40px" width="40px" style="border-radius: 50%"></img><a href="#link2">anklets</a>
                            </div>
                            <div style="display: flex;align-items: center;">
                            <img src="jew14.jpg" height="40px" width="40px" style="border-radius: 50%"></img><a href="#link1">rings</a>
                            </div>
                        </div>
                        <div className="right">
                            <div style="align-items: center;display: block;">
                            <img src="jew10.jpg" className="im" title="the line of luxe"></img><p style="margin: -10px 60px;">the line of luxe</p>
                            </div>
                            <div style="align-items: center;display: block;">
                                <img src="jew2.jpg" className="im" ></img><p style="margin: -10px 60px;">tpersonalized</p>
                            </div>
                            <div style="align-items: center;display: block;">
                                <img src="jew3.jpg" className="im"></img><p style="margin: -10px 36px;">your everyday essentials</p>
                            </div>
                            <div style="align-items: center;display: block;">
                                <img src="jew11.jpg" className="im"></img><p style="margin: -10px 60px;">the line of luxe</p>
                            </div>
                            
                            
                        </div>
                    </div> */}
                
        
                <a href="" className="parts" id="part4" >about Lustrous</a>
                {/* <div className="dropdown" id="dropdown4">
                    <div className="left">
                        <div style="display: flex;align-items: center;">
                            <img src="jew10.jpg" height="40px" width="40px" style="border-radius: 50%;"></img><a href="#link3"> necklesses</a>
                        </div>
                        <div style="display: flex;align-items: center;">
                        <img src="jew11.jpg" height="40px" width="40px" style="border-radius: 50%"></img><a href="#link1"> bracelets</a>
                        </div>
                        <div style="display: flex;align-items: center;">
                        <img src="jew12.jpg" height="40px" width="40px" style="border-radius: 50%"></img><a href="#link2">earnings</a>
                        </div>
                        <div style="display: flex;align-items: center;">
                        <img src="jew13.jpg" height="40px" width="40px" style="border-radius: 50%"></img><a href="#link2">anklets</a>
                        </div>
                        <div style="display: flex;align-items: center;">
                        <img src="jew14.jpg" height="40px" width="40px" style="border-radius: 50%"></img><a href="#link1">rings</a>
                        </div>
                    </div>
                    <div className="right">
                        <div style="align-items: center;display: block;">
                        <img src="jew10.jpg" className="im" title="the line of luxe"></img><p style="margin: -10px 60px;">the line of luxe</p>
                        </div>
                        <div style="align-items: center;display: block;">
                            <img src="jew2.jpg" className="im" ></img><p style="margin: -10px 60px;">tpersonalized</p>
                        </div>
                        <div style="align-items: center;display: block;">
                            <img src="jew3.jpg" className="im"></img><p style="margin: -10px 36px;">your everyday essentials</p>
                        </div>
                        <div style="align-items: center;display: block;">
                            <img src="jew11.jpg" className="im"></img><p style="margin: -10px 60px;">the line of luxe</p>
                        </div>
                        
                        
                    </div>
                </div>  */}
            </div>
        </div>   
        <div>
            <Outlet />
        </div>
   </section>
   
    )
}

// onMouseOver="changeParentBackground(true)" onMouseOut="changeParentBackground(false)"
// onMouseOver="changeParentBackground(true)" onMouseOut="changeParentBackground(false)"
// onMouseOver="changeParentBackground(true)" onMouseOut="changeParentBackground(false)"