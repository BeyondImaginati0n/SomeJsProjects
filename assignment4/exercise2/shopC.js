'use strict';

let products = [];


function Product(el) {
	this.id = el.dataset.prodid;
	this.title =  el.firstChild.nextSibling.firstChild.nodeValue;
	this.desc = el.getElementsByClassName('desc')[0].innerText;
	this.price = parseFloat(el.getElementsByClassName('price')[0].innerText);
	this.numInCart = 0;


	Product.prototype.updateProduct =  (e)=> {
        this.numInCart +=1;
        this.updateCart();     
    };
	
    if(this.title=='Sony Alpha IV'){
        Product.prototype.render = function () {
            return this.title+" "+this.price+"("+this.numInCart +")" +' total price : ' +this.totalPriceCalculate() + 'new Arrival!';
            
        };
    }else{
	Product.prototype.render = function () {
        return this.title+" "+this.price+"("+this.numInCart +")" +' total price : ' +this.totalPriceCalculate();
        
    };

}
	
    Product.prototype.updateCart=()=> {
        let output = document.getElementById("orderedItems");
        output.innerHTML= "";
        let total = 0;
        for (let p of products) {
            if (p.numInCart >0) { 
                let newP = document.createElement ("li");
                newP.appendChild(document.createTextNode (p.render()));
                output.appendChild(newP);
                total += p.numInCart*p.price;

                const decrementButton=document.createElement('button');
                decrementButton.textContent='DeleteItem';
                decrementButton.style.margin='10px';
                newP.append(decrementButton);
                
               decrementButton.addEventListener('click',p.removeOneFromCart.bind(p));
            }
        }
        document.getElementById("totalPrice").innerHTML = total.toFixed(2);
    };

    Product.prototype.removeOneFromCart=function(){
            this.numInCart--;
            this.updateCart();

    };

    Product.prototype.totalPriceCalculate=function(){
return this.numInCart*this.price;
    }
	
	let clikButton = el.getElementsByClassName('buy')[0];
	clikButton.addEventListener('click', this.updateProduct);
}




for (let pdiv of document.querySelectorAll("div.product")) {
        products.push(new Product(pdiv));
}
products[0].render=function(){
    return  this.title+" "+this.price+"("+this.numInCart +")" +' total price : ' +this.totalPriceCalculate() + '  , new Arrival!';
            };





