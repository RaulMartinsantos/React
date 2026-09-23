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
  confirmDeleteButtonProps: Omit<
    React.ComponentProps<typeof Button>,
    "children"
  > & {
    children: React.ReactNode;
  };
  headerTextDeleteProps: React.ComponentProps<typeof Text>;

  descriptionTextDeleteProps: React.ComponentProps<typeof Text>;
}
function DeleteConfirmationDialog({
  children,
  onDelete,
  confirmDeleteButtonProps,
  headerTextDeleteProps,
  descriptionTextDeleteProps,
}: DeleteConfirmationDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">{children}</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader {...headerTextDeleteProps}></DialogHeader>
        <DialogDescription {...descriptionTextDeleteProps}>
          <Text>{descriptionTextDeleteProps.children}</Text>
        </DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Cancelar</Button>
          </DialogClose>
          <Button
            variant="destructive"
            onClick={onDelete}
            {...confirmDeleteButtonProps}
          ></Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteConfirmationDialog;
