import Link from "next/dist/client/link";
import Image from "next/dist/client/image";
const MenCollection = () => {
  return (
    <div className="flex w-screen">
      <div className="w-full flex flex-col mt-8">
        <div className="flex sm:px-20 xsm:px-12 px-6 justify-between">
          <div className="font-serif tracking-wider font-bold text-md">
            Men's Collection
          </div>
          <div className="flex">
            <Link href="/">
              <a className="font-serif tracking-wider font-bold text-md">
                View All
              </a>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
        <div
        //Collection starts here
          className="grid grid-flow-row xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-4 px-2
        place-items-center m-auto"
        >
          <div className="rounded-md shadow-lg">
            <div>
              <Image
                className="rounded-md"
                src="/product1.jpg"
                alt="preview not available"
                height={500}
                width={400}
              />
            </div>
            <div className="px-2 text-sm font-bold">Levi's T-Shirt</div>
            <div className="flex flex-row px-2">
              <div className="bg-black h-4 w-4 rounded-full mr-2 shadow-md " />
              <div className="bg-blue-700 h-4 w-4 rounded-full mr-2 shadow-md" />
              <div className="bg-white h-4 w-4 rounded-full mr-2 shadow-md" />
              <div className="bg-pink-900 h-4 w-4 rounded-full mr-2 shadow-md" />
              <div className="bg-green-700 h-4 w-4 rounded-full mr-2 shadow-md" />
            </div>
            <div className="flex flex-row px-2 mt-2">
              <div className="border-gray-500 rounded-md mr-2 text-xs px-2 py-1 shadow-md ">
                XXL
              </div>
              <div className="border-gray-500 rounded-md mr-2 text-xs px-2 py-1 shadow-md ">
                XL
              </div>
              <div className="border-gray-500 rounded-md mr-2 text-xs px-2 py-1 shadow-md ">
                L
              </div>
              <div className="border-gray-500 rounded-md mr-2 text-xs px-2 py-1 shadow-md ">
                M
              </div>
              <div className="border-gray-500 rounded-md mr-2 text-xs px-2 py-1 shadow-md ">
                S
              </div>
            </div>
            <div className="flex flex-row lg:px-3 md:px-2 px-3 mb-2 justify-between mt-3">
              <div
                className="px-2 py-1 shadow-lg bg-gradient-to-r
                 from-red-500 via-red-400 to-pink-400 rounded-md cursor-pointer hover:transform active:scale-90 duration-300 
                 active:shadow-sm"
              ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
                <button className="text-sm font-semibold text-yellow-50">
                  Add to Cart
                </button>
              </div>
              <div
                className="px-2 py-1 shadow-lg bg-gradient-to-r
                 from-red-500 via-red-400 to-pink-400 rounded-md cursor-pointer hover:transform active:scale-90 duration-300 
                 active:shadow-sm"
              >
                <button className="text-sm font-semibold text-yellow-50">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-md shadow-lg">
            <div>
              <Image
                className="rounded-md"
                src="/trouser.jpg"
                alt="preview not available"
                height={500}
                width={400}
              />
            </div>
            <div className="px-2 text-sm font-bold">Roadster Trousers</div>
            <div className="flex flex-row px-2">
              <div className="bg-black h-4 w-4 rounded-full mr-2 shadow-md " />
              <div className="bg-blue-700 h-4 w-4 rounded-full mr-2 shadow-md" />
              <div className="bg-white h-4 w-4 rounded-full mr-2 shadow-md" />
              <div className="bg-pink-900 h-4 w-4 rounded-full mr-2 shadow-md" />
              <div className="bg-green-700 h-4 w-4 rounded-full mr-2 shadow-md" />
            </div>
            <div className="flex flex-row px-2 mt-2">
              <div className="border-gray-500 rounded-md mr-2 text-xs px-2 py-1 shadow-md ">
                XXL
              </div>
              <div className="border-gray-500 rounded-md mr-2 text-xs px-2 py-1 shadow-md ">
                XL
              </div>
              <div className="border-gray-500 rounded-md mr-2 text-xs px-2 py-1 shadow-md ">
                L
              </div>
              <div className="border-gray-500 rounded-md mr-2 text-xs px-2 py-1 shadow-md ">
                M
              </div>
              <div className="border-gray-500 rounded-md mr-2 text-xs px-2 py-1 shadow-md ">
                S
              </div>
            </div>
            <div className="flex flex-row lg:px-3 md:px-2 px-3 mb-2 justify-between mt-3">
              <div
                className=" px-2 py-1 shadow-lg bg-gradient-to-r
                 from-red-500 via-red-400 to-pink-400 rounded-md cursor-pointer hover:transform active:scale-90 duration-300 
                 active:shadow-sm"
              > <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
                <button className="text-sm font-semibold text-yellow-50">
                  Add to Cart
                </button>
              </div>
              <div
                className="px-2 py-1 shadow-lg bg-gradient-to-r
                 from-red-500 via-red-400 to-pink-400 rounded-md cursor-pointer hover:transform active:scale-90 duration-300 
                 active:shadow-sm"
              >
                <button className="text-sm font-semibold text-yellow-50">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-md shadow-lg">
            <div>
              <Image
                className="rounded-md"
                src="/nike.jpg"
                alt="preview not available"
                height={500}
                width={400}
              />
            </div>
            <div className="px-2 text-sm font-bold">Nike Shoes</div>
            <div className="flex flex-row px-2">
              <div className="bg-black h-4 w-4 rounded-full mr-2 shadow-md " />
              <div className="bg-blue-700 h-4 w-4 rounded-full mr-2 shadow-md" />
              <div className="bg-white h-4 w-4 rounded-full mr-2 shadow-md" />
              <div className="bg-pink-900 h-4 w-4 rounded-full mr-2 shadow-md" />
              <div className="bg-green-700 h-4 w-4 rounded-full mr-2 shadow-md" />
            </div>
            <div className="flex flex-row px-2 mt-2">
              <div className="border-gray-500 rounded-md mr-2 text-xs px-2 py-1 shadow-md ">
                XXL
              </div>
              <div className="border-gray-500 rounded-md mr-2 text-xs px-2 py-1 shadow-md ">
                XL
              </div>
              <div className="border-gray-500 rounded-md mr-2 text-xs px-2 py-1 shadow-md ">
                L
              </div>
              <div className="border-gray-500 rounded-md mr-2 text-xs px-2 py-1 shadow-md ">
                M
              </div>
              <div className="border-gray-500 rounded-md mr-2 text-xs px-2 py-1 shadow-md ">
                S
              </div>
            </div>
            <div className="flex flex-row lg:px-3 md:px-2 px-3 mb-2 justify-between mt-3">
              <div
                className=" px-2 py-1 shadow-lg bg-gradient-to-r
                 from-red-500 via-red-400 to-pink-400 rounded-md cursor-pointer hover:transform active:scale-90 duration-300 
                 active:shadow-sm"
              ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
                <button className="text-sm font-semibold text-yellow-50">
                  Add to Cart
                </button>
              </div>
              <div
                className="px-2 py-1 shadow-lg bg-gradient-to-r
                 from-red-500 via-red-400 to-pink-400 rounded-md cursor-pointer hover:transform active:scale-90 duration-300 
                 active:shadow-sm"
              >
                <button className="text-sm font-semibold text-yellow-50">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-md shadow-lg">
            <div>
              <Image
                className="rounded-md"
                src="/watch.jpg"
                alt="preview not available"
                height={500}
                width={400}
              />
            </div>
            <div className="px-2 text-sm font-bold">Wrist Watch</div>
            <div className="flex flex-row px-2">
              <div className="bg-black h-4 w-4 rounded-full mr-2 shadow-md " />
              <div className="bg-blue-700 h-4 w-4 rounded-full mr-2 shadow-md" />
              <div className="bg-white h-4 w-4 rounded-full mr-2 shadow-md" />
              <div className="bg-pink-900 h-4 w-4 rounded-full mr-2 shadow-md" />
              <div className="bg-green-700 h-4 w-4 rounded-full mr-2 shadow-md" />
            </div>
            <div className="flex flex-row px-2 mt-2">
              <div className="border-gray-500 rounded-md mr-2 text-xs px-2 py-1 shadow-md ">
                XXL
              </div>
              <div className="border-gray-500 rounded-md mr-2 text-xs px-2 py-1 shadow-md ">
                XL
              </div>
              <div className="border-gray-500 rounded-md mr-2 text-xs px-2 py-1 shadow-md ">
                L
              </div>
              <div className="border-gray-500 rounded-md mr-2 text-xs px-2 py-1 shadow-md ">
                M
              </div>
              <div className="border-gray-500 rounded-md mr-2 text-xs px-2 py-1 shadow-md ">
                S
              </div>
            </div>
            <div className="flex flex-row lg:px-3 md:px-2 px-3 mb-2 justify-between mt-3">
              <div
                className=" px-2 py-1 shadow-lg bg-gradient-to-r
                 from-red-500 via-red-400 to-pink-400 rounded-md cursor-pointer hover:transform active:scale-90 duration-300 
                 active:shadow-sm"
              ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
                <button className="text-sm font-semibold text-yellow-50">
                  Add to Cart
                </button>
              </div>
              <div
                className="px-2 py-1 shadow-lg bg-gradient-to-r
                 from-red-500 via-red-400 to-pink-400 rounded-md cursor-pointer hover:transform active:scale-90 duration-300 
                 active:shadow-sm"
              >
                <button className="text-sm font-semibold text-yellow-50">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-md shadow-lg">
            <div>
              <Image
                className="rounded-md"
                src="/belt.jpg"
                alt="preview not available"
                height={500}
                width={400}
              />
            </div>
            <div className="px-2 text-sm font-bold">Belts and Wallets</div>
            <div className="flex flex-row px-2">
              <div className="bg-black h-4 w-4 rounded-full mr-2 shadow-md " />
              <div className="bg-blue-700 h-4 w-4 rounded-full mr-2 shadow-md" />
              <div className="bg-white h-4 w-4 rounded-full mr-2 shadow-md" />
              <div className="bg-pink-900 h-4 w-4 rounded-full mr-2 shadow-md" />
              <div className="bg-green-700 h-4 w-4 rounded-full mr-2 shadow-md" />
            </div>
            <div className="flex flex-row px-2 mt-2">
              <div className="border-gray-500 rounded-md mr-2 text-xs px-2 py-1 shadow-md ">
                XXL
              </div>
              <div className="border-gray-500 rounded-md mr-2 text-xs px-2 py-1 shadow-md ">
                XL
              </div>
              <div className="border-gray-500 rounded-md mr-2 text-xs px-2 py-1 shadow-md ">
                L
              </div>
              <div className="border-gray-500 rounded-md mr-2 text-xs px-2 py-1 shadow-md ">
                M
              </div>
              <div className="border-gray-500 rounded-md mr-2 text-xs px-2 py-1 shadow-md ">
                S
              </div>
            </div>
            <div className="flex flex-row lg:px-3 md:px-2 px-3 mb-2 justify-between mt-3">
              <div
                className=" px-2 py-1 shadow-lg bg-gradient-to-r
                 from-red-500 via-red-400 to-pink-400 rounded-md cursor-pointer hover:transform active:scale-90 duration-300 
                 active:shadow-sm"
              ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
                <button className="text-sm font-semibold text-yellow-50">
                  Add to Cart
                </button>
              </div>
              <div
                className="px-2 py-1 shadow-lg bg-gradient-to-r
                 from-red-500 via-red-400 to-pink-400 rounded-md cursor-pointer hover:transform active:scale-90 duration-300 
                 active:shadow-sm"
              >
                <button className="text-sm font-semibold text-yellow-50">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      <div className="border mt-3 w-full"/>
      </div>
    </div>
  );
};
export default MenCollection;
