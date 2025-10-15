<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>

      <!-- Barra de navegación inferior con fondo translúcido -->
      <ion-tab-bar slot="bottom" class="tab-bar">
        <div class="overlay"></div> <!-- capa translúcida -->

        <ion-tab-button tab="inicio" href="/feed/inicio">
          <ion-icon :icon="home" />
        </ion-tab-button>

        <ion-tab-button tab="perfil" href="/feed/perfil">
          <ion-icon :icon="person" />
        </ion-tab-button>

        <ion-tab-button tab="pedidos" href="/feed/pedidos">
          <ion-icon :icon="receipt" /> 
        </ion-tab-button>

        <ion-tab-button tab="carrito" href="/feed/carrito">
          <ion-icon :icon="cart" /> 
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon
} from '@ionic/vue'
import { home, person, cart, receipt } from 'ionicons/icons'
</script>

<style scoped>
/*FONDO TAB*/
.tab-bar {
  position: relative;
  overflow: hidden;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: url('/src/assets/fondo_app.png') no-repeat center center / cover;
}

/*BOTONES DE NAVEGACION*/
ion-tab-button {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  background: transparent;
  border-radius: 50%;
  transition: transform 0.2s ease-in-out;
}

ion-tab-button:active {
  transform: scale(1.25);
}

/*ICONOS*/
ion-icon {
  font-size: 28px;
  color: black;
}
</style>
