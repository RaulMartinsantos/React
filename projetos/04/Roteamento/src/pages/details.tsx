import { useParams, useNavigate } from "react-router";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>Produtos</button>
      <h1>Detalhes</h1>
      <span>
        id do produto <strong>{id}</strong>
      </span>
    </div>
  );
}

export default Details;
