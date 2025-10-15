<template>
  <ion-page>
    <!-- Header con efecto translúcido -->
    <ion-header>
      <ion-toolbar class="header-toolbar">
        <div class="header-overlay"></div>
        <ion-title>Bloomi</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Contenido con fondo translúcido completo -->
    <ion-content class="ion-padding">
      <div class="overlay"></div> <!-- Capa translúcida del fondo -->

      <ion-grid class="contenido">
        <ion-row>
          <ion-col size="6" v-for="(producto, i) in productos" :key="i">
            <ion-card class="inicioCards">
              <img :src="producto.imagen" alt="Producto" class="inicioIMG" />
              <ion-card-header>
                <ion-card-title class="nombreProducto">
                  {{ producto.nombre }}
                </ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <p class="inicioCContent">Precio: {{ producto.precio }}</p>
                <ion-button
                  class="inicioButtons"
                  expand="block"
                  size="small"
                  @click="agregarAlCarrito(producto)"
                >
                  Agregar
                </ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { carritoStore } from '@/store'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton
} from '@ionic/vue'

const router = useRouter()

const productos = ref([
  { nombre: 'Pavé', precio: '$15.000', imagen: '/src/assets/Pave_Oreo.jpeg' },
  { nombre: 'Alfajor', precio: '$5.000', imagen: '/src/assets/alfajor.jpeg' },
  { nombre: 'Tartaleta de Fresa', precio: '$12.000', imagen: '/src/assets/tartatelas_fresa.jpeg' }
])

function limpiarPrecioText(precioTexto: string) {
  // transforma "$15.000" -> 15000
  return parseInt(precioTexto.replace(/[^0-9]/g, '')) || 0
}

function agregarAlCarrito(producto: { nombre: string; precio: string; imagen: string }) {
  const precioNumerico = limpiarPrecioText(producto.precio)

  carritoStore.agregarProducto({
    nombre: producto.nombre,
    precio: precioNumerico,
    imagen: producto.imagen
  })

  console.log('Carrito actualizado:', carritoStore.productos)
}
</script>


<style>
/* FONDO PRINCIPAL */
ion-content {
  position: relative;
  --background: url('/src/assets/fondo_app.png') no-repeat center center / cover;
  overflow: hidden;
}

/* La capa ahora cubre TODO el scroll */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px) brightness(1);
  background: rgba(255, 255, 255, 0.25);
  z-index: 0;
}

/* El contenido va encima */
.contenido {
  position: relative;
  z-index: 2;
}

/* HEADER CON EFECTO TRANSLÚCIDO */
ion-toolbar{
  
  --background: url('/src/assets/fondo_app.png') no-repeat center center / cover;
  
}

.header-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  background: rgba(255, 255, 255, 0.2);
  z-index: 1;
}

ion-title {
  position: relative;
  z-index: 2;
  font-family: cursive;
  font-size: 30px;
  font-weight: bold;
  color: black;
  text-align: center;
}

/* TARJETAS */
.inicioCards {
  --background: rgba(205, 133, 63, 0.85);
  border-radius: 25px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.inicioCards:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
}

/* IMAGEN DEL PRODUCTO */
.inicioIMG {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 25px 25px 0 0;
}

/* TITULO DEL PRODUCTO */
.nombreProducto {
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  color: white;
}

/* PRECIO */
.inicioCContent{
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* BOTON */
.inicioButtons {
  --background: white;
  --color: black;
  --border-radius: 20px;
  font-weight: bold;
  text-transform: none;
  margin-top: 5px;
  transition: transform 0.15s ease;
}
.inicioButtons:active {
  transform: scale(0.95);
}
</style>
