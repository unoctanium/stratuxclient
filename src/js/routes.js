// Import Framework7
//import Framework7 from 'framework7/framework7.esm.bundle.js';

// PAGES
import HomePage from '../pages/home.vue'; // Menus, Tabs, Popups
import SettingsPage from '../pages/settings.vue';
import DatalogPage from '../pages/datalog/datalog.vue';
import AboutPage from '../pages/about.vue';
import NotFoundPage from '../pages/404.vue';

// PANELS
import APanel from '../pages/panel-a.vue';
import BPanel from '../pages/panel-b.vue';
import CPanel from '../pages/panel-c.vue';
import DPanel from '../pages/panel-d.vue';
import TabbarMore from '../pages/tabbar-more.vue';


// PLATES

import TrafficPlate from '../pages/plates/traffic.vue';
import RadarPlate from '../pages/plates/radar.vue';
import AhrsPlate from '../pages/plates/ahrs.vue';
import GMeterPlate from '../pages/plates/g-meter.vue';
import GpsPlate from '../pages/plates/gps.vue';
import MapPlate from '../pages/plates/map.vue';
import TowersPlate from '../pages/plates/towers.vue'
import WeatherPlate from '../pages/plates/weather.vue'


// DELETE
/*
//import StratuxTowersPage from '../pages/datalog/stratux-towers.vue';
//import StratuxDataPage from '../pages/datalog/stratux-data.vue';
//import DebugWebsocketPage from '../pages/debug/debug-websocket.vue';
//import DebugAxiosPage from '../pages/debug/debug-axios.vue';

import FormPage from '../pages/_form.vue';
import CatalogPage from '../pages/_catalog.vue';
import ProductPage from '../pages/_product.vue';
import DynamicRoutePage from '../pages/_dynamic-route.vue';
import RequestAndLoad from '../pages/_request-and-load.vue';
*/

var routes = [

  {
    path: '/about/',
    component: AboutPage,
  },

  {
    // Page main route
    path: '/',
    component: HomePage, // Menues and Tabs
    // Pass "tabs" property to route, must be array with tab routes:
    
    tabs: [
      // First (default) tab has the same url as the page itself
      {
        path: '/',
        id: 'tab-panel-a',
        component: APanel, // Status Page
      },
      {
        path: '/panel-b/',
        id: 'tab-panel-b',
        component: BPanel,
      },
      {
        path: '/panel-c/',
        id: 'tab-panel-c',
        component: CPanel,
      },
      {
        path: '/panel-d/',
        id: 'tab-panel-d',
        component: DPanel,
      },
      {
        path: '/tabbar-more/',
        id: 'tab-more',
        component: TabbarMore,
      },
      
    ],
  },

  {
    path: '/traffic/:plate',
    id: 'tab-traffic',
    component: TrafficPlate,
  },
  {
    path: '/radar/',
    id: 'tab-radar',
    component: RadarPlate,
  },
  {
    path: '/ahrs/',
    id: 'tab-ahrs',
    component: AhrsPlate,
  },
  {
    path: '/gmeter/',
    id: 'tab-gmeter',
    component: GMeterPlate,
  },
  {
    path: '/gps/',
    id: 'tab-gps',
    component: GpsPlate,
  },
  {
    path: '/map/',
    id: 'tab-map',
    component: MapPlate,
  },
  {
    path: '/towers/',
    id: 'tab-towers',
    component: TowersPlate,
  },
  {
    path: '/weather/',
    id: 'tab-weather',
    component: WeatherPlate,
  },


  {
    path: '/settings/',
    component: SettingsPage,
  },
    
  {
    path: '/datalog/:endpoint',
    component: DatalogPage,
  },
  
  /*
  {
    path: '/debug/websocket',
    component: DebugWebsocketPage,
  },

  {
    path: '/debug/axios',
    component: DebugAxiosPage,
  },
*/

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
/*
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
  */

  // KEEP!!
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
