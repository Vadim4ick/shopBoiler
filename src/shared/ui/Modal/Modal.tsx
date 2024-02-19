import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { useCallback, useEffect, useRef } from "react";

const modal = cva("modal", {
  defaultVariants: {
    BodyStyle: "flex_column",
    appearance: "light",
    position: "top",
    size: "medium",
  },
  variants: {
    appearance: {
      dark: ["bg-slate-600", "text-white", "border-1", "bg-slate-800"],
      light: ["bg-slate-100", "text-gray-800", "border-1", "border-red-400"],
    },

    BodyStyle: {
      flex_column: ["flex", "flex-col"],
    },

    position: {
      left: ["absolute ", "max-w-fit", "inset-y-0", "left-0"],
      top: ["absolute ", "max-w-fit", "top-0", "right-0"],
    },

    size: {
      medium: ["text-base", "py-2", "px-4"],
      small: ["text-sm", "py-1", "px-2"],
    },
  },
});

interface ModalProps extends VariantProps<typeof modal> {
  className?: string;
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  close?: ReactNode;
}

const Modal = (props: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const {
    open,
    children,
    className,
    position = "top",
    size,
    appearance,
    onClose,
    close,
  } = props;

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleClose();
      }
    },
    [handleClose],
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleOutsideClick, open]);

  if (!open) {
    return null;
  }

  return (
    <>
      <div className="z-49 fixed left-0 top-0 h-full w-full bg-black opacity-50" />

      <div
        ref={modalRef}
        className={modal({ appearance, className, position, size })}
      >
        {children}
        {close && (
          <button className="w-max" onClick={handleClose}>
            {close}
          </button>
        )}
      </div>
    </>
  );
};

export { Modal, type ModalProps };
