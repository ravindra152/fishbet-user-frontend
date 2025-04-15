// 'use client';
// import { chevronLeft, chevronRight, gameIcon } from '@/assets/svg';
// import Card from '@/common/components/custom-card/component';
// import Image from 'next/image';
// import useCasinoSection from '../../hooks/useCasinoSection';
// import { useState } from 'react';
// // import { CASINO_TEMP_IMAGES } from '../../constants';
// import { motion } from "framer-motion";

// export default function CasinoSection({
//   categoryId,
//   categoryName,
//   casinoGames,
// }) {
//   console.log("categoryId>>>>>>>", categoryId)
//   console.log("categoryName>>>>>>>", categoryName)

//   const [gameData, setGameData] = useState(casinoGames);
//   const {
//     emblaRef,
//     scrollNext,
//     scrollPrev,
//     // canScrollNext,
//     // canScrollPrev,
//     handleFavoriteGame,
//     clickHandler,
//   } = useCasinoSection({ setGameData });



//   return (
//     <div className="relative w-full  mx-auto mt-2">
//       <div className="flex justify-between items-center">
//         <div className="flex shiny-hover text-white justify-start items-center  bg-[rgb(var(--lb-blue-800))] p-2 md:px-3 rounded-[50px] m-2 relative font-extrabold text-[12px] sm:text-sm">
//           <Image
//             src={gameIcon}
//             alt="category"
//             className="mx-2 w-[18px] sm:w-[24px]"
//           />
//           {categoryName}
//         </div>
//         <div className="flex items-center gap-x-1 md:gap-x-2">
//           <button
//             onClick={() => clickHandler({ categoryId })}
//             className="text-white font-bold text-[12px] sm:text-sm shiny-hover flex-center p-2 rounded-[50px] hover:bg-purple-900 bg-[rgb(var(--lb-blue-800))] "
//           >
//             Show All
//           </button>
//           <div className="flex bg-[rgb(var(--lb-blue-800))] rounded-[50px] text-center cursor-pointer">
//             <button
//               onClick={scrollPrev}
//               //disabled={!canScrollPrev}
//               className="flex-center w-8 md:w-11 border border-[hsl(var(--lb-blue-400))] p-2 rounded-l-[50px] opacity-30 hover:opacity-100 hover:text-white hover:bg-transparent cursor-default"
//             >
//               <Image src={chevronLeft} alt="left" />
//             </button>

//             <button
//               onClick={scrollNext}
//               //disabled={!canScrollNext}
//               className="flex-center w-8 md:w-11 border border-[hsl(var(--lb-blue-400))] p-2 border-l-0 hover:opacity-100 text-blue-200 opacity-30 hover:text-white hover:bg-transparent rounded-r-[50px]"
//             >
//               <Image src={chevronRight} alt="right" />
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="overflow-hidden w-full" ref={emblaRef}>
//         <div className="flex space-x-2">
//           {gameData?.map((game) => (
//             <div
//               key={`${game?.id}-${game?.casinoGameId}-${game?.casinoProviderId}`}
//               className="min-w-[100px] md:min-w-[160px]"
//             >
//               <Card
//                 iconUrl={game?.thumbnailUrl}
//                 key={game?.id}
//                 handleFavoriteGame={() =>
//                   handleFavoriteGame(game?.id, game?.isFavorite)
//                 }
//                 casinoGameId={game?.casinoGameId}
//                 isFavorite={game?.isFavorite}
//                 id={game?.id}
//                 isHomeScreen={true}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

      

// {/* <div className="overflow-hidden w-full" ref={emblaRef}>
//   <motion.div
//     className="flex space-x-2"
//     animate={{ x: "-100%" }} // Moves left
//     transition={{
//       repeat: Infinity,
//       repeatType: "loop",
//       duration: 10, // Adjust speed
//       ease: "linear",
//     }}
//   >
//     {[...gameData, ...gameData].map((game, index) => ( // Duplicate list for smooth loop
//       <div
//         key={`${game?.id}-${game?.casinoGameId}-${game?.casinoProviderId}-${index}`}
//         className="min-w-[100px] md:min-w-[160px]"
//       >
//         <Card
//           iconUrl={game?.thumbnailUrl}
//           key={game?.id}
//           handleFavoriteGame={() =>
//             handleFavoriteGame(game?.id, game?.isFavorite)
//           }
//           casinoGameId={game?.casinoGameId}
//           isFavorite={game?.isFavorite}
//           id={game?.id}
//           isHomeScreen={true}
//         />
//       </div>
//     ))}
//   </motion.div>
// </div> */}


