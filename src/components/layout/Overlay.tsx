import { motion, AnimatePresence } from 'framer-motion';

interface OverlayProps {
  isVisible: boolean;
  onClose?: () => void;
}

export function Overlay({ isVisible, onClose }: OverlayProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[40] bg-black/40 backdrop-blur-md pointer-events-auto"
        />
      )}
    </AnimatePresence>
  );
}
