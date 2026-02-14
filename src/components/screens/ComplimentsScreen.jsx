import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../Button";
import { MoveRight } from "lucide-react";

const Card = ({ text, isOpen, onClick }) => {
    return (
        <div
            className="relative w-40 h-48 cursor-pointer"
            onClick={onClick}
        >
            <motion.div
                className="w-full h-full relative"
                animate={{ rotateY: isOpen ? 180 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front Side */}
                <div
                    className="absolute inset-0 bg-rose-100 flex items-center justify-center text-rose-600 font-semibold rounded-xl shadow-xl"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    Tap to open 💌
                </div>

                {/* Back Side */}
                <div
                    className="absolute inset-0 bg-white p-4 shadow-xl flex flex-col justify-center text-center border-2 border-rose-200 rounded-xl"
                    style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                    }}
                >
                    <p className="text-sm text-gray-700 font-medium leading-relaxed">
                        {text}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default function ComplimentsScreen({ onNext }) {
    const [openIndex, setOpenIndex] = useState(-1);

    const compliments = [
        "Being around you makes even ordinary days feel special.",
        "I love how your eyes light up when you talk about things you love.",
        "Your laugh is literally my favorite sound in the entire universe. Never stop."
    ];

    return (
        <motion.div
            className="flex flex-col items-center justify-center w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <h2 className="text-4xl md:text-5xl font-dancing font-semibold text-rose-500/85 mb-12 text-center">
                My favorite things about you
            </h2>

            <div className="relative w-full max-w-md h-96 flex items-center justify-center gap-6">
                {compliments.map((text, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{
                            opacity: openIndex >= index - 1 ? 1 : 0,
                            y: openIndex >= index - 1 ? 0 : 40
                        }}
                        transition={{ duration: 0.6, delay: index * 0.4 }}
                    >
                        <Card
                            text={text}
                            isOpen={openIndex === index}
                            onClick={() => {
                                if (index === openIndex + 1) {
                                    setOpenIndex(index);
                                }
                            }}
                        />
                    </motion.div>
                ))}
            </div>

            <Button
                onClick={onNext}
                className="mt-8"
            >
                One more thing <MoveRight size={18} className="mt-0.5" />
            </Button>
        </motion.div>
    );
}
