import React from 'react';

export const Community: React.FC = () => {
  return (
    <section className="flex gap-5 font-normal flex-wrap mt-[122px] max-md:mt-10">
      <div className="text-center mt-[82px] max-md:mt-10">
        <div className="bg-[rgba(25,22,28,1)] flex flex-col pr-8 py-16 rounded-lg max-md:pr-5">
          <div className="text-[rgba(240,135,255,1)] text-[37px] leading-none tracking-[1px] self-center">
            11,000
          </div>
          <div className="text-[rgba(186,186,186,1)] text-xs leading-none uppercase mt-[9px]">
            Solana Hacker House participants
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/458724007ccc403c9070f27f27bfcb9b/12dfbf39ac2aa6518f7d1e768e11cb6df3c80ba7?placeholderIfAbsent=true"
          className="aspect-[1.26] object-contain w-full mt-5"
          alt="Hacker house"
        />
      </div>
      <div className="self-stretch flex flex-col items-stretch text-[38px] text-white tracking-[1px] leading-none max-md:max-w-full">
        <h2 className="self-center max-md:max-w-full">Join a thriving community.</h2>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/458724007ccc403c9070f27f27bfcb9b/e9a491d8dbf4c0ae7ab9e3d6f5fbdb0892f4ff04?placeholderIfAbsent=true"
          className="aspect-[1.43] object-contain w-full mt-[35px] max-md:max-w-full"
          alt="Community illustration"
        />
      </div>
      <div className="text-center mt-[82px] max-md:mt-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/458724007ccc403c9070f27f27bfcb9b/7a374a2601b7a3005c86953f2fecb6f841de96ce?placeholderIfAbsent=true"
          className="aspect-[1.5] object-contain w-full"
          alt="Developer community"
        />
        <div className="bg-[rgba(25,22,28,1)] flex flex-col items-stretch mt-5 px-[55px] py-[57px] rounded-lg max-md:px-5">
          <div className="text-[rgba(25,251,155,1)] text-[42px] leading-[1.1] tracking-[1px] self-center">
            48,000
          </div>
          <div className="text-[rgba(186,186,186,1)] text-xs leading-[15px] uppercase mt-[9px]">
            Developers building during Solana Hackathons
          </div>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/458724007ccc403c9070f27f27bfcb9b/0e6404fa3798606de659636f4401c7853cdccc30?placeholderIfAbsent=true"
        className="aspect-[0.71] object-contain w-[300px] shrink-0 max-w-full mt-[82px] max-md:mt-10"
        alt="Community event"
      />
      <div className="text-center mt-[82px] max-md:mt-10">
        <div className="bg-[rgba(25,22,28,1)] flex flex-col pl-[34px] py-16 rounded-lg max-md:pl-5">
          <div className="text-[rgba(255,235,59,1)] text-[42px] leading-[1.1] tracking-[1px]">
            3,800
          </div>
          <div className="text-[rgba(186,186,186,1)] text-xs leading-none uppercase mt-[9px]">
            Solana Breakpoint 2022 attendees
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/458724007ccc403c9070f27f27bfcb9b/9ce42aed0fcc80bd83879aa8132e4d222e27fda3?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[200px] mt-5"
          alt="Breakpoint event"
        />
      </div>
    </section>
  );
};