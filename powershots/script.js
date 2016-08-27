//center image
var usedImages = {};
var usedImagesCount = 0;
var numImages = 76;
function displayImage() {
    var num = 1+Math.floor(Math.random() * (numImages));
    if (!usedImages[num]){
        document.canvas.src = 'images/'+num+'.jpg';
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

//background image
var totalCount = 76;
function ChangeIt() {
  var num = Math.ceil( Math.random() * totalCount );
  document.body.background = 'images/'+num+'.jpg';
  document.body.style.backgroundSize = '100% 100%';
  document.body.style.backgroundRepeat = 'no-repeat';
}
