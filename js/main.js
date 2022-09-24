/* Page Elements */

$(document).ready(function () {
  /* Main Elements */

  //Page Nav
  $(".page-navbar").load("./assets/page-elements/main.html #page-nav");

  //Page Line
  $(".page-line").load("../../assets/page-elements/main.html #page-line");

  //Footer Contacts
  $(".contacts").load("./assets/page-elements/main.html #contacts");

  //Footer Copyright
  const currentYear = new Date().getFullYear();
  $('.copyright').html("Copyright \u00A9 2020 - " + currentYear + " <br>All rights reserved | Helen Yates");

  //Footer Credits

  var picloc = "https://www.google.com/?xyz=";
  var siteloc = "https://www.google.com/?xyz=";

  $('.site-credits').html(
    '<a href="' +
    picloc +
    '">Image</a> by <a href="' +
    siteloc +
    '">Freepik</a>');

  //Home Elements
  $(".home-header").load("../../assets/page-elements/site-elements/home.html #home-header");
  $(".logos").load("../../assets/page-elements/site-elements/home.html #logos-section");
  $(".welcome").load("../../assets/page-elements/site-elements/welcome.html");
  $(".certifications").load("../../assets/page-elements/site-elements/certifications.html #cert-section");
  $(".skills").load("../../assets/page-elements/site-elements/skills.html");
  $(".hobbies").load("../../assets/page-elements/site-elements/hobbies.html");

  //Gallery

  $(".gallery-header").load("../../assets/page-elements/site-elements/gallery.html #gallery-header");
  $(".galleryweb").load("../../assets/page-elements/gallery/gallweb.html #gallery-section");
  $(".gallerypython").load("../../assets/page-elements/gallery/gallpyth.html #gallery-section");
  // $(".galleryongoing").load("../../assets/page-elements/gallery/gallongoing.html #gallery-section");
});

