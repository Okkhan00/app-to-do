const item = document.querySelector("#item");
const todobox = document.querySelector(".to-do-box");

item.addEventListener(
    "keyup",
    function (event){
        if(event.key == "Enter" && this.value.trim() !== ""){
            addtodo(this.value)
            this.value=""
        }
    }
)

const addtodo = (item)=>{
    const listitem = document.createElement("li");
    listitem.innerHTML = `
         ${item}      
      <i class="fas fa-times"></i>
    `
    listitem.addEventListener("click",
        function(){
            this.classList.toggle("done");
        }
    )

     // Get current date and time
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();

     listitem.innerHTML = `
       <div>
         <span>${item}</span>
         <div class="timestamp">${formattedDate} ${formattedTime}</div>
       </div>
       <i class="fas fa-times"></i>
     `;

    listitem.querySelector("i").addEventListener("click",
        function(){
        listitem.remove()
    })
        
    todobox.appendChild(listitem)
}

