import type React from "react";
import { tv, cn } from "tailwind-variants";

export const imageFilePreviewVariants = tv({
  base: `
  rounded-lg overflow-hidden
  `,
});

export const imageFilePreviewImageVariants = tv({
  base: `
    w-full h-full object-cover
  `,
});

interface ImageFilePreviewProps extends React.ComponentProps<"img"> {
  imageClassNamePreview?: string;
}

function ImageFilePreview({
  className,
  imageClassNamePreview,
  ...props
}: ImageFilePreviewProps) {
  return (
    <div className={imageFilePreviewVariants({ className })}>
      <img
        className={imageFilePreviewImageVariants({
          className: imageClassNamePreview,
        })}
        {...props}
      />
    </div>
  );
}

export default ImageFilePreview;
