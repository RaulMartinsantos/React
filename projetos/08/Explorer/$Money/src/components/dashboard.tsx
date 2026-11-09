import Summary from "../components/summary";
import Container from "./container";

function Dashboard() {
  return (
    <Container className="">
      <main
        className={`
        max-w-[1120px] m-auto grid grid-cols-3
        gap-8 -mt-26 pt-7 max-md:gap-2
      `}
      >
        <Summary />
      </main>
    </Container>
  );
}

export default Dashboard;
