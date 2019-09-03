

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
import StratuxTowersPage from '../pages/datalog/stratux-towers.vue';

import DebugPage from '../pages/debug/debug.vue';
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
    path: '/datalog/',
    component: DatalogPage,
    routes: [
      {
        path: 'towers/',
        component: StratuxTowersPage,
        //componentUrl: 'http://www.welt.de',
      }
    ],
  },
  
  {
    path: '/debug/',
    component: DebugPage,
    routes: [
      {
        path: 'websocket/',
        component: DebugWebsocketPage,
      },
      {
        path: 'axios/',
        component: DebugAxiosPage,
      },
    ]
  },
  
  {
    path: '/about/',
    component: AboutPage,
  },


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
