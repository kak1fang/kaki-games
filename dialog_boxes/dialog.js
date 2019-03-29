function openDialog(id){
    let elem = document.getElementById(id)
    elem.setAttribute('open',true);
}

function closeDialog(id){
    let elem = document.getElementById(id)
    elem.removeAttribute('open');
}