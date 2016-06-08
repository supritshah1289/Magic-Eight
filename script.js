$(document).ready(function(){
  console.log("connected")
  $('button').on("click",function(){
    $('img').removeClass();
    setTimeout(function(){
      $('img').addClass('animated bounce')}, 1)
  })
});
