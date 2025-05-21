import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ProductosLista.css"; // Asegúrate de importar el archivo CSS
import{getProducts} from '../services/products'

const ProductosLista = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        //const response = await fetch("/productos.json");
        const response = await getProducts( )
        const data = await response;
        console.log("data:", data)
        setProductos(data);
      } catch (error) {
        console.error("Error cargando productos:", error);
      }
    };

    cargarProductos();
  }, []);

  return (
    <div className="productos-lista">
      <h1>Lista de Productos</h1>
      <ul>
        <Link to='/altaProducto'> Nuevo producto
        </Link>
        {productos.map((producto) => (
          <li key={producto.id} className="producto-item">
            <Link to={`/productos/${producto.id}`} className="link-detalle">
              {producto.nombre} - ${producto.precioFinal}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductosLista;
