import { IoCheckmarkCircleOutline as CorrectIcon, IoCloseCircleOutline as WrongIcon } from "react-icons/io5";
import { LoadedGameContext } from "../../pages";


const ResponseBox = ({ open }) => {
    const { handleCorrect, handleIncorrect } = LoadedGameContext()
    const isOpen = open ? "translate-x-0" : "-translate-x-1/2"
    
    return ( 
        <div className={`z-10 col-start-2 row-start-2 evenly easy-transition p-8 ${isOpen}`}>
            <button onClick={handleIncorrect} className="">
                <WrongIcon size={70} />
            </button>
            <button onClick={handleCorrect} className="">
                <CorrectIcon size={70} />
            </button>
        </div>
     )
}
 
export default ResponseBox;