let todaysdate = document.querySelector(".todaysdate")
let inputBox = document.querySelector("#input-box")
let button = document.querySelector (".ri-add-box-line")
let todoItems = document.querySelector (".todoitems")
let error = document.querySelector (".error")
todaysdate.textContent = new Date().toString().split(" ").splice(1,3).join(" ")

button.addEventListener("click", function(){
    let errorMsg = "fill in the field"
    if(inputBox.value === ""){
      error.innerHTML = `<p style="text-align: centre ; background-color: red; color: white; padding: 10px;" >${errorMsg}</p> 
      `
      setTimeout(()=>{
        error.innerHTML= ""
      },3500)
    } else{
      let div = document.createElement("div") 
    div.innerHTML=  `

    <div class="todotext">
      <input type="checkbox" id="" />
      <p>${inputBox.value.trim()}</p>
    </div>
    <i class="ri-delete-bin-line"></i>
    `
    div.classList.add("todoitem")
todoItems.appendChild(div)
inputBox.value = ""
    }
    
})


