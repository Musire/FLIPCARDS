const QuestionBox = ({ handleClick, open }) => {
    const isOpen = open ? "translate-x-0" : "translate-x-1/2"


    return ( 
        <div className={`z-20 col-start-1 row-span-2 centered easy-transition bg-smoke p-8 rounded-xl ${isOpen} `}>
            <button
                onClick={() => handleClick()}
                className="px-4 py-4 w-full bg-deep/60 text-silver text-xl rounded-xl hover:bg-deep "
            >
                Slide-Card
            </button>
        </div>
     );
}
 
export default QuestionBox;