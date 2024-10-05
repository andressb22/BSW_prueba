<div>
  <h1>
     Intrusiones para ejecutar el proyecto de manera local
  </h1>
   <p>-clonar repositorio en GitHub</p
  <h2>Front:</h2> 
  <ol>
    <li>dirigirse a la carpeta front y ejecutar el comando <code>npm i</code></li>
    <li>en el archivo <code>map.html</code> buscar la etiqueta script que carga la API de google maps y insertar una api key propia proporcionada por la api de google maps
      <code>
        })({
        key: "Api_key", 
        v: "weekly",
        // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
        // Add other bootstrap parameters as needed, using camel case.
      });
      </code>
      debe cambiar el texto de Api_key por una key propia proporcionada por el API de google maps </li>
    <li>en el archivo <code>map.js</code> en el codigo  <code>
        const map = new Map(document.getElementById("map"), {
          center: { lat: 4.6269757, lng: -74.1133698 },
          zoom: 14,
          mapId: "Map_id",
        });
      </code> 
    </br>cambiar el texto Map_id por un id de mapa proporcionado por la API de google maps
    </li>
    <li>ejecutar el comando <code>npm run dev </code> </li>
    <li>dirigiese a la url proporcionado para visualizar el proyecto </li>
  </ol>
  <h2>Back:</h2> 
  <ol>
    <li>dirigirse a la carpeta back que se encuentra al clonar el repositorio</li>
    <li>ejecutar en la terminal el comando <code>npm i</code></li>
    <li>ejecutar el comando <code>npm start</code>  o <code>npm run dev</code>  <strog>(modo pruebas)</strog></li>
  </ol>

</div>
