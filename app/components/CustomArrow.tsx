import React from "react";

import { CustomArrowProps } from "react-slick";

import { FaGreaterThan, FaLessThan } from 'react-icons/fa'
import { title } from "process";

interface extendedCustomArrowPorps extends CustomArrowProps {
    isNext: boolean;
}

const CustomArrow: React.FC<extendedCustomArrowPorps> = ({
    className,
    style,
    onClick,
    isNext
    
}) => {

    

    return (
        <div
            className={`${ className} relative category-next`}
            style={{ ...style }}
            onClick={onClick}
        >
            <span className={`  text-black w-[30px] bg-amber-200 h-[30px] rounded-full inline-flex items-center justify-center border-2 border-amber-500 absolute
            top-1/2 -translate-y-1/2 ${isNext ? '-right-1' : '-left-1'}`}>

                {isNext ? <FaGreaterThan size={10} /> : <FaLessThan size={10} />}
            </span>    </div>
    );
}

export default CustomArrow


