(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle").click(function(e) {
    e.preventDefault();
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($window.width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
  });
  
  // make flash messages disappear
  window.onload = setTimeout(function() {
      $('#successMessage').fadeOut(function(){
                                  $(this).css({"visibility":"hidden",display:'block'}).slideUp();
                                              });
      $('#errorMessage').fadeOut(function(){
                                  $(this).css({"visibility":"hidden",display:'block'}).slideUp();
                                              });
  }, 3000);
  
  // Bind click to DELETE button within popup
  $('#deleteQuizModal').on('click', '.btn-ok', function(e) {
  
    var $modalDiv = $(e.delegateTarget);
    var id = $(this).data('recordId');
    var uname = $(this).data('recordTitle');
  
    $modalDiv.addClass('loading');
    // jQuery AJAX post request
    $.post('/users/' + uname + '/dashboard/quizzes/' + id + '?_method=DELETE').then(function(data) {
       $modalDiv.modal('hide').removeClass('loading');
        // window.location.reload();
        window.location = data.redirect;
    });
  });
  
  // Bind to modal opening to set necessary data properties to be used to make request
  // show.bs.modal causes this function to be called as soon as the modal pops up 
  $('#deleteQuizModal').on('show.bs.modal', function(e) {
    var data = $(e.relatedTarget).data();
    $('.btn-ok', this).data('recordTitle', data.recordTitle);
    $('.btn-ok', this).data('recordId', data.recordId);
  });

})(jQuery); // End of use strict
