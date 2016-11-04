/**
 * Created by Sven on 11/4/16.
 */
$(function () {
  $.getJSON('api', updateFeedback);


  function updateFeedback(data) {
    let output = '';
    $.each(data,  (key, item) => {
    output += '<div class="feedback-item item-list media-list">';
    output += '  <div class="feedback-item media">';
    output += '   <div class="feedback-info media-body">';
    output += '     <div class="feedback-head">';
    output += '       <div class="feedback-title">' + item.title + '<small class="feedback-name label output label-info"></small></div>';
    output += '       </div>';
    output += '    <div class="feedback-message">'+ item.message + '</div>';
    output += '  </div>';
    output += '</div>';
    output += '</div>';
    });
    $('.feedback-messages').html(output);
  }
});