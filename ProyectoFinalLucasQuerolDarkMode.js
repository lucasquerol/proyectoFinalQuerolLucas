let darkModeBtn = document.getElementById("darkModeBtn")

if(localStorage.getItem("darkMode")){


}else{

    console.log("Setear por primera vez")
    
    localStorage.setItem("darkMode", false)
}

if(JSON.parse(localStorage.getItem("darkMode")) == true){
    
    document.body.classList.toggle("modoOscuro")
    
    darkModeBtn.innerText = "Light"
}


darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("modoOscuro")

    if(JSON.parse(localStorage.getItem("darkMode")) == false){

        darkModeBtn.innerText = "Light"
        
        localStorage.setItem("darkMode", true)

    }
    else if(JSON.parse(localStorage.getItem("darkMode")) == true){
       
        darkModeBtn.innerText = "Dark"
        
        localStorage.setItem("darkMode", false)
    }
})
