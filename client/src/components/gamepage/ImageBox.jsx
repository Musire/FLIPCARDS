const ImageBox = ({ open }) => {
    const isOpen = open ? "translate-x-0" : "-translate-x-1/2"

    return ( 
        <div className={`z-10 col-start-2 row-start-1 centered easy-transition ${isOpen}`}> image box</div>
     );
}
 
export default ImageBox;