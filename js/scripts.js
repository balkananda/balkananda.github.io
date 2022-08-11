/*!
* Start Bootstrap - Modern Business v5.0.6 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

var imageUrls = [
 'assets/ohrid.jpg',
 'assets/skopje.jpg,
];

var img = document.getElementById('the-image-to-change');
img.addEventListener("click", function() {
    this.src = imageUrls[Math.floor(Math.random() * imageUrls.length)];
});

img = $('#the-image-to-change');
img.on('click', function() {
    this.src = imageUrls[Math.floor(Math.random() * imageUrls.length)];
});
