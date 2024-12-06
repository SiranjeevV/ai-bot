import { useState } from "react";
import { rightIcon } from "../utils/contants";
import Typewriter from 'typewriter-effect';

const RightChat = ({ text }) => {
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const duration = 2000
    const delay = Math.floor(duration / text.length)
    return (
        <div className="flex self-start my-2 pr-14 ">
            <img className="w-12 mr-1 mt-[15px]  rounded-2xl self-end" src={rightIcon} alt="menu" />

            <div className="w-fit h-fit px-3 py-2 rounded-2xl rounded-b-[0] rounded-r-2xl mr-2 border-zinc-200  border-2">
                <h1 style={{ color: '#000000' }} className="text-[17px]">
                    {/* {text} */}
                    {isTypingComplete ? (
                        text // Final text to display after typing completes
                    ) : (
                        <Typewriter
                            options={{
                                //     strings: ["How can I assist you?"],
                                //     autoStart: true,
                                //     loop: false, // Disable looping
                                delay: delay,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString(text)
                                    .callFunction(() => setIsTypingComplete(true)) // Set state to show final text
                                    .start();
                            }}
                        />
                    )}
                </h1>
            </div>
        </div>
    );
};

export default RightChat;
