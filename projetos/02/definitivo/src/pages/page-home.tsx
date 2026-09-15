import Container from "../components/container";
import PhotosList from "../contexts/photos/components/photos-list";
import AlbumsFilter from "../contexts/albums/components/albums-filter";

function PageHome() {
  return (
    <Container>
      <AlbumsFilter
        albums={[
          { id: "1234", title: "album 1" },
          { id: "123", title: "album 2" },
          { id: "12", title: "album 3" },
        ]}
        className="mb-9"
      />
      <PhotosList
        photos={[
          {
            id: "12345",
            title: "Olá mundo",
            imageId: "portrait-shadow.png",
            albums: [
              { id: "1234", title: "album 1" },
              { id: "123", title: "album 2" },
              { id: "12", title: "album 3" },
            ],
          },
          {
            id: "12345",
            title: "Olá mundo",
            imageId: "portrait-shadow.png",
            albums: [
              { id: "1234", title: "album 1" },
              { id: "123", title: "album 2" },
              { id: "12", title: "album 3" },
            ],
          },
        ]}
      />
    </Container>
  );
}

export default PageHome;
