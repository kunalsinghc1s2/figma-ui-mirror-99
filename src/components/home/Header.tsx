import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-black shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-full">
      <div className="z-10 w-full max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[33%] max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/458724007ccc403c9070f27f27bfcb9b/06c49c8b370dbc4662e34822a792dbcd901cedc9?placeholderIfAbsent=true"
              className="aspect-[0.67] object-contain w-full max-md:max-w-full"
              alt="Solana visual"
            />
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="z-10 flex mr-[-210px] w-full flex-col items-center text-white font-normal text-center mt-[5px] max-md:max-w-full">
              <div className="text-black text-[17px] leading-loose uppercase max-md:max-w-full">
                Breakpoint 2023 - New City. New Vibes - Get Early Access -&gt;
              </div>
              <h1 className="text-[70px] leading-none tracking-[0.68px] self-stretch mt-[236px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                Powerful for developers.
              </h1>
              <h2 className="text-[68px] leading-none tracking-[0.68px] max-md:max-w-full max-md:text-[40px]">
                Fast for everyone.
              </h2>
              <p className="text-[21px] leading-[27px] w-[589px] mt-[55px] max-md:max-w-full max-md:mt-10">
                Bring blockchain to the people. Solana supports experiences for power users,
                new consumers, and everyone in between.
              </p>
              <div className="flex w-[342px] max-w-full items-stretch gap-[15px] text-[15px] uppercase leading-none mt-12 max-md:mt-10">
                <button className="border gap-2.5 overflow-hidden px-[33px] py-4 rounded-[36px] border-solid border-black max-md:px-5 hover:bg-white hover:text-black transition-colors">
                  Start building
                </button>
                <button className="bg-black border gap-2.5 overflow-hidden px-[33px] py-4 rounded-[36px] border-white border-solid max-md:px-5 hover:bg-white hover:text-black transition-colors">
                  Read docs
                </button>
              </div>
              <p className="text-[rgba(97,138,220,1)] text-[15px] leading-none tracking-[0.8px] uppercase mt-[119px] max-md:max-w-full max-md:mt-10">
                Powering tools and integrations from companies all around the world
              </p>
            </div>
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col relative min-h-[1259px] w-full pt-9 pb-[422px] max-md:max-w-full max-md:pb-[100px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/458724007ccc403c9070f27f27bfcb9b/54082a6f2d58bc0e367a09586256498fdbf501ca?placeholderIfAbsent=true"
                className="absolute h-full w-full object-cover inset-0"
                alt="Background pattern"
              />
              <nav className="relative bg-[rgba(0,0,0,0.6)] flex w-full flex-col items-center text-[17px] text-[rgba(132,136,149,1)] font-normal whitespace-nowrap text-center leading-loose justify-center px-[70px] py-[19px] max-md:max-w-full max-md:px-5">
                <div className="flex w-[1084px] max-w-full gap-5 flex-wrap justify-between">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/458724007ccc403c9070f27f27bfcb9b/6f1049126ad5f6b348da602404a392ddfb87af2d?placeholderIfAbsent=true"
                    className="aspect-[6.76] object-contain w-[182px] shrink-0 max-w-full"
                    alt="Solana logo"
                  />
                  <div className="flex items-stretch gap-[34px]">
                    <button className="flex items-center gap-0.5 hover:text-white transition-colors">
                      <span>Learn</span>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/458724007ccc403c9070f27f27bfcb9b/ef5e62b1f666b199259a793cbc14b4ffb2484864?placeholderIfAbsent=true"
                        className="aspect-[1] object-contain w-6 shrink-0"
                        alt="Learn icon"
                      />
                    </button>
                    <button className="flex items-center gap-0.5 hover:text-white transition-colors">
                      <span>Build</span>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/458724007ccc403c9070f27f27bfcb9b/d1c93b439e5ca766e2753671ec857e8e895a3b2f?placeholderIfAbsent=true"
                        className="aspect-[1] object-contain w-6 shrink-0"
                        alt="Build icon"
                      />
                    </button>
                    <button className="flex items-center gap-px text-lg leading-loose hover:text-white transition-colors">
                      <span>Network</span>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/458724007ccc403c9070f27f27bfcb9b/a07e7c888b1321ded6f5e1171d6c5f893e5c083d?placeholderIfAbsent=true"
                        className="aspect-[1] object-contain w-6 shrink-0"
                        alt="Network icon"
                      />
                    </button>
                    <button className="flex items-center gap-[3px] hover:text-white transition-colors">
                      <span>Community</span>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/458724007ccc403c9070f27f27bfcb9b/5289a07401363db5a0406a55b43969e456b37548?placeholderIfAbsent=true"
                        className="aspect-[1] object-contain w-6 shrink-0"
                        alt="Community icon"
                      />
                    </button>
                  </div>
                </div>
              </nav>
              <div className="relative flex gap-10 flex-wrap mt-[696px] px-[50px] max-md:max-w-full max-md:mt-10 max-md:px-5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/458724007ccc403c9070f27f27bfcb9b/5a39502b8b9e3bab7e54e87c9e4a02b5d5d4ad62?placeholderIfAbsent=true"
                  className="aspect-[3.06] object-contain w-[113px] shrink-0"
                  alt="Partner logo 1"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/458724007ccc403c9070f27f27bfcb9b/cb27515b3876e6e9a6a83963b0f3f6080bfb7906?placeholderIfAbsent=true"
                  className="aspect-[3.82] object-contain w-[141px] shrink-0"
                  alt="Partner logo 2"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/458724007ccc403c9070f27f27bfcb9b/2af9299fdbe64a87cf6d37b5b333fffee75d1836?placeholderIfAbsent=true"
                  className="aspect-[3.03] object-contain w-[115px] shrink-0"
                  alt="Partner logo 3"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/458724007ccc403c9070f27f27bfcb9b/05df37859f88618a73de3fb761a8a38a57613d6a?placeholderIfAbsent=true"
                  className="aspect-[3] object-contain w-[114px] shrink-0"
                  alt="Partner logo 4"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/458724007ccc403c9070f27f27bfcb9b/bd3d97df972222608c4522bb89c1984dde8ca412?placeholderIfAbsent=true"
                  className="aspect-[3] object-contain w-[114px] shrink-0"
                  alt="Partner logo 5"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/458724007ccc403c9070f27f27bfcb9b/46868094b3ae65a5f14072d03e40fcb324ff9635?placeholderIfAbsent=true"
                  className="aspect-[3.03] object-contain w-[115px] shrink-0"
                  alt="Partner logo 6"
                />
                <div className="flex flex-col justify-center w-[114px] py-1.5">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/458724007ccc403c9070f27f27bfcb9b/60cdc8fc0dadbd64e5fc8bc478a70442060abbd1?placeholderIfAbsent=true"
                    className="aspect-[5.81] object-contain w-[157px] mr-[-22px]"
                    alt="Partner logo 7"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};