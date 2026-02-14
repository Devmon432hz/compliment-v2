const Card = ({ text, isOpen, onClick }) => {
    return (
        <motion.div
            className="relative w-40 h-48 cursor-pointer"
            onClick={onClick}
            animate={
                isOpen
                    ? { y: 0 }
                    : { y: [0, -6, 0] }
            }
            transition={
                isOpen
                    ? { duration: 0.4 }
                    : {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                      }
            }
        >
            <motion.div
                className={`w-full h-full relative rounded-xl ${
                    isOpen
                        ? "shadow-[0_0_30px_rgba(244,63,94,0.6)]"
                        : ""
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
        </motion.div>
    );
};
