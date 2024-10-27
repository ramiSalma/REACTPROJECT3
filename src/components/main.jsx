import img1 from './jewleryimages/Black_Gold_Luxury_Diamond_Logo-removebg-preview.png';
import img2 from './jewleryimages/pearl.png';
import img3 from'./jewleryimages/broche.png';
export default function Main(){
    return(
        <>
            <div className="phase3 container">
                <div className="row">
                    <div className="phase4 col-lg-6 col-md-16 col-sm-12 text-center" style={{marginTop:50}}>
                    
                        <div class="phase4-2">
                                <h1 class="phase4-2h1"> CREATE</h1>
                
                                <h2 class="phase4-2h2">your own </h2>
                
                                <h3 class="phase4-2h3">
                                    <img src={img1} class="phase4-2im"></img> HISTORY
                                </h3>
                        </div>
                        <div class="phase4-1"></div>
                        <img src={img2} class="phase4-1im"></img>
                        <h3 class="h3p4-1">DISCOVER </h3>
                        <h4 class="phase4-1h4">NEW COLLECTION</h4>
                        <div class="phase4-1d"><img src={img3} class="phase4-1im2"></img></div>
            
                    
                    </div>

                    <div className="phase5 col-lg-6 col-md-6 col-sm-12">
                        <table class="table">
                            <tr>
                                <th colspan="2" style={{borderColor:'transparent',padding: 0}}>
                                    <img src="jew17.jpg" class="td1img"></img>
                                </th>
                            </tr>

                            <tr>
                                <td class="tr2td1"> SHINE 
                                    <img src="Black_Gold_Luxury_Diamond_Logo-removebg-preview.png" class="tr2td1img"></img>
                                </td>
                                <td><div class="tr2td2" ></div></td>
                            </tr>
                            
                            <tr>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. </td>
                                <td>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </td>
                            </tr>
                            
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}