export default function Home() {
  return (
    <div className="realtive min-h-screen w-full">
      <div className="absolute inset-x-0 bg-gradient-to-b from-purple-500/10 h-96 to-transparent"></div>
      <div className="flex flex-col items-center justify-center h-96">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold font-serif">
          What is your name
        </h2>
        <p className="text-base sm:text-lg">My Name is Vikas.</p>
      </div>
    </div>
  );
}
