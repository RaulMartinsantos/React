import React from "react";
import Text from "../../../components/text";
import type { Album } from "../models/album";
import Divider from "../../../components/divider";
import Skeleton from "../../../components/skeleton";
import type { Photo } from "../../photos/models/photo";
import InputCheckBox from "../../../components/input-checkbox";
import usePhotoAlbums from "../../photos/hooks/use-photo-albums";

interface AlbumsListSelectableProps {
  loading?: boolean;
  albums: Album[];
  photo: Photo;
}

function AlbumsListSelectable({
  albums,
  photo,
  loading,
}: AlbumsListSelectableProps) {
  const { mangePhotoOnAlbum } = usePhotoAlbums();
  const [isUpdatingPhoto, setIsUpdatingPhoto] = React.useTransition();

  function isChecked(albumId: string) {
    return photo?.albums?.some((album) => album.id === albumId) ?? false;
  }

  function handlePhotoOnAlbums(albumId: string) {
    const currentAlbums = photo?.albums || [];
    let albumsIds = [];

    if (isChecked(albumId)) {
      albumsIds = currentAlbums
        .filter((album) => album.id !== albumId)
        .map((album) => album.id);
    } else {
      albumsIds = [...currentAlbums.map((album) => album.id), albumId];
    }

    setIsUpdatingPhoto(async () => {
      await mangePhotoOnAlbum(photo.id, albumsIds);
    });
  }

  return (
    <ul>
      {!loading &&
        photo &&
        albums?.length > 0 &&
        albums.map((album, index) => (
          <li key={album.id}>
            <div className="flex items-center justify-between gap-1">
              <Text variant="paragraph-large" className="truncate">
                {album.title}
              </Text>
              <InputCheckBox
                checked={isChecked(album.id)}
                onChange={() => handlePhotoOnAlbums(album.id)}
                disabled={isUpdatingPhoto}
              />
            </div>
            {index !== albums.length - 1 && <Divider className="mt-4 mb-4" />}
          </li>
        ))}
      {loading &&
        Array.from({ length: 5 }).map((_, index) => (
          <li key={`albums-list-${index}`}>
            <Skeleton className="h-[2.5rem] mb-2" />
          </li>
        ))}
    </ul>
  );
}

export default AlbumsListSelectable;
