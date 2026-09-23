import React from "react";
import Text from "../components/text";
import { useParams } from "react-router";
import Skeleton from "../components/skeleton";
import Container from "../components/container";
import ImagePreview from "../components/image-preview";
import usePhoto from "../contexts/photos/hooks/use-photo";
import useAlbums from "../contexts/albums/hooks/use-albums";
import type { Photo } from "../contexts/photos/models/photo";
import PhotoNavigator from "../contexts/photos/components/photos-navigator";
import AlbumsListSelectable from "../contexts/albums/components/albums-list-selectable";
import DeleteConfirmationDialog from "../contexts/photos/components/delete-confirmation";

function PagePhotoDetails() {
  const { id } = useParams();
  const { albums, isLoadingAlbums } = useAlbums();
  const [isDeletingPhoto, setIsDeletingPhoto] = React.useTransition();
  const { photo, previousPhotoId, nextPhotoId, isLoadingPhoto, deletePhoto } =
    usePhoto(id);

  function handleDeletePhoto() {
    setIsDeletingPhoto(async () => {
      await deletePhoto(photo!.id);
    });
  }

  if (!isLoadingPhoto && !photo) {
    return <div>Foto não encontrada</div>;
  }

  return (
    <Container>
      <header className="flex items-center justify-between gap-8 mb-8">
        {!isLoadingPhoto ? (
          <Text as="h2" variant="heading-large">
            {photo?.title}
          </Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}
        <PhotoNavigator
          nextPhotosId={nextPhotoId}
          previousPhotosId={previousPhotoId}
          loading={isLoadingPhoto}
        />
      </header>

      <div className="grid grid-cols-[21rem_1fr] gap-24">
        <div className="space-y-3">
          {!isLoadingPhoto ? (
            <>
              <ImagePreview
                src={`${import.meta.env.VITE_IMAGES_URL}/${photo?.imageId}`}
                title={photo?.title}
                imageClassNamePreview="h-[21rem]"
              />
            </>
          ) : (
            <Skeleton className="h-[21rem]" />
          )}
          {!isLoadingPhoto ? (
            <DeleteConfirmationDialog
              onDelete={handleDeletePhoto}
              headerTextDeleteProps={{
                children: "Tem certeza que deseja excluir essa foto?",
              }}
              descriptionTextDeleteProps={{
                children:
                  "Tem certeza que deseja excluir a foto? essa ação é irreversível ",
              }}
              confirmDeleteButtonProps={{
                children: isDeletingPhoto
                  ? "Deletando foto..."
                  : "Deletar conta",
                disabled: isDeletingPhoto,
              }}
            >
              Deletar foto
            </DeleteConfirmationDialog>
          ) : (
            <Skeleton className="w-20 h-10" />
          )}
        </div>

        <div className="py-3">
          <Text as="h3" variant="heading-medium" className="mb-6">
            Álbuns
          </Text>
          <AlbumsListSelectable
            photo={photo as Photo}
            albums={albums}
            loading={isLoadingAlbums}
          />
        </div>
      </div>
    </Container>
  );
}

export default PagePhotoDetails;
