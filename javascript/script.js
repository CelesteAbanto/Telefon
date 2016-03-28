$(document).ready(function(){
  var count = jQuery('.content').length;
  var curPage = 1;
    jQuery('.content').each(function(i) {
    jQuery(this).addClass('page'+(i+1));
    jQuery('.pagination').append('<span class="pageNum pageNum' + (i+1) + '">' + (i+1) + '</span>');
  })

  if (curPage == 1) {
  if (count == curPage) { 
    jQuery('#page').addClass('noNav');
  }
    jQuery('.prev').addClass('hide');
    jQuery('.pageNum1').addClass('navActive');
  }

  jQuery('.content').not('.page'+curPage).hide();


  jQuery('.next').click(function() {
    if (curPage != count) {
      jQuery('.content').hide();
      jQuery('.pageNum').removeClass('navActive');
      curPage++;
      jQuery('.content.page'+curPage).show();
      jQuery('.pageNum'+curPage).addClass('navActive');
      //jQuery('.console').html('count = ' + count + ' - current = ' + curPage);
    }
  
  if (curPage == count) {
    jQuery('.next').addClass('hide');
  }
  
  jQuery('.prev').removeClass('hide');
  })

  jQuery('.prev').click(function() {
    if (curPage != 1) {
      jQuery('.content').hide();
      jQuery('.pageNum').removeClass('navActive');
      curPage--;
      jQuery('.content.page'+curPage).show();
      jQuery('.pageNum'+curPage).addClass('navActive');
      //jQuery('.console').html('count = ' + count + ' - current = ' + curPage);
      }
  
   if (curPage == 1) {
      jQuery('.prev').addClass('hide');
     }
  
      jQuery('.next').removeClass('hide');
  })

  jQuery('.pageNum').click(function() {
    var pageClick = jQuery(this).text();
    jQuery('.pageNum').removeClass('navActive');
    jQuery(this).addClass('navActive');
    curPage = jQuery(this).text();
    jQuery('.content').hide();
    jQuery('.content.page'+curPage).show();
  
    if (curPage == 1) {
      jQuery('.prev').addClass('hide');
      jQuery('.next').removeClass('hide');
    } else if (curPage == count) {
      jQuery('.prev').removeClass('hide');
      jQuery('.next').addClass('hide');
    } else {
      jQuery('.prev').removeClass('hide');
      jQuery('.next').removeClass('hide');
    }
  })

  var pr = document.querySelector( '.prev' );
  var pl = document.querySelector( '.next' );

  pr.onclick = slide.bind( this, -1 );
  pl.onclick = slide.bind( this, 1 );

  var index = 0, total = 20;

  function slide(offset) {
    index = Math.min( Math.max( index + offset, 0 ), total - 1 );
    document.querySelector( '.counter' ).innerHTML = ( index + 1 ) + ' / ' + total;
  }
  slide(0);
  $('h2.title-1').addClass('animated zoomIn');
//jQuery('.console').append('count = ' + count + ' - current = ' + curPage);
});