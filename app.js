var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("visualVersions");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length};
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    // visualVersionsDots[i].className = visualVersionsDots[i].className.replace(" active", "");
  }
  x[slideIndex-1].style.display = "block";
  // visualVersionsDots[slideIndex-1].className += " active";
}

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$('.cumulusiPhoneFrame1').scroll(function() {
    $('#scroll-text').fadeOut();
});

function hover(element) {
  element.setAttribute('src', 'https://jeffragland.design/images/cumulus/cumulusLogoWhite.svg');
}

function unhover(element) {
  element.setAttribute('src', 'https://jeffragland.design/images/cumulus/cumulusLogoBlue.svg');
}
// ---------- Carousel navigation dots ---------- //
