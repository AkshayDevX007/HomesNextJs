import Image from "next/image";

export default function() {
    return(
        <div className="w-80 bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer">
        <Image 
          width={500} 
          height={500} 
          className="w-full h-48 object-cover"
          src="/images/img1.jpg" 
          alt="Resort" 
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Resort</h2>
          <hr className="border-t border-gray-200 my-2" />
          <p className="text-gray-600 mt-2">A simple and elegant resort</p>
        </div>
      </div>
    )
}