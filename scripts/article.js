//Get the width of the title
var originalTitleWidth = document.getElementById("article-title").offsetWidth;

//When the page loads or is resized adjusts the padding of the titles
window.onload = resize_title;
window.onresize = resize_title;

//adjusts the padding of the title
function resize_title() {
    //Get the title and image to its right
    var title = document.getElementById("article-title");
    var image = document.getElementById("article-image");
    
    //Get the window size
    var windowSize = window.innerWidth;

    //calculate and log the gap between the title and image
    var titlePaddingSize = windowSize - (originalTitleWidth + image.offsetWidth + 120);
    console.log(titlePaddingSize);
    
    //Apply padding too the title
    title.style.paddingRight = titlePaddingSize + "px";
};

