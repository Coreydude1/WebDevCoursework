window.onload = resize_title;
window.onresize = resize_title;

function resize_title() {
    var title = document.getElementById("article-title");
    var image = document.getElementById("article-image");
    var windowSize = window.innerWidth;

    var titleSize = windowSize - (155 + image.offsetWidth + 100);

    title.style.paddingRight = titleSize + "px";
};