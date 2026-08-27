import Text from "./components/text";
import Icon from "./components/icon";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";

import XIcon from "./assets/icons/X-Regular.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import PlusIcon from "./assets/icons/Plus-Regular.svg?react";
import TrashIcon from "./assets/icons/Trash-Regular.svg?react";
import CheckIcon from "./assets/icons/Check-Regular.svg?react";
import PencilIcon from "./assets/icons/PencilSimple-Regular.svg?react";

function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-2">
        <Text variant={"body-sm-bold"} className="text-pink-base">
          Olá mundo!
        </Text>
        <Text variant={"body-md"} className="text-pink-base">
          Olá mundo!
        </Text>
        <Text variant={"body-md-bold"} className="text-pink-base">
          Olá mundo!
        </Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-green-base" />
        <Icon svg={CheckIcon} className="fill-green-base" />
        <Icon svg={PencilIcon} className="fill-green-base" />
        <Icon svg={PlusIcon} className="fill-green-base" />
        <Icon svg={XIcon} className="fill-green-base" />
        <Icon svg={SpinnerIcon} className="fill-green-base" animate />
      </div>

      <div>
        <Badge variant={"secondary"}>5</Badge>
        <Badge variant={"primary"}>2 de 5</Badge>
      </div>

      <div>
        <Button icon={PlusIcon}>Nova tarefa</Button>
      </div>

      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon} variant={"primary"} />
        <ButtonIcon icon={TrashIcon} variant={"secondary"} />
        <ButtonIcon icon={TrashIcon} variant={"tertiary"} />
      </div>
    </div>
  );
}

export default App;
