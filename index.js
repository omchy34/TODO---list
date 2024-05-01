const form = document.querySelector('#form');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("#input");
    const InVal = input.value;


    const ul = document.querySelector("#ul-i");


    if (InVal === undefined || InVal === " ") {
        ("please enter valid task");
    } else {
        const li = document.createElement("li");
        li.innerHTML = InVal;
        ul.appendChild(li);
        input.value = "";

        const inp = document.createElement("input");
        inp.setAttribute("type", "button");
        inp.setAttribute("value", "delete");
        inp.setAttribute("id", "delet")
        li.appendChild(inp);

        inp.addEventListener("click", (event) => {
            event.preventDefault();
            ul.removeChild(li)
        })
    };








})


