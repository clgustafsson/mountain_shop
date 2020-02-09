var name = "productname";
var price = 0;
var sale = false;
var oldprice = 0;
var description = "";
if (sessionStorage.name != null) {
    name = sessionStorage.name;
    price = sessionStorage.price;
    sale = sessionStorage.sale;
    oldprice = sessionStorage.oldprice;
    description = sessionStorage.description;
} else { //redirect to main page if no product is selected
    window.open("index.html", "_self");
}
if (sessionStorage.shoppingcartamount != null) {
    document.getElementById("shoppingcartnav").innerHTML = "Shoppingcart (" + JSON.parse(sessionStorage.shoppingcartamount) + ")";
}
var myCart = [];
if (sessionStorage.myCart != null) {
    myCart = JSON.parse(sessionStorage.myCart);
}

function freeshipping(x) { //toggles free shipping popup
    document.getElementById("freeshipping").style.display = x;
}

function addtocart() { //adding item to shoppingcart
    var found = false;
    myCart.forEach(function (item) {
        if (item[0] == name) {
            item[1]++;
            item[3] = parseInt(item[1]) * parseInt(price);
            found = true;
        }
    });
    if (!found) {
        myCart.push([name, 1, price, price]);
    }
    var shoppingcartamount = 0;
    myCart.forEach(function (item) {
        shoppingcartamount += item[1];
    });
    document.getElementById("shoppingcartnav").innerHTML = "Shoppingcart (" + shoppingcartamount + ")";
    sessionStorage.shoppingcartamount = shoppingcartamount;
    sessionStorage.myCart = JSON.stringify(myCart);
}

document.getElementById("productimage").onerror = function onerrorimg() { //loading png image when webp is not supported
    document.getElementById("productimage").src = "img/" + name + ".png";
}

function loadpage() { //generating the html code using handlebars
    document.title = name + " - Mountain Shop";
    document.getElementById("productname").innerHTML = name;
    document.getElementById("productimage").src = "img/" + name + ".webp";
    document.getElementById("descriptiontext").innerHTML = description;
    if (sale == "true") {
        document.getElementById("productprice").innerHTML = "Price:" + price + " was " + oldprice;
    } else {
        document.getElementById("productprice").innerHTML = "Price:" + price;
    }

}

window.addEventListener("load", loadpage);