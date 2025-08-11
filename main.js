let btn = document.getElementsByTagName('button')[0]
console.log(btn);
let input = document.getElementsByTagName('input')[0]
console.log(input);



btn.onclick = function(){
    if (!input.value){
        alert("Insert a valid task");
    }
    let ul = document.querySelector("UL");
    let li = document.createElement("LI");
    let t_span =document.createElement("span");
    let task = document.createTextNode(input.value);
    let span = document.createElement("span");
    let x = document.createTextNode("X")
    span.className="delete";
    t_span.appendChild(task);
    span.appendChild(x)
    li.appendChild(span);
    li.appendChild(t_span);
    li.insertBefore(t_span, span);
    ul.appendChild(li);

    span.addEventListener("click", function(e){
        e.target.closest('li').remove()
    });
    li.onclick = function (){
        t_span.className='finish'
    }
}






























































































