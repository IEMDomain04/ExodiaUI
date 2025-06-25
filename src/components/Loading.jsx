function Loading({ message }) {
  return (
    <div className="flex flex-col justify-center items-center my-30 gap-4 text-white animate-pulse md:my-50">
      <img
        src="/assets/logo.png"
        alt="Loading Yu-Gi-Oh Cards"
        className="w-50 opacity-80 md:w-[400px]"
      />
      <p className="text-xl font-semibold">{ message }</p>
    </div>
  );
}

export default Loading;
