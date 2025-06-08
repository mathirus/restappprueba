export interface MenuCategory {
  id: number
  name: string
}

export interface MenuItem {
  id: number
  categoryId: number
  name: string
  description: string
  price: number
  image: string
  outOfStock?: boolean
}

export const categories: MenuCategory[] = [
  { id: 1, name: 'Entradas' },
  { id: 2, name: 'Platos' },
  { id: 3, name: 'Postres' },
  { id: 4, name: 'Bebidas' },
]

export const items: MenuItem[] = [
  { id: 1, categoryId: 1, name: 'Bruschetta', description: 'Pan tostado con tomate', price: 5, image: 'https://placehold.co/100x100' },
  { id: 2, categoryId: 1, name: 'Ensalada Caprese', description: 'Tomate, queso y albahaca', price: 7, image: 'https://placehold.co/100x100' },
  { id: 3, categoryId: 1, name: 'Empanadas', description: 'Carne o pollo', price: 4, image: 'https://placehold.co/100x100', outOfStock: true },
  { id: 4, categoryId: 2, name: 'Pizza Napolitana', description: 'Salsa y mozzarella', price: 12, image: 'https://placehold.co/100x100' },
  { id: 5, categoryId: 2, name: 'Milanesa con fritas', description: 'Clásica', price: 15, image: 'https://placehold.co/100x100' },
  { id: 6, categoryId: 2, name: 'Ravioles', description: 'De ricotta', price: 13, image: 'https://placehold.co/100x100' },
  { id: 7, categoryId: 3, name: 'Tiramisú', description: 'Postre italiano', price: 6, image: 'https://placehold.co/100x100' },
  { id: 8, categoryId: 3, name: 'Brownie', description: 'Con helado', price: 5, image: 'https://placehold.co/100x100' },
  { id: 9, categoryId: 3, name: 'Flan', description: 'Con dulce de leche', price: 4, image: 'https://placehold.co/100x100' },
  { id: 10, categoryId: 4, name: 'Agua', description: 'Sin gas', price: 2, image: 'https://placehold.co/100x100' },
  { id: 11, categoryId: 4, name: 'Gaseosa', description: 'Distintos sabores', price: 3, image: 'https://placehold.co/100x100' },
  { id: 12, categoryId: 4, name: 'Cerveza', description: 'Artesanal', price: 4.5, image: 'https://placehold.co/100x100' },
]
