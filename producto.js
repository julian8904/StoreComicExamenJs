let productos = [];

document.getElementById('producto-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const precio = document.getElementById('precio').value;
  const descripcion = document.getElementById('descripcion').value;
  const foto = document.getElementById('foto').files[0];

  const producto = {
    nombre,
    precio,
    descripcion,
    foto
  };

  productos.push(producto);

  document.getElementById('nombre').value = '';
  document.getElementById('precio').value = '';
  document.getElementById('descripcion').value = '';
  document.getElementById('foto').value = '';
});

document.getElementById('mostrar-productos').addEventListener('click', function() {
  const nuevaPestana = window.open('', '_blank');
  nuevaPestana.document.write(`
    <html>
      <head>
        <title>Productos</title>
        <style>
          body {
            font-family: Arial, sans-serif;
          }
          .producto {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
          }
          .producto img {
            width: 100px;
            height: 100px;
            margin-bottom: 20px;
          }
        </style>
      </head>
      <body>
        <h2>Productos</h2>
        ${productos.map(producto => `
          <div class="producto">
            <h3>${producto.nombre}</h3>
            <img src="${URL.createObjectURL(producto.foto)}" alt="Foto del producto">
            <p>Precio: ${producto.precio}</p>
            <p>Descripción: ${producto.descripcion}</p>
          </div>
        `).join('')}
      </body>
    </html>
  `);
  nuevaPestana.document.close();
});