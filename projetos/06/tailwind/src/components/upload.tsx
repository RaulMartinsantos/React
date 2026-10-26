import { FilePlusCorner } from "lucide-react";

interface UploadProps extends React.ComponentProps<"input"> {
  legend?: string;
  filename?: string | null;
}

function Upload({ filename = null, legend, ...props }: UploadProps) {
  return (
    <div>
      <legend className="uppercase text-xxs text-gray-200 mb-2 mt-4">
        {legend}
      </legend>

      <div
        className={`
          w-full h-12 flex items-center 
          rounded-lg border border-gray-300 text-sm 
        text-gray-100 bg-transparent outline-none
        `}
      >
        <input type="file" id="upload" className="hidden" {...props} />

        <span className="text-sx text-gray-100 flex-1 pl-4">
          {filename ?? "Selecione o arquivo"}
        </span>

        <label
          htmlFor="upload"
          className={`
            flex h-12 px-4 items-center bg-green-100 
            rounded-lg disabled:opacity-50 cursor-pointer
            hover:bg-green-200 transition ease-linear
          `}
        >
          <FilePlusCorner color="white" className="w-6 h-6" />
        </label>
      </div>
    </div>
  );
}

export default Upload;
