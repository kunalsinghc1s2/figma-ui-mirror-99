import React from 'react';

export const Features: React.FC = () => {
  return (
    <section className="w-full mt-32 max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[27%] max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col text-white font-normal mt-[77px] max-md:mt-10">
            <h2 className="text-[40px] leading-none tracking-[1px]">Made for</h2>
            <div className="self-stretch flex items-stretch tracking-[1px]">
              <div className="text-[38px] leading-none grow shrink basis-auto">
                mass adoption
              </div>
              <div className="text-[42px] leading-[1.1]">.</div>
            </div>
            <div className="flex items-stretch gap-1 text-base text-[rgba(196,196,196,1)] uppercase leading-none mt-2">
              <div className="bg-[rgba(31,207,241,1)] flex w-1 shrink-0 h-1 rounded-[50px]" />
              <div>Live data</div>
            </div>
          </div>
        </div>
        <div className="w-[73%] ml-5 max-md:w-full max-md:ml-0">
          <div className="grow max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-6/12 max-md:w-full max-md:ml-0">
                <div className="grow text-white font-normal leading-[27px] mt-20 max-md:mt-10">
                  <div className="bg-[rgba(0,0,0,0.28)] flex w-full flex-col text-[28px] px-[30px] py-8 rounded-3xl max-md:px-5">
                    <div className="flex items-stretch gap-[17px] whitespace-nowrap leading-none">
                      <div className="bg-[rgba(31,207,241,1)] flex w-0.5 shrink-0 h-[33px]" />
                      <div>Fast</div>
                    </div>
                    <p className="text-[rgba(196,196,196,1)] text-[17px] mt-2.5">
                      Don't keep your users waiting. Solana has block times of 400 milliseconds
                      — and as hardware gets faster, so will the network.
                    </p>
                    <div className="flex items-stretch gap-1.5 whitespace-nowrap leading-none mt-6">
                      <div className="bg-[rgba(31,207,241,1)] flex w-1 shrink-0 h-1 mt-1 rounded-[50px]" />
                      <div>3,969</div>
                    </div>
                    <div className="text-[rgba(196,196,196,1)] text-base uppercase mt-[11px]">
                      Transactions per second
                    </div>
                  </div>
                  <div className="bg-[rgba(0,0,0,0.28)] flex w-full flex-col mt-2 px-[30px] py-8 rounded-3xl max-md:px-5">
                    <div className="flex items-stretch gap-[17px] text-[28px] whitespace-nowrap leading-none">
                      <div className="bg-[rgba(153,69,255,1)] flex w-0.5 shrink-0 h-[33px]" />
                      <div>Scalable</div>
                    </div>
                    <p className="text-[rgba(196,196,196,1)] text-lg self-stretch mt-2.5">
                      Get big, quick. Solana is made to handle thousands of transactions per
                      second, and fees for both developers and users remain less than $0.01.
                    </p>
                    <div className="flex items-stretch gap-1.5 text-[26px] whitespace-nowrap leading-none mt-6">
                      <div className="bg-[rgba(31,207,241,1)] flex w-1 shrink-0 h-1 mt-1 rounded-[50px]" />
                      <div>163,077,581,394</div>
                    </div>
                    <div className="text-[rgba(196,196,196,1)] text-base uppercase mt-[11px]">
                      Total transactions
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="font-normal max-md:mt-10">
                  <div className="bg-[rgba(0,0,0,0.28)] flex w-full flex-col px-[30px] py-8 rounded-3xl max-md:px-5">
                    <div className="self-stretch flex items-stretch">
                      <div className="bg-[rgba(255,213,18,1)] flex w-0.5 shrink-0 h-[33px]" />
                      <div className="flex flex-col items-stretch grow shrink-0 basis-0 w-fit">
                        <div className="text-white text-[28px] leading-none ml-[17px] max-md:ml-2.5">
                          Decentralized
                        </div>
                        <p className="text-[rgba(196,196,196,1)] text-lg leading-[27px] mt-2.5">
                          The Solana network is validated by thousands of nodes that operate
                          independently of each other, ensuring your data remains secure and
                          censorship resistant.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-stretch gap-1.5 text-[25px] text-white whitespace-nowrap leading-none mt-6">
                      <div className="bg-[rgba(31,207,241,1)] flex w-1 shrink-0 h-1 mt-1 rounded-[50px]" />
                      <div>1,675</div>
                    </div>
                    <div className="text-[rgba(196,196,196,1)] text-base leading-[27px] uppercase mt-[11px]">
                      Validator nodes
                    </div>
                  </div>
                  <div className="bg-[rgba(0,0,0,0.28)] flex w-full flex-col text-white leading-[27px] mt-[13px] px-[30px] py-8 rounded-3xl max-md:px-5">
                    <div className="flex items-stretch gap-[17px] text-[28px] leading-none">
                      <div className="bg-[rgba(25,251,155,1)] flex w-0.5 shrink-0 h-[33px]" />
                      <div>Energy Efficient</div>
                    </div>
                    <p className="text-[rgba(196,196,196,1)] text-lg self-stretch mt-2.5">
                      Solana's proof of stake network and other innovations minimize its impact
                      on the{" "}
                      <a
                        href="https://solana.com/environment"
                        className="text-[rgba(25,251,155,1)] underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        environment
                      </a>
                      <span className="text-[rgba(25,251,155,1)]">.</span> Each Solana
                      transaction uses about the same energy as a few Google searches.
                    </p>
                    <div className="text-[26px] leading-none mt-6">0%</div>
                    <div className="text-[rgba(196,196,196,1)] text-base uppercase mt-[11px]">
                      Net carbon impact
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};