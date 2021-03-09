// --------------------------------------COMPONENT REGSTRATION-------------------------------------------------------
Framework7.registerComponent(
  // component name
  'my-list-item',

  // component function
  (props, { $h }) => {
    let foo = 'bar';

    return () => $h`
    <html>
    <h1 style="background-color:red;"><b>Custom Component:</b></h1>
    <div class="navbar">
  <div class="navbar-inner">
    <div class="left"><a href="#" class="back link"><i class="icon icon-back-blue"></i><span>Back</span></a></div>
    <div class="center sliding">External Site</div>
  </div>
</div>
<div class="pages">
  <div data-page="externalsite" class="page">
    <div class="page-content" style="height: auto">
        <div style="height:100%">
        <a><iframe src="http://google.de" style="height:100%;width:100%"></iframe></a>
        </div>
    </div>
  </div>
</div>
    <ul>
      <li class="item-content" id="${props.id}" foo="${props.foo}">000</li>
      <li class="item-content" id="${props.id}" foo="${props.foo}">000</li>
      <li class="item-content" id="${props.id}" foo="${props.foo}">000</li>
      <li class="item-content" id="${props.id}" foo="${props.foo}">000</li>
    </ul>
    </html>
    `;
  }
)
// ----------------------------------------------------------------------------------------------------------------

var $ = Dom7;
var app = new Framework7({
  name: 'My App', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element
  // App store
  store: store,
  // App routes
  routes: routes,
  // Register service worker
  serviceWorker: {
    path: '/FW60/service-worker.js',
  },  
  view: { stackPages:true}, // use for multiple stacked inside inline pages
});

var mainView = app.views.create('.view-main');
// debugger

console.log('app initiated!')
//var response;

var ls = app.loginScreen.create({ el: '.login-screen' });
//ls.open(); // open loginscreen in startup screen

setTimeout(function () {
  ls.close('#splash');
}, 3000);

// redirect directly to home page
app.views.main.router.navigate('/home/')

// Login Screen Demo
$('#my-login-screen .login-button').on('click', function () {
  var username = $('#my-login-screen [name="username"]').val();
  var password = $('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  function checked(x, y) {
    if (x !== '') {
      pomo = true
    }
    else {
      pomo = true
    }
    return pomo
  }

  if (checked(username, password)) {
    console.log('user fetched!')
    //if (password !== '') {
    console.log(username)
    console.log(password)
    // debugger
    // ls.close()
    // ls.open()

    // app.views.main.router.navigate('/formv2x/')
    // app.router.navigate('/formv2x/')
  }
  else {
    console.log('kaput')
    ls.close()
    ls.open()
    // app.views.main.router.navigate('/about/')
    //app.router.navigate('/about/')
  }

  // Alert username and password
  // app.dialog.alert('Username: ' + username + '<br/>Password: ' + password);
});

//var vitem;
//var formData;
//var d = new Date(2017,6,1); //ymd julio (7) = 6

var searchkey = 'Pi';
var output = '';

var db = new PouchDB('alqs', { auto_compaction: true });
var remoteCouch = 'http://localhost:5984/alqs';

var textomes = new Array(12);
textomes[0] = "Ene";
textomes[1] = "Feb";
textomes[2] = "Mar";
textomes[3] = "Abr";
textomes[4] = "May";
textomes[5] = "Jun";
textomes[6] = "Jul";
textomes[7] = "Ago";
textomes[8] = "Sep";
textomes[9] = "Oct";
textomes[10] = "Nov";
textomes[11] = "Dic";
//debugger
var textomesx = new Array(12);
textomesx[0] = "Enero";
textomesx[1] = "Febrero";
textomesx[2] = "Marzo";
textomesx[3] = "Abril";
textomesx[4] = "Mayo";
textomesx[5] = "Junio";
textomesx[6] = "Julio";
textomesx[7] = "Agosto";
textomesx[8] = "Septiembre";
textomesx[9] = "Octubre";
textomesx[10] = "Noviembre";
textomesx[11] = "Diciembre";

//var dbx = new PouchDB('http://192.168.0.11:5984/mydb', {skip_setup: true});
//var remoteCouch = 'http://admin:af5f2187037d@couchdb-99bd06.smileupps.com/alqs';
//var dbusers = new PouchDB('makerjoe:hryd3757@192.168.0.11:5984/mydb', {skip_setup: true});
//var remoteCouch = 'http://softhryd.sytes.net:5984/alqs';
//var remoteCouch = 'https://makerjoe:hryd3757@bcecd732-c9c4-452a-b4a8-d9c02632a202-bluemix.cloudant.com/todos';
//var remoteCouch = 'http://makerjoe:hryd3757@192.168.0.16:5984/todos';
//var remoteCouch = 'http://192.168.0.16:5984/todos';
//http://someuser:somepassword@path.to.couchdb.com:5984/somedatabase
//https://bcecd732-c9c4-452a-b4a8-d9c02632a202-bluemix.cloudant.com
//db.setMaxListeners(20); 
//var local = new PouchDB('local_db');
//var remoteCouch = 'https://couchdb-99bd06.smileupps.com/alqs';


// app.request.get('http://127.0.0.1:5500/www/pages/test2.html', { foo: 'bar', id:5 })
//   .then(function (res) {
//     $('#articles').html(res.data);
//     hljs.highlightBlock(articles)

//     console.log(res);
//   })
//   .catch(function (err) {
//     console.log(err.xhr)
//     console.log(err.status)
//     console.log(err.message)
//   })

//debugger

//console.log(app.views.get('.view-main')); 
