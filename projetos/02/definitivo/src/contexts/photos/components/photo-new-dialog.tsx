import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogClose,
} from "../../../components/dialog";
import { useForm } from "react-hook-form";
import Text from "../../../components/text";
import Alert from "../../../components/alert";
import Button from "../../../components/button";
import Skeleton from "../../../components/skeleton";
import { zodResolver } from "@hookform/resolvers/zod";
import useAlbums from "../../albums/hooks/use-albums";
import InputText from "../../../components/input-text";
import ImagePreview from "../../../components/image-preview";
import InputSingleFile from "../../../components/input-single-file";
import { photoNewFormSchema, type PhotoNewFormSchema } from "../schemas";

interface PhotoNewDialogProps {
  trigger: React.ReactNode;
}

function PhotoNewDialog({ trigger }: PhotoNewDialogProps) {
  const form = useForm<PhotoNewFormSchema>({
    resolver: zodResolver(photoNewFormSchema),
  });

  const { albums, isLoadingAlbums } = useAlbums();

  const file = form.watch("file");
  const fileSource = file?.[0] ? URL.createObjectURL(file[0]) : undefined;

  function handleSubmit(payload: PhotoNewFormSchema) {
    console.log(payload);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <DialogHeader>Adicionar foto</DialogHeader>

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

            <Button type="submit">Adicionar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default PhotoNewDialog;
