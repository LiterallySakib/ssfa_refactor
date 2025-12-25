export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="h-[700px] w-full flex items-center justify-center bg-blue-200">
        <div className="w-3/4 h-[500px] p-0 bg-gray-400 flex items-center justify-center text-white">
          Image Placeholder with Padding
        </div>
      </div>
      <div className="h-[700px] w-full flex items-center justify-center bg-green-200">Who are we</div>
      <div className="h-[700px] w-full flex items-center justify-center bg-yellow-200">Our Impact</div>
      <div className="h-[700px] w-full flex items-center justify-center bg-red-200">Recent News</div>
      <div className="h-[700px] w-full flex items-center justify-center bg-purple-200">Get Involved</div>
    </main>
  );
}
