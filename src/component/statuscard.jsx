import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const StatusCard = ({ title, count, titleColor }) => {
  const [flipped, setFlipped] = useState(false);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (count !== displayCount) {
      // Flip animation
      setFlipped(true);
      
      // Count animation
      const duration = 1000;
      const startValue = displayCount;
      const startTime = Date.now();
      
      const animateCount = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = Math.floor(startValue + (count - startValue) * progress);
        
        setDisplayCount(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
          setFlipped(false);
        }
      };
      
      animateCount();
    }
  }, [count, displayCount]);

  return (
    <motion.div 
      className="relative w-[150px] h-[160px]"
      whileHover={{ y: -10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div 
        className="w-full h-full bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col items-center justify-center text-center"
        animate={{ 
          rotateY: flipped ? 180 : 0,
          boxShadow: flipped 
            ? "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
            : "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
        }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.span
          className="text-xl font-bold mb-1"
          style={{ color: titleColor }}
          animate={{ scale: flipped ? 0.8 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.span>
        <motion.span 
          className="text-6xl font-bold text-gray-800"
          animate={{ scale: flipped ? 0.8 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {displayCount}
        </motion.span>
        
        {/* Decorative elements */}
        <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-[#006F35] opacity-20"></div>
        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#E05F14] opacity-30"></div>
      </motion.div>
    </motion.div>
  );
};

StatusCard.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number.isRequired,
  titleColor: PropTypes.string,
};

StatusCard.defaultProps = {
  title: "IZIN",
  titleColor: "#4CAF50",
};

export default StatusCard;