var myCart = [];
if (sessionStorage.myCart != null) {
    myCart = JSON.parse(sessionStorage.myCart);
}
if (sessionStorage.shoppingcartamount != null) {
    document.getElementById("shoppingcartnav").innerHTML = "Shoppingcart (" + JSON.parse(sessionStorage.shoppingcartamount) + ")";
}

function freeshipping(x) { //toggles free shipping popup
    document.getElementById("freeshipping").style.display = x;
}

function totalinfo() { //updates the shoppingcarts totalamount and totalprize
    var totalprice = 0;
    var totalamount = 0;
    myCart.forEach(function (item) {
        totalprice = parseInt(totalprice) + parseInt(item[3]);
        totalamount = parseInt(totalamount) + parseInt(item[1]);
    });
    document.getElementById("totalamount").innerHTML = "Total amount of products:" + totalamount;
    document.getElementById("totalprice").innerHTML = "Total price:" + totalprice;
}

function addtocart(target, productprice) { //adding / removing products via input
    myCart.forEach(function (item, index) {
        var amount = Math.abs(document.getElementById("inputamount" + item[0]).value); //preventing a negative amount of products by taking the absolute value
        document.getElementById("inputamount" + item[0]).value = amount;
        if (item[0] == target) {
            item[1] = parseInt(amount);
            item[3] = parseInt(item[1]) * parseInt(productprice);
            document.getElementById("price" + item[0]).innerHTML = item[3];
            if (amount < 1) { //removing item from cart if amount is 0 or negative
                document.getElementById(target).style.display = "none";
                myCart.splice(index, 1);
            }
            totalinfo();
        }
    });
    var shoppingcartamount = 0;
    myCart.forEach(function (item) {
        shoppingcartamount += item[1];
    });
    document.getElementById("shoppingcartnav").innerHTML = "Shoppingcart (" + shoppingcartamount + ")";
    sessionStorage.shoppingcartamount = shoppingcartamount;
    sessionStorage.myCart = JSON.stringify(myCart);
}


function loadpage() { //generating the html code using handlebars
    template = document.getElementById("product-template").innerHTML;
    renderer = Handlebars.compile(template)
    myCart.forEach(function (item) {
        var product = document.createElement("div");
        html = renderer(item)
        product.innerHTML = html;
        document.getElementById("shoppingcart").appendChild(product);
        totalinfo();
    });
}

window.addEventListener("load", loadpage);