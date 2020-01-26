var name = sessionStorage.name
var price = sessionStorage.price
var image = sessionStorage.image
var sale = sessionStorage.sale
var oldprice = sessionStorage.oldprice
var myBag = JSON.parse(sessionStorage.myBag);

function freeshipping(x) {
    document.getElementById("freeshipping").style.display = x;
}

function addtobag() {
    var found = false;
    myBag.forEach(function (item) {
        if (item[0] == name) {
            item[1]++;
            item[3] = parseInt(item[1]) * parseInt(price);
            found = true;
        }
    });
    if (!found) {
        myBag.push([name, 1, price, price]);
    }
    sessionStorage.myBag = JSON.stringify(myBag);
}

function loadpage() {
    document.title = name;
    document.getElementById("productname").innerHTML = name;
    document.getElementById("productimage").src = "img/" + name + ".webp";
    if (sale = true) {
        document.getElementById("productprice").innerHTML = "Price:" + price + " was " + oldprice;
    } else {
        document.getElementById("productprice").innerHTML = "Price:" + price;
    }

}

window.addEventListener("load", loadpage);