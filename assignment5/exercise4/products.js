

let container = document.getElementById('productContainer');
let productURL = "http://127.0.0.1:5500/Web%20course/assignment5/exercise4/products.json"; // adopt to your real location! 
initialize(productURL,container);

function initialize(jsonURL, domElement) {
	(async () => {
		const data=await fetch(jsonURL).then(response=>response.json());
	data.forEach(elem=>{
			domElement.innerHTML+=`<div class="product" data-prodId="${elem.id}">
			<h2>${elem.title}</h2>
			<div>
				<div class="desc">${elem.desc}</div>
				<div class="price">${elem.price}</div>
				<div class="buy"><input type="button" value="add to cart"></div>
			</div>
		</div>`;
		});
		})();
}

		


		