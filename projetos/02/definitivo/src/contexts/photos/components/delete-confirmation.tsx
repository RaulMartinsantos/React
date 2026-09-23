import {
  Dialog,
  DialogClose,
  DialogTrigger,
  DialogDescription,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "../../../components/dialog";
import Text from "../../../components/text";
import Button from "../../../components/button";

interface DeleteConfirmationDialogProps {
  children: React.ReactNode;
  onDelete: () => void;
}

function DeleteConfirmationDialog({
  children,
  onDelete,
}: DeleteConfirmationDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">{children}</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>Tem certeza que deseja excluir a foto?</DialogHeader>
        <DialogDescription>
          <Text>
            A foto será permanentemente excluída essa ação não pode ser desfeita
          </Text>
        </DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Cancelar</Button>
          </DialogClose>
          <Button variant="destructive" onClick={onDelete}>
            Deletar foto
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteConfirmationDialog;
