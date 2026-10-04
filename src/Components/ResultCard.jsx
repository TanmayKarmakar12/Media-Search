import { useDispatch } from "react-redux";
import { addCollection, addedToast } from "../Redux/Features/collectionSlice";

const ResultCard = ({ item }) => {

    return (
        <div className='w-full sm:w-[48%] md:w-[31%] lg:w-[23%] xl:w-[18vw] relative h-72 sm:h-80 bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl'>
            <a target='_blank' className='h-full' href={item.src}>
                {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}

            </a>

            <div id='bottom' className='flex justify-between gap-2 sm:gap-3 items-center w-full px-3 sm:px-4 py-4 sm:py-6 absolute bottom-0 text-white bg-linear-to-t from-black/90 via-black/50 to-transparent'>
                <h2 className='text-lg font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>
                

            </div>

        </div>
    )
}

export default ResultCard
