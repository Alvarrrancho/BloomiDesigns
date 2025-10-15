<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <div class="header-overlay"></div>
        <ion-title>Registro</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding content-layout">
      <div class="overlay"></div>
      <div class="form-section">
        <ion-item>
        <ion-input placeholder="Nombre"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input placeholder="Correo"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input placeholder="Contraseña" type="password"></ion-input>
      </ion-item>

      <ion-button expand="block" @click="goFeed">Registrarme</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function goFeed() {
  router.push('/feed'); // ✅ manda a la feed al registrarse
}
</script>

<style scoped>
.content-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* separa el formulario y los botones */
  height: 100%;
  position: relative;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  z-index: 0;
}

.form-section {
  z-index: 1;
  margin-top: 125px;
}

ion-item {
  margin-bottom: 20px;
  --background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  color:black;
}

ion-button {
  --border-radius: 20px;
  --background: #cd853f;
  color: white;
  font-weight: bold;
  margin-top: 10px;
}

ion-title{

  font-family: cursive;
}
</style>