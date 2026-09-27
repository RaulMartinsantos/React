interface UseMessageProps extends React.ComponentProps<"button"> {}

function useMessage({ name }: UseMessageProps) {
  function show(message: string) {
    console.log(message, name);
  }

  return { show };
}

export default useMessage;
