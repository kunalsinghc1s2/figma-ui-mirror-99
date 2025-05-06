import React from 'react';

export const CaseStudy: React.FC = () => {
  return (
    <section className="bg-[rgba(26,26,26,1)] self-center z-10 mt-[-45px] w-[1100px] max-w-full pr-20 rounded-xl max-md:pr-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[59%] max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/458724007ccc403c9070f27f27bfcb9b/1cec6e02578c291f82d7c7362e6c29e6765a9364?placeholderIfAbsent=true"
            className="aspect-[1.38] object-contain w-full grow max-md:max-w-full max-md:mt-10"
            alt="Case study illustration"
          />
        </div>
        <div className="w-[41%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col self-stretch font-normal my-auto max-md:mt-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/458724007ccc403c9070f27f27bfcb9b/971d665462702fe2d4347de38aa740e745a8ee28?placeholderIfAbsent=true"
              className="aspect-[4.52] object-contain w-60 max-w-full"
              alt="Company logo"
            />
            <p className="text-white text-[21px] leading-[27px] self-stretch mt-3.5">
              It's time to bridge the digital and physical. Anybodies helps established
              brands like Toys'R'Us connect real-life places and products with NFTs.
            </p>
            <div className="flex items-stretch gap-[5px] text-[rgba(169,98,255,1)] mt-3.5">
              <div className="text-xl leading-none grow">Learn more about</div>
              <div className="flex items-stretch gap-px">
                <div className="text-xl leading-none grow">NFTs</div>
                <div className="text-[21px] leading-[1.3]">on Solana</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};