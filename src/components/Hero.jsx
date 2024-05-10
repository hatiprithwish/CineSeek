import { Star } from "lucide-react";

const heroData = [
  {
    id: 1,
    name: "Dune 2",
    decp: "Sci-fi Adventure",
    price: "4.5",
    imageSrc: "/dune2.png",
  },
  {
    id: 2,
    name: "Blade Runner",
    decp: "Sci-fi Thriller",
    price: "4.2",
    imageSrc: "/blade-runner.png",
  },
  {
    id: 3,
    name: "83",
    decp: "Sport Drama",
    price: "4.3",
    imageSrc: "/83.png",
  },
  {
    id: 4,
    name: "Loki",
    decp: "Action",
    price: "4.8",
    imageSrc: "/loki.png",
  },
];

const Hero = () => {
  return (
    <section
      className="flex flex-col md:flex-row md:items-stretch gap-2 w-full"
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6 h-full">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Trending Movies
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src="/popcorn.png"
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide leading-tight text-headingColor">
          Explore Your Next{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Cinematic Journey
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Embark on an adventure through the silver screen, where every film
          holds the promise of excitement, emotion, and wonder. Explore the
          latest releases, timeless classics, and hidden gems waiting to
          captivate your imagination. Let your cinematic journey begin!
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Explore Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src="/heroBg.png"
          className="ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-[150px] -mt-10 lg:-mt-16 rounded-lg"
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1">
                  {n.decp}
                </p>

                <p className="text-sm font-semibold text-headingColor flex gap-1">
                  <span className="text-xs text-red-600">
                    <Star color="#eb6b34" size={16} />
                  </span>{" "}
                  {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