//       {/* <div className="overflow-hidden w-full" ref={emblaRef}>
//         <motion.div
//           className="flex space-x-2"
//           initial={{ x: gameData?.[0]?.id % 2 === 0 ? "-100%" : "100%" }}
//           animate={{ x: gameData?.[0]?.id % 2 === 0 ? "100%" : "-100%" }}
//           transition={{
//             repeat: Infinity,
//             repeatType: "mirror",
//             duration: 10,
//             ease: "linear",
//           }}
//         >
//           {gameData?.map((game) => (
//             <div
//               key={`${game?.id}-${game?.casinoGameId}-${game?.casinoProviderId}`}
//               className="min-w-[100px] md:min-w-[160px]"
//             >
//               <Card
//                 iconUrl={game?.thumbnailUrl}
//                 key={game?.id}
//                 handleFavoriteGame={() =>
//                   handleFavoriteGame(game?.id, game?.isFavorite)
//                 }
//                 casinoGameId={game?.casinoGameId}
//                 isFavorite={game?.isFavorite}
//                 id={game?.id}
//                 isHomeScreen={true}
//               />
//             </div>
//           ))}
//         </motion.div>
//       </div> */}


//       {/* <div className="overflow-hidden w-full" ref={emblaRef}>
//         <div className="flex space-x-2">
//           {gameData?.map((game) => {
//             console.log("gameData------" ,gameData )
//             const animateDirection = directionToggle ? ["-100%", "100%"] : ["100%", "-100%"];
//             directionToggle = !directionToggle;

//             return (
//               <motion.div
//                 key={`${game?.id}-${game?.casinoGameId}-${game?.casinoProviderId}`}
//                 className="min-w-[100px] md:min-w-[160px]"
//                 animate={{ x: animateDirection }}
//                 transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
//               >
//                 <Card
//                   iconUrl={game?.thumbnailUrl}
//                   key={game?.id}
//                   handleFavoriteGame={() =>
//                     handleFavoriteGame(game?.id, game?.isFavorite)
//                   }
//                   casinoGameId={game?.casinoGameId}
//                   isFavorite={game?.isFavorite}
//                   id={game?.id}
//                   isHomeScreen={true}
//                 />
//               </motion.div>
//             );
//           })}
//         </div>
//       </div> */}

//       {/* <div className="overflow-hidden w-full" ref={emblaRef}>
//   <div className="flex flex-row-reverse space-x-2 rtl:space-x-reverse animate-marquee">
//     {gameData?.concat(gameData)?.map((game, index) => (
//       <div
//         key={`${game?.id}-${game?.casinoGameId}-${game?.casinoProviderId}-${index}`}
//         className="min-w-[100px] md:min-w-[160px]"
//       >
//         <Card
//           iconUrl={game?.thumbnailUrl}
//           key={game?.id}
//           handleFavoriteGame={() =>
//             handleFavoriteGame(game?.id, game?.isFavorite)
//           }
//           casinoGameId={game?.casinoGameId}
//           isFavorite={game?.isFavorite}
//           id={game?.id}
//           isHomeScreen={true}
//         />
//       </div>
//     ))}
//   </div>
// </div>

// <style>{`
// @keyframes marquee {
//   0% { transform: translateX(100%); }
//   100% { transform: translateX(-100%); }
// }

// .animate-marquee {
//   display: flex;
//   animation: marquee 15s linear infinite;
// }`}
// </style> */}


