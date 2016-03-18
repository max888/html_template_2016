
$(document).ready(function(){

  // MOBILE MENU USES MMENU JQUERY PLUGIN
  // set up the mobile menu

  $("#mobile-menu").mmenu({
     // Options

  });
  var API = $("#mobile-menu").data( "mmenu" );
  $(".burger").click(function() {
     API.open();
  });
  $(".burger").click(function() {
     API.close();
  });




  // SLIDER USES SLICK JQUERY PLUGIN
  // initiate the testimonials slider on the catering page

  $('.demo-slider').slick({
     dots: true,
     arrows: false
  });
  $('.slider-next-arrow').on('click', function() {
    $('.demo-slider').slick('slickNext');
  });
  $('.slider-prev-arrow').on('click', function() {
    $('.demo-slider').slick('slickPrev');
  });


  // Smooth scoll to anchor on same page
  $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 300);
        return false;
      }
    }
  });
});





  // LIGHTBOX USES MAGNIFIC POPUP JQUERY
  // create lightbox when present on independant travel and recipe pages

  $('.lightbox-wrap').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
      enabled:true
    }
  });


  // $('a').each(function () {
  //
  //     var a = new RegExp('/' + window.location.host + '/');
  //     if (!a.test(this.href)) {
  //         $(this).click(function (event)
  //         {
  //             //alert();
  //             event.preventDefault();
  //             event.stopPropagation();
  //             window.open(this.href, '_blank');
  //         }
  //         );
  //     }
  // });


});






$(function() {

  // This is for the masonry style tiles using isotop plugin. It uses isotop and images loaded jquery plugin.
  // put the div wrapper as the $isogrid variable then put in the child div as part of the options

  // var $isoGrid = $('.wrapper-goes-here');
  //
  // $isoGrid.imagesLoaded( function(){
  //
  //   $isoGrid.isotope({
  //     // options...
  //     itemSelector: '.tiles-to-be-isotope',
  //     // resizable: false, // disable normal resizing
  //     percentPosition: true,
  //     masonry: {
  //         // columnWidth: '20'
  //     }
  //   });
  // });

  var $isoGrid = $('.demo-isotope-wrapper');

  $isoGrid.imagesLoaded( function(){

    $isoGrid.isotope({
      // options...
      itemSelector: '.col-sm-4',
      // resizable: false, // disable normal resizing
      percentPosition: true,
      masonry: {
          // columnWidth: '20'
      }
    });
  });


  // scroll to the first slide on home page when you click the down arrow.
  // using fullpageJS plugin scroll snap to next section

  // $("#toSection").click(function(e) {
  //     $.fn.fullpage.moveSectionDown();
  // });

  //
  // $("#toSectionNonFullpage").click(function() {
  //   console.log('sdf')
  //   $('html,body').animate({
  //       scrollTop: $(".page-pad").offset().top},
  //       'slow');
  // });


  // add a class to header once scrolled past point

  // $(window).on("scroll", function() {
  //   if($(window).scrollTop() > 400) {
  //       $("header").addClass("headerBG");
  //   } else {
  //       //remove the background property so it comes transparent again (defined in your css)
  //      $("header").removeClass("headerBG");
  //   }
  // });



});
