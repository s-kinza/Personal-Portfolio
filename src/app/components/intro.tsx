import Image from "next/image";
import React from "react";

// const Firstsection = () => {
//   return (
//     <section className="intro " id="home">
//       <div>
//         <h2 className="intro-name text-3xl  mx-8 font-bold  text-white">
//           Hello Coders! 
//           <br />
//           MySelf Syeda 
          
//           Kanzul Eeman I'm a
//           <br />
//            web designer and{" "}
          
//             Full-Stack-Developer
          
//         </h2>
//         <br />
//         <p className="parah">
//           I crafts responsive websites where technologies meet creativity
//         </p>
//       </div>

//       <div className="images">
//         <Image
//           src="/images/mypic.jpg"
//           height={300}
//           width={300}
//           alt="OwnerPic"
//           className="object-cover rounded-lg hover:scale-105 transition-transform duration-300"
//           priority   
//         />
//       </div>
//     </section>
//   );
// };

// export default Firstsection;
const Firstsection = () => {
  return (
    <section className="intro" id="home">
      <div>
        <h2 className="intro-name text-3xl mx-8 font-bold text-white">
          Hello Coders! 
          <br />
          MySelf Syeda 
          <br />
          Kanzul Eeman I&apos;m a
          <br />
          web designer and{" "}
          Full-Stack-Developer
        </h2>
        <br />
        <p className="parah">
          I crafts responsive websites where technologies meet creativity
        </p>
      </div>

      <div className="images">
        <Image
          src="/images/mypic.jpg"
          height={300}
          width={300}
          alt="OwnerPic"
          className="object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          priority   
        />
      </div>
    </section>
  );
};

export default Firstsection;