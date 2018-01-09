$(document).ready(function(){ 
  
  //NavBar collapse

   $(".button-collapse").sideNav({
    menuWidth: 300, // Default is 300
    edge: 'right', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true, // Choose whether you can drag to open on touch screens,
    onOpen: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is opened
    onClose: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed
  
   });

//MODAL DE LOGIN/REGISTER
    $('.modal').modal();   /*
  // Obtener elementos para login
  var txtEmail = document.getElementById('txtEmail'); // $('#txtEmail');
  var txtPass = document.getElementById('txtPassword'); // $('#txtPassword');
  var btnLogin = document.getElementById('btnLogin'); // $('#btnLogin');
  var btnSignUp = document.getElementById('btnSignUp'); // $('#btnSignUp');
  var btnLogout = document.getElementById('btnLogout'); // $('#btnLogout');

  btnLogin.addEventListener('click', e => {
    var email = txtEmail.value;
    var pass = txtPass.value;
    var auth = firebase.auth();

    var promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
  });

  btnSignUp.addEventListener('click', e => {
    var email = txtEmail.value;
    var pass = txtPass.value;
    var auth = firebase.auth();

    var  promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
  });

  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      console.log(firebaseUser);
      btnLogout.classList.remove('hide');
    }else{
      console.log('no logueado');
      btnLogout.classList.add('hide');
    }
  });*/

  //Para crear un post

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
    var contenedor = $('#postStatic');
    if (upImg != ""){
      contenedor.prepend('<div class="posts row"><div class="col s12 m12 l12"><div class="row"><div class="col s3 m2 l2">' + 
      '<a href="../../perfil.html"><img class="circle responsive-img user" src="assets/img/esperanza-rosas1.jpg" alt=""></a></div>' + '<div class="col s7 m19 l10 offset-s1"><h5 class="nameUser">Esperanza Rosas</h5></div></div>' + '<div><div class="center-align"><img class="uploadedImg responsive-img creation" src="' + upImg + '"></div><p class="description">' + comentario + '</p></div>' + '<div><i class="fa fa-clipboard pattern patternBtn"></i>' + '<i class="fa fa-dollar-sign cost costBtn"></i>' + '<i class="fa fa-heart heart heartBtn"></i>' + '</div></div></div></div>');
    }else{
      contenedor.prepend('<div class="posts row"><div class="col s12 m12 l12"><div class="row"><div class="col s3 m2 l2">' + 
      '<a href="../../perfil.html"><img class="circle responsive-img user" src="assets/img/esperanza-rosas1.jpg" alt=""></a></div>' + '<div class="col s7 m19 l10 offset-s1"><h5 class="nameUser">Esperanza Rosas</h5></div></div>' + '<div><p class="description">' + comentario + '</p></div>' + '<div><i class="fa fa-clipboard pattern patternBtn"></i>' + '<i class="fa fa-dollar-sign cost costBtn"></i>' + '<i class="fa fa-heart heart heartBtn"></i>' + '</div></div></div></div>');
    }
  });

  $('#hide').click(function(){
    //$('#show').before('<p>Prueba</p>');
    $('h1').hide();
  });
  $('#show').click(function(){
    //$('#show').before('<p>Prueba</p>');
    $('h1').show();
  });

  // Esconder y mostrar páginas
  $('#newsfeed, #post').hide();

  var mail = $('#txtEmail').val();
  var pass = $('#txtPassword').val();
  $('#btnLogin, #btnSignUp').click(function(){
    //if(email != "" && pas != ""){
      window.location.href = "index2.html"; 
   // }
  });
  
  $('.heartBtn').click(function(){
    $(this).css('color','red');
  });

  var friends = $('.friendsNumber').text();
  console.log(friends);
  $('#addedJay').hide();
  $('#addJay').click(function(){
    $('#addJay').hide();
    $('#addedJay').show();
    $('.friendsNumber').text(friends++);
  });  
});   
  
