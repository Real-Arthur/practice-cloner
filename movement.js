function addBox() {
var elmnt = document.getElementById("box_item");
var cln = elmnt.cloneNode(true);
document.getElementById("boxes").appendChild(cln);
}
