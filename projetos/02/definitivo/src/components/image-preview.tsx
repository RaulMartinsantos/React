import type React from "react";
import { tv, cn } from "tailwind-variants";

export const imagePreviewVariants = tv({
  base: `
  rounded-lg overflow-hidden
  `,
});

export const imagePreviewImageVariants = tv({
  base: `
    w-full h-full object-cover
  `,
});

interface ImagePreviewProps extends React.ComponentProps<"img"> {
  imageClassNamePreview?: string;
}

function ImagePreview({
  className,
  imageClassNamePreview,
  ...props
}: ImagePreviewProps) {
  return (
    <div className={imagePreviewVariants({ className })}>
      <img
        className={imagePreviewImageVariants({
          className: imageClassNamePreview,
        })}
        {...props}
      />
    </div>
  );
}

export default ImagePreview;
