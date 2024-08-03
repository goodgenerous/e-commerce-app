import React from "react";

const MarqueeComponent = () => {
  return (
    // <div className="relative flex overflow-x-hidden">
    //   <div className="py-12 animate-marquee whitespace-nowrap">
    //     <div className="px-4 py-4 bg-white">
    //       <span className="text-lg mx-4 text-black">
    //         Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
    //         sint. Velit officia consequat duis enim velit mollit.
    //       </span>
    //       <div className="rounded-full">
    //         <img
    //           src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    //           alt=""
    //         />
    //       </div>
    //     </div>
    //     <div className="px-4 py-4 bg-white">
    //       <span className="text-lg mx-4 text-black">
    //         Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
    //         sint. Velit officia consequat duis enim velit mollit.
    //       </span>
    //       <div className="rounded-full">
    //         <img
    //           src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    //           alt=""
    //         />
    //       </div>
    //     </div>
    //     <div className="px-4 py-4 bg-white">
    //       <span className="text-lg mx-4 text-black">
    //         Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
    //         sint. Velit officia consequat duis enim velit mollit.
    //       </span>
    //       <div className="rounded-full">
    //         <img
    //           src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    //           alt=""
    //         />
    //       </div>
    //     </div>
    //     <div className="px-4 py-4 bg-white">
    //       <span className="text-lg mx-4 text-black">
    //         Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
    //         sint. Velit officia consequat duis enim velit mollit.
    //       </span>
    //       <div className="rounded-full">
    //         <img
    //           src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    //           alt=""
    //         />
    //       </div>
    //     </div>
    //     <div className="px-4 py-4 bg-white">
    //       <span className="text-lg mx-4 text-black">
    //         Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
    //         sint. Velit officia consequat duis enim velit mollit.
    //       </span>
    //       <div className="rounded-full">
    //         <img
    //           src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    //           alt=""
    //         />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
    //     <span className="text-4xl mx-4 text-white">Marquee Item 1</span>
    //     <span className="text-4xl mx-4 text-white">Marquee Item 2</span>
    //     <span className="text-4xl mx-4 text-white">Marquee Item 3</span>
    //     <span className="text-4xl mx-4 text-white">Marquee Item 4</span>
    //     <span className="text-4xl mx-4 text-white">Marquee Item 5</span>
    //   </div>
    // </div>
    <>
      <div className="flex gap-5 justify-center">
        <div className="px-5 py-5 backdrop-blur-md bg-white/30 w-1/5 rounded-xl">
          <span className="text-base text-white font-raleway">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </span>
          <div className="flex items-center gap-x-6 mt-5">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div>
              <h3 className="text-base font-semibold leading-6 tracking-tight text-white font-raleway">
                Katie Ballard
              </h3>
              <p className="text-sm font-normal leading-6 text-slate-300 font-raleway">
                Co-Founder / CEO
              </p>
            </div>
          </div>
        </div>
        <div className="px-5 py-5 backdrop-blur-md bg-white/30 w-1/5 rounded-lg">
          <span className="text-base text-white font-raleway">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </span>
          <div className="flex items-center gap-x-6 mt-3">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div>
              <h3 className="text-base font-semibold leading-6 tracking-tight text-white font-raleway">
                Alice Lindsey
              </h3>
              <p className="text-sm font-normal leading-6 text-slate-300 font-raleway">
                Co-Founder / CEO
              </p>
            </div>
          </div>
        </div>
        <div className="px-5 py-5 backdrop-blur-md bg-white/30 w-1/5 rounded-lg">
          <span className="text-base text-white font-raleway">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </span>
          <div className="flex items-center gap-x-6 mt-3">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div>
              <h3 className="text-base font-semibold leading-6 tracking-tight text-white font-raleway">
                Josie Cox
              </h3>
              <p className="text-sm font-normal leading-6 text-slate-300 font-raleway">
                Co-Founder / CEO
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarqueeComponent;
