function addtask(){
    let tname = document.getElementById("inp");
    let par = document.getElementById("task");
    let span = document.createElement("span");
    let remove = document.createElement("button");
    let newtask = document.createElement("p");
    newtask.innerHTML = tname.value;
    remove.innerHTML = "Remove";
    remove.setAttribute("id","rem");
    span.append(newtask );
    newtask.append(remove );
    par.append(span);
    tname.value = "";
    remove.addEventListener('click',()=>{
     par.removeChild(span);
    })
}