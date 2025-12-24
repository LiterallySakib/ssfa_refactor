export default function Footer() {
  return (
    <footer className="bg-[#20194A] text-white p-4 h-60 flex flex-col">
      <div className="flex justify-around flex-grow">
        {/* Top Row: 3 colored divs */}
        <div className="flex-1 bg-[var(--color-blue)] m-2 flex items-center justify-center">
          <h2 className="text-xl font-bold">Socials</h2>
        </div>
        <div className="flex-1 bg-[var(--color-green)] m-2 flex items-center justify-center">
          <h2 className="text-xl font-bold">Statements</h2>
        </div>
        <div className="flex-1 bg-[var(--color-yellow)] m-2 flex items-center justify-center">
          <h2 className="text-xl font-bold">Contact</h2>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-2">
        {/* Bottom Row: 2 textboxes */}
        <div className="text-center mb-2">
          <p>First textbox content</p>
        </div>
        <div className="text-center">
          <p>Second textbox content</p>
        </div>
      </div>
    </footer>
  );
}
