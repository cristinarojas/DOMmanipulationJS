
// Create element
function createButton() {

	// Creating a button on the body
    var button = document.createElement("button");
    var textNode = document.createTextNode('Im button');
    var classAttribute = document.createAttribute('class');
	classAttribute.value = 'my-button';    

    document.body.appendChild(button);
    button.appendChild(textNode);
    button.setAttributeNode(classAttribute);
}

// Create paragraph inside div
function createParagraph() {

	// Getting the div
	var theDiv = document.getElementById('paragraph');
	
	// Creating the text node
	var textNode = document.createTextNode('Im the paragraph');

	// Creating the paragraph
	var theP = document.createElement('p');

	// Adding the text node to the paragraph
	theP.appendChild(textNode);

	theDiv.appendChild(theP);
}
