<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <div class="header-overlay"></div>
        <ion-title>Inicio Sesión</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding content-layout">
      <div class="overlay"></div>

      <!-- Formulario -->
      <div class="form-section">
        <ion-item>
          <ion-input
            v-model="email"
            placeholder="Correo"
            type="email"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-input
            v-model="password"
            placeholder="Contraseña"
            type="password"
          ></ion-input>
        </ion-item>
      </div>

      <!-- Botones -->
      <div class="button-section">
        <ion-button expand="block" @click="handleLogin">Iniciar Sesión</ion-button>
        <ion-button expand="block" @click="goRegister">Registrarse</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton
} from '@ionic/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');

/**
 * Simulación de inicio de sesión con verificación 2FA
 */
function handleLogin() {
  // Validación simple de usuario simulado
  if (email.value === 'usuario@ejemplo.com' && password.value === '1234') {
    // Generar un código 2FA de 6 dígitos
    const code = Math.floor(100000 + Math.random() * 900000);

    // Guardar el código temporalmente (simula un backend)
    localStorage.setItem('2fa_code', code.toString());
    localStorage.setItem('2fa_email', email.value);

    // Mostrar el código (en una app real se enviaría por correo/SMS)
    alert(`Tu código de verificación es: ${code}`);

    // Redirigir a la página de verificación
    router.push('/verify');
  } else {
    alert('Credenciales incorrectas. Intenta de nuevo.');
  }
}

function goRegister() {
  router.push('/register');
}
</script>

<style scoped>
.content-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
}

.form-section {
  z-index: 1;
  margin-top: 125px;
}

ion-item {
  margin-bottom: 20px;
  --background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  color: black;
}

.button-section {
  z-index: 1;
  margin-bottom: 40px;
}

ion-button {
  --border-radius: 20px;
  --background: #cd853f;
  color: white;
  font-weight: bold;
  margin-top: 10px;
}
</style>
