import Container from "../components/container";
import Text from "../components/text";
import PhotoWidget from "../contexts/photos/components/photo-widget";
import type { Photo } from "../contexts/photos/models/photo";

function PageHome() {
  return (
    <Container>
      <div className="grid grid-cols-4 gap-9">
        <PhotoWidget
          photo={{
            id: "12345",
            title: "Olá mundo",
            imageId: "portrait-shadow.png",
            albums: [
              { id: "1234", title: "album 1" },
              { id: "123", title: "album 2" },
              { id: "12", title: "album 3" },
            ],
          }}
        />
        <PhotoWidget
          photo={{
            id: "123456",
            title: "Olá mundo",
            imageId: "portrait-shadow.png",
            albums: [
              { id: "1234", title: "album 1" },
              { id: "123", title: "album 2" },
              { id: "12", title: "album 3" },
            ],
          }}
        />
        <PhotoWidget
          photo={{
            id: "1234567",
            title: "Olá mundo",
            imageId: "portrait-shadow.png",
            albums: [
              { id: "1234", title: "album 1" },
              { id: "123", title: "album 2" },
              { id: "12", title: "album 3" },
            ],
          }}
        />
        <PhotoWidget photo={{} as Photo} loading />
      </div>
    </Container>
  );
}

export default PageHome;
