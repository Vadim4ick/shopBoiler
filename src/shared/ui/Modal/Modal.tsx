import { ReactNode, useEffect, useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const modal = cva("modal", {
    variants: {
        BodyStyle: {
            flex_column: [
                "flex",
                "flex-col",
            ]
        },
        // position on page
        position: {
            top: [
                "absolute ",
                "max-w-fit",
                "top-0",
                "right-0",

            ],
            left: [
                "absolute ",
                "max-w-fit",
                "inset-y-0",
                "left-0",
            ],
        },
        // size for different screen width
        size: {
            small: ["text-sm", "py-1", "px-2"],
            medium: ["text-base", "py-2", "px-4"],
        },
        //   appearence style according disigh
        appearance: {
            light: [
                "bg-slate-100",
                "text-gray-800",
                "border-1",
                "border-red-400",
            ],
            dark: [
                "bg-slate-600",
                "text-white",
                "border-1",
                "bg-slate-800",
            ],
        },

    },
    defaultVariants: {
        position: "top",
        size: "medium",
        appearance: "light",
        BodyStyle: "flex_column",
    },
});

interface ModalProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof modal> {
    // аdditional properties that you want to add to the element <div>
    children: ReactNode;
    open: boolean;
    onClose?: () => void;
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const { open, children, className, position, size, appearance, onClose } = props;

    const handleClose = () => {
        onClose?.();
    };

    const handleOutsideClick = (e: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            handleClose();
        }
    };

    useEffect(() => {
        if (open) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [open]);

    // do not render the modal if it's not open
    if (!open) {
        return null;
    }


    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-49" onClick={handleClose}></div>
                <div ref={modalRef} className={modal({ position, appearance, size, className })}>
                    {children}
                    <button onClick={handleClose} > Close </button>
                </div>
            
        </>

    );

};

export { Modal, type ModalProps };