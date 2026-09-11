import { useParams } from "react-router";
import Text from "../components/text";

function PagePhotoDetails() {
  const {id} = useParams()

  return (
    <>
      <Text variant="label-medium">Pagina de detalhes da foto </Text>
      <hr />
      <Text variant="label-medium">Id da foto {id}</Text>
    </>
  );
}

export default PagePhotoDetails;