//       {/* <div className="overflow-hidden w-full" ref={emblaRef}>
//   <div className="flex space-x-2 rtl:space-x-reverse marquee-container">
//     <div className="marquee-content">
//       {[...gameData, ...gameData].map((game, index) => (
//         <div
//           key={`${game?.id}-${game?.casinoGameId}-${game?.casinoProviderId}-${index}`}
//           className="min-w-[100px] md:min-w-[160px]"
//         >
//           <Card
//             iconUrl={game?.thumbnailUrl}
//             key={game?.id}
//             handleFavoriteGame={() =>
//               handleFavoriteGame(game?.id, game?.isFavorite)
//             }
//             casinoGameId={game?.casinoGameId}
//             isFavorite={game?.isFavorite}
//             id={game?.id}
//             isHomeScreen={true}
//           />
//         </div>
//       ))}
//     </div>
//   </div>
// </div>

// <style>{`
// .marquee-container {
//   display: flex;
//   overflow: hidden;
//   white-space: nowrap;
//   position: relative;
//   width: 100%;
// }

// .marquee-content {
//   display: flex;
//   gap: 10px;
//   min-width: 200%;
//   animation: marquee-scroll 10s linear infinite;
// }

// @keyframes marquee-scroll {
//   from {
//     transform: translateX(0);
//   }
//   to {
//     transform: translateX(-50%);
//   }
// }
// `}</style> */}



//     </div>
//   );
// }


// 'use client';
// import { chevronLeft, chevronRight, gameIcon } from '@/assets/svg';
// import Card from '@/common/components/custom-card/component';
// import Image from 'next/image';
// import useCasinoSection from '../../hooks/useCasinoSection';
// import { useState } from 'react';
// import { motion } from "framer-motion";

// export default function CasinoSection({
//   categoryId,
//   categoryName,
//   casinoGames,
// }) {
//   console.log("categoryId>>>>>>>", categoryId);
//   // console.log("categoryName>>>>>>>", categoryName);
  
//   const [gameData, setGameData] = useState(casinoGames);
//   const {
//     emblaRef,
//     scrollNext,
//     scrollPrev,
//     handleFavoriteGame,
//     clickHandler,
//   } = useCasinoSection({ setGameData });

//   const isOddCategory = categoryId % 2 !== 0;
//   const animationDirection = isOddCategory ? "translateX(0%)" : "translateX(-50%)";

//   return (
//     <div className="relative w-full mx-auto mt-2">
//       <div className="flex justify-between items-center">
//         <div className="flex shiny-hover text-white justify-start items-center bg-[rgb(var(--lb-blue-800))] p-2 md:px-3 rounded-[50px] m-2 relative font-extrabold text-[12px] sm:text-sm">
//           <Image src={gameIcon} alt="category" className="mx-2 w-[18px] sm:w-[24px]" />
//           {categoryName}
//         </div>
//         <div className="flex items-center gap-x-1 md:gap-x-2">
//           <button
//             onClick={() => clickHandler({ categoryId })}
//             className="text-white font-bold text-[12px] sm:text-sm shiny-hover flex-center p-2 rounded-[50px] hover:bg-[#848D96] bg-[rgb(var(--lb-blue-800))] "
//           >
//             Show All
//           </button>
//           <div className="flex bg-[rgb(var(--lb-blue-800))] rounded-[50px] text-center cursor-pointer">
//             <button
//               onClick={scrollPrev}
//               className="flex-center w-8 md:w-11 border border-[hsl(var(--lb-blue-400))] p-2 rounded-l-[50px] opacity-30 hover:opacity-100 hover:text-white hover:bg-transparent cursor-default"
//             >
//               <Image src={chevronLeft} alt="left" />
//             </button>
//             <button
//               onClick={scrollNext}
//               className="flex-center w-8 md:w-11 border border-[hsl(var(--lb-blue-400))] p-2 border-l-0 hover:opacity-100 text-blue-200 opacity-30 hover:text-white hover:bg-transparent rounded-r-[50px]"
//             >
//               <Image src={chevronRight} alt="right" />
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="overflow-hidden w-full" ref={emblaRef}>
//         <motion.div
//           className="flex space-x-2 marquee-content"
//           animate={{ x: isOddCategory ? ["0%", "-50%"] : ["-50%", "0%"] }}
//           transition={{
//             repeat: Infinity,
//             duration: 10, 
//             ease: "linear",
//           }}
//         >
//           {[...gameData, ...gameData].map((game, index) => (
//             <div
//               key={`${game?.id}-${game?.casinoGameId}-${game?.casinoProviderId}-${index}`}
//               className="min-w-[100px] md:min-w-[160px]"
//             >
//               <Card
//                 iconUrl={game?.thumbnailUrl}
//                 handleFavoriteGame={() => handleFavoriteGame(game?.id, game?.isFavorite)}
//                 casinoGameId={game?.casinoGameId}
//                 isFavorite={game?.isFavorite}
//                 id={game?.id}
//                 isHomeScreen={true}
//               />
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       <style>{`
//         .marquee-content {
//           display: flex;
//           min-width: 200%;
//         }
//       `}</style>
//     </div>
//   );
// }


