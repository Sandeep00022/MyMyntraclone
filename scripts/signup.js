let array=[]

const CreateAcc=()=>{

    event.preventDefault()
    let email=document.getElementById("email").value;

    let password=document.getElementById("password").value;

    let name=document.getElementById("name").value;

    let number=document.getElementById("number").value;

    if(email=="" || password=="" || name=="" || number=="" ){

        alert("Fill you details properly")
    }
    else{

        function obj(){

            this.email=email;
           
           this.password=password;
           this.name=name;
           this.number=number
           
           
              }
           
              let object= new obj()
           
              array.push(object)

              localStorage.setItem("detail",JSON.stringify(array))

              window.location.href='login.html'
            
    }


  
}