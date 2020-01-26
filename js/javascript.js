var myBag = JSON.parse(sessionStorage.myBag);

var items = [{ //name: has to be unique. //product image -> css/"name:".webp
        price: 20,
        name: "Product1",
        sale: false,
        oldprice: 0,
        saletag: ""
    },
    {
        price: 50,
        name: "Product2",
        sale: false,
        oldprice: 0,
        saletag: "Limited offer"
    },
    {
        price: 70,
        name: "Product3",
        sale: false,
        oldprice: 0,
        saletag: ""
    },
    {
        price: 100,
        name: "Product4",
        sale: true,
        oldprice: 200,
        saletag: "50% off"
    }

];

function addtobag(target, productprice) {
    var found = false;
    myBag.forEach(function (item) {
        if (item[0] == target) {
            item[1]++;
            item[3] = parseInt(item[1]) * parseInt(productprice);
            found = true;
        }
    });
    if (!found) {
        myBag.push([target, 1, productprice, productprice]);
    }
    sessionStorage.myBag = JSON.stringify(myBag);
}

function viewproduct(name, price, image, sale, oldprice) {
    window.open("index2.html", "_self");
    sessionStorage.name = name;
    sessionStorage.price = price;
    sessionStorage.image = image;
    sessionStorage.sale = sale;
    sessionStorage.oldprice = oldprice;
    sessionStorage.myBag = JSON.stringify(myBag);
}

function showinfo(x) {
    document.getElementById("productinfo" + x).style.display = "grid";
}

function hideinfo(x) {
    document.getElementById("productinfo" + x).style.display = "none";
}

function loadpage() {
    template = document.getElementById("product-template").innerHTML;
    renderer = Handlebars.compile(template)
    items.forEach(function (item, index) {
        var product = document.createElement("div");
        html = renderer(item)
        product.innerHTML = html;
        document.getElementById("products").appendChild(product);
        document.getElementById("enablejavascript").style.display = "none";
    });
}

window.addEventListener("load", loadpage);