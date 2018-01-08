
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
      btnLogout.classList.remove('hide');
    }else{
      console.log('no logueado');
      btnLogout.classList.add('hide');
    }
  });
