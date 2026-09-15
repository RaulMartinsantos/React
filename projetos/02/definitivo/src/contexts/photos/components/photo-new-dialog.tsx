import Button from "../../../components/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogClose,
} from "../../../components/dialog";
import InputText from "../../../components/input-text";
import Alert from "../../../components/alert";
import InputSingleFile from "../../../components/input-single-file";
import ImagePreview from "../../../components/image-preview";
import Text from "../../../components/text";
import type { Album } from "../../albums/models/album";
import Skeleton from "../../../components/skeleton";
import { useForm } from "react-hook-form";

interface PhotoNewDialogProps {
  trigger: React.ReactNode;
}

function PhotoNewDialog({ trigger }: PhotoNewDialogProps) {
  const form = useForm();

  //TODO: MOCK até terminar a API
  const isLoadingAlbum = false;
  const albums: Album[] = [
    { id: "1234", title: "album 1" },
    { id: "123", title: "album 2" },
    { id: "12", title: "album 3" },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent>
        <DialogHeader>Adicionar foto</DialogHeader>

        <DialogBody className="flex flex-col gap-5">
          <InputText placeholder="Adicione um título" maxLength={255} />

          <Alert>
            Tamanho máximo 50 mb
            <br />
            Você pode selecionar arquivos em PNG, JPG ou JPEG
          </Alert>

          <InputSingleFile
            form={form}
            allowedExtensions={["png", "jpg", "jpeg"]}
            maxFileSizeInMB={50}
            replaceBy={<ImagePreview className="w-full h-56" />}
          />

          <div className="space-y-3">
            <Text variant="label-small">Selecionar álbuns</Text>
            <div className="flex flex-wrap gap-3">
              {!isLoadingAlbum
                ? albums.length > 0 &&
                  albums.map((album) => (
                    <Button
                      variant="ghost"
                      key={album.id}
                      size={"sm"}
                      className="truncate"
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
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>

          <Button>Adicionar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default PhotoNewDialog;
