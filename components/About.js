import Image from "next/dist/client/image";
const About = () => {
  return (
    <div className="md:container flex place-items-center m-auto mt-14 mb-10 max-w-max py-12">
      <div className="flex flex-row justify-between w-4/5 bg-gradient-to-r from-black via-purple-800 to-transparent rounded-lg">
          <div className="w-1/3">
              <div className=" text-xl text-white font-mono font-bold pl-20 pt-10">Subscribe to our offers First!</div>
              <div className="text-gray-200 pl-20 pt-2">
                  Want to hear from us when we have new offers?
                  Sign up for our Newsletter and we'll email you
                  every time we have new sale offers.
              </div>
          </div>
        <div>
          <Image
            src="/subscribe-banner.png"
            alt="no image"
            height={300}
            width={300}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
