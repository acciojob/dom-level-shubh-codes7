//your JS code here. If required.
let elm = document.querySelector("#level");

function count(x){
    if(x.parentElement === null) return 1;
    return 1 + count(x.parentElement);
}

let n = count(elm);
alert(`The level of the element is: ${n}`)