import type { Album } from "../../albums/models/album";

interface Photo {
  id: string;
  title: string;
  imageId: string;
  albums: Album[];
}


export type { Photo }