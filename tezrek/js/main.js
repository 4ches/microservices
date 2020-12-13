$(document).ready(function(){
  function stopDefAction(evt) {
   
    $(".ok__more").toggleClass("d-block");
     evt.preventDefault();
}
    
document.getElementById('chose-btn').addEventListener(
    'click', stopDefAction, false
);
});