import menu from "../assets/menu.png";

// eslint-disable-next-line react/prop-types
export default function Navbar({ setShow }) {
  return (
    <div className="container m-auto flex justify-between items-center h-20 gap-10 max-md:px-5">
      <h1 className="text-3xl font-bold">MAZEEM</h1>
      <div className="max-md:hidden flex-grow flex justify-center items-center gap-10 p-3 rounded-full border border-[#E3E3E3] shadow-nav">
        <a
          className="transition-all hover:text-white hover:bg-main px-3 rounded-full"
          href="#plan"
        >
          الباقات الاساسية
        </a>
        <a
          className="transition-all hover:text-white hover:bg-main px-2 rounded-full"
          href="#feature"
        >
          المميزات
        </a>
        <a
          className="transition-all hover:text-white hover:bg-main px-2 rounded-full"
          href="#try"
        >
          جرب معازيم
        </a>
        <a
          className="transition-all hover:text-white hover:bg-main px-2 rounded-full"
          href="#"
        >
          الرئيسية
        </a>
      </div>
      <img
        onClick={() => setShow(true)}
        className="w-9 hidden max-md:block cursor-pointer"
        src={menu}
        alt=""
      />
    </div>
  );
}
