<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <div class="header-overlay"></div>
        <ion-title>Perfil</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <div class="overlay"></div>
      <!-- Foto de perfil -->
      <div class="profile-pic-container">
        
        <ion-avatar class="profile-pic">
          <img :src="photo || 'https://ionicframework.com/docs/img/demos/avatar.svg'" alt="Foto de perfil" />
        </ion-avatar>
        
        <ion-button size="small" class="upload-btn" @click="selectPhoto">
          Cambiar Foto
        </ion-button>
      </div>

      
      <!-- Formulario -->
      <ion-list>
        
        <ion-item>
          <ion-label position="floating">Nombre</ion-label>
          <ion-input v-model="nombre"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Apellido</ion-label>
          <ion-input v-model="apellido"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Teléfono</ion-label>
          <ion-input type="tel" v-model="telefono"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Dirección</ion-label>
          <ion-input v-model="direccion"></ion-input>
        </ion-item>
      </ion-list>

      <!-- Botón Guardar -->
      <ion-button expand="block" class="ion-margin-top" @click="guardarCambios">
        Guardar Cambios
      </ion-button>
    </ion-content>
  </ion-page>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonLabel, IonInput, IonButton, IonAvatar
} from '@ionic/vue';

// Campos del formulario
const nombre = ref('Juan');
const apellido = ref('Pérez');
const telefono = ref('3001234567');
const direccion = ref('Calle 123, Bogotá');
const photo = ref<string | null>(null);

// Selección de foto (demo usando input file)
function selectPhoto() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        photo.value = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  };
  input.click();
}

// Guardar cambios
function guardarCambios() {
  console.log('Datos guardados:', {
    nombre: nombre.value,
    apellido: apellido.value,
    telefono: telefono.value,
    direccion: direccion.value,
    photo: photo.value,
  });
  alert('✅ Perfil actualizado');
}
</script>

<style scoped>
.profile-pic-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.profile-pic {
  width: 120px;
  height: 120px;
  margin-bottom: 10px;
  z-index: 1;
}

.upload-btn {
  --border-radius: 20px;
  --padding-start: 12px;
  --padding-end: 12px;
}

ion-list{

  background-color: white;
  border-radius: 20px;
  padding-right: 20px;
}

ion-input{

  top: 10px;
  margin-top: 5px;

}

ion-item{

  --background: white;
  color: gray;
  width: 100%;
  margin-bottom: 20px;
  
}

ion-button{

  --background:#cd853f;
  color:white;
}

ion-title{

  font-family: cursive;
}
</style>
