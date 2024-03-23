var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productSale = document.getElementById("productSale");
var productDescription = document.getElementById("productDescription");
var searchInput =document.getElementById("searchInput");

var productlist;

if(localStorage.productes != null){
    productlist = JSON.parse(localStorage.productes)
}else{
    var productlist = [];
}

displayData()

function addProduct() {

    var Product = {
        name: productName.value,
        Price: productPrice.value,
        Category: productCategory.value,
        Sale: productSale.value,
        Description: productDescription.value,
    }
    productlist.push(Product)
    
    localStorage.setItem("productes",JSON.stringify(productlist))
    clearproduct()
    displayData()

}
function clearproduct() {

    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productSale.value = "";
    productDescription.value = "";
}
function displayData() {

    var material = "";

    for (var i = 0; i < productlist.length; i++) {
        material += `  <tr>
        <td>${i}</td>
        <td> ${productlist[i].name} </td>
        <td>${productlist[i].Price}</td>
        <td>${productlist[i].Category}</td>
        <td>${productlist[i].Sale}</td>
        <td>${productlist[i].Description}</td>
        <td>
        <button  class="btn btn-warning btn-sm">update</button>
    </td>
    <td>
        <button onclick ="deleteItem (${i} )"  class="btn btn-danger btn-sm">delete</button>
    </td> 
    </tr> `;
    }

    document.getElementById("data").innerHTML = material
}

function deleteItem (index){

    productlist.splice( index , 1)
    displayData();
}

function search(){

    var term = searchInput.value;
    
    var material = "";

    for (var i = 0; i < productlist.length; i++) {
        if(productlist[i].name.toLocaleLowerCase().includes( term.toLocaleLowerCase() ) ){
            material += `  <tr>
            <td>${i}</td>
            <td> ${productlist[i].name} </td>
            <td>${productlist[i].Price}</td>
            <td>${productlist[i].Category}</td>
            <td>${productlist[i].Sale}</td>
            <td>${productlist[i].Description}</td>
            <td>
            <button  class="btn btn-warning btn-sm">update</button>
        </td>
        <td>
            <button onclick ="deleteItem (${i} )"  class="btn btn-danger btn-sm">delete</button>
        </td> 
        </tr> `;
        }
        }

    document.getElementById("data").innerHTML = material
}

