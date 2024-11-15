 
    let cart = new Object();
    let getMyList = document.getElementById('mycart');

    function items(){
        let insertNode = document.createElement('li');
        let findMyCart = document.getElementById('mycart');
        let getPrdDisplay = document.getElementById('prd-total');
        let totalCart = 0;
        findMyCart.innerHTML = '';
        Object.keys(cart).forEach((key) => {
            if(cart[key].itemCount != 0){
                findMyCart.innerHTML += `
                <li>
                    Product 
                    <span class="prd-num">${cart[key].itemNumber}</span>&nbsp;
                    <span class="prd-price">${cart[key].itemPrice}</span>
                    <button class="remove"  item-num="${cart[key].itemNumber}" item-price="${cart[key].itemPrice}" onclick="removeCart(this)">Remove</button>&nbsp;
                    <span class="prd-count">${cart[key].itemCount}</span>
                </li>
            `;
            }
            totalCart += parseInt(cart[key].itemPrice) * cart[key].itemCount;
        });
        getPrdDisplay.textContent = totalCart.toFixed(2);
        
        
    }

    function addCart(toggle){
        let itemNum = toggle.getAttribute('item-num');
        let itemPrice = toggle.getAttribute('item-price');
        if(cart.hasOwnProperty(`itemNum${itemNum}`)){
            let getTotalCount = cart[`itemNum${itemNum}`].itemCount + 1;
            cart[`itemNum${itemNum}`]['itemCount'] = getTotalCount;
        }else{
            cart[`itemNum${itemNum}`] = {'itemNumber':itemNum,'itemPrice':itemPrice,'itemCount':1};
        }
        items();
    }

    function removeCart(toggle){
        let itemNum = toggle.getAttribute('item-num');
        let itemPrice = toggle.getAttribute('item-price');
        // console.log(itemNum,itemPrice);
        if(cart.hasOwnProperty(`itemNum${itemNum}`) && cart[`itemNum${itemNum}`].itemCount != 0){
            let getTotalCount = cart[`itemNum${itemNum}`].itemCount - 1;
            cart[`itemNum${itemNum}`]['itemCount'] = getTotalCount;
        }
        items();
    }

    function checkout(){
        let findMyCart = document.getElementById('mycart');
        findMyCart.innerHTML = '';
        cart = new Object()
        items();
    }
