var callback=function(ele){
  //ele.remove();
  console.log("hello");
}
window.onload = function(){
  var danmuData;
  $.ajax({
    url:"danmu.json",
    async:false,
    success:function(data){
      danmuData=data;
    }
  });
  var pos=0;
  var v_width = $("video").css("width");
  var v_height = $("video").css("height");
  $(".danmu-box").css({"width":v_width,"height":v_height});
  $("#player").on("timeupdate",function(){
    //console.log(true);
    currentTime = $("#player")[0].currentTime;
    //console.log(currentTime);
    if(pos<danmuData.length && Math.abs(currentTime-danmuData[pos].wordsTime)<=0.24)
    {
      console.log(true);
      $(".danmu-box").append("<span class='words'></span>");
      var words = $(".words:last");
      var w_top = (Math.random()*0.8+0.1)*parseInt(v_height.substr(0,v_height.length-2));
      words.text(danmuData[pos].content);
      words.css({"left":"100%","top":w_top,"color":danmuData[pos].color});
      var w_width = words.css("width");
      w_width="-"+w_width;
      words.animate({"left":w_width}, 6000, callback(words));
      pos++;
    }
  });
}
