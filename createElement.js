
// Create element
function myFunction() {
    var button = document.createElement("button");
    var textNode = document.createTextNode('Im button');
    var classAttribute = document.createAttribute('class');
	classAttribute.value = 'my-class';    

    document.body.appendChild(button);
    button.appendChild(textNode);
    button.setAttributeNode(classAttribute);
}
