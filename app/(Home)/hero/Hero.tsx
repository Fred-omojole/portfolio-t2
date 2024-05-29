// import { satoshi } from "@/app/fonts/Satoshi";

import HeroNav from "../hero-nav/HeroNav";

const Hero = () => {
  return (
    <>
      <HeroNav />
      <section className=" min-h-[55vh]  xl:py-10 lg:py-8 md:py-5 py-6  md:overflow-hidden">
        <div className="">
          <div className="text-dark-grey satoshi-italic">
            {" "}
            <h1 className="xl:text-[6vw] lg:text-[8vw] md:text-7xl text-center  md:text-center  font-extrabold tracking-normal stretched-text">
              FRED-OMOJOLE OMOYELE
            </h1>
          </div>
        </div>

        <div className="mt-16 z-10 px-2 flex justify-between items-center lg:min-h-[55vh] md:min-h-[95vh]">
          <div className="w-full justify-end items-end relative ">
            <div className="lg:w-[50vw] md:w-full">
              {" "}
              <p className="md:text-center lg:text-left lg:ml-2 lg:text-2xl md:text-3xl font-bold leading-[-3] lg:tracking-normal md:tracking-tight">
                An uprising and freelance front-end developer happy and willing
                to work with startups and businesses around the world, ensuring
                that unfair advantage over the rest.
              </p>
            </div>

            {/* <div className=""> */}

            <div className="mt-20 px-2  flex items-center justify-between w-full">
              <div className="opacity-[0.08]">
                <div className="rotate-[30deg]">
                  <div className=" -translate-x-8 flex">
                    <div className="  border-[1px] border-solid rounded-full p-10 bg-dark-grey"></div>
                    <div className=" border-[1px] border-solid rounded-full p-10 bg-dark-grey"></div>
                  </div>

                  <div className="translate-x-8 flex">
                    <div className="  border-[1px] border-solid rounded-full p-10 bg-dark-grey"></div>
                    <div className=" border-[1px] border-solid rounded-full p-10 bg-dark-grey"></div>
                  </div>
                </div>
              </div>

              <span className=" h-[25vh]  grid place-content-center font-bold opacity-25">
                <h5>(scroll for more ↓)</h5>
              </span>

              <div className="opacity-[0.08]">
                <div className="-rotate-[30deg]">
                  <div className=" translate-x-8 flex">
                    <div className="  border-[1px] border-solid rounded-full p-10 bg-dark-grey"></div>
                    <div className=" border-[1px] border-solid rounded-full p-10 bg-dark-grey"></div>
                  </div>

                  <div className="-translate-x-8 flex">
                    <div className="  border-[1px] border-solid rounded-full p-10 bg-dark-grey"></div>
                    <div className=" border-[1px] border-solid rounded-full p-10 bg-dark-grey"></div>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
