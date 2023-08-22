// init Masonry
var $grid = $('.grid').masonry({
  // options...
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});
$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 50,
    gutter: 10 ,
    columnWidth: '.grid-sizer'

  });
  $(".searchbtn").click(function(){
    $(this).toggleClass("bg-green");
    $(".fas").toggleClass("color-white");
    $(".input").focus().toggleClass("active-width").val('');
  });
  var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      } 
    });
  }