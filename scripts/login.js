let wrong =document.getElementById("wrong")

let array=JSON.parse(localStorage.getItem("detail"))

  const LOgin=()=>{
event.preventDefault()
    let email=document.getElementById("email").value

    let password=document.getElementById("password").value;


    for(var i=0; i<array.length; i++){
        if(email==array[i].email || password==array[i].password){

        alert("welcome to login page")

        window.location.href='index.html'
        }
        else{
            wrong.innerHTML=""
            let h4=document.createElement("h4")
            h4.innerText="Wrong Password or Email"
            h4.style.color="white"
            h4.style.fontWeight="800"

            wrong.append(h4)
        }
    }


  }