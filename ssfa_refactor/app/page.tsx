import { Slideshow } from '../components/Slideshow';

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="h-[700px] w-full flex items-center justify-center bg-blue-200"><Slideshow /></div>
      <div className="h-[700px] w-full flex items-center justify-center bg-white">Who are we</div>
      <div className="h-[700px] w-full flex items-center justify-center bg-gray-100">Our Impact</div>
      <div className="h-[700px] w-full flex items-center justify-center bg-white">Recent News</div>
      <div className="h-[700px] w-full flex items-center justify-center bg-gray-100">Get Involved</div>
    </main>
  );
}