// 'use client';
// import { chevronLeft, chevronRight, gameIcon } from '@/assets/svg';
// import Card from '@/common/components/custom-card/component';
// import Image from 'next/image';
// import useCasinoSection from '../../hooks/useCasinoSection';
// import { useState, useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';

// let marqueeCounter = 0; 

// export default function CasinoSection({
//   categoryId,
//   categoryName,
//   casinoGames,
// }) {
//   const [gameData, setGameData] = useState(casinoGames);
//   const {
//     emblaRef,
//     scrollNext,
//     scrollPrev,
//     handleFavoriteGame,
//     clickHandler,
//   } = useCasinoSection({ setGameData });

//   const instanceIndex = useRef(0);

//   useEffect(() => {
//     instanceIndex.current = marqueeCounter++;
//   }, []);

//   const isEven = instanceIndex.current % 2 === 0;
//   const animationDirection = isEven ? ['0%', '-50%'] : ['-50%', '0%'];

//   return (
//     <div className="relative w-full mx-auto mt-2">
//       <div className="flex justify-between items-center">
//         <div className="flex shiny-hover text-white justify-start items-center bg-[rgb(var(--lb-blue-800))] p-2 md:px-3 rounded-[50px] m-2 relative font-extrabold text-[12px] sm:text-sm">
//           <Image src={gameIcon} alt="category" className="mx-2 w-[18px] sm:w-[24px]" />
//           {categoryName}
//         </div>
//         <div className="flex items-center gap-x-1 md:gap-x-2">
//           <button
//             onClick={() => clickHandler({ categoryId })}
//             className="text-white font-bold text-[12px] sm:text-sm shiny-hover flex-center p-2 rounded-[50px] hover:bg-[#848D96] bg-[rgb(var(--lb-blue-800))] "
//           >
//             Show All
//           </button>
//           <div className="flex bg-[rgb(var(--lb-blue-800))] rounded-[50px] text-center cursor-pointer">
//             <button
//               onClick={scrollPrev}
//               className="flex-center w-8 md:w-11 border border-[hsl(var(--lb-blue-400))] p-2 rounded-l-[50px] opacity-30 hover:opacity-100 hover:text-white hover:bg-transparent cursor-default"
//             >
//               <Image src={chevronLeft} alt="left" />
//             </button>
//             <button
//               onClick={scrollNext}
//               className="flex-center w-8 md:w-11 border border-[hsl(var(--lb-blue-400))] p-2 border-l-0 hover:opacity-100 text-blue-200 opacity-30 hover:text-white hover:bg-transparent rounded-r-[50px]"
//             >
//               <Image src={chevronRight} alt="right" />
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="overflow-hidden w-full" ref={emblaRef}>
//         <motion.div
//           className="flex space-x-2 marquee-content"
//           animate={{ x: animationDirection }}
//           transition={{
//             repeat: Infinity,
//             duration: 10,
//             ease: 'linear',
//           }}
//         >
//           {[...gameData, ...gameData].map((game, index) => (
//             <div
//               key={`${game?.id}-${game?.casinoGameId}-${game?.casinoProviderId}-${index}`}
//               className="min-w-[100px] md:min-w-[160px]"
//             >
//               <Card
//                 iconUrl={game?.thumbnailUrl}
//                 handleFavoriteGame={() => handleFavoriteGame(game?.id, game?.isFavorite)}
//                 casinoGameId={game?.casinoGameId}
//                 isFavorite={game?.isFavorite}
//                 id={game?.id}
//                 isHomeScreen={true}
//               />
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       <style>{`
//         .marquee-content {
//           display: flex;
//           min-width: 200%;
//         }
//       `}</style>
//     </div>
//   );
// }


