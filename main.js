$(function() {
  $(document).scroll(function() {
    let $nav = $("#mainNavigation");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
