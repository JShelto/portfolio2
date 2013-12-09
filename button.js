//button script: adds the 'revealed' class which slides link tabs out to the right
$("#slider").click(function(){
  $(".tab").toggleClass("revealed")
  }); 

//button script: toggles the button text onclick
$('.show').click(function(){
    var $this = $(this);
    $this.toggleClass('show');
    if($this.hasClass('show')){
        $this.text('Show links');         
    } else {
        $this.text('Hide links');
    }
});