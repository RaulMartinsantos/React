type Props = {
  name: string;
};

function useMessage({ name }: Props) {
  function show(message: string) {
    console.log(message, name);
  }

  return { show };
}

export default useMessage;
