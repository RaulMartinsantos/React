import type { Album } from "../models/album";
import type { Photo } from "../../photos/models/photo";
import Text from "../../../components/text";
import InputCheckBox from "../../../components/input-checkbox";
import Divider from "../../../components/divider";
import Skeleton from "../../../components/skeleton";

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
  function isChecked(albumId: string) {
    return photo?.albums?.some((album) => album.id === albumId);
  }

  function handlePhotoOnAlbums(albumId: string) {
    let albumsIds = [];

    if (isChecked(albumId)) {
      albumsIds = photo.albums
        .filter((album) => album.id !== albumId)
        .map((album) => album.id);
    } else {
      albumsIds = [...photo.albums.map((album) => album.id)];
    }

    console.log(albumsIds);
  }

  return (
    <ul>
      {!loading &&
        albums?.length > 0 &&
        albums.map((album, index) => (
          <li key={album.id}>
            <div className="flex items-center justify-between  gap-1">
              <Text variant="paragraph-large" className="truncate">
                {album.title}
              </Text>
              <InputCheckBox
                defaultChecked={isChecked(album.id)}
                onClick={() => handlePhotoOnAlbums(album.id)}
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
