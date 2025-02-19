let buttons = document.querySelector("#pluss")
let inputs = document.querySelector("#infi")
let aftrr = document.querySelector("#aftr")
buttons.addEventListener("click",function ccc() {
    if (inputs.value == "") {
        alert("PLEASE ENTER ATLEAST ONE TASK!!!")
    }
    else{
        let newelem = document.createElement("ul");
        newelem.innerHTML=`${inputs.value} <i class="ri-delete-bin-6-line"></i>`;
        aftrr.appendChild(newelem)
        inputs.value=""
        newelem.querySelector("i").addEventListener("click" , function deletee() {
            newelem.remove()
        })
    }
})