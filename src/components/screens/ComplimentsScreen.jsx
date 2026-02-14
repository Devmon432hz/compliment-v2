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
                {/* Front */}
                <div
                    className="absolute inset-0 bg-rose-100 flex items-center justify-center text-rose-600 font-semibold rounded-xl shadow-xl"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    Tap to open 💌
                </div>

                {/* Back */}
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

    // store multiple opened cards
    const [openCards, setOpenCards] = useState([]);

    const compliments = [
        "Being around you makes even ordinary days feel special.",
        "I love how your eyes light up when you talk about things you love.",
        "Your laugh is literally my favorite sound in the entire universe. Never stop."
    ];

    const handleOpen = (index) => {
        // only allow next card to open in sequence
        if (index === openCards.length) {
            setOpenCards([...openCards, index]);
        }
    };

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
                            opacity: index <= openCards.length ? 1 : 0,
                            y: index <= openCards.length ? 0 : 40
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card
                            text={text}
                            isOpen={openCards.includes(index)}
                            onClick={() => handleOpen(index)}
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
