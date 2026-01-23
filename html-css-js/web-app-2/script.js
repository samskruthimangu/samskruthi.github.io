const products=[
                {name: "Product1",price:50,desc: "Description",imgUrl:"https://picsum.photos/id/111/367/267"},
                {name: "Product2",price:60,desc: "Description",imgUrl:"https://picsum.photos/id/225/367/267"},
                {name: "Product3",price:70,desc: "Description",imgUrl:"https://picsum.photos/id/119/367/267"},
                {name: "Product4",price:80,desc: "Description",imgUrl:"https://picsum.photos/id/1/367/267"},
                {name: "Product5",price:90,desc: "Description",imgUrl:"https://picsum.photos/id/183/367/267"},
                {name: "Product6",price:100,desc: "Description",imgUrl:"https://picsum.photos/id/175/367/267"}
            ]
function showProducts(){
    let str=`<div class="row">`
    products.map(
        (el) => {
            str=str + `
            <div class="box">
          <img src=${el.imgUrl}/> 
          <h3> ${el.name} </h3>
           <p> ${el.desc} </p>
           <h3> ${el.price} </h3>
           <button class="cart">Add To Cart</button>
           </div>

            `
        }
    )
    str=str + `</div`
    root.innerHTML=str
} 