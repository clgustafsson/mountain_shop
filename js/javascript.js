var myCart = [];
if (sessionStorage.myCart != null) {
    myCart = JSON.parse(sessionStorage.myCart);
}
if (sessionStorage.shoppingcartamount != null) {
    document.getElementById("shoppingcartnav").innerHTML = "Shoppingcart (" + JSON.parse(sessionStorage.shoppingcartamount) + ")";
}


var items = [{ //showinfo() needs name: to be unique /product image -> css/"name:".webp & css/"name".png (for apple support)  /descriptions are showed at productpage /saletag is show at main page
        price: 20,
        name: "Product1",
        sale: false,
        oldprice: 0,
        saletag: "",
        description: "This is product1s description! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hicrepellendus eius earum voluptatem quibusdam! Vel, soluta optio explicabo veniam corporis nostrum assumenda eum aspernatur sapiente excepturi, odit voluptatum. Nesciunt, consectetur."
    },
    {
        price: 50,
        name: "Product2",
        sale: false,
        oldprice: 0,
        saletag: "Limited offer",
        description: "This is product2s description! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hicrepellendus eius earum voluptatem quibusdam! Vel, soluta optio explicabo veniam corporis nostrum assumenda eum aspernatur sapiente excepturi, odit voluptatum. Nesciunt, consectetur."
    },
    {
        price: 70,
        name: "Product3",
        sale: false,
        oldprice: 0,
        saletag: "",
        description: "This is product3s description! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hicrepellendus eius earum voluptatem quibusdam! Vel, soluta optio explicabo veniam corporis nostrum assumenda eum aspernatur sapiente excepturi, odit voluptatum. Nesciunt, consectetur."
    },
    {
        price: 100,
        name: "Product4",
        sale: true,
        oldprice: 200,
        saletag: "50% off",
        description: "This is product4s description! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hicrepellendus eius earum voluptatem quibusdam! Vel, soluta optio explicabo veniam corporis nostrum assumenda eum aspernatur sapiente excepturi, odit voluptatum. Nesciunt, consectetur."
    }
];

function freeshipping(x) { //toggles free shipping popup
    document.getElementById("freeshipping").style.display = x;
}

function addtocart(target, productprice) { //adding products to cart
    var found = false;
    myCart.forEach(function (item) {
        if (item[0] == target) {
            item[1]++;
            item[3] = parseInt(item[1]) * parseInt(productprice);
            found = true;
        }
    });
    if (!found) {
        myCart.push([target, 1, productprice, productprice]);
    }
    var shoppingcartamount = 0;
    myCart.forEach(function (item) {
        shoppingcartamount += item[1];
    });
    document.getElementById("shoppingcartnav").innerHTML = "Shoppingcart (" + shoppingcartamount + ")";
    sessionStorage.shoppingcartamount = shoppingcartamount;
    sessionStorage.myCart = JSON.stringify(myCart);
}

function viewproduct(name, price, sale, oldprice, description) { //linking to the product site which is generated using the variables from sessionStorage
    sessionStorage.name = name;
    sessionStorage.price = price;
    sessionStorage.sale = sale;
    sessionStorage.oldprice = oldprice;
    sessionStorage.description = description;
    sessionStorage.myCart = JSON.stringify(myCart);
    window.open("index2.html", "_self");
}

function showinfo(name, display) { //showing productinfo on hover on product for a cleaner look
    document.getElementById("productinfo" + name).style.display = display;
}


function loadpage() { //generating the html code using handlebars
    template = document.getElementById("product-template").innerHTML;
    renderer = Handlebars.compile(template)
    items.forEach(function (item) {
        var product = document.createElement("div");
        html = renderer(item)
        product.innerHTML = html;
        document.getElementById("products").appendChild(product);
        document.getElementById("enablejavascript").style.display = "none";
    });
}

window.addEventListener("load", loadpage);