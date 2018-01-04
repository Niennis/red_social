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

  // Obtener elementos para login
  var txtEmail = document.getElementById('txtEmail');
  var txtPass = document.getElementById('txtPassword');
  var btnLogin = document.getElementById('btnLogin');
  var btnSignUp = document.getElementById('btnSignUp');
  var btnLogout = document.getElementById('btnLogout');

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
  });

  //Para subir fotos
  var fileBtn = $('#fileBtn');

  var path="";
  fileBtn.change(function(e){
    var file = e.target.files[0];        
    var storageRef = firebase.storage().ref();
    var spaceRef = storageRef.child('mis_fotos/' + file.name);
    storageRef.child('mis_fotos/' + file.name).getDownloadURL().then(function(url){
      path = url;
    }).catch(function(error) {

    });
  });

  //Para crear un post
  $('#btn').click(function(){
    var comentario = $('#comment').val();
    $('#comment').val("");
      
    var contenedor = $('#post');
    contenedor.append('<div class="row"><div class="col s12 m6 l6 offset-m3 offset-l3">' + '<img class="uploadedImg" src="' + path + '" alt=" ">' + '<p>' + comentario + '</p><i class= "fa fa-trash trash"></i><i class = "fa fa-heart heart"></i></div><div>');
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
   console.log(mail);
  })
    
});   
  
