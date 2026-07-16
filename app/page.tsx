import Hello from "./components/Hello";

const Home = () => {
  console.log("What tyoe of component am I?");
  return (
    <main>
      <div className="text-4xl underline">Welcome to Next.js!</div>
      <Hello />
    </main>
  );
};

export default Home;
