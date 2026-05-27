"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Ecureuil from "@/src/asset/ecureuil.webp";

interface LeoStep {
  message: string;
}

interface UseLeoOptions {
  storageKey?: string;
  steps: LeoStep[];
}

export function useLeo({ storageKey, steps }: UseLeoOptions) {
  const [step, setStep] = useState(0);
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const key = storageKey ?? "recolteo_leo_seen_v1";
    try {
      const seen = localStorage.getItem(key);
      setShow(!seen);
    } catch (err) {
      setShow(true);
    }
  }, [storageKey]);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [show]);

  const dismiss = () => {
    const key = storageKey ?? "recolteo_leo_seen_v1";
    try {
      localStorage.setItem(key, "1");
    } catch (err) {
    }
    setShow(false);
  };

  const next = () => {
    if (step < steps.length - 1) {
      setVisible(false);
      setTimeout(() => {
        setStep((s) => s + 1);
        setVisible(true);
      }, 250);
    } else {
      dismiss();
    }
  };

  return {
    step,
    show,
    visible,
    isLastStep: step === steps.length - 1,
    currentMessage: steps[step]?.message ?? "",
    dismiss,
    next,
  };
}

export default function Leo({ storageKey, steps }: UseLeoOptions) {
  const {
    show,
    visible,
    currentMessage,
    step,
    isLastStep,
    dismiss,
    next,
  } = useLeo({ storageKey, steps });

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="fixed inset-0 bg-black/10"
        onClick={next}
      />

      <div
        className={`fixed bottom-3 left-3 right-3 z-50 transition-all duration-700 ease-in-out ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, ease: "easeOut" }}
          className="relative z-20 w-full bg-amber-50 border-2 border-sapin rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="px-8 py-5">
            <div className="flex items-center justify-between mb-3">
              <div className="inline-flex items-center gap-2 bg-sapin rounded-full px-4 py-1">
                <div className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                <span className="text-amber-50 font-semibold text-sm tracking-wide">Léo</span>
              </div>
              <div className="flex gap-1.5">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === step ? "w-6 bg-sapin" : "w-1.5 bg-sapin/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-between gap-4">
              <AnimatePresence mode="wait">
                {visible && (
                  <motion.p
                    key={step}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="text-sapin text-lg leading-relaxed font-medium max-w-2xl"
                  >
                    {currentMessage}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between mt-3">
              <p className="text-sapin/50 text-xs italic">Cliquez n'importe où pour continuer...</p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="flex items-center gap-1.5 bg-sapin text-amber-50 text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-sapin/80 transition-all duration-200 cursor-pointer"
              >
                {isLastStep ? "Terminer" : "Suivant"}
                {!isLastStep && <span>→</span>}
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, ease: "easeOut" }}
          className="z-10 absolute right-4 sm:right-32"
          style={{ bottom: "100%", marginBottom: "-60px" }}
        >
          <Image
            src={Ecureuil}
            alt="écureuil Récoltéo"
            width={270}
            height={270}
            className="object-contain w-[180px] sm:w-[230px]"
          />
        </motion.div>
      </div>
    </div>
  );
}
