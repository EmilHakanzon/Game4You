"use client";
import { useSearchStore } from "@/store/searchState";
import { Dialog } from "@headlessui/react";
import { GameModalContent } from "@/ui/modalContent";
import { motion, AnimatePresence } from "framer-motion";

export const GameModal = () => {
  const { selectedGame, setSelectedGame } = useSearchStore();

  return (
    <AnimatePresence>
      {selectedGame && (
        <Dialog
          open={!!selectedGame}
          onClose={() => setSelectedGame(null)}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, rotateX: 10, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            className="relative z-50 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black p-6 rounded-2xl shadow-2xl border border-white/10 w-full max-w-xl"
            initial={{ opacity: 0, rotateX: -20, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, rotateX: 0, scale: 1, y: 0 }}
            exit={{ opacity: 0, rotateX: 10, scale: 0.95, y: 50 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 18,
              duration: 0.5,
              delay: 0.1,
            }}
          >
            <GameModalContent
              game={selectedGame}
              onClose={() => setSelectedGame(null)}
            />
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
