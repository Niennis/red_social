$(document).ready(function(){
  var contacts = $('.contacts');
  var add = $('#addContact');

  add.click(function(){
    var name = $('#name').val();
    var lastName = $('#lastName').val();
    var phone = $('#phone').val();
    var mail = $('#mail').val();
    var space = " ";
    
  contacts.append('<div class="row box"><div class="col-lg-8 col-md-8 col-sm-8 col-xs-8 col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-2 contact">' + 
  '<div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><h3 class="nameBox">' + name + space + lastName + '</h3></div></div>' + 
  '<div class="row"><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><p class="phoneBox">' + phone + '</p><p class="mailBox">' + mail + '</p></div><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><i class= "fa fa-trash trash"></i></div></div>' + '</div></div>')
  })

  $('.trash').click(function(){
    var boxes = $('.box');
    var trash = $('.trash');
    for (var i = 0 ; i < boxes.length; i++){
      
    }
  })
})
//inicializaciones materialize//
$(".button-collapse").sideNav();