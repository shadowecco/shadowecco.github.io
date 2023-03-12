/* Page Elements */

$(document).ready(function () {
  /* Main Elements */

  //Page Nav
  $('.page-navbar').load('./assets/page-elements/main.html #page-nav');

  //Page Line
  $('.page-line').load('../../assets/page-elements/main.html #page-line');

  //Footer Contacts
  $('.contacts').load('./assets/page-elements/main.html #contacts');

  //Footer Copyright
  const currentYear = new Date().getFullYear();
  $('.copyright').html('Copyright \u00A9 2020 - ' + currentYear + ' <br>All rights reserved | Helen Yates');

  //Powered
  $('.powered').html('&#128029; Powered by chocolate, tea and coding &#128029;')

  //Footer Text
  projectFooterText('https://www.freepik.com/free-vector/hello-spring-background_4006230.htm', 'https://www.freepik.com/author/freepik', 'freePik', freePikLink, 'freepik')


  //Home Elements
  $('.home-header').load('../../assets/page-elements/site-elements/home.html #home-header');
  $('.logos').load('../../assets/page-elements/site-elements/home.html #logos-section');
  $('.welcome').load('../../assets/page-elements/site-elements/welcome.html');
  $('.certifications').load('../../assets/page-elements/site-elements/certifications.html #cert-section');
  $('.skills').load('../../assets/page-elements/site-elements/skills.html');
  $('.hobbies').load('../../assets/page-elements/site-elements/hobbies.html');

  //Gallery
  $('.gallery-header').load('../../assets/page-elements/site-elements/gallery.html #gallery-header');
  $('.galleryweb').load('../../assets/page-elements/gallery/gallweb.html #gallery-section');
  $('.gallerypython').load('../../assets/page-elements/gallery/gallpyth.html #gallery-section');
  // $('.galleryongoing').load('../../assets/page-elements/gallery/gallongoing.html #gallery-section');


  //CV
  // $('.cv-header').load('../../assets/page-elements/cv/cv-main.html #cv-header')
  // $('.social-section').load('../../assets/page-elements/cv/cv-main.html #social-section')
  // $('.aws-cert-section').load('../../assets/page-elements/cv/cv-certs.html #aws-section')
  // $('.resume-section').load('../../assets/page-elements/cv/cv-work-experience.html')
  // $('.online-class-section').load('../../assets/page-elements/cv/cv-edu-online.html')
  // $('.edu-section').load('../../assets/page-elements/cv/cv-edu.html')
  // $('.portfolio-section').load('../../assets/page-elements/cv/cv-portfolio.html')
  // $('.skills-section').load('../../assets/page-elements/cv/cv-extras.html #skills-section')
  // $('.hobbies-section').load('../../assets/page-elements/cv/cv-extras.html #hobbies-section')

});
