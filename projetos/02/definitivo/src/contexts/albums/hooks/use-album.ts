import { toast } from "sonner";
import { api } from "../../../helpers/api";
import type { Album } from "../models/album";
import type { AlbumNewFormSchema } from "../schemas";
import usePhotos from "../../photos/hooks/use-photos";
import { useQueryClient } from "@tanstack/react-query";
import usePhotoAlbums from "../../photos/hooks/use-photo-albums";

function useAlbum() {
  const queryClient = useQueryClient();
  const { photos } = usePhotos();
  const { mangePhotoOnAlbum } = usePhotoAlbums();

  async function createAlbum(payload: AlbumNewFormSchema) {
    try {
      const { data: album } = await api.post<Album>("/albums", {
        title: payload.title,
      });

      if (payload.photosIds && payload.photosIds.length > 0) {
        await Promise.all(
          payload.photosIds.map((photoId) => {
            const photoAlbumsIds =
              photos
                .find((photo) => (photo.id = photoId))
                ?.albums?.map((album) => album.id) || [];

            return mangePhotoOnAlbum(photoId, [...photoAlbumsIds, album.id]);
          }),
        );
      }

      queryClient.invalidateQueries({
        queryKey: ["albums"],
      });

      queryClient.invalidateQueries({
        queryKey: ["photos"],
      });

      toast.success("Álbum criado com sucesso");
    } catch (err) {
      toast.error("Erro ao criar álbum");
      throw err;
    }
  }

  return {
    createAlbum,
  };
}

export default useAlbum;
