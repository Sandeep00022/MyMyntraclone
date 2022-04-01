
let item=document.getElementById("item-here")
let cart=JSON.parse(localStorage.getItem("cart"))

  


const CartItems=(cart)=>{

  item.innerHTML=""

    cart.forEach((el,index)=>{

        let div=document.createElement("div")
        div.className="container"

       
        
        let img=document.createElement("img")
        img.src=el.image
        img.className="image"

        img.style.width="100%";


        let brand=document.createElement("h4")
        brand.innerText=el.name

        let det=document.createElement("p")
        det.innerText=el.detail

        let div2=document.createElement("div")
        
        div2.id="div2"
        

        let bhau=document.createElement("h4")
            bhau.innerText="₹"+el.price;

            let bhau2=document.createElement("p")
            bhau2.innerText=el.strickedoff;
            bhau2.style.textDecoration="line-through"
            bhau2.id="bhau2"
            let div4 =document.createElement("div")

            
            
              // remove button

              let remove=document.createElement("button")
              remove.innerText="Remove"
  
              remove.addEventListener("click",()=>{
                  Remove(index)
              })


            let div3 =document.createElement("div")
            // div3.style.display="flex"
            // div3.style.border=" 1px solid red"

            div4.append(brand,det,div2,remove)
            div.append(img)
            div2.append(bhau2,bhau)
            div3.append(div,div4)
            div3.id="div3"

            

            item.append(div3)

    })

  }

  CartItems(cart)

  let array=[
      {
          image:"https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/15157028/2021/8/16/3e9fc104-c513-45c4-a774-3108ab7f6eb91629129160428LOISCARONMLC-8253TRENDINGDAYDATEFUNCTIONINGWATCH1.jpg",
          name:"LOIS CARON",
          detail:"Men Leather Straps Watch",
          strickedoff:"₹1799",
          price:399
      },
      {
        image:"https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/productimage/2020/11/30/98a0d6b3-2f15-4136-8250-59199cfe7b7e1606739253130-1.jpg",
        name:"TnW",
        detail:"Men Textured Two-Fold Gen..",
        strickedoff:"₹1195",
        price:298
    },
    {
        image:"https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/productimage/2021/4/27/96e883f2-72bc-4598-9137-c9c05ec8c2c41619503551438-1.jpg",
        name:"HECTOR",
        detail:"Men Analogue Watch",
        strickedoff:"₹999",
        price:349
    },
    {
        image:"https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/15939552/2021/10/27/f887d458-c0f5-4eb5-855d-13c9d7f2a8881635276501460MancodeBeardWashOriginalForMenBlendedwithNaturalEssentialOil1.jpg",
        name:"MANCODE",
        detail:"Beard Wash Original Blended",
        strickedoff:"₹350",
        price:248
    },
    {
        image:"https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/productimage/2021/5/20/2ec11042-a344-4ea6-a8e4-78d1bd0a97e41621487693705-1.jpg",
        name:"MANCODE",
        detail:"PAck of 2 Beard Oil & Soap",
        strickedoff:"₹474",
        price:350
    },
    {
        image:"https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/15720426/2021/11/15/77fe7f97-2a3e-4e94-8224-92b72943c2851636972876161-Selvamagan-2mtrs-Cotton-Color-Border-Dhoti-7471636972875605-1.jpg",
        name:"SELVAMAGAN",
        detail:"Pure Cotton Dhoti",
        strickedoff:"₹349",
        price:296
    },
    {
        image:"https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/productimage/2021/1/25/4eebb06d-f2a0-4822-865b-51bf8fa70d0c1611555034065-1.jpg",
        name:"MANCODE",
        detail:"Men Keratin Shampoo 200ml",
        strickedoff:"₹399",
        price:299
    },
    {
        image:"https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/17066278/2022/2/7/9c766d53-153e-4f59-b786-f89421b7db451644216306550ELLISMenRedSolid1.jpg",
        name:"ELLIS",
        detail:"Men Checked Broad ",
        strickedoff:"₹999",
        price:349
    },
    {
        image:"https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/15989188/2021/11/2/2450fd3c-b382-4612-91b9-30cc07d7e7a91635855508776BeardMoustacheOil30ml1.jpg",
        name:"PRZ",
        detail:"Beard & Moustache Oil 30 ml",
        strickedoff:"₹305",
        price:274
    },
    {
        image:"https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/17426586/2022/3/8/07903c26-8e3b-4e82-a936-19496c954b281646719097211AlvaroCastagninoMenSilver-TonedEmbellishedStylishBroochPin1.jpg",
        name:"Alvaro Castagnino",
        detail:"Men Embellished Stylish Bro...",
        strickedoff:"₹999",
        price:349
    },
    {
        image:"https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/14966774/2021/7/29/236a1507-f91a-4877-ae89-0d6d5884c0841627531381885Deodorant1.jpg",
        name:"Hot Ice",
        detail:"Men Pack of Deodorant",
        strickedoff:"₹450",
        price:396
    },
    {
        image:"https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/15134044/2021/8/13/0060a2e8-5ccf-4295-8f12-f5d579e001011628838775139GlamvedaMenOilcontrolBlackheadremovingfacescrub1.jpg",
        name:"GLAMVEDA",
        detail:"Men Face Scrub 80g",
        strickedoff:"₹310",
        price:248
    },

  ]

  let additem=document.getElementById("Adding-more")

  const AppendMore=(array)=>{
    array.forEach((el)=>{

        let div=document.createElement("div")
        div.className="container"

        // add button 

        let btn =document.createElement("div")
        btn.innerText="ADD TO BAG"

        btn.addEventListener("click",()=>{
            AddtoBag(el)
        })
       
        



        btn.className="overlay"
        btn.addEventListener("click",()=>{
            AddtoBag(el)
        })
        
        let img=document.createElement("img")
        img.src=el.image
        img.className="image"

        img.style.width="100%";


        let brand=document.createElement("h4")
        brand.innerText=el.name

        let det=document.createElement("p")
        det.innerText=el.detail
        det.style.color="grey";
        det.style.fontSize="10px"

        let div2=document.createElement("div")
        
        div2.id="div2"
        

        let bhau=document.createElement("h4")
            bhau.innerText="₹"+el.price;

            let bhau2=document.createElement("p")
            bhau2.innerText=el.strickedoff;
            bhau2.style.textDecoration="line-through"
            bhau2.id="bhau2"
            bhau2.style.fontSize="15px"
            bhau2.style.color="grey"


          


            let div3 =document.createElement("div")
            div.append(img,brand,det)
            div2.append(bhau2,bhau)
            div3.append(div,div2,btn)

            additem.append(div3)

    })
  }


  AppendMore(array)

//   Add to bag function

 const AddtoBag=(el)=>{
     let arr=JSON.parse(localStorage.getItem("cart"))||[]
     arr.push(el)
     localStorage.setItem("cart",JSON.stringify(arr))
 }

  let total=cart.reduce(function(A,B){

    return A+ Number(B.price)
  },0)

     let showprice= document.getElementById("current-price")
     showprice.innerText=` ₹${total}`


     let random=Math.floor(Math.random()*399)

     let discount=document.getElementById("discounted")

     discount.innerText= `₹ ${random}`

     let subtotal=document.getElementById("total-amount")

      subtotal.innerText=`₹${(total-random)+99}`

// remove functionality

  const Remove=(index)=>{
      
      cart.splice(index,1)

      localStorage.setItem("cart",JSON.stringify(cart))

      CartItems(cart)

      let total=cart.reduce(function(A,B){

        return A+ Number(B.price)
      },0)

      let showprice= document.getElementById("current-price")
      showprice.innerText=` ₹${total}`

      let subtotal=document.getElementById("total-amount")

      subtotal.innerText=`₹${(total-random)+99}`

  }


  
 


