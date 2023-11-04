import { Router } from '@vaadin/router';

const outlet = document.getElementById('outlet');

const router = new Router(outlet);
router.setRoutes([
  { path: '/', component: 'my-login' },
  { path: '/my-page1', component: 'my-page1' },
  { path: '/my-page2', component: 'my-page2' },
  { path: '/my-campanas', component: 'my-campanas' },
  { path: '/my-equipo', component: 'my-equipo' },
  { path: '/my-profesor', component: 'my-profesor' },
]);


export default router;
