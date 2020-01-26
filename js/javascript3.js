var myBag = JSON.parse(sessionStorage.myBag);

function freeshipping(x) {
    document.getElementById("freeshipping").style.display = x;
}

function totalinfo() {
    var totalprice = 0;
    var totalamount = 0;
    myBag.forEach(function (item) {
        totalprice = totalprice + item[3];
        totalamount = totalamount + item[1];
    });
    document.getElementById("totalamount").innerHTML = "Total amount of products:" + totalamount;
    document.getElementById("totalprice").innerHTML = "Total price:" + totalprice;
}

function addtobag(target, productprice) {

    myBag.forEach(function (item) {
        var amount = Math.abs(document.getElementById("inputamount" + item[0]).value);
        if (item[0] == target) {
            item[1] = parseInt(amount);
            item[3] = parseInt(item[1]) * parseInt(productprice);
            document.getElementById("price" + item[0]).innerHTML = item[3];
            totalinfo();
        }
    });
    sessionStorage.myBag = JSON.stringify(myBag);

}


function loadpage() {
    template = document.getElementById("product-template").innerHTML;
    renderer = Handlebars.compile(template)
    myBag.forEach(function (item, index) {
        var product = document.createElement("div");
        html = renderer(item)
        product.innerHTML = html;
        document.getElementById("shoppingcart").appendChild(product);
        totalinfo();
    });
}

window.addEventListener("load", loadpage);