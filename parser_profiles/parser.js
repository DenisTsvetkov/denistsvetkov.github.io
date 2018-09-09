function getPage(url){
  var req = new XMLHttpRequest();  
  req.open('GET', url, false);   
  req.send(null);  
  if(req.status == 200){
    return req.responseText;
  }
}

function sendPostRequest(params, offset){
  var req = "";
  for (var key in params) {
    req+=key+"="+params[key]+"&";
  }

  req +="offset="+offset;

  var xmlhttp = new XMLHttpRequest(); // Создаём объект XMLHTTP
  xmlhttp.open('POST', 'https://vk.com/wkview.php', false); // Открываем асинхронное соединение
  xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
  xmlhttp.send(req); // Отправляем POST-запрос
  if(xmlhttp.status == 200){
    return xmlhttp.responseText;
  }

}

function parserProfiles(url){

  if (match = url.match('http.+?vk.com\/(wall-[0-9]*_[0-9]*)')) var wall_id = match[1];
  console.log(wall_id);
  var text = getPage("https://vk.com/"+wall_id);
  var countLikes;

  var reg = new RegExp('like_btn.+?data-count="([0-9]*)"', 's');
  if (match = text.match(reg)) countLikes = match[1];

  var paramsWithOffset = {
    act: 'show',
    al: 1,
    al_ad: 0,
    w: 'likes/'+wall_id
  }

  let currentOffset = 0
  const offsetStep = 60

  var profiles = [];

  while (currentOffset <= countLikes){          
    var data = sendPostRequest(paramsWithOffset, currentOffset);           
    currentOffset += offsetStep;
    
    var get_profile = new RegExp('fans_fan_name.+?href="(.+?)"', 'g');

    match = data.match(get_profile);

    for(var i=0; i < match.length; i++){
      profiles.push(match[i].replace('fans_fan_name"><a class="fans_fan_lnk" href="', 'https://vk.com').replace("\"", ""));
    }

  }

  var myJSON = {};
  for(var k=0; k<profiles.length; k++){
    myJSON[k] = profiles[k];
  }

  console.log(myJSON);
}

parserProfiles('https://vk.com/wall-60397113_5859295');