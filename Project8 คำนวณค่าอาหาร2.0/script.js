

// Page1
function out_user_name() {
    let name = document.getElementById("input_username").value;
    for (let i = 1; i <= 3; i++) {
        document.getElementById("user_name" + i).innerHTML = name; 
    }
}

function page2() {
    let page1 = document.getElementById("page1");
    let page2 = document.getElementById("page2");
    page1.style.display = "none"
    page2.style.display = "block"
}
function page3() {
    let page1 = document.getElementById("page1");
    let page2 = document.getElementById("page2");
    let page3 = document.getElementById("page3");
    page1.style.display = "none"
    page2.style.display = "none"
    page3.style.display = "block"
}
function page4() {
    let page1 = document.getElementById("page1");
    let page2 = document.getElementById("page2");
    let page3 = document.getElementById("page3");
    let page4 = document.getElementById("page4");
    page1.style.display = "none"
    page2.style.display = "none"
    page3.style.display = "none"
    page4.style.display = "block"
}

// Page3
function add_input() {
    let around = document.getElementById("input_listnumber").value;
    for(let i = 1; i <= Number(around); i++) {
        let add = document.createElement("input"); 
        add.setAttribute("type", "number"); 
        add.setAttribute("id", "input_price"+i); 
        add.setAttribute("class", "input_price"); 
        add.setAttribute("name", "input_price"+i); 
        add.setAttribute("placeholder", i+"."); 
        let element = document.getElementById("list_input");
        element.appendChild(add)
    }   
}

// Page4
function output() {
    let listnumber = document.getElementById("input_listnumber").value;
    document.getElementById("output_listnumber").innerHTML = listnumber;
}

function output_sum() {
    let qrt = document.getElementById("input_listnumber").value;
    let sum = 0;
    for(let i = 1; i <= qrt; i++) {
        let price = document.getElementById("input_price"+i).value;
        sum = sum + Number(price);
    }
    document.getElementById("output_sum_price").innerHTML = (new Intl.NumberFormat().format(sum));
}

function refresh() {
    location.reload()
}
