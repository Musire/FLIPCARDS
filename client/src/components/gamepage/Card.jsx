import { useState } from "react"
import { QuestionBox, ResponseBox, ImageBox } from "./"

const GameCard = () => {
    const [ open, setOpen ] = useState(false)

    const toggleOpen = () => {
        setOpen(prev => !prev)
    }
    return ( 
        <div className="w-full h-full grid grid-rows-2 grid-cols-2">
            <QuestionBox open={open} handleClick={toggleOpen}/>
            <ImageBox open={open} />
            <ResponseBox open={open} />
        </div>
     );
}
 
export default GameCard;