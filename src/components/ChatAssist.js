import { useRef, useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LeftChat from "./LeftChat";
import RightChat from "./RightChat";
import Typewriter from 'typewriter-effect';
import chatLogo from "../images/photo_2024-11-04_14-11-34.jpg";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ChatAssist = () => {
    const chatInputRef = useRef(null);
    const chatContainerRef = useRef(null);
    const [messages, setMessages] = useState([]);
    const [chatVisible, setChatVisible] = useState(false);
    const [showTypingIndicator, setShowTypingIndicator] = useState(false);
    const suggestions = ['About your Company', 'raise a complaint', 'Your Expertise', 'service enquiry'];
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const handleSuggestion = (suggest) => {
        chatInputRef.current.value = suggest;
    };
    const handleClear = () => {
        chatInputRef.current.value = "";
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setChatVisible(true);
        const userMessage = chatInputRef.current.value.trim();
        if (userMessage) {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: userMessage, sender: "user" }
            ]);
            chatInputRef.current.value = "";
            setShowTypingIndicator(true);
            setTimeout(async () => {
                let botResponse = "";
                // console.log(userMessage)

                const response = await fetch('http://192.168.29.53:8000/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ message: userMessage })
                })
                const data = await response.json();
                botResponse = data.response;
                // if (userMessage.toLowerCase().includes("hi") || userMessage.toLowerCase().includes("hello")) { botResponse = "Hi there, How can I Help you? "; }
                // else if (userMessage.toLowerCase().includes("about")) { botResponse = "Cyepro is a premier product development company specializing in cutting-edge web and mobile application development. Our team of experienced developers, designers, and quality analysts work collaboratively to create tailored, scalable solutions that meet your specific needs. Partner with us to drive innovation and achieve sustainable growth for your business with our world-class services. Let us help you bring your vision to life."; }
                // else { botResponse = "Our cutting-edge Dealership Management Solution platform empowers manufacturers and dealers with real-time insights, automation of tasks, and increased efficiency all in one convenient platform tailored specifically for auto dealerships. By consolidating all activities and interactions into a user-friendly interface, our platform enables dealers to streamline operations, make informed decisions, and thrive in a competitive market. With a dedicated team of agile developers, designers, and quality analysts, we deliver customized and scalable products that meet our clients’ needs. Count on us as your trusted partner to provide innovative solutions that drive sustainable business growth and deliver top-tier results. Choose our platform for world-class solutions that will elevate your dealership to new height"; }
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: botResponse, sender: "bot" }
                ]);
                setShowTypingIndicator(false);
            }, 1000);
            setTimeout(() => {
                chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
            }, 100)
        }
    };
    return (
        <>
            <div className="absolute w-full left-0 pl-[260px] pr-9 h-20 pt-3 flex items-center justify-between px-4 bg-white">
                <div className="flex items-center">
                    <img className="w-28 ml-8 mr-4" src={chatLogo} alt="menu" />
                </div>
                <select className="ml-4 p-2 rounded">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                </select>
            </div>

            {chatVisible && (
                <div ref={chatContainerRef} className="py-20 pb-24 px-24 h-full flex flex-col chat overflow-y-auto">
                    {messages.map((msg, index) =>
                        msg.sender === "user" ? (
                            <LeftChat key={index} text={msg.text} />
                        ) : (
                            <RightChat key={index} text={msg.text} />
                        )
                    )}
                    {showTypingIndicator && (
                        <div className="self-start mt-2 ml-12 flex gap-1 typing-indicator px-3 py-3 rounded-2xl rounded-b-[0] rounded-r-2xl bg-slate-200">
                            <div className="typing-dot w-2 h-2 bg-[#002c5f] rounded-full animate-bounce delay-75"></div>
                            <div className="typing-dot w-2 h-2 bg-[#002c5f] rounded-full animate-bounce delay-150"></div>
                            <div className="typing-dot w-2 h-2 bg-[#002c5f] rounded-full animate-bounce delay-225"></div>
                        </div>
                    )}
                </div>
            )}

            <div className={!chatVisible ? "absolute w-full bottom-[30%] left-0 pl-[260px] py-3" : "absolute w-full bottom-0 left-0 pl-[260px] py-3"}>
                {!chatVisible && (
                    <h1 className="text-center mb-8 text-4xl font-semibold" style={{ color: '#002c5f' }}>
                        {/* <Typewriter
                            options={{
                                strings: ["How can I assist you?"],
                                autoStart: true,
                                loop: false,
                                delay: 75,
                            }}
                        /> */}
                        {isTypingComplete ? (
                            "How can I assist you?" // Final text to display after typing completes
                        ) : (
                            <Typewriter
                                // options={{
                                //     strings: ["How can I assist you?"],
                                //     autoStart: true,
                                //     loop: false, // Disable looping
                                //     delay: 75,
                                // }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("How can I assist you?")
                                        .callFunction(() => setIsTypingComplete(true)) // Set state to show final text
                                        .start();
                                }}
                            />
                        )}
                    </h1>
                )}
                <form className="w-full flex items-center px-4 my-5 justify-center" onSubmit={handleFormSubmit}>
                    <div className=" relative w-[70%] mr-4">
                        <input
                            ref={chatInputRef}
                            type="text"
                            className="w-full bg-gray-200 px-4 py-2  rounded-2xl"
                            placeholder="Ask me anything!"
                        />
                        <div className="absolute top-[50%] right-3 translate-y-[-50%] z-10 text-gray-500 cursor-pointer" onClick={handleClear}>
                            <FontAwesomeIcon icon={faXmark} size="lg" />
                        </div>
                    </div>
                    <button type="submit" className="text-white rounded-full w-10 h-10 p-2" style={{ backgroundColor: '#002c5f' }}>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                </form>
                {!chatVisible && (
                    <div className="mt-5 flex w-full justify-center px-4">
                        {suggestions.map((suggestion) => (
                            <div
                                key={suggestion}
                                onClick={() => handleSuggestion(suggestion)}
                                className="px-3 py-1 border-[1px] mx-2 cursor-pointer border-stone-400 shadow-sm rounded-xl text-gray-500"
                            >
                                {suggestion}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default ChatAssist;
