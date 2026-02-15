"use client"

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroScreen from "@/components/screens/IntroScreen";
import ComplimentsScreen from "@/components/screens/ComplimentsScreen";
import MessageScreen from "@/components/screens/MessageScreen";
import OutroScreen from "@/components/screens/OutroScreen";

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0)

  const screens = [
    <IntroScreen key="intro" onNext={() => setCurrentScreen(1)} />,
    <ComplimentsScreen key="compliments" onNext={() => setCurrentScreen(2)} />,
    <MessageScreen key="message" onNext={() => setCurrentScreen(3)} />,
    <OutroScreen key="outro" />
  ]

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">

      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="px-4 py-6 will-change-transform"
        >
          {screens[currentScreen]}
        </motion.div>
      </AnimatePresence>

    </div>
  );
}
