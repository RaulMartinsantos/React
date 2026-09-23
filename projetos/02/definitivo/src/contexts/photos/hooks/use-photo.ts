import { toast } from "sonner";
import type { Photo } from "../models/photo";
import { api, fetcher } from "../../../helpers/api";
import type { PhotoNewFormSchema } from "../schemas";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import usePhotoAlbums from "./use-photo-albums";
import { useNavigate } from "react-router";

interface PhotoDetailResponse extends Photo {
  nextPhotoId?: string;
  previousPhotoId?: string;
}

function usePhoto(id?: string) {
  const navigate = useNavigate();

  const { data, isLoading } = useQuery<PhotoDetailResponse>({
    queryKey: ["photo", id],
    queryFn: () => fetcher(`/photos/${id}`),
    enabled: !!id,
  });

  const QueryClient = useQueryClient();

  const { mangePhotoOnAlbum } = usePhotoAlbums();

  async function createPhoto(payload: PhotoNewFormSchema) {
    try {
      const { data: photo } = await api.post<Photo>("/photos", {
        title: payload.title,
      });

      api.post(
        `/photos/${photo.id}/image`,
        {
          file: payload.file[0],
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      if (payload.albumsIds && payload.albumsIds.length > 0) {
        await mangePhotoOnAlbum(photo.id, payload.albumsIds);
        await api.put(`/photos/${photo.id}/albums`, {
          albumsIds: payload.albumsIds,
        });
      }

      QueryClient.invalidateQueries({ queryKey: ["photos"] });
      toast.success("Foto criada com sucesso!");
    } catch (err) {
      toast.error("Erro ao criar foto");
      throw err;
    }
  }

  async function deletePhoto(photoId: string) {
    try {
      await api.delete(`/photos/${photoId}`);

      navigate("/");

      toast.success("Foto excluída com sucesso");
    } catch (err) {
      toast.error("Não foi possível excluir a foto");
      throw err;
    }
  }

  return {
    photo: data,
    nextPhotoId: data?.nextPhotoId,
    previousPhotoId: data?.previousPhotoId,
    isLoadingPhoto: isLoading,
    createPhoto,
    deletePhoto,
  };
}

export default usePhoto;
