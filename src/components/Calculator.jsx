import React, { useState } from 'react';
import { CALC_BUTTON_LIST, CALC_OPERATOR_LIST } from '../constants/calculator.constants';

function Calculator() {

    const [dispalyInput, setDisplayInput] = useState("");

    const handleButtonClick = (value) => {
        if (value === "AC") {
            setDisplayInput("");
        } else if (value === "DEL") {
            setDisplayInput((prev) => prev.slice(0, -1));
        } else if (value === "=") {
            try {
                const formattedDisplayInput = dispalyInput.replace(/\^/g, "**");
                const result = eval(formattedDisplayInput);
                setDisplayInput(result.toString());
            } catch (error) {
                setDisplayInput("Error");
            }
        } else {
            setDisplayInput((prev) => {
                const lastChar = prev.slice(-1);
                const isLastCharOperator = CALC_OPERATOR_LIST.includes(lastChar);
                const isCurrentCharOperator = CALC_OPERATOR_LIST.includes(value);

                if (isLastCharOperator && isCurrentCharOperator) {
                    return prev;
                } else if (prev.slice(-1) === "-" && value === "-") {
                    return prev + "(-";
                } else {
                    return prev + value;
                }
            });
        }
    };

    return (
        <div className='w-full justify-center items-center gap-4 flex flex-col'>
            <div className='sm:w-1/3 bg-[#3C3E45] shadow-lg p-5 rounded-xl relative flex flex-col justify-center gap-5'>
                <div className='w-full h-9 text-2xl text-end text-[#13A795] overflow-auto'>{dispalyInput}</div>
            </div>
            <div className='sm:w-1/3 bg-[#3C3E45] shadow-lg p-5 rounded-xl relative flex flex-col justify-center gap-5'>
                <div className='grid grid-cols-4 gap-2'>
                    {CALC_BUTTON_LIST.map((item, index) => {
                        const bgColor =
                        item === "AC" || item === "="
                          ? "bg-[#637BBF]"
                          : item === "DEL"
                          ? "bg-[#D13F3F]"
                          : "bg-[#212429] hover:bg-[#13A795]";
                        
                          const span = item === "=" ? "col-span-2" : "";
                        return (
                            <button key={index} onClick={() => handleButtonClick(item.toString())} className={`${bgColor} ${span} p-0 px-5 py-4 border-1 border-[#596373] w-full h-full flex flex-col items-start rounded-xl hover:bg-[#13A795]`}>{item}</button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Calculator