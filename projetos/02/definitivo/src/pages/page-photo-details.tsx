import Text from "../components/text";
import Skeleton from "../components/skeleton";
import Container from "../components/container";
import type { Photo } from "../contexts/photos/models/photo";
import PhotoNavigator from "../contexts/photos/components/photos-navigator";
import ImagePreview from "../components/image-preview";
import Button from "../components/button";
import AlbumsListSelectable from "../contexts/albums/components/albums-list-selectable";

function PagePhotoDetails() {
  //Apenas para teste de mock
  const isLoadingPhoto = false;
  const photo = {
    id: "12345",
    title: "Olá mundo",
    imageId: "portrait-shadow.png",
    albums: [
      { id: "1234", title: "album 1" },
      { id: "123", title: "album 2" },
      { id: "12", title: "album 3" },
    ],
  } as Photo;

  return (
    <Container>
      <header className="flex items-center justify-between gap-8 mb-8">
        {!isLoadingPhoto ? (
          <Text as="h2" variant="heading-large">
            {photo.title}
          </Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}
        <PhotoNavigator loading={isLoadingPhoto} />
      </header>

      <div className="grid grid-cols-[21rem_1fr] gap-24">
        <div className="space-y-3">
          {!isLoadingPhoto ? (
            <>
              <ImagePreview
                src={`/images/${photo?.imageId}`}
                title={photo.title}
                imageClassNamePreview="h-[21rem]"
              />
            </>
          ) : (
            <Skeleton className="h-[21rem]" />
          )}
          {!isLoadingPhoto ? (
            <Button variant="destructive">Excluir</Button>
          ) : (
            <Skeleton className="w-20 h-10" />
          )}
        </div>

        <div className="py-3">
          <Text as="h3" variant="heading-medium" className="mb-6">
            Álbuns
          </Text>
          <AlbumsListSelectable
            photo={photo}
            albums={[
              { id: "1234", title: "album 1" },
              { id: "123", title: "album 2" },
              { id: "12", title: "album 3" },
            ]}
            loading={isLoadingPhoto}
          />
        </div>
      </div>
    </Container>
  );
}

export default PagePhotoDetails;
