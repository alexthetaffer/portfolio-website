import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">// I am not your normal developer</p>
          <p className="py-2 text-gray-600">
            Welcome to my website! I'm a passionate self-taught full-stack web
            developer who has spent the past year immersed in the world of web
            development. While I may not have any commercial experience just
            yet, I have honed my skills through countless hours of dedicated
            learning and hands-on practice.
          </p>
          <p className="py-2 text-gray-600">My journey in web development began
            with a burning curiosity and an insatiable desire to create. I
            immersed myself in various programming languages, frameworks, and
            technologies, determined to master the craft. From front-end
            technologies like HTML, CSS, and JavaScript to back-end frameworks
            like Node.js and Django, I've dived deep into the world of
            full-stack development.</p>
          <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects</p>
        </div>
        <div className="w-full h-auto m-auto shadow-md shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <img className="rounded-xl" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
