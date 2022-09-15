import "./App.css";

function RenderSquare() {
  return (
    <button className="btn btn-success">
      <span> X </span>
    </button>
  );
}

function App() {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl mb-4"> Tic Tak Toe </h2>
      <div className="p-4 flex flex-col gap-4 border-4 border-solid border-stone-500 rounded-lg">
        <div className="flex gap-4">
          <RenderSquare />
          <RenderSquare />
          <RenderSquare />
        </div>
        <div className="flex gap-4">
          <RenderSquare />
          <RenderSquare />
          <RenderSquare />
        </div>
        <div className="flex gap-4">
          <RenderSquare />
          <RenderSquare />
          <RenderSquare />
        </div>
      </div>
    </section>
  );
}

export default App;
