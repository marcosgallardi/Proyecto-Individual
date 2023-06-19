const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

// Configura tus credenciales de Cloudinary
cloudinary.config({ 
    cloud_name: 'dumjfq5mk', 
    api_key: '346193597216256', 
    api_secret: 'latmh35S6UzojRp6w1knhQXahBw' 
  });

// Configura la opción de almacenamiento de Multer con Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'perros', // Carpeta donde se almacenarán las imágenes en Cloudinary
    allowedFormats: ['jpg', 'png'], // Formatos de archivo permitidos
    transformation: [{ width: 500, height: 500, crop: 'limit' }] // Opciones de transformación de la imagen
  }
});

// Crea el middleware de carga de archivos utilizando Multer
const upload = multer({ storage: storage });

module.exports = upload;
