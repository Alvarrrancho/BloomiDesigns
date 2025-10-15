import { createRouter, createWebHistory } from '@ionic/vue-router';

// Importaciones de vistas principales
import HomePage from '@/views/HomePage.vue';
import LoginPage from '@/views/LoginPage.vue';
import RegisterPage from '@/views/RegisterPage.vue';
import FeedPage from '@/views/FeedPage.vue';
import InicioPage from '@/views/InicioPage.vue';
import PerfilPage from '@/views/PerfilPage.vue';
import PedidosPage from '@/views/PedidosPage.vue';
import CarritoPage from '@/views/CarritoPage.vue';

// 👇 Importa la nueva página de verificación (asegúrate de que el archivo exista)
import VerifyPage from '@/views/VerifyPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/register',
    component: RegisterPage
  },
  {
    path: '/verify', // ⚙️ Nueva ruta 2FA
    component: VerifyPage
  },
  {
    path: '/feed',
    component: FeedPage,
    children: [
      { path: '', redirect: '/feed/inicio' },
      { path: 'inicio', component: InicioPage },
      { path: 'perfil', component: PerfilPage },
      { path: 'pedidos', component: PedidosPage },
      { path: 'carrito', component: CarritoPage }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
