$(document).ready(function(){ 
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA11xvSCkk7JLjgqr7HlrvPuNiW1yRydok",
    authDomain: "labcraft-market.firebaseapp.com",
    databaseURL: "https://labcraft-market.firebaseio.com",
    projectId: "labcraft-market",
    storageBucket: "labcraft-market.appspot.com",
    messagingSenderId: "657357250509"
  };
  firebase.initializeApp(config);
  

  //Para subir fotos
  var fileBtn = $('fileBtn');

  fileBtn.change(function(e){
    var file = e.target.files[0];
    var storageRef = firebase.storage().ref('mis_fotos/' + file.name);
    var task = storageRef.put(file);
  });

  //Para crear un post
  $('#btn').click(function(){
    var comentario = $('#comment').val();
    $('#comment').val("");
    var img = $('#fileBtn').val();
    
    var contenedor = $('#post');
    contenedor.append('<div class="row"><div class="col s12 m6 l6 offset-m3 offset-l3">' + img + '<p>' + comentario + '</p><i class= "fa fa-trash trash"></i><i class = "fa fa-heart heart"></i></div><div>');
  })

  $('#hide').click(function(){
    //$('#show').before('<p>Prueba</p>');
    $('h1').hide();
  })
  $('#show').click(function(){
    //$('#show').before('<p>Prueba</p>');
    $('h1').show();
  })


});   
  
