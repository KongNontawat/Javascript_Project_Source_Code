const window_content = document.getElementById("window_content");
const btn_mini = document.getElementById("btn_mini");
const btn_max = document.getElementById("btn_max");
const btn_close = document.getElementById("btn_close");
const form_input_di = document.getElementsByClassName("form_input_di");
const form_id = document.getElementById("form_ID");
const form_name = document.getElementById("form_name");
const form_address = document.getElementById("form_address");
const form_canton = document.getElementById("form_canton");
const form_district = document.getElementById("form_district");
const form_province = document.getElementById("form_province");
const form_phone = document.getElementById("form_phone");
const blood_select = document.getElementById("blood_select");
const blood_a = document.getElementById("blood_a");
const blood_b = document.getElementById("blood_b");
const blood_ab = document.getElementById("blood_ab");
const blood_o = document.getElementById("blood_o");

window.onload = () => {
    for (let i = 0; i <= 12; i++ ) {
        form_input_di[i].disabled = true;
    }
}

btn_close.onclick = () => {
    window_content.style.display = "none";
}

document.getElementById("btn_add").onclick = () => {
    let number_ran = Math.floor(Math.random() * (999999 - 100000 + 1))+ 100000;
    form_id.value = "HN " + number_ran;
    for (let i = 0; i <= 12; i++ ) {
        form_input_di[i].disabled = false;
    }
    form_name.focus();
}

document.getElementById("btn_refresh").onclick = () => {
    for (let i = 1; i <= 12; i++ ) {
        form_input_di[i].disabled = false;
        form_input_di[i].value = "";
        form_name.focus();
    }
    form_name.focus();
}

document.getElementById("btn_cancel").onclick = () => {
    for (let i = 0; i <= 12; i++ ) {
        form_input_di[i].disabled = true;
        form_input_di[i].value = "";
        form_name.focus();
    }
}

let i = 0;
document.getElementById("btn_submit").onclick = () => {
    i = i + 1;
    console.log(i);
    const new_tr_body = document.createElement("TR");
        new_tr_body.id = "tr_body"+i;
        document.getElementById("tbody").appendChild(new_tr_body);

    const new_td_id = document.createElement("TD");
        new_td_id.id = "td_ID";
        const text_id = document.createTextNode(form_id.value);
        new_td_id.appendChild(text_id)
        document.getElementById("tr_body"+i).appendChild(new_td_id);

    const new_td_name = document.createElement("TD");
        new_td_name.id = "td_Name";
        const text_name = document.createTextNode(form_name.value);
        new_td_name.appendChild(text_name)
        document.getElementById("tr_body"+i).appendChild(new_td_name);

    const new_td_address = document.createElement("TD");
        new_td_address.id = "td_address";
        const text_address = document.createTextNode(form_address.value+" "+form_canton.value+" "+form_district.value+" "+form_province.value);
        new_td_address.appendChild(text_address)
        document.getElementById("tr_body"+i).appendChild(new_td_address);

    const new_td_phone = document.createElement("TD");
        new_td_phone.id = "td_phone";
        const text_phone = document.createTextNode(form_phone.value);
        new_td_phone.appendChild(text_phone)
        document.getElementById("tr_body"+i).appendChild(new_td_phone);

    const new_td_blood = document.createElement("TD");
            new_td_blood.id = "td_blood";
            const text_blood = document.createTextNode(blood_select.value);
            new_td_blood.appendChild(text_blood)
            document.getElementById("tr_body"+i).appendChild(new_td_blood);

    // const new_br = document.createElement("br");
    //     document.getElementById("tr_body").appendChild(new_br);
    console.log(new_tr_body);

    for (let i = 0; i <= 11; i++ ) {
        form_input_di[i+1].value = "";
        form_name.focus();
    }
    let number_ran = Math.floor(Math.random() * (999999 - 100000 + 1))+ 100000;
    form_id.value = "HN " + number_ran;
}
