// Import Framework7
import Framework7 from 'framework7/framework7.esm.bundle.js';

import HomePage from '../pages/home.vue';

import PanelDashboardPage from '../pages/panel-dashboard.vue';
import PanelAPage from '../pages/panel-a.vue';
import PanelBPage from '../pages/panel-b.vue';
import PanelCPage from '../pages/panel-c.vue';
import TrafficPage from '../pages/traffic.vue';
import RadarPage from '../pages/radar.vue';
import AhrsPage from '../pages/ahrs.vue';
import GMeterPage from '../pages/g-meter.vue';
import GpsPage from '../pages/gps.vue';
import MapPage from '../pages/map.vue';
import SettingsPage from '../pages/settings.vue';

import AboutPage from '../pages/about.vue';
import NotFoundPage from '../pages/404.vue';

import DatalogPage from '../pages/datalog/datalog.vue';
//import StratuxTowersPage from '../pages/datalog/stratux-towers.vue';
//import StratuxDataPage from '../pages/datalog/stratux-data.vue';

import DebugWebsocketPage from '../pages/debug/debug-websocket.vue';
import DebugAxiosPage from '../pages/debug/debug-axios.vue';

// DELETE
import FormPage from '../pages/_form.vue';
import CatalogPage from '../pages/_catalog.vue';
import ProductPage from '../pages/_product.vue';
import DynamicRoutePage from '../pages/_dynamic-route.vue';
import RequestAndLoad from '../pages/_request-and-load.vue';


var routes = [

  {
    path: '/about/',
    component: AboutPage,
  },

  {
    // Page main route
    path: '/',
    // Will load page from tabs/index.html file
    component: HomePage, // Status Page
    // Pass "tabs" property to route, must be array with tab routes:
    
    tabs: [
      // First (default) tab has the same url as the page itself
      {
        path: '/',
        id: 'tab-dashboard',
        component: PanelDashboardPage, // Status Page
      },
      {
        path: '/panel-a/',
        id: 'tab-panel-a',
        component: PanelAPage,
      },
      {
        path: '/panel-b/',
        id: 'tab-panel-b',
        component: PanelBPage,
      },
      {
        path: '/panel-c/',
        id: 'tab-panel-c',
        component: PanelCPage,
      },
      {
        path: '/traffic/',
        id: 'tab-traffic',
        component: TrafficPage,
      },
      {
        path: '/radar/',
        id: 'tab-radar',
        component: RadarPage,
      },
      {
        path: '/ahrs/',
        id: 'tab-ahrs',
        component: AhrsPage,
      },
      {
        path: '/gmeter/',
        id: 'tab-gmeter',
        component: GMeterPage,
      },
      {
        path: '/gps/',
        id: 'tab-gps',
        component: GpsPage,
      },
      {
        path: '/map/',
        id: 'tab-map',
        component: MapPage,
      },
     
    ],
  },

  {
    path: '/settings/',
    component: SettingsPage,
  },
    
  {
    path: '/datalog/:endpoint',
    component: DatalogPage,
  },
  
  {
    path: '/debug/websocket',
    component: DebugWebsocketPage,
  },

  {
    path: '/debug/axios',
    component: DebugAxiosPage,
  },


/*
  {
    path: '/datalog_routing/',
    component: DatalogPage,
    routes: [
      //{
      //  path: 'towers2/',
      //  component: StratuxTowersPage,
      //  //componentUrl: 'http://www.welt.de',
      //},
      {
        path: '/websocket/',
        component: DebugWebsocketPage,
      },
      {
        path: '/axios/',
        component: DebugAxiosPage,
      },

      {
        path: '/:endpoint/',
        async: function (routeTo, routeFrom, resolve, reject) {         
          //console.log(routeTo);
          //console.log(routeTo.params.endpoint)
          let ep = routeTo.params.endpoint
          var stratux_url = "http://192.168.1.1/"
          switch (ep) {
            case 'towers':
              stratux_url = stratux_url + "getTowers"
              break;
            case 'status':
              stratux_url = stratux_url + "getStatus"
              break;
            case 'settings':
              stratux_url = stratux_url + "getSettings"
              break;
                    
            default:
              console.log('Sorry, we are out of ' + ep + '.');
          }

          //Framework7.preloader.show()
          Framework7.request({
            url: stratux_url,
            //data: '{data: 1}',
            dataType: 'json',
            method: 'GET',
            cache: false,
            crossDomain: true,
            statusCode: {
              404: function(xhr) {
                  console.log('page not found');
              }
            },
            success: function (data) {
              //Framework7.preloader.hide();
              resolve({
                component: StratuxDataPage
              }, 
              {
                props: {
                  context: data,
                }
              })
            },
            error: function(error){
              //Framework7.preloader.hide();
              console.log('error');
              console.log(error);
            }
          })
        }
      },

    ],
  },
  */
 
  
 


// DELETE!!
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/catalog/',
    component: CatalogPage,
  },
  {
    path: '/product/:id/',
    component: ProductPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  // KEEP!!
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
