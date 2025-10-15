import { reactive } from 'vue'

/* --- CARRITO --- */
export const carritoStore = reactive({
  productos: [] as Array<{ nombre: string; precio: number; imagen: string; cantidad: number }>,

  agregarProducto(producto: { nombre: string; precio: number; imagen: string }) {
    const existe = this.productos.find(p => p.nombre === producto.nombre)
    if (existe) {
      existe.cantidad++
    } else {
      this.productos.push({ ...producto, cantidad: 1 })
    }
  },

  aumentarProducto(nombre: string) {
    const producto = this.productos.find(p => p.nombre === nombre)
    if (producto) producto.cantidad++
  },

  disminuirProducto(nombre: string) {
    const producto = this.productos.find(p => p.nombre === nombre)
    if (producto && producto.cantidad > 1) producto.cantidad--
  },

  eliminarProducto(nombre: string) {
    this.productos = this.productos.filter(p => p.nombre !== nombre)
  },

  limpiarCarrito() {
    this.productos = []
  }
})

/* --- PEDIDOS --- */
export const pedidosStore = reactive({
  pedidos: [] as Array<{
    id: number
    fecha: string
    productos: { nombre: string; cantidad: number; precio: number }[]
    total: number
  }>,

  agregarPedido(productos: any[]) {
    const total = productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0)
    const nuevoPedido = {
      id: Date.now(),
      fecha: new Date().toLocaleString(),
      productos: JSON.parse(JSON.stringify(productos)),
      total
    }
    this.pedidos.push(nuevoPedido)
  },

  eliminarPedido(id: number) {
    this.pedidos = this.pedidos.filter(p => p.id !== id)
  }
})

