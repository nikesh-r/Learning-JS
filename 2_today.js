var d = new Date();
var dd = String (d.getDate()).padStart(2,'0');
var mm = String(d.getMonth() + 1).padStart(2,'0');
var yyyy = d.getFullYear();
console.log(dd + "/" + mm + "/" + yyyy);