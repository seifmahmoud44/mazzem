import main from "../assets/main.jpeg";

export default function MainSec() {
  return (
    <div className="container m-auto flex justify-center gap-10 max-md:flex-col">
      <div className="max-md:px-6">
        <h1 className="font-normal text-6xl  max-md:text-4xl  text-right ml-auto max-w-[550px] mb-32 max-md:text-center max-md:mb-20 max-md:leading-tight">
          معازيم - أفضل طريقة لإدارة دعواتك
        </h1>
        <p className="font-semibold mb-10 max-md:font-medium  max-md:text-center max-md:text-xl max-w-[550px] text-right">
          سينعم ضيوفك بتجربة مميزة واستخدام سهل دون الحاجة إلى تنزيل التطبيقات
          أو الروابط.
        </p>
        <div className="flex items-center gap-2 justify-center mb-10">
          <a
            href="#"
            className=" hover:border-black transition-all hover:bg-main border bg-black rounded-full text-white flex justify-center items-center gap-2 px-6 py-4 "
          >
            <svg
              data-bbox="2.8 0 18.409 22.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              data-type="color"
            >
              <g>
                <path
                  fill="#ffffff"
                  d="M18.175 11.965a5.149 5.149 0 0 1 2.45-4.29 5.337 5.337 0 0 0-4.148-2.23c-1.745-.181-3.436 1.04-4.326 1.04-.906 0-2.275-1.021-3.75-.99a5.572 5.572 0 0 0-4.647 2.818c-2.01 3.46-.51 8.544 1.415 11.34.963 1.37 2.088 2.9 3.561 2.846 1.441-.06 1.98-.914 3.72-.914 1.723 0 2.228.914 3.73.88 1.547-.026 2.522-1.376 3.451-2.759a11.301 11.301 0 0 0 1.578-3.195c-1.818-.764-3.031-2.583-3.034-4.546Z"
                  data-color="1"
                ></path>
                <path
                  fill="#ffffff"
                  d="M15.337 3.607A5.016 5.016 0 0 0 16.495 0a5.161 5.161 0 0 0-3.333 1.715 4.817 4.817 0 0 0-1.188 3.473 4.319 4.319 0 0 0 3.363-1.581Z"
                  data-color="1"
                ></path>
              </g>
            </svg>
            <p>App Store</p>
          </a>
          <a
            href="#"
            className="hover:border-black transition-all hover:bg-main border bg-black rounded-full text-white flex justify-center items-center gap-2 px-6 py-4 "
          >
            <svg
              data-bbox="3 2 17.999 20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              data-type="color"
            >
              <g>
                <path
                  fill="#ffffff"
                  d="M15.326 7.458 6.413 2.32A2.264 2.264 0 0 0 5.25 2c-.836 0-1.576.48-1.964 1.165l.09.09 8.09 8.04 3.86-3.837ZM3 4.291v15.418L10.756 12 3 4.292Zm.286 16.544C3.674 21.52 4.414 22 5.25 22a2.25 2.25 0 0 0 1.141-.308l.027-.015 8.923-5.12-3.875-3.852-8.09 8.04-.09.09ZM16.24 16.04l3.575-2.052a2.232 2.232 0 0 0 .013-3.934l-.007-.005-3.598-2.074L12.175 12l4.065 4.04Z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                  data-color="1"
                ></path>
              </g>
            </svg>
            <p>Google Play</p>
          </a>
        </div>
        <a
          href="#"
          className="hover:border-black transition-all border bg-main m-auto rounded-full text-white flex justify-center items-center gap-2 px-10 py-4 w-fit"
        >
          تواصل معنا الان
        </a>
      </div>
      <img src={main} alt="" />
    </div>
  );
}
