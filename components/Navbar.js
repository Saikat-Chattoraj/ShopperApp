import Link from "next/link";
import Image from "next/image";
//navbar imported to Layout
const Navbar = () => {
  return (
    <div className=" flex w-screen">
      <div className="md:container w-full h-8 mx-auto px-2 py-1">
        <div className="flex flex-col sm:flex-col md:flex-row justify-between place-items-center m-auto">
            {/* here the code for the navbar component of the header and logo */}
          <div className="flex place-items-center xsmx:mt-2">
            <div className="mr-2 mt-0.5 xsmx:hidden">
              <Image
                className="rounded-full"
                src="/Shopper's STOP-logos.svg"
                alt="No Image"
                height={50}
                width={50}
              />
            </div>
            <div>
              <Link href="/">
                <a className=" ml-2 font-serif text-2xl py-1 px-2 xsmx:text-3xl xsmx:bg-gradient-to-r from-blue-500 to-blue-300 xsmx:rounded-md xsmx:shadow-lg">
                  Shopper's STOP
                </a>
              </Link>
            </div>
          </div>
          {/* here the code for the link of the navbar components except logo */}
          <div className=" flex lg:space-x-20 md:space-x-6 sm:space-x-12 font-serif smx:flex-col mdx:mt-4 xsmx:mt-6 smx:mt-6 smx:hidden">
            <div className="smx:mb-2 hover:text-blue-600 active:underline hover:transform active:scale-90 hover:duration-300">
              <Link href="/">
                <a className="px-2 py-2 rounded-md ">Home</a>
              </Link>
            </div>
            <div className="smx:mb-2 hover:transform active:scale-90 hover:duration-300 hover:text-blue-600 active:underline">
              <Link href="/">
                <a className="px-2 py-2 rounded-md">Shop</a>
              </Link>
            </div>
            <div className="smx:mb-2 hover:transform active:scale-90 hover:duration-300 hover:text-blue-600 active:underline">
              <Link href="/">
                <a className="px-2 py-2 rounded-md">Blogs</a>
              </Link>
            </div>
            <div className="smx:mb-2 hover:transform active:scale-90 hover:duration-300 hover:text-blue-600 active:underline">
              <Link href="/">
                <a className="px-2 py-2 rounded-md">Contacts</a>
              </Link>
            </div>
            <div className="smx:mb-2 hover:transform active:scale-90 hover:duration-300 active:underline bg-blue-500 rounded-lg text-white px-4">
              <Link href="/">
                <a className=" rounded-md flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 24 18" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg> Cart(1)</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
