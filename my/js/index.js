$(function () {
  var $carousel = $(".banner>.carousel");
  console.log($carousel);
  $item = $('.banner .carousel .item')
  // console.log($item);
  var $img=$('.banner .carousel .item img');
  $(window).on('resize',function () {
    var i =1;
      var width = $(window).width()
    if(width<=768){
      $item.addClass('item_mb').removeClass('item_pc')
      $img.each(function () {
          $(this).attr('src',$(this).data('msrc'))
      })
    }else{
      $item.addClass('item_pc').removeClass('item_mb');

      $img.each(function () {
          $(this).attr('src',$(this).data('psrc'))
      })
    }
  }).trigger('resize')
  var startX =0;
$carousel.on("touchstart",function (e) {
  startX = e.originalEvent.touches[0].clientX;
  })
$carousel.on('touchmove',function (e) {

})
$carousel.on('touchend',function (e) {
  console.log(e);
  var movex = e.originalEvent.changedTouches[0].clientX - startX;
  if(Math.abs(movex) >50){
    if(movex>0){
      $carousel.carousel("prev");
    } else {
      $carousel.carousel("next");
    }
  }
})
var lis =$('.nav-tabs li')
var liswidth = $('.nav-tabs li').width();
  console.log(liswidth);
  $('.nav-prev ul').css('width',liswidth*lis.length);
  new IScroll(".nav-prev",{
    scrollX:true,
    scrollY:false
  })
})





