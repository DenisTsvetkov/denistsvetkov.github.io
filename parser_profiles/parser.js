function u(queryString) {
  return 'https://vk.com' + queryString;
}


function getId(url, pattern) {
  var match = url.match(pattern);
  if (match && match[1]) return match[1];
  return;
}

function parserProfiles(url){
  function getCountLikes(url){
    var x = new XMLHttpRequest();
    x.open("GET", url, true);
    x.onload = function (){
      alert( x.responseText);
    }
    x.send(null);
  }

}


parserProfiles('https://vk.com/wall-165737448_51167?w=likes%2Fwall-165737448_51167');