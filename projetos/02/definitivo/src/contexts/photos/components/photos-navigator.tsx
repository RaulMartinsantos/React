import cx from "classnames";
import { useNavigate } from "react-router";
import Button from "../../../components/button";
import Skeleton from "../../../components/skeleton";
import ButtonIcon from "../../../components/button-icon";

import ArrowLeftIcon from "../../../assets/icons/chevron-left.svg?react";
import ArrowRightIcon from "../../../assets/icons/chevron-right.svg?react";

interface PhotoNavigatorProps extends React.ComponentProps<"div"> {
  previousPhotosId?: string;
  nextPhotosId?: string;
  loading?: boolean;
}

function PhotoNavigator({
  previousPhotosId,
  nextPhotosId,
  loading,
  className,
  ...props
}: PhotoNavigatorProps) {
  const navigate = useNavigate();

  return (
    <div className={cx("flex gap-2", className)} {...props}>
      {!loading ? (
        <>
          <ButtonIcon
            icon={ArrowLeftIcon}
            variant="secondary"
            disabled={!previousPhotosId}
            onClick={() => {
              navigate(`/fotos/${previousPhotosId}`);
            }}
          />

          <Button
            icon={ArrowRightIcon}
            variant="secondary"
            disabled={!nextPhotosId}
            onClick={() => {
              navigate(`/fotos/${nextPhotosId}`);
            }}
          >
            Proxima imagem
          </Button>
        </>
      ) : (
        <>
          <Skeleton className="w-10 h-10" />
          <Skeleton className="w-20 h-10" />
        </>
      )}
    </div>
  );
}

export default PhotoNavigator;
