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
                className={`w-full h-full relative rounded-xl ${
                    isOpen ? "shadow-[0_0_30px_rgba(244,63,94,0.6)]" : ""
                }`}
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
                    className="absolute inset-0 bg-white p-4 shadow-xl flex items-center justify-center text-center border-2 border-rose-200 rounded-xl"
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
    const [openCards, setOpenCards] = useState([]);

    const compliments = [
        "Being around you makes even ordinary days feel special.",
        "I love how your eyes light up when you talk about things you love.",
        "Your laugh is literally my favorite sound in the entire universe. Never stop."
    ];

    const handleOpen = (index) => {
        if (!openCards.includes(index)) {
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

            <div className="flex gap-6 flex-wrap justify-center">
                {compliments.map((text, index) => (
                    <Card
                        key={index}
                        text={text}
                        isOpen={openCards.includes(index)}
                        onClick={() => handleOpen(index)}
                    />
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
