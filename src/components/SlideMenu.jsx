import close from "../assets/close.png";

// eslint-disable-next-line react/prop-types
export default function SlideMenu({ show, setShow }) {
  return (
    <div
      className={` top-0 ${
        show ? "left-0" : "-left-full"
      } w-screen h-screen p-3 transition-all fixed bg-white`}
    >
      <img
        className="w-8 mr-auto"
        src={close}
        alt=""
        onClick={() => setShow(false)}
      />
      <div className=" flex justify-center flex-col items-center gap-10   ">
        <a
          className="transition-all hover:text-white hover:bg-main px-3 rounded-full"
          href="#plan"
          onClick={() => setShow(false)}
        >
          الباقات الاساسية
        </a>
        <a
          className="transition-all hover:text-white hover:bg-main px-2 rounded-full"
          href="#feature"
          onClick={() => setShow(false)}
        >
          المميزات
        </a>
        <a
          className="transition-all hover:text-white hover:bg-main px-2 rounded-full"
          href="#try"
          onClick={() => setShow(false)}
        >
          جرب معازيم
        </a>
        <a
          className="transition-all hover:text-white hover:bg-main px-2 rounded-full"
          href="#"
          onClick={() => setShow(false)}
        >
          الرئيسية
        </a>
      </div>
    </div>
  );
}
