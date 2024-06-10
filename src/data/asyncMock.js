export const productos = [
    {
      id: 1,
      nombre: "Volcán Lanin",
      precio: 50000,
      categoria: "Ascensos",
      stock: 10,
      descripcion:
        "Ubicado a 65 km de Junín de los Andes y a 105 km de San Martín de los Andes, el Volcán Lanín sorprende con su cónica figura muchos kilómetros antes de que nos encontremos en su base. Con una altura de 3776 msnm, sirve de límite internacional entre Argentina y Chile, 3/4 partes de su superficie pertenecen a Argentina, mientras que el resto corresponde al territorio vecino. En dos días de arduo ascenso nos pondremos a prueba tanto física como mentalmente. Alcanzar la cima no es tarea fácil, pero al llegar a lo más alto del volcán nos espera un espectacular paisaje de montañas nevadas entre lagos inmensos y volcanes vecinos. Una vez finalizado el descenso la merienda en la base será nuestra verdadera cumbre, ya que en esta experiencia de dificultad técnica, la seguridad es nuestro principal objetivo.",
      img: "https://images.megapixl.com/839/8397575.jpg",
    },
    {
      id: 2,
      nombre: "Mirada del doctor",
      precio: 40000,
      categoria: "Trekkings",
      stock: 5,
      descripcion:
        "El sendero comienza a pocos metros de la Seccional de Guardaparque de Pampa Linda, transitando el mismo camino que lleva al Refugio Otto Meiling, en el Cerro Tronador. Luego de caminar 300 m. hay que tomar un desvío hacia la derecha que conduce tras 15 minutos de marcha hasta el Río Alerce, el cual se cruza por un puente colgante. Todo el camino está bien señalizado y continúa con una pendiente muy pronunciada por los 2 km. siguientes hasta llegar a un área de mallines los cuales se rodean hasta llegar a la Laguna Ilón. Desde la playa de la laguna y hacia la izquierda inicia un sendero que lleva hacia la “Mirada del Doctor”, un mirador natural ubicado a 4 km. Desde Laguna Ilón se puede regresar a Pampa Linda por el mismo camino o bien conectar con el Refugio Agostino Rocca por el paso La Marca. También se puede continuar en dirección norte, hacia  Laguna Cretón, realizando la travesía de las 5 lagunas hasta Colonia Suiza.",
      img: "https://www.shutterstock.com/image-photo/doctors-look-panoramic-point-that-260nw-2147162929.jpg",
    },
    {
      id: 3,
      nombre: "Refugio Otto Meiling / Cerro Tronador",
      precio: 89000,
      categoria: "Trekkings",
      stock: 5,
      descripcion:
        "Distancia: 13 km. Desnivel: 1000 metros. Tiempo promedio en subida: 5 horas. Los dos primeros tercios transcurren dentro del bosque y están señalizados con carteles y marcas amarillas. El tercio superior es un sendero que va por terreno pedregoso, sin bosque, a lo largo de una cresta entre los glaciares Castaño Overa y Alerce, el cual se encuentra señalizado con marcas blancas en las piedras, hasta llegar al refugio. Los primeros tres kilómetros son casi planos y todo el tiempo por un camino vehicular hasta llegar al río Castaño Overa que se cruza por un puente peatonal. A partir de este punto se empieza a ascender moderadamente y se va alternando entre el camino vehicular y tramos de sendero. Luego de unos cuatro kilómetros y después de dejar atrás el desvío que conduce al fondo del valle del río Castaño Overa, la pendiente se incrementa un poco. En este sector se transita por el camino hasta llegar al cartel que indica el comienzo de los “Caracoles” (sendero que asciende con bastante pendiente en zig-zag). Esta es la parte más empinada del recorrido, donde conviene disminuir el ritmo de marcha y seguir siempre el sendero sin tomar las cortadas, para evitar la fatiga y la erosión del terreno. El último Caracol concluye al reencontrar el camino sobre un sitio denominado “La Almohadilla” señalizado con carteles. Desde ahí continúa el ascenso con pendientes menores, siendo conveniente seguir el camino vehicular hasta el final del mismo en un lugar llamado “Descanso de los Caballos”, donde comienza el tramo pedregoso. A partir de allí las vistas son cada vez más espectaculares, y es necesario atender a la señalización para no salirse de la senda que está trazada por la línea más conveniente. Este último tramo podría, en cualquier momento de la temporada, pero especialmente entre octubre y diciembre, estar cubierto total o parcialmente de nieve, caso en el cual se cambia el recorrido por razones de seguridad y comodidad, con una señalización alternativa.",
      img: "https://refugiomeiling.com/images/fotos/38.jpg",
    },
    {
      id: 4,
      nombre: "Escalada - Cerro Ventana/Lopez y Villa Llanquin",
      precio: 9900,
      categoria: "Escalada",
      stock: 5,
      descripcion:
        "Descripcion de la escalada..",
      img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6c/2e/a1.jpg",
    },
    {
      id: 5,
      nombre: "Cuatro Refugios. Frey-Jakob-Laguna Negra-Lopez",
      precio: 150000,
      categoria: "Travesias",
      stock: 5,
      descripcion:
        "Travesia",
      img: "https://d2r9epyceweg5n.cloudfront.net/stores/841/701/rte/205-Refugio-San-Martin-Laguna-Jakob-Refugio-Manfredo-Segre-Laguna-Negra1.jpg",
    },
  ];
  
  export const getProducts = () => {
    return new Promise((res) => {
      setTimeout(() => {
        res(productos);
      }, 2000);
    });
  };

  export const getProductsByCategory = (category) => {

    return new Promise((res) => {
      const productosFiltrados = productos.filter( 
        (prod) => prod.categoria === category
      );
      setTimeout(() => {res(productosFiltrados)
      }, 2000);
    });
  }

  export const getProductById = (id) => {
    return new Promise((res) => {
      const productoFiltrado = productos.find((prod) => prod.id === parseInt(id));
      setTimeout(() => {
        res(productoFiltrado);
      }, 2000);
    });
  };