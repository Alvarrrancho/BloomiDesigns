<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Pedidos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <!-- Fondo translúcido -->
      <div class="overlay"></div>

      <!-- Contenido -->
      <div class="contenido">
        <div v-if="pedidosStore.pedidos.length === 0">
          <p>Aquí aparecerán tus pedidos 📦</p>
        </div>

        <ion-list v-else lines="none">
          <ion-item
            v-for="pedido in pedidosStore.pedidos"
            :key="pedido.id"
            class="pedido-card"
          >
            <ion-label>
              <h2>🧾 Pedido #{{ pedido.id }}</h2>
              <p>Fecha: {{ pedido.fecha }}</p>
              <p>Total: ${{ pedido.total.toLocaleString('es-CO') }}</p>

              <ul>
                <li v-for="prod in pedido.productos" :key="prod.nombre">
                  {{ prod.nombre }} (x{{ prod.cantidad }})
                </li>
              </ul>
            </ion-label>

            <!-- Botón para eliminar el pedido -->
            <ion-button
              color="danger"
              size="small"
              slot="end"
              @click="eliminarPedido(pedido.id)"
            >
              Eliminar
            </ion-button>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { pedidosStore } from '@/store'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton
} from '@ionic/vue'

function eliminarPedido(id: number) {
  const confirmar = confirm('¿Seguro que deseas eliminar este pedido? 🗑️')
  if (confirmar) {
    pedidosStore.eliminarPedido(id)
  }
}
</script>

<style scoped>
ion-content {
  --background: url('/src/assets/fondo_app.png') no-repeat center center / cover;
}

/* Fondo translúcido */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px) brightness(0.5);
  background: rgba(255, 255, 255, 0.2);
}

/* Contenido principal */
.contenido {
  position: relative;
  z-index: 2;
  padding: 15px;
  color: white;
}

.pedido-card {
  --background: rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  margin: 12px 0;
  padding: 10px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
}

/* Lista de productos */
ul {
  margin: 5px 0 0 10px;
  padding: 0;
  list-style: none;
}

li {
  font-size: 14px;
  color: #f1f1f1;
}

/* Botón eliminar */
ion-button {
  --border-radius: 10px;
  font-weight: bold;
}
</style>
