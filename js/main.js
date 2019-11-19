let productName = document.getElementById("productName"),
 productPrice = document.getElementById("productPrice"),
 productCompany = document.getElementById("productCompany"),
 productDesc = document.getElementById("productDesc"),
 btn = document.getElementById("btn"),
 currentIndex=0,
 search = document.getElementById("search"),
 productContainer ;
 if(localStorage.getItem("productCon") == null)
 {
 productContainer=[];
 }
 else{
  productContainer=JSON.parse(localStorage.getItem("productCon"));
  displayData();

 }

btn.onclick = function(){
  if(btn.innerHTML=="Add product"){
    addProduct();
    displayData();
    clearForm();
    localStorage.setItem("productCon",JSON.stringify( productContainer))
  
  }
else{
  updateProduct();
  displayData();
  clearForm();
  localStorage.setItem("productCon",JSON.stringify( productContainer))
  }


}

function updateProduct(){
  productContainer[currentIndex].name=productName.value
  productContainer[currentIndex].price=productPrice.value
  productContainer[currentIndex].company=productCompany.value
  productContainer[currentIndex].desc=productDesc.value
  btn.innerHTML="Add product"

}




function addProduct()
{
  let product = {
    name:productName.value,
    price:productPrice.value,
    company:productCompany.value,
    desc:productDesc.value
  }
  productContainer.push(product);

  
}



function displayData()
{
let rows="",
 i;
for(i=0 ; i<productContainer.length ;i+=1)
    {
      rows+=`<div class="col-lg-4">
      <div class="contain bg-warning p-5 m-3 rounded-lg">
      <h2 class="text-primary">${productContainer[i].name}</h2> 
      <h3 class="text-success">${productContainer[i].price}</h3>
      <h4 class="text-danger">${productContainer[i].company}</h4>
      <p class="text-muted">${productContainer[i].desc}</p>
      <div class="text-center">
      <button class="btn btn-info" onclick="setForm(${i})">Update</button>
      <button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button>
      </div>
      </div>
    </div>`

    }
 document.getElementById("row").innerHTML=rows
}



function setForm(i)
{
  productName.value=productContainer[i].name;
  productPrice.value=productContainer[i].price;
  productCompany.value=productContainer[i].company;
  productDesc.value=productContainer[i].desc;
  btn.innerHTML="update product";
  currentIndex=i;



}



function deleteProduct(id)
{
productContainer.splice(id,1);
localStorage.setItem("productCon",JSON.stringify( productContainer));
displayData()
}



function clearForm(){
  let inputs = document.getElementsByClassName("form-control"),
  i;
  for( i=0 ; i<inputs.length ; i++)
  {
    inputs[i].value=""
  }

}



search.onkeyup=function()
{
  searchProduct(search.value)
}


function searchProduct(term){
  var sRow="";
for(var i=0 ; i<productContainer.length ;i++)
  {
    if(productContainer[i].name.includes(term))
    {
    sRow+=`<div class="col-lg-4">
    <div class="contain bg-warning p-5 m-3 rounded-lg">
    <h2 class="text-primary">${productContainer[i].name}</h2> 
    <h3 class="text-success">${productContainer[i].price}</h3>
    <h4 class="text-danger">${productContainer[i].company}</h4>
    <p class="text-muted">${productContainer[i].desc}</p>
    <div class="text-center">
    </div>
    </div>
  </div>`

    }
    document.getElementById("sRow").innerHTML=sRow;
  
  }
}
