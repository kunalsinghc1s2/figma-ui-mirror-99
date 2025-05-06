
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(0,5,8,1)] border flex w-full flex-col items-center justify-center mt-52 px-[70px] py-[83px] rounded-[12px_12px_0px_0px] border-[rgba(20,20,20,1)] border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="flex w-[1096px] max-w-full items-stretch gap-[40px_100px] flex-wrap">
        <div className="flex flex-col text-base font-normal leading-[27px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/458724007ccc403c9070f27f27bfcb9b/9010f5e895dd9afa29ff4cb0ba2e57016f426421?placeholderIfAbsent=true"
            className="aspect-[1.15] object-contain w-[31px]"
            alt="Solana icon"
          />
          <div className="text-white mt-5">Managed by Solana Foundation</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/458724007ccc403c9070f27f27bfcb9b/25fde5a1719bbd0b58047e231c99cbb3cd03781c?placeholderIfAbsent=true"
            className="aspect-[6.85] object-contain w-[206px] max-w-full mt-[19px]"
            alt="Solana logo"
          />
          <div className="self-stretch flex items-stretch gap-1.5 text-[rgba(132,136,149,1)] mt-5">
            <div>©</div>
            <div className="flex items-stretch grow shrink basis-auto">
              <div>2023</div>
              <div className="basis-auto grow shrink">
                Solana Foundation. All rights reserved.
              </div>
            </div>
          </div>
        </div>
        <div className="grow shrink basis-auto max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[31%] max-md:w-full max-md:ml-0">
              <nav className="flex grow flex-col text-base text-[rgba(132,136,149,1)] font-normal leading-[27px] max-md:mt-10">
                <div className="text-white leading-none uppercase">Solana</div>
                <a href="#" className="text-[15px] mt-[13px] hover:text-white transition-colors">
                  Grants
                </a>
                <a href="#" className="text-[15px] self-stretch mt-[11px] hover:text-white transition-colors">
                  Break Solana
                </a>
                <a href="#" className="mt-[11px] hover:text-white transition-colors">
                  Media Kit
                </a>
                <a href="#" className="mt-[11px] hover:text-white transition-colors">
                  Careers
                </a>
                <a href="#" className="mt-[11px] hover:text-white transition-colors">
                  Disclaimer
                </a>
              </nav>
            </div>
            <div className="w-[46%] ml-5 max-md:w-full max-md:ml-0">
              <nav className="flex flex-col text-[15px] text-[rgba(132,136,149,1)] font-normal leading-[27px] max-md:mt-10">
                <div className="text-white leading-none uppercase self-stretch">
                  Get Connected
                </div>
                <a href="#" className="text-base mt-[13px] hover:text-white transition-colors">
                  Ecosystem
                </a>
                <a href="#" className="mt-[11px] hover:text-white transition-colors">
                  Blog
                </a>
                <a href="#" className="text-base mt-[11px] hover:text-white transition-colors">
                  Newsletter
                </a>
              </nav>
            </div>
            <div className="w-[22%] ml-5 max-md:w-full max-md:ml-0">
              <button className="flex items-center gap-1.5 text-[15px] text-[rgba(132,136,149,1)] font-normal whitespace-nowrap text-center uppercase leading-[1.6] max-md:mt-10 hover:text-white transition-colors">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/458724007ccc403c9070f27f27bfcb9b/859b8966cd085ab5328757e4b83ec6f99c08ecb1?placeholderIfAbsent=true"
                  className="aspect-[0.95] object-contain w-[19px] self-stretch shrink-0 my-auto"
                  alt="Language icon"
                />
                <span>EN</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
