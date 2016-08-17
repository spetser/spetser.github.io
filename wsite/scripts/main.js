var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sunrise.jpg') {
      myImage.setAttribute ('src','images/serious.jpg');
    } else {
      myImage.setAttribute ('src','images/sunrise.jpg');
    }
}