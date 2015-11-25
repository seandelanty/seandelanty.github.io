var usedImages = {};
var usedImagesCount = 0;
var numImages = 38;
function displayImage() {
    var num = 1+Math.floor(Math.random() * (numImages));
    if (!usedImages[num]){
        document.canvas.src = 'images/35mm/'+num+'.jpg';
        usedImages[num] = true;
        usedImagesCount++;
        if (usedImagesCount == numImages) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        displayImage();
    }
}
