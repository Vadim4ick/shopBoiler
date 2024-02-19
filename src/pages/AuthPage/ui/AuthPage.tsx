"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";

import { Button } from "@/shared/ui/Button/Button";
import { Modal } from "@/shared/ui/Modal/Modal";

const PageAuth = () => {
  const [signIn, setSignIn] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
};

  const handleClose = () => {
    setShowModal(false);
};

  return (
    <div className="relative h-screen w-full overflow-hidden bg-blue p-6">


        <div>
            <Button children={"Open modal"} onClick={handleClick} />
            <Modal position={"left"} open={showModal} children={"Some content of modal"} onClose={handleClose} />
        </div>



      {/* <motion.div
        animate={{ left: signIn ? "60%" : "0%" }}
        initial={false}
        transition={{ duration: 0.5 }}
        className={clsx(
          "absolute top-0 z-50 flex h-full w-[40%] items-center justify-center bg-green-500",
        )}
      >
        <Button bg="yellow" onClick={() => setSignIn(!signIn)}>
          Sign In
        </Button>
      </motion.div>

      <motion.div
        animate={{ left: signIn ? "15%" : "58%" }}
        initial={false}
        transition={{ duration: 0.5 }}
        className={clsx(
          "absolute top-0 flex h-full items-center justify-center p-6",
        )}
      >
        <Button bg="yellow" onClick={() => setSignIn(!signIn)}>
          Sign Up
        </Button>
      </motion.div> */}
    </div>
  );
};

export { PageAuth };
