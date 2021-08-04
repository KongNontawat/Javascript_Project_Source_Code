new_task_enter()
clear_form()
function new_task_enter() {
    const input_task = document.getElementById("input_text")
    input_task.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            new_task_fn02();
        }
    })}
function clear_form() {
    const input_task = document.getElementById("input_text")
    input_task.addEventListener("keyup", function(event) {
        if (event.keyCode === 46) {
            event.preventDefault();
            location.reload();
        }
    })}
        
var i=0;
function new_task_fn02() {
    console.log(i = i+1);
    const input_task = document.getElementById("input_text").value;
    
    const new_block = document.createElement("LI");
        new_block.id ="task_list_li"+i;
        new_block.className ="task_list_li";
        // new_block.setAttribute("onclick", "check_box();");
        document.getElementById("task_list").appendChild(new_block);
        console.log(new_block);

    const new_item = document.createElement("INPUT");
        new_item.type = "checkbox";
        new_item.className = "task_item";
        new_item.id = "task_item"+i;
    
    const new_label = document.createElement("LABEL");
        new_label.className = "label label"+i;
        new_label.id = "label"+i;
        new_label.setAttribute("for","task_item"+i);
    const text_task = document.createTextNode(input_task);
        new_label.appendChild(text_task);
    document.getElementById("task_list_li"+i).appendChild(new_item);
    document.getElementById("task_list_li"+i).appendChild(new_label);
    
    const span = document.createElement("SPAN");
        span.className = "close";
        span.id = "close"+i;
        document.getElementById("task_list_li"+i).appendChild(span);
    const i_icon = document.createElement("I");
        i_icon.className = "fas fa-trash-alt";
        document.getElementById("close"+i).appendChild(i_icon);
    
    const new_br = document.createElement("br");
        document.getElementById("task_list_li"+i).appendChild(new_br);
    document.getElementById("input_text").value = "";
    document.getElementById("input_text").focus();

    let close = document.getElementsByClassName("close");
    for (let ii = 0; ii < close.length; ii++) {
        close[ii].onclick = function() {
        const block = this.parentElement;
        block.style.display = "none";
    }
    text_line();
    function text_line() {
        var list = document.querySelector('li');
        list.addEventListener('click', function(ev) {
            if (ev.target.tagName === 'LABEL') {
                ev.target.classList.toggle('checked');
            }
        }, false);
    }  
    
}};




