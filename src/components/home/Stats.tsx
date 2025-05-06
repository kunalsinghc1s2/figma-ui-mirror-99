import React from 'react';

export const Stats: React.FC = () => {
  return (
    <section className="flex flex-col relative min-h-[1690px] w-full items-center pb-[77px] px-20 max-md:max-w-full max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/458724007ccc403c9070f27f27bfcb9b/44f00a89955a32ba7e0d97faf79c05e383b5fada?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Background pattern"
      />
      <div className="relative z-10 w-[1100px] max-w-full">
        <div className="flex w-[1046px] max-w-full items-stretch gap-5 font-normal flex-wrap justify-between">
          <div className="flex flex-col items-stretch text-white tracking-[1px] mt-20 max-md:mt-10">
            <h2 className="text-[38px] leading-none">Join a community</h2>
            <div className="z-10 flex items-stretch">
              <div className="text-[38px] leading-none grow">of millions</div>
              <div className="text-[42px] leading-[1.1]">.</div>
            </div>
          </div>
          <div className="flex flex-col text-base leading-[27px] max-md:max-w-full">
            <div className="text-[101px] leading-none max-md:text-[40px]">11.5M+</div>
            <div className="text-[rgba(196,196,196,1)] text-xs leading-none uppercase">
              Active accounts
            </div>
            <div className="text-[106px] leading-none bg-clip-text bg-[linear-gradient(260deg,#0047FF_-13.37%,#00BCD4_109.53%)] mt-[45px] max-md:text-[40px] max-md:mt-10">
              21.9M
            </div>
            <div className="text-[rgba(196,196,196,1)] text-xs leading-none uppercase">
              NFTs minted
            </div>
            <div className="text-[110px] leading-[1.2] self-stretch mt-[45px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
              $0.00025
            </div>
            <div className="text-[rgba(196,196,196,1)] text-xs leading-none uppercase">
              Average cost per transaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};