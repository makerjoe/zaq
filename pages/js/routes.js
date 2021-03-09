//url: './index.html',

var routes = [

  {
    path: '/right-panel-ajax/',
    panel: {
      url: './pages/right-panel.html',
      /* right-panel.html contains:
      <div class="panel panel-right panel-reveal">
        <div class="view">
          <div class="page">
            ...
          </div>
        </div>
      </div>
      */
    },
  },


  {
    path: '/blog/',
    component: (props, { $h, $f7, $on }) => {

      const title = 'Component Page';
      const names = ['John', 'Vladimir', 'Timo'];

      const openAlert = () => {
        $f7.dialog.alert('Hello world!');
      }

      $on('pageInit', (e, page) => {
        // do something on page init
      });

      $on('pageAfterOut', (e, page) => {
        // page has left the view
      });

      return () => $h`
        <div class="page">
          <div class="navbar">
            <div class="navbar-bg"></div>
            <div class="navbar-inner">
            <div class="left">
            <a href="#" class="link back">
              <i class="icon icon-back"></i>
              <span class="if-not-md">Back</span>
            </a>
          </div>
  
              <div class="title">${title}</div>
            </div>
          </div>
          <div class="page-content">
            <a @click=${openAlert} class="red-link">Open Alert</a>
            <div class="list simple-list">
              <ul>
                ${names.map((name) => $h`
                  <li>${name}</li>
                `)}
              </ul>
            </div>
          </div>
        </div>
        `;
    }
  },

  {
    path: '/',
    url: './pages/home.html', // change to ./index.html for main page
  },

  {
    path: '/home/',
    url: './pages/home.html',
  },

  {
    path: '/ryd/',
    url: './pages/ryd.html',
  },
  
  {
    path: '/panelscomp/',
    panel: {
      url: './pages/right-panel.html',    
    }
  },

  {
    path: '/panels/',
    componentUrl: './pages/panels.html',
  },
  
  {
    path: '/ryd2/',
    pageName: 'ryd2',
  },

  {
    path: '/adm/',
    url: './pages/adm.html',
  },

  {
    path: '/admdb/',
    componentUrl: './pages/admdb.html',
  },

  {
    path: '/testcomp/',
    componentUrl: './pages/testcomp.html',
  },
  {
    path: '/testcomp1/',
    componentUrl: './pages/testcomp1.html',
  },
  {
    path: '/testcomp2/',
    componentUrl: './pages/testcomp2.html',
  },
  {
    path: '/test/',
    url: 'http://127.0.0.1:5500/www/pages/test.html',
  },
  {
    path: '/test2/',
    componentUrl: './pages/test2.html',
  },
  {
    path: '/form/',
    url: './pages/form.html',
  },
  {
    path: '/dbadm',
    componentUrl: './pages/dbadm.html',
  },
  {
    path: '/menu/',
    componentUrl: './pages/menu.html',
  },
  {
    path: '/popover/',
    url: './pages/popover.html',
  },
  {
    path: '/cardsexpandable/',
    url: './pages/cardsexpandable.html',
  },
  {
    path: '/photobrowser/',
    componentUrl: './pages/photobrowser.html',
  },
  {
    path: '/formdata/',
    componentUrl: './pages/formdata.html',
  },
  {
    path: '/formv2x/',
    componentUrl: './pages/formv2x.html',
  },
  {
    path: '/formv2/',
    componentUrl: './pages/formv2.html',
  },
  {
    path: '/about/',
    componentUrl: './pages/about.html',
  },
  {
    path: '/CRUDstatecollap/',
    componentUrl: './pages/CRUDstatecollap.html',
  },

  {
    path: '/CRUDstate/',
    componentUrl: './pages/CRUDstate.html',
  },

  {
    path: '/CRUDmdstate/',
    componentUrl: './pages/CRUDmdstate.html',
  },

  {
    path: '/setstate/',
    componentUrl: './pages/setstate.html',
  },
  {
    path: '/form/',
    url: './pages/form.html',
  },


  {
    path: '(.*)',
    url: './pages/404.html',
  }

  // Page Loaders & Router
  // {
  //   path: '/page-loader-template7/:user/:userId/:posts/:postId/',
  //   templateUrl: './pages/page-loader-template7.html',
  // },
  // {
  //   path: '/page-loader-component/:user/:userId/:posts/:postId/',
  //   componentUrl: './pages/page-loader-component.html',
  // },
  // {
  //   path: '/request-and-load/user/:userId/',
  //   async: function (routeTo, routeFrom, resolve, reject) {
  //     // Router instance
  //     console.log('loading router.js')
  //     var router = this;
  // 		// console.log(routeTo)
  // 		// console.log(routeFrom)
  //     // App instance
  //     var app = router.app;

  //     // Show Preloader
  //     app.preloader.show();

  //     // User ID from request
  //     var userId = routeTo.params.userId;

  //     // Simulate Ajax Request
  //     setTimeout(function () {
  //       // We got user data from request
  //       var user = {
  //         firstName: 'Vladimir',
  //         lastName: 'Kharlampidi',
  //         about: 'Hello, i am creator of Framework7! Hope you like it!',
  //         links: [
  //           {
  //             title: 'Framework7 Website',
  //             url: 'http://framework7.io',
  //           },
  //           {
  //             title: 'Framework7 Forum',
  //             url: 'http://forum.framework7.io',
  //           },
  //         ]
  //       };
  //       // Hide Preloader
  //       app.preloader.hide();

  //       // Resolve route to load page
  //       resolve(
  //         {
  //           componentUrl: './pages/request-and-load.html',
  //         },
  //         {
  //           context: {
  //             user: user,
  //           }
  //         }
  //       );
  //     }, 1000);
  //   }
  // },



  // {
  //   path: '/dynamic-route/blog/:blogId/post/:postId/',
  //   componentUrl: './pages/dynamic-route.html',
  // },
  // {
  //   path: '/request-and-load/user/:userId/',
  //   async: function ({ router, to, resolve }) {
  //     // App instance
  //     var app = router.app;

  //     // Show Preloader
  //     app.preloader.show();

  //     // User ID from request
  //     var userId = to.params.userId;

  //     // Simulate Ajax Request
  //     setTimeout(function () {
  //       // We got user data from request
  //       var user = {
  //         firstName: 'Vladimir',
  //         lastName: 'Kharlampidi',
  //         about: 'Hello, i am creator of Framework7! Hope you like it!',
  //         links: [
  //           {
  //             title: 'Framework7 Website',
  //             url: 'http://framework7.io',
  //           },
  //           {
  //             title: 'Framework7 Forum',
  //             url: 'http://forum.framework7.io',
  //           },
  //         ]
  //       };
  //       // Hide Preloader
  //       app.preloader.hide();

  //       // Resolve route to load page
  //       resolve(
  //         {
  //           componentUrl: './pages/request-and-load.html',
  //         },
  //         {
  //           props: {
  //             user: user,
  //           }
  //         }
  //       );
  //     }, 1000);
  //   },
  // },
  // Default route (404 page). MUST BE THE LAST

];
