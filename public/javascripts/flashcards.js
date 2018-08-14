var firstFlip = true;
var index = 0;
var deckSize = $('.flash-card').toArray().length;

$(document).on('click', '.flash-card', function() {
  $card = $(this)
  $card.toggleClass('flip');
  $('.controls').toggleClass('hide');
  if (firstFlip) {
    $('.lead.text-center.mb-3').html("<span class='numerator'>" + (index+1) + 
                                   "</span><span class='slash'>" + ' of ' + 
                                   "</span><span class='denominator'>" + deckSize + "</span>");
    firstFlip = false;
  }
  if (index === 0) {
    $('.previous').addClass('display-none');
  } else {
    $('.previous').removeClass('display-none');
  }
});

$('.next').on('click', function(){
  $card = $('.in-use');
  $card.addClass('next');
  index++;
  $('.lead.text-center.mb-3').html("<span class='numerator'>" + (index+1) + 
                                   "</span><span class='slash'>" + ' of ' + 
                                   "</span><span class='denominator'>" + deckSize + "</span>");
  if (index === deckSize) {
    cleanUp();
  }
  removeElement($card);
  return false;
});

$('.previous').on('click', function(){
  $card = $('.in-use');
  $card.addClass('previous');
  index--;
  $('.lead.text-center.mb-3').html("<span class='numerator'>" + (index+1) + 
                                   "</span><span class='slash'>" + ' of ' + 
                                   "</span><span class='denominator'>" + deckSize + "</span>");
  removeElement($card);
  return false;
});

function removeElement(el){
  setTimeout(function(){
    //el.remove();
    // addNewCard();
    el.removeClass('in-use');
    el.removeClass('next');
    el.removeClass('previous');
    $($('.flash-card').toArray()[index]).addClass('in-use');
  }, 300);
  el.removeClass('flip');
  $('.controls').toggleClass('hide');
}

function cleanUp() {
  $('.card-deck').remove();
  $('.lead.text-center.mb-3').remove();
  $('.col.controls.mobile-hidden').remove(); // remove desktop controls after flashcards are done
  $('#animation-container').addClass('animation-container');
  $('.over-buttons').removeClass('display-none');
}

$('#retry').click(function() {
    location.reload();
});
