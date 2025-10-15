<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Carrito</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="overlayC"></div>

      <div class="contenido">
        <div v-if="carritoStore.productos.length === 0" class="vacio">
          <p>Tu carrito está vacío 🛒</p>
        </div>

        <ion-list v-else lines="none">
          <ion-item
            v-for="(producto, i) in carritoStore.productos"
            :key="producto.nombre + i"
            class="item-translucido"
          >
            <ion-thumbnail slot="start">
              <img :src="producto.imagen" />
            </ion-thumbnail>

            <ion-label>
              <h2>{{ producto.nombre }}</h2>
              <p>💰 ${{ producto.precio.toLocaleString('es-CO') }}</p>
              <p style="color: #ffd700">Cantidad: {{ producto.cantidad }}</p>
            </ion-label>

            <div slot="end" class="botones-cantidad">
              <ion-button color="medium" size="small" @click="disminuir(producto.nombre)">-</ion-button>
              <ion-button color="success" size="small" @click="aumentar(producto.nombre)">+</ion-button>
              <ion-button color="danger" size="small" @click="eliminar(producto.nombre)">Eliminar</ion-button>
            </div>
          </ion-item>
        </ion-list>

        <div v-if="carritoStore.productos.length > 0" class="acciones">
          <p class="total"><strong>Total: </strong>${{ total }}</p>
          <ion-button color="warning" expand="block" @click="comprar">
            Comprar 🛍️
          </ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { carritoStore, pedidosStore } from '@/store'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonButton
} from '@ionic/vue'

function aumentar(nombre: string) {
  carritoStore.aumentarProducto(nombre)
}

function disminuir(nombre: string) {
  carritoStore.disminuirProducto(nombre)
}

function eliminar(nombre: string) {
  carritoStore.eliminarProducto(nombre)
}

function comprar() {
  if (carritoStore.productos.length > 0) {
    pedidosStore.agregarPedido(carritoStore.productos)
    carritoStore.limpiarCarrito()
    alert('✅ Pedido generado exitosamente')
  }
}

const total = computed(() => {
  const suma = carritoStore.productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0)
  return suma.toLocaleString('es-CO')
})
</script>

<style scoped>
.overlayC {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px) brightness(0.5);
  background: rgba(255, 255, 255, 0.2);
  z-index: 1;
}

.contenido {
  position: relative;
  z-index: 2;
  padding: 10px;
}

.vacio {
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin-top: 40px;
}

.total {
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin: 15px 0;
}

.acciones {
  margin-top: 10px;
  text-align: center;
}

ion-item {
  --background: rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  margin: 14px 0;
  padding: 10px;
}
</style>
