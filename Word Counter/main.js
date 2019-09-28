$(document).ready(function() {

  $('#countButton').click(function() {
    var originalString = $('#mainText').val();
    var string = originalString.trim();

    $('#wordCount').text(wordCount(string));
    $('#charCount-1').text(charCount(string));
    $('#charCount-2').text(charCountSpaces(string));
  });

});

function wordCount(x) {
  var string = x;

  if (string.split('').length === 0) {
    return 0;
  }

  return string.split(' ').length;
}

function charCount(x) {
  var string = x;

  return string.split('').length;
}

function charCountSpaces(x) {
  var string = x;
  var newString = string.replace(/\s+/g, '');

  return newString.split('').length;
}
