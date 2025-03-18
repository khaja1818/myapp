import "./Products.css"
export default function Products(){
    const products=[
        {id:1,name:"product1",price:30},
        {id:2,name:"product2",price:40},
        {id:3,name:"product3",price:45},
        {id:4,name:"product4",price:55},
        {id:5,name:"product5",price:65},
        {id:6,name:"product6",price:75},
        {id:7,name:"product7",price:85},
        {id:8,name:"product8",price:95}
    ];
    return(
        <div>
          <h2>Product List</h2>
         <div className="App-Products-Row">
            {products.map((value,index)=>(
                <div className="App-Products-Box" key={index}>
                    <h3>{value.name}</h3>
                    <h4>{value.price}</h4>
                    <button>AddToCart</button>
                    </div>
            ))}
         </div>
        </div>
    )
}