
const navbar =()=>{
    return` <div class="logo" >
    <img onclick="window.location.href='index.html'"  id="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS357fHYAnvyZIqrnolaRs3MlCQO7PyKngEag&usqp=CAU" alt="">
</div>
<div onclick="window.location.href='mensproduct.html'" id="menCat" class="menCat">MEN</div>
<div onclick="window.location.href='womenpage.html'" class="menCat">WOMEN</div>
<div id="kidCat" class="menCat">KIDS</div>
<div id="homeCat" class="menCat">HOME & LIVING</div>
<div id="beautyCat" class="menCat">BEAUTY</div>
<div id="Studio" class="menCat">STUDIO</div>
<div id="inpDiv">
    <i id="searchIcon" class="fas fa-search"></i>
    <input id="searchInp" type="text" placeholder="Search for products,brands and more">
</div>


<div  id="userProf">
    
    <p  onclick="window.location.href='signup.html'" id="profileU" class="prof"></p>
</div>
<div>
    <i onclick="window.location.href='signup.html'" id="wishList" class="far fa-heart fa-2x"></i>
    <p onclick="window.location.href='signup.html'" class="wish">profile</p>
</div>
<div>
    <i onclick="window.location.href='addtocart.html'" id="cartBag" class="fas fa-shopping-bag fa-2x"></i>
    <p onclick="window.location.href='addtocart.html'" class="bag">Bag</p>
</div>`
}


export default navbar