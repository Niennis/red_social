$(document).ready(function() {
  console.log('jaja');

  
  mylabCraft = new labCraft();
  // NavBar collapse
  $('.button-collapse').sideNav();

  $('#hide').click(function() {
    $('h1').hide();
  });
  $('#show').click(function() {
    $('h1').show();
  });

  // Esconder y mostrar páginas
  $('#newsfeed, #post').hide();

  var mail = $('#txtEmail').val();
  var pass = $('#txtPassword').val();
  $('#btnLogin, #btnSignUp').click(function() {
    window.location.href = 'index2.html';
  });

  $('.heartBtn').click(function() {
    $(this).css('color', 'red');
  });

  var friends = $('.friendsNumber').text();
  console.log(friends);
  $('#addedJay').hide();
  $('#addJay').click(function() {
    $('#addJay').hide();
    $('#addedJay').show();
    friends++;
    $('.friendsNumber').text(friends);
  });

  $('#addedJay').click(function() {
    $('#addJay').show();
    $('#addedJay').hide();
    friends--;
    $('.friendsNumber').text(friends);
  });
});

// ------------------------------------------ FIREBASE -----------------------------------
function labCraft() {
  this.signInButton = document.getElementById('btnSignIn');
  this.signOutButton = document.getElementById('btnLogout');
  this.signInButton.addEventListener('click', this.signIn.bind(this));
  this.signOutButton.addEventListener('click', this.signOut.bind(this));
  this.initFirebase();
};
labCraft.prototype.signIn = function() {
  var provider = new firebase.auth.GoogleAuthProvider();
  this.auth.signInWithPopup(provider).then(function(result) {
    $('#btnSignIn').addClass('hide');
    $('#btnLogout').removeClass('hide');
    var location = window.location.href;
    window.location.href = location;
    //  var token = result.credential.accessToken;
    //  var user = result.user;
    console.log(result);
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
};

labCraft.prototype.signOut = function() {
  this.auth.signOut();
  window.location.href = 'index.html';
  $('#btnSignIn').removeClass('hide');
  $('#btnLogout').click(function() {
    $('#btnLogout').addClass('hide');
    $('.iconsMenu').last().css('display', 'none');
  });
};

labCraft.prototype.initFirebase = function() {
  // Shortcuts to Firebase SDK features.
  this.auth = firebase.auth();
  // this.database = firebase.database();
  this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};

labCraft.prototype.onAuthStateChanged = function(user) {
  if (user) { // User is signed in!
    console.log('conectado');
    $('#btnSignIn').addClass('hide');
    $('#btnLogout').removeClass('hide');
    $('.iconsMenu').append(`<li><a href="#"><img class="responsive-img circle userImg" width="50" src="${user.photoURL}"></a></li>`);
  } else {
    console.log('desconectado');
    $('#btnSignIn').removeClass('hide');
    $('#btnLogout').addClass('hide');
  }
};

// ----------------------------------- CREAR COMENTARIOS EN NEWSFEED -------------------
function uploadFile() {
  // primero, definir la referencia, dónde va a quedar el archivo en storage
  let storage = firebase.storage();
  let storageRef = firebase.storage().ref();

  let file;
  file = document.getElementById('uploadImg').files[0];

  var contenedor = $('#postStatic');
  var comentario = $('#comment').val();

  console.log('first coment', comentario);

  if (file !== undefined) {
    console.log('imagen');
    
    let thisRef = storageRef.child('mis_fotos/' + file.name);
    thisRef.put(file).then(function(snapshot) {
      console.log('Uploaded a blob or file!');
      return thisRef.getDownloadURL();
    }).then(function(url) {
      console.log(url);
      console.log('holi', comentario);
      console.log('holi', file);
      contenedor.prepend(
        `<div class="posts row">
            <div class="col s12 m12 l12">
              <div class="row">
                <div class="col s3 m2 l2">
                  <a href="perfil.html"><img class="circle responsive-img user" src="assets/img/esperanza-rosas1.jpg" alt=""></a>
                </div>
                <div class="col s7 m19 l10 offset-s1">
                  <h5 class="nameUser">Esperanza Rosas</h5>
                </div>
              </div>
              <div>
                <div class="center-align">
                  <img class="uploadedImg responsive-img creation" src=" ${url} ">
                </div>
                <p class="description"> ${comentario} </p>
              </div>
              <div>
                <i class="fa fa-clipboard pattern patternBtn"></i>
                <i class="fa fa-dollar-sign cost costBtn"></i>
                <i class="fa fa-heart heart heartBtn"></i>
              </div>
            </div>
          </div>`
      );
    });
    // $('#uploadImg').val("");
    // $('#comment').val("");
  } else {
    console.log('letras');
    
    // $('#sendBtn').on('click', function() {
    //   console.log('chai', comentario);
    //   console.log('chai', file);
    contenedor.prepend(`<div class="posts row">
            <div class="col s12 m12 l12">
              <div class="row">
                <div class="col s3 m2 l2">
                  <a href="perfil.html"><img class="circle responsive-img user" src="assets/img/esperanza-rosas1.jpg" alt=""></a>
                </div>
                <div class="col s7 m19 l10 offset-s1">
                  <h5 class="nameUser">Esperanza Rosas</h5>
                </div>
              </div>
              <div>
                <p class="description"> ${comentario} </p>
              </div>
              <div>
                <i class="fa fa-clipboard pattern patternBtn"></i>
                <i class="fa fa-dollar-sign cost costBtn"></i>
                <i class="fa fa-heart heart heartBtn"></i>
              </div>
            </div>
          </div>`);
    // });
  }
  console.log('last comment', comentario);
  $('#uploadImg').val('');
  $('#comment').val('');
};

// -------------------------------------------- ACTIVA INPUT ---------------------
$('#selectFile').on('click', function() {
  $('#uploadImg').trigger('click');
});










/*



$(document).ready(function(){ 
  mylabCraft = new labCraft();  
});

  function labCraft() {
    this.signInButton = document.getElementById('btnSignIn');
    this.signOutButton = document.getElementById('btnLogout');
    this.signInButton.addEventListener('click', this.signIn.bind(this));
    this.signOutButton.addEventListener('click', this.signOut.bind(this));
    this.initFirebase();
  };
  labCraft.prototype.signIn = function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    this.auth.signInWithPopup(provider).then(function(result){
      $('#btnSignIn').addClass('hide');
      $('#btnLogout').removeClass('hide');
      var location = window.location.href;
      window.location.href = location; 
      
      // $('.iconsMenu').append(`<li><a href="#"><img class="responsive-img circle userImg" width="50" src="${result.user.photoURL}"></a></li>`);
    //  var token = result.credential.accessToken;
    //  var user = result.user;
    //  console.log(user);
      console.log(result);
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });    
  };
  
  labCraft.prototype.signOut = function() {
    this.auth.signOut();
    window.location.href = "index.html";     
    $('#btnSignIn').removeClass('hide');
    $('#btnLogout').click(function() {
      $('#btnLogout').addClass('hide');
      $('.iconsMenu').last().css('display', 'none'); 
    })   
  };
  
  labCraft.prototype.initFirebase = function() {
    // Shortcuts to Firebase SDK features.
    this.auth = firebase.auth();
    this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
  };
  
  labCraft.prototype.onAuthStateChanged = function(user) {
    if (user) { // User is signed in!
      console.log('conectado');
      $('#btnSignIn').addClass('hide');
      $('#btnLogout').removeClass('hide');
      $('.iconsMenu').append(`<li><a href="#"><img class="responsive-img circle userImg" width="50" src="${user.photoURL}"></a></li>`);
    } else {
      console.log('desconectado');
      $('#btnSignIn').removeClass('hide');
      $('#btnLogout').addClass('hide');
    }
  };
  
  // window.onload = function() {
  // };
/*
  // Obtener elementos para login
  // var txtEmail = document.getElementById('txtEmail');
  // var txtPass = document.getElementById('txtPassword');
  // var btnLogin = document.getElementById('btnLogin');
  var btnSignUp = document.getElementById('btnSignUp');
  var btnLogout = document.getElementById('btnLogout');

  var provider = new firebase.auth.GoogleAuthProvider();

  btnLogin.click(function() {  
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.    
      var user = result.user;
      console.log(user);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  });

});

btnLogout.click(function() {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
});*/

  /* btnLogin.addEventListener('click', e => {
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
}); */

/*
  // Obtener elementos para login
  var txtEmail = $('#txtEmail');
  var txtPass = $('#txtPassword');
  var btnLogin = $('#btnLogin');
  var btnSignUp = $('#btnSignUp');
  var btnLogout = $('#btnLogout');

  $('#btnLogin').click(e => {
    var email = txtEmail.value;
    var pass = txtPass.value;
    var auth = firebase.auth();

    var promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
  });

  $('#btnSignUp').click(e => {
    var email = txtEmail.value;
    var pass = txtPass.value;
    var auth = firebase.auth();

    var  promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
  });

  $('#btnLogout').click(e => {
    firebase.auth().signOut();
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      console.log(firebaseUser);
      btnLogout.removeClass('hide');
    }else{
      console.log('no logueado');
      btnLogout.addClass('hide');
    }
  });*/

// -----------------------------------------------------------------------------------------------
/*
  $(document).ready(function(){ 
  
    //NavBar collapse
    $(".button-collapse").sideNav({

    });
  
    //Para crear un post  
    $('#sendBtn').click(function(){/*
      var uploadedImg = $('<img id="uploadedImg" src="img/no-image.png">');*/
  /*
      //alert(file.readAsDataURL());
      var comentario = $('#comment').val();
      $('#comment').val("");
      var upImg = $('#upImg').val();
      $('#upImg').val("");
      //alert(file.val());
      var contenedor = $('#postStatic');
      if (upImg != ""){
        contenedor.prepend('<div class="posts row"><div class="col s12 m12 l12"><div class="row"><div class="col s3 m2 l2">' + 
        '<a href="perfil.html"><img class="circle responsive-img user" src="assets/img/esperanza-rosas1.jpg" alt=""></a></div>' + '<div class="col s7 m19 l10 offset-s1"><h5 class="nameUser">Esperanza Rosas</h5></div></div>' + '<div><div class="center-align"><img class="uploadedImg responsive-img creation" src="' + upImg + '"></div><p class="description">' + comentario + '</p></div>' + '<div><i class="fa fa-clipboard pattern patternBtn"></i>' + '<i class="fa fa-dollar-sign cost costBtn"></i>' + '<i class="fa fa-heart heart heartBtn"></i>' + '</div></div></div></div>');
      }else{
        contenedor.prepend('<div class="posts row"><div class="col s12 m12 l12"><div class="row"><div class="col s3 m2 l2">' + 
        '<a href="perfil.html"><img class="circle responsive-img user" src="assets/img/esperanza-rosas1.jpg" alt=""></a></div>' + '<div class="col s7 m19 l10 offset-s1"><h5 class="nameUser">Esperanza Rosas</h5></div></div>' + '<div><p class="description">' + comentario + '</p></div>' + '<div><i class="fa fa-clipboard pattern patternBtn"></i>' + '<i class="fa fa-dollar-sign cost costBtn"></i>' + '<i class="fa fa-heart heart heartBtn"></i>' + '</div></div></div></div>');
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
      friends++;
      $('.friendsNumber').text(friends);
    });  
  
    $('#addedJay').click(function(){
      $('#addJay').show();
      $('#addedJay').hide();
      friends--;
      $('.friendsNumber').text(friends);
    })
  });   
    */