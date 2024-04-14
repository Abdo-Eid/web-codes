// Get the parent element
const parentElement = document.getElementById('cont'); // Replace 'parentElementId' with the actual ID of the parent element

// Get all child elements
const childElements = parentElement.children;

// Define an array of colors
const colors = [
    "#277EB7", "#155588", "#28B8AA", "#14666C", "#F4F2DE",
    "#983250", "#833355", "#ddb33b", "#ddb22d", "#F7EEDD",
    "#161616", "#F7F7FF", "#494849", "#272838", "#F3DE8A",
    "#EB9486", "#F9F8F8", "#70C1B3", "#25283D", "#9BB8CD",
    "#D61C4E", "#FFAEC0", "#4D3E3E", "#FFF3CD", "#155263",
    "#D3504A", "#F3F3F3", "#890526", "#B92335"
];

// Loop through each color and create a new child element with the corresponding color
colors.forEach(color => {
    // Create a new child element
    const childElement = document.createElement('span');

    // Add text content to the new element
    childElement.textContent = color;
    // Set the background color
    childElement.style.backgroundColor = color;

    // Add click event listener to change background color of the page
    childElement.addEventListener('click', function() {
        document.body.style.backgroundColor = color;
    });

    // Append the child element to the parent
    parentElement.appendChild(childElement);
});

function Grayscale() {
    // Apply grayscale filter to the entire page
    document.body.style.filter = "grayscale(100%)";
}

function color(){
    document.body.style.filter = "grayscale(0%)";
}
function white(){
    document.body.style.backgroundColor = "white";
}
function black(){
    document.body.style.backgroundColor = "black";
}
