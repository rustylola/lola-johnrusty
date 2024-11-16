
const fetchProduct = async () => {

    const productList = document.getElementById('product-list').querySelector('.list');
    let htmlDisplay = '';
    let response = await fetch('https://fakestoreapi.com/products');

    try {
        const data = await response.json();
        // 200 status
        if(response.status === 200){
            // Do display
            // console.log(data);
            data.forEach((value,index)=>{
                htmlDisplay +=`
                    <div>
                        <img src="${value.image}" alt="${value.category}">
                        <h1>${value.title}</h1>
                        <h2>$${value.price.toFixed(2)}</h2>
                        <p class="overflow-text">${value.description}</p>
                    </div>
                `;
            });

            productList.innerHTML = htmlDisplay;

        }else{
            // show error message
            productList.innerHTML = "<div>Failed to fetch data.</div>";
            throw new Error("Failed to fetch data.")
        }
    } catch (error) {
        console.error("An error occured ", error);
    }
    
}

fetchProduct();