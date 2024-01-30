import Image from "next/image"

const FindusPage = () => {
  return (
    <div>
      <div className="px-10">
      <div className="flex justify-center relative">
        <Image src={'/images/leftImage.jpg'} width={500} height={500} className="w-[300px] h-[300px] object-cover md:w-[500px] md:h-[500px]" alt="find us pic" />
      <div className="absolute top-6 -right-5 bg-white w-[200px] h-[250px] shadow-xl pl-3 pt-4 sm:right-10 md:w-[400px] md:h-[400px] md:top-10 md:pl-6 md:pt-7 xl:right-48 2xl:right-96">
        <h2 className="text-[#9eb4b4] font-semibold text-xl md:text-3xl">OPENING HOURS</h2>
        <h3 className="mt-5 mb-2 text-[#9eb4b4] font-semibold md:text-2xl md:mt-14 ">Tuesday - Sunday</h3>
        <span className="md:text-lg">8:00 AM - 8:00 PM</span>
        <h3 className="mt-5 mb-2 text-[#9eb4b4] font-semibold md:text-2xl md:mt-14 ">Monday</h3>
        <span className="md:text-lg">Closed</span>
      </div>
      </div>
      </div>

      <div className="flex flex-col items-center mt-16 px-10 sm:flex-row sm:items-start sm:justify-center sm:px-5 md:p-0">
        <div className="bg-[#7b9999] mb-5 justify-evenly w-[300px] h-[450px] p-4 sm:h-[470px] md:w-6/12 md:h-[500px] 2xl:pl-10 2xl:pt-10">
          <h2 className="text-white font-semibold">GET IN TOUCH</h2>
          <p className="text-white mb-2 xl:mb-5">If you have any questions about Tout De Sweet, please send an email.</p>
          <form className="flex flex-col">
            <input type="text" placeholder="First Name" className="input input-bordered input-md w-full max-w-xs mb-2 xl:max-w-md 2xl:max-w-lg 2xl:mr-5" />
            <input type="text" placeholder="Last Name" className="input input-bordered input-md w-full max-w-xs mb-2 xl:max-w-md 2xl:max-w-lg" />
            <input type="text" placeholder="Email" className="input input-bordered input-md w-full max-w-xs mb-2 xl:max-w-md 2xl:max-w-lg 2xl:mr-5" />
            <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full max-w-xs xl:max-w-md 2xl:max-w-lg"  rows={3}></textarea>
          </form>
        </div>
        <div className="w-[300px] h-[300px]  sm:h-[470px] md:h-[500px] md:w-6/12">
        <Image src={'/images/Directions.png'} width={500} height={500} className="object-cover w-full h-full" alt="direction" />
        </div>
      </div>
    </div>
  )
}

export default FindusPage