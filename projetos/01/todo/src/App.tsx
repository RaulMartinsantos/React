import Card from "./components/card";
import Text from "./components/text";
import Icon from "./components/icon";
import Badge from "./components/badge";
import Button from "./components/button";
import Skeleton from "./components/skeleton";
import Container from "./components/container";
import ButtonIcon from "./components/button-icon";

import InputText from "./components/input-text";
import XIcon from "./assets/icons/X-Regular.svg?react";
import InputCheckbox from "./components/input-checkbox";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import PlusIcon from "./assets/icons/Plus-Regular.svg?react";
import TrashIcon from "./assets/icons/Trash-Regular.svg?react";
import CheckIcon from "./assets/icons/Check-Regular.svg?react";
import PencilIcon from "./assets/icons/PencilSimple-Regular.svg?react";

function App() {
  return (
    <Container>
      <div className="grid gap-10 pl-1">
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
          <Icon svg={XIcon} />
          <Icon svg={SpinnerIcon} animate />
        </div>

        <div className="flex gap-1 justify-start items-center">
          <Badge variant={"secondary"}>5</Badge>
          <Badge variant={"primary"}>2 de 5</Badge>
          <Badge loading>5</Badge>
        </div>

        <div>
          <Button icon={PlusIcon}>Nova tarefa</Button>
        </div>

        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} variant={"primary"} />
          <ButtonIcon icon={TrashIcon} variant={"secondary"} />
          <ButtonIcon icon={TrashIcon} variant={"tertiary"} />
          <ButtonIcon icon={TrashIcon} loading />
        </div>

        <div>
          <InputText />
        </div>

        <div>
          <InputCheckbox />

          <InputCheckbox loading />
        </div>

        <div>
          <Card size="md">Olá mundo! </Card>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="w-96 h-6" />
        </div>
      </div>
    </Container>
  );
}

export default App;
