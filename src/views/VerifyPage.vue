<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Verificación 2FA</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <p>Introduce el código de verificación enviado a tu correo (simulado).</p>

      <ion-item>
        <ion-input v-model="code" placeholder="Código de 6 dígitos"></ion-input>
      </ion-item>

      <ion-button expand="block" @click="verifyCode">Verificar</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage, IonHeader, IonToolbar, IonTitle,
  IonContent, IonItem, IonInput, IonButton
} from '@ionic/vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const code = ref('');

function verifyCode() {
  const savedCode = localStorage.getItem('2fa_code');

  if (code.value === savedCode) {
    alert('Autenticación exitosa ✅');
    localStorage.removeItem('2fa_code');
    router.push('/feed');
  } else {
    alert('Código incorrecto ❌');
  }
}
</script>
