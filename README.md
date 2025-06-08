# Restaurant QR Webapp Backend (Node.js + MySQL)

Este es un backend sencillo en Express que implementa algunas rutas básicas para un MVP de un sistema de pedidos mediante QR.

## Requisitos
- Node.js 18+
- MySQL 8+

## Instalación
1. Clonar el repositorio y entrar en la carpeta.
2. Copiar `.env.example` a `.env` y completar las credenciales de la base de datos.
3. Crear la base de datos y ejecutar `schema.sql` para generar las tablas.
4. Instalar dependencias:
   ```bash
   npm install
   npm --prefix frontend install
   ```
5. Iniciar el servidor:
   ```bash
   npm start
   ```

## Frontend PWA
El directorio `frontend/` contiene una aplicación Next.js 14 con Tailwind. Para desarrollarla:

```bash
npm --prefix frontend run dev
```

El servidor escuchará en el puerto definido en `.env` (por defecto 3000).

## Endpoints principales
- `GET /menu` – devuelve las categorías y platos.
- `POST /orders` – crea una orden.
- `GET /orders/:id` – consulta una orden.
- `POST /payments` – simula el procesamiento de pago.

## Notas
Este proyecto es solo un punto de partida para un MVP y puede ser ampliado según las necesidades.

## Imágenes
Se retiraron íconos e imágenes para evitar binarios en el repositorio. Las vistas emplean cuadros de color como marcadores de posición.
