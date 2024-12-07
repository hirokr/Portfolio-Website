"use client";

import CountUp from "react-countup";

const stat = [
  { num: 2, text: "Years of experience" },
  { num: 10, text: "Project Completed" },
  { num: 4, text: "Technologies Mastered" },
  { num: 2, text: "Years of experience" },
  { num: 300, text: "Code commits" },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className='container mx-auto'>
        <div className='flex flex-wrap gap-6 w-max-[80vw] mx-auto xl:max-w-none'>
          {stat.map((item, index) => {
            return (
              <div
                key={index}
                className='flex-1 flex gap-4 items-center justify-center xl:justify-start'
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={1}
                  className='text-4xl xl:text-6xl font-extrabold'
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
