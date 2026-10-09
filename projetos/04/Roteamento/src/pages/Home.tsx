import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  function productsOpen() {
    navigate("/products");
  }

  return (
    <div>
      <h1>Pagina Home</h1>
      <nav>
        <a href="/products">Produtos</a>
        <a href="/products?category=tvs">Categoria</a>

        <button type="button" onClick={productsOpen}>
          Ver produtos
        </button>
      </nav>
    </div>
  );
}

export default Home;
