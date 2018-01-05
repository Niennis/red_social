$(document).ready(function(){ 

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
  
//MODAL DE LOGIN/REGISTER
  $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });



  //Para subir fotos
  /*
  var fileBtn = $('#fileBtn');
  var path="";
  fileBtn.change(function(e){
    var file = e.target.files[0];        
    var storageRef = firebase.storage().ref('mis_fotos/' + file.name);
    var upload = storageRef.put(file);
    
    var pathRef = storageRef.child('mis_fotos/' + file.name);

    storageRef.child('mis_fotos/' + file.name).getDownloadURL().then(function(url){
      path = url;
    }).catch(function(error) {

    });
    alert(path);       
    //var upload = storageRef.put(file);
  });*/

  //Para crear un post

  /*var file = "";*/
  $('#sendBtn').click(function(){/*
    var uploadedImg = $('<img id="uploadedImg" src="img/no-image.png">');*/
/*
    var dataBase = firebase.database().ref('Images');
    $('#fileBtn').change(function(){
      if(this.files && this.files[0]){
        file = new FileReader();
        file.onload = function(e){
          var url = e.target.result;
          dataBase.push({
            url:e.target.result
          });
          $('#uploadImg').attr('src',url);
          //alert(file.valueOf());
        };
        file.readAsDataURL(this.files[0]);
        //alert(url);
      }
    });  */

    /*
    var file = "";
    var fileBtn = document.getElementById('fileBtn');
    function previewFile(){
        var preview = document.getElementById('uploadedImg');
        file = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();
      
        reader.addEventListener("load", function () {
          preview.src = reader.result;
        }, false);
      
        if (file) {
          reader.readAsDataURL(file);
        }
      };*/

    //alert(file.readAsDataURL());
    var comentario = $('#comment').val();
    $('#comment').val("");
    var upImg = $('#upImg').val();
    $('#upImg').val("");
    //alert(file.val());
    var contenedor = $('#post');
    if (upImg != ""){
      contenedor.prepend('<div class="posts row"><div class="col s12 m12 l12"><img class="uploadedImg" src="' + upImg + '"><p>' + comentario + '</p><i class= "fa fa-trash trash"></i><i class = "fa fa-heart heart"></i></div></div>');
    }else{
      contenedor.prepend('<div class="posts row"><div class="col s12 m12 l12">' + '<p>' + comentario + '</p><i class= "fa fa-trash trash"></i><i class = "fa fa-heart heart"></i></div></div>');
    }

  })

  $('#hide').click(function(){
    //$('#show').before('<p>Prueba</p>');
    $('h1').hide();
  })
  $('#show').click(function(){
    //$('#show').before('<p>Prueba</p>');
    $('h1').show();
  })

  // Esconder y mostrar páginas
  $('#newsfeed, #post').hide();

  var mail = $('#txtEmail').val();
  var pass = $('#txtPassword').val();
  $('#btnLogin, #btnSignUp').click(function(){
    //if(email != "" && pas != ""){
      $('#home').hide();
      $('#newsfeed, #post').show();  
      var overlay = $('.modal-overlay');
      overlay.css('background','transparent');
   // }
  })
  
  $('.heartBtn').click(function(){
    $('.heart').css('color','red');
  });

  $('#addedJay').hide();
  
  $('#addJay').click(function(){
    $('#addJay').hide();
    $('#addedJay').show();
  })
});   
  
