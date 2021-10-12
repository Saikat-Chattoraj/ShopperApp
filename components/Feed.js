import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
const Feed = () => {
  return (
    <div className="flex rounded-lg">
      <div className="lg:flex flex flex-col-reverse lg:flex-row justify-between place-items-center mt-28 m-auto">
        <div className="sm:px-20">
          <h1 className="font-serif 2xl:text-3xl xl:text-xl lg:text-lg text-2xl font-bold tracking-wider smx:text-center">Compliment your Flawless Beauty!</h1>
          <h3 className="font-serif text-xl tracking-wider smx:hidden">What are you waiting for!!!</h3>
          <div className=" mt-5 py-2 smx:text-center">
            <Link href="/">
              <a className="2xl:px-52 xl:px-36 sm:px-24 px-10 py-1 lg:px-24 ml-1 sm:py-2 rounded-md hover:transform active:scale-90 duration-300 shadow-lg active:shadow-sm
              bg-gradient-to-r from-red-600 via-red-500 to-pink-500 text-white tracking-wider
              active:underline">Shop NOW!</a>
            </Link>
          </div>
        </div>
        <div className="px-2">
          <Image
            className="object-contain"
            src="/undraw_Online_shopping_re_k1sv.svg"
            alt="No image"
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Feed;
