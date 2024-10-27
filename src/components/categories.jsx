import { useState } from "react";
import jewelryData from './../data.json' ;
export default function Categories(){
    // const [display,setdisplay] = useState([]);
    // fetch('https://api.escuelajs.co/api/v1/products')
    // .then(response => response.json())
    // .then(data => setdisplay(data))
    // .catch(error => console.error('Error fetching jewelry data:', error));
    console.log(jewelryData)
    return(
        <>
            <h1>categories</h1>
            <div className="container my-5">
                <div className="row">
                {jewelryData.map(item => (
                    <div key={item.id} className="col-3 m-3 card">
                        <img src={item.jewelry_image} alt={item.jewelry_title} style={{ width: '100%', height: 'auto' }} />
                        <h3>Title: {item.jewelry_title}</h3>
                        <p>{item.jewelry_category}</p>
                        <p><strong>Price:</strong> ${item.jewelry_price}</p>
                    </div>
                ))}

                </div>
            </div>
        </>
    )
}