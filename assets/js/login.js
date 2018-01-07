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
});