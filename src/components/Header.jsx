import React, { useEffect, useState } from "react";
import headerImg from "/images/IMG_9925.jpg";

function Header() {
  const targetDate = new Date("2026-01-27T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return {
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${headerImg})` }}
      className="w-full min-h-screen bg-cover bg-center relative"
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4 gap-7">
        {/* Top text */}
        <div className="flex flex-col items-center mt-48 md:mt-60">
          <h1 className="text-white font-normal text-lg md:text-2xl leading-relaxed max-w-[300px] md:max-w-[400px]">
            Սիրով հրավիրում ենք Ձեզ մեր հարսանյաց արարողությանը
          </h1>

          <p className="text-white font-bold text-xl md:text-xl">
            27 Հունվարի 2026 թ․
          </p>
        </div>

        {/* Names */}
        <div className="mt-10">
          <p className="text-white text-lg md:text-2xl uppercase tracking-widest font-normal">
            Հարգանքով՝
          </p>
          <p className="text-white text-lg md:text-2xl font-bold">
            Արտյոմ և Արմինե
          </p>
        </div>

        {/* Countdown */}
        <div className="flex flex-col gap-2 mt-6 text-white">
          <span className="uppercase tracking-widest text-sm opacity-80">
            Մնաց
          </span>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            {[
              { value: timeLeft.days, label: "օր" },
              { value: timeLeft.hours, label: "ժամ" },
              { value: timeLeft.minutes, label: "րոպե" },
              { value: timeLeft.seconds, label: "վայրկյան" },
            ].map((item, index, arr) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center min-w-[60px]">
                  <span className="text-xl md:text-5xl font-light">
                    {item.value}
                  </span>
                  <span className="text-sm opacity-80 mt-1">
                    {item.label}
                  </span>
                </div>

                {/* Divider */}
                {index !== arr.length - 1 && (
                  <div className="mx-6 h-14 w-px bg-white/50 hidden sm:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
