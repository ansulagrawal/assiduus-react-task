import logo from '/logo.png';
function Navbar() {
  return (
    <div className="bg-white h-16 flex place-items-center justify-between px-8">
      <div className="uppercase text-2xl font-bold flex gap-3">
        <img src={logo} alt="" className='h-9 w-9' />
        assiduss
      </div>
      <div className="flex place-items-center gap-5">
        <div className="w-[300px] relative flex bg-slate-100 items-center gap-8 rounded-lg py-2 text-color sm:gap-6 px-4 ease-in-out duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[25px] h-[25px] text-slate-700">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input className="w-full bg-transparent focus:outline-none" />
        </div>
        <div className="relative">
          <span className="material-symbols-outlined">notifications</span>
          <div className="bg-green-500 h-[10px] w-[10px] border-white border-[2px] absolute top-0 right-0 rounded-full"></div>
        </div>
        <div className="">
          <span className="material-symbols-outlined">account_circle</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
