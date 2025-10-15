<template>
  <ion-page>
    <ion-content class="homeApp">
      <!-- Fondo con transparencia -->
      <div class="overlay"></div>

      <!-- Título -->
      <h1 class="app-title">Bloomi</h1>

      <!-- Contenedor inferior -->
      <div class="bottom-section">
        <ion-button expand="block" class="login-btn" @click="goLogin">
          Entrar
        </ion-button>

        <p class="register-text">
          No estás registrado?
          <span class="register-link" @click="goRegister">Regístrate</span>
        </p>
      </div>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonButton } from '@ionic/vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goLogin() {
  router.push('/login')
}

function goRegister() {
  router.push('/register')
}
</script>

<style scoped>
.homeApp {
  --background: url('/src/assets/Home_app.png') no-repeat center center / cover;
  position: relative;
  height: 100%;
  text-align: center;
}

/* Capa de oscurecimiento */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 0;
}

/* titulo Bloomi */
.app-title {
  position: absolute;
  top: 40px; /* controla distancia desde arriba */
  left: 0;
  right: 0;
  font-family: cursive;
  font-size: 60px;
  color: black;
  z-index: 1;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
}

/* Contenedor inferior */
.bottom-section {
  position: absolute;
  bottom: 50px; /* controla distancia desde abajo */
  width: 100%;
  padding: 20px;
  z-index: 1;
}

/* Boton Log in */
.login-btn {
  --background: #cd853f;
  --border-radius: 30px;
  font-weight: bold;
  color: white;
  height: 45px;
  font-size: 18px;
}

/* Texto de registro */
.register-text {
  color: white;
  margin-top: 10px;
  font-size: 15px;
}

.register-link {
  color: red;
  font-weight: bold;
  cursor: pointer;
}
</style>
