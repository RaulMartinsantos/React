import type { Album } from "../models/album";
import { fetcher } from "../../../helpers/api";
import { useQuery } from "@tanstack/react-query";

function useAlbums() {
  const { data, isLoading } = useQuery<Album[]>({
    queryKey: ["albums"],
    queryFn: () => fetcher("/albums"),
  });

  return {
    albums: data || [],
    isLoadingAlbums: isLoading,
  };
}

export default useAlbums;
