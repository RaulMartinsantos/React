import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogClose,
  DialogDescription,
} from "../../../components/dialog";
import { useForm } from "react-hook-form";
import Text from "../../../components/text";
import Alert from "../../../components/alert";
import Button from "../../../components/button";
import Skeleton from "../../../components/skeleton";
import useAlbums from "../../albums/hooks/use-albums";
import { zodResolver } from "@hookform/resolvers/zod";
import InputText from "../../../components/input-text";
import ImagePreview from "../../../components/image-preview";
import InputSingleFile from "../../../components/input-single-file";
import { photoNewFormSchema, type PhotoNewFormSchema } from "../schemas";
import usePhoto from "../hooks/use-photo";

interface PhotoNewDialogProps {
  trigger: React.ReactNode;
}

function PhotoNewDialog({ trigger }: PhotoNewDialogProps) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const form = useForm<PhotoNewFormSchema>({
    resolver: zodResolver(photoNewFormSchema),
  });

  const { albums, isLoadingAlbums } = useAlbums();
  const { createPhoto } = usePhoto();
  const [isCreatingPhoto, setIsCreatingPhoto] = React.useTransition();

  const file = form.watch("file");
  const fileSource = file?.[0] ? URL.createObjectURL(file[0]) : undefined;

  const albumsIds = form.watch("albumsIds");

  React.useEffect(() => {
    if (!modalOpen) {
      form.reset();
    }
  }, [modalOpen, form]);

  function handleToggleAlbum(albumId: string) {
    const albumsIds = form.getValues("albumsIds") || [];
    const albumsSet = new Set(albumsIds);

    if (albumsSet.has(albumId)) {
      albumsSet.delete(albumId);
    } else {
      albumsSet.add(albumId);
    }

    form.setValue("albumsIds", Array.from(albumsSet));
  }

  function handleSubmit(payload: PhotoNewFormSchema) {
    console.log(payload);
    setIsCreatingPhoto(async () => {
      await createPhoto(payload);
      setModalOpen(false);
    });
  }

  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <DialogHeader>Adicionar foto</DialogHeader>

          <DialogDescription children="Criar Foto" className="sr-only" />
          <DialogBody className="flex flex-col gap-5">
            <InputText
              placeholder="Adicione um título"
              maxLength={255}
              error={form.formState.errors.title?.message}
              {...form.register("title")}
            />

            <Alert>
              Tamanho máximo 50 mb
              <br />
              Você pode selecionar arquivos em PNG, JPG ou JPEG
            </Alert>

            <InputSingleFile
              form={form}
              allowedExtensions={["png", "jpg", "jpeg"]}
              maxFileSizeInMB={50}
              replaceBy={
                <ImagePreview src={fileSource} className="w-full h-56" />
              }
              error={form.formState.errors.file?.message}
              {...form.register("file")}
            />

            <div className="space-y-3">
              <Text variant="label-small">Selecionar álbuns</Text>
              <div className="flex flex-wrap gap-3">
                {!isLoadingAlbums
                  ? albums.length > 0 &&
                    albums.map((album) => (
                      <Button
                        variant={
                          albumsIds?.includes(album.id) ? "primary" : "ghost"
                        }
                        key={album.id}
                        size={"sm"}
                        className="truncate"
                        onClick={() => handleToggleAlbum(album.id)}
                      >
                        {album.title}
                      </Button>
                    ))
                  : Array.from({ length: 5 }).map((_, index) => (
                      <Skeleton className="w-28 h-7" key={`album-${index}`} />
                    ))}
              </div>
            </div>
          </DialogBody>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary" disabled={isCreatingPhoto}>
                Cancelar
              </Button>
            </DialogClose>

            <Button
              type="submit"
              disabled={isCreatingPhoto}
              handling={isCreatingPhoto}
            >
              {isCreatingPhoto ? "Adicionando..." : "Adicionar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default PhotoNewDialog;