'use client';
import { chevronLeft, chevronRight, gameIcon } from '@/assets/svg';
import Card from '@/common/components/custom-card/component';
import Image from 'next/image';
import useCasinoSection from '../../hooks/useCasinoSection';
import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

let marqueeCounter = 0;

export default function CasinoSection({
  categoryId,
  categoryName,
  casinoGames,
}) {
  const [gameData, setGameData] = useState(casinoGames);
  const {
    emblaRef,
    scrollNext,
    scrollPrev,
    handleFavoriteGame,
    clickHandler,
  } = useCasinoSection({ setGameData });

  const instanceIndex = useRef(0);
  const controls = useAnimation();

  useEffect(() => {
    instanceIndex.current = marqueeCounter++;
    controls.start({
      x: animationDirection,
      transition: {
        repeat: Infinity,
        duration: 10,
        ease: 'linear',
      },
    });
  }, []);

  const isEven = instanceIndex.current % 2 === 0;
  const animationDirection = isEven ? ['0%', '-50%'] : ['-50%', '0%'];

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    controls.start({
      x: animationDirection,
      transition: {
        repeat: Infinity,
        duration: 10,
        ease: 'linear',
      },
    });
  };

  return (
    <div className="relative w-full mx-auto mt-2">
      <div className="flex justify-between items-center">
        <div className="flex shiny-hover text-white justify-start items-center bg-[rgb(var(--lb-blue-800))] p-2 md:px-3 rounded-[50px] m-2 relative font-extrabold text-[12px] sm:text-sm">
          <Image src={gameIcon} alt="category" className="mx-2 w-[18px] sm:w-[24px]" />
          {categoryName}
        </div>
        <div className="flex items-center gap-x-1 md:gap-x-2">
          <button
            onClick={() => clickHandler({ categoryId })}
            className="text-white font-bold text-[12px] sm:text-sm shiny-hover flex-center p-2 rounded-[50px] hover:bg-[#848D96] bg-[rgb(var(--lb-blue-800))] "
          >
            Show All
          </button>
          <div className="flex bg-[rgb(var(--lb-blue-800))] rounded-[50px] text-center cursor-pointer">
            <button
              onClick={scrollPrev}
              className="flex-center w-8 md:w-11 border border-[hsl(var(--lb-blue-400))] p-2 rounded-l-[50px] opacity-30 hover:opacity-100 hover:text-white hover:bg-transparent cursor-default"
            >
              <Image src={chevronLeft} alt="left" />
            </button>
            <button
              onClick={scrollNext}
              className="flex-center w-8 md:w-11 border border-[hsl(var(--lb-blue-400))] p-2 border-l-0 hover:opacity-100 text-blue-200 opacity-30 hover:text-white hover:bg-transparent rounded-r-[50px]"
            >
              <Image src={chevronRight} alt="right" />
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden w-full" ref={emblaRef}>
        <motion.div
          className="flex space-x-2 marquee-content"
          animate={controls}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {[...gameData, ...gameData].map((game, index) => (
            <div
              key={`${game?.id}-${game?.casinoGameId}-${game?.casinoProviderId}-${index}`}
              className="min-w-[100px] md:min-w-[160px]"
            >
              <Card
                iconUrl={game?.thumbnailUrl}
                handleFavoriteGame={() => handleFavoriteGame(game?.id, game?.isFavorite)}
                casinoGameId={game?.casinoGameId}
                isFavorite={game?.isFavorite}
                id={game?.id}
                isHomeScreen={true}
              />
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .marquee-content {
          display: flex;
          min-width: 200%;
        }
      `}</style>
    </div>
  );
}
