function addFields(){
    var number = parseInt(document.getElementById("nooftickets").value);
    var container = document.getElementById("container");
    while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
    }
    for (i=0;i<number;i++){
      container.appendChild(document.createTextNode("Name " + (i+1)));
      var input = document.createElement("input");
      input.type = "text";
      input.name = "name" + i;
      //input.required= true;
      container.appendChild(input);
      container.appendChild(document.createElement("br"));
    }
}