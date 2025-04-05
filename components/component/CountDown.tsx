
"use client";

import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { motion } from "framer-motion";

const CyberCountdown = () => {
  const [targetDate, setTargetDate] = useState(null);

  useEffect(() => {
    const d = new Date("April 25, 2025 09:00:00.000").getTime();
    setTargetDate(d);
  }, []);

  const [encryptedText, setEncryptedText] = useState("");
  const [decryptionState, setDecryptionState] = useState("encrypting"); 
  
  useEffect(() => {
    const finalText = "REMAINING TIME";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,./<>?`~";
    let interval;
    let counter = 0;
    
    if (decryptionState === "encrypting") {
      interval = setInterval(() => {
        let result = "";
        for (let i = 0; i < finalText.length; i++) {
          const randomIndex = Math.floor(Math.random() * chars.length);
          result += chars[randomIndex];
        }
        setEncryptedText(result);
        
        counter++;
        if (counter >= 20) { 
          setDecryptionState("decrypting");
          counter = 0;
        }
      }, 100);
    } else {
      let currentText = "";
      for (let i = 0; i < finalText.length; i++) {
        currentText += Math.random() > 0.5 ? finalText[i] : chars[Math.floor(Math.random() * chars.length)];
      }
      setEncryptedText(currentText);
      
      interval = setInterval(() => {
        let result = "";
        let correctChars = 0;
        
        for (let i = 0; i < finalText.length; i++) {
          if (encryptedText[i] === finalText[i] || Math.random() > 0.7) {
            result += finalText[i];
            correctChars++;
          } else {
            const randomIndex = Math.floor(Math.random() * chars.length);
            result += chars[randomIndex];
          }
        }
        
        setEncryptedText(result);
        if (correctChars === finalText.length) {
          setTimeout(() => {
            setDecryptionState("encrypting");
          }, 2000); 
        }
      }, 100);
    }
    
    return () => clearInterval(interval);
  }, [decryptionState, encryptedText]);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <div className="text-green-400 text-xl font-mono">
          <span className="glitch-text">[ EVENT STARTED ]</span>
        </div>
      );
    } else {
      const CountdownDigit = ({ value, label }) => (
        <div className="flex flex-col items-center mx-2 sm:mx-4">
          <div className="bg-black/50 border border-green-500/30 rounded-md p-3 sm:p-4 w-20 sm:w-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-green-500/5"></div>
            <div className="absolute h-px w-full bg-green-500/30 top-1/2 left-0"></div>
            <span className="text-2xl sm:text-3xl font-mono text-green-400">
              {value.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs sm:text-sm text-green-300 mt-2 uppercase tracking-wider">
            {label}
          </span>
        </div>
      );

      return (
        <div className="relative">
          <motion.div 
            className={`absolute -top-8 left-0 right-0 text-center font-mono text-sm tracking-wider ${
              decryptionState === "encrypting" ? "text-red-400/70" : "text-green-400/70"
            }`}
            data-state={decryptionState}
            data-text={encryptedText}
          >
            {encryptedText}
          </motion.div>
          
          <div className="relative bg-black/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-green-500/30 shadow-lg shadow-green-500/10">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-800/5 rounded-lg"></div>
            
            <div className="flex justify-center items-center">
              <CountdownDigit value={days} label="days" />
              <CountdownDigit value={hours} label="hours" />
              <CountdownDigit value={minutes} label="minutes" />
              <CountdownDigit value={seconds} label="seconds" />
            </div>
          </div>
        </div>
      );
    }
  };

  if (!targetDate) return null;

  return (
    <div className="relative z-20">
      <style jsx global>{`
        @keyframes glitch {
          0% {
            clip-path: inset(40% 0 61% 0);
            transform: translate(-2px, 2px);
          }
          20% {
            clip-path: inset(92% 0 1% 0);
            transform: translate(1px, -3px);
          }
          40% {
            clip-path: inset(43% 0 1% 0);
            transform: translate(-1px, 4px);
          }
          60% {
            clip-path: inset(25% 0 58% 0);
            transform: translate(2px, -2px);
          }
          80% {
            clip-path: inset(54% 0 7% 0);
            transform: translate(-3px, 1px);
          }
          100% {
            clip-path: inset(58% 0 43% 0);
            transform: translate(2px, -4px);
          }
        }
        
        .glitch-text {
          position: relative;
          animation: glitch 1s infinite;
        }
        
        [data-state="encrypting"]::before,
        [data-state="decrypting"]::before {
          content: attr(data-text);
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          opacity: 0.8;
          animation: glitch 0.4s infinite;
        }
        
        [data-state="encrypting"] {
          color: rgba(255, 62, 62, 0.8);
        }
        
        [data-state="decrypting"] {
          color: rgba(0, 255, 0, 0.8);
        }
      `}</style>
      <Countdown date={targetDate} renderer={renderer} />
    </div>
  );
};

export default CyberCountdown;
