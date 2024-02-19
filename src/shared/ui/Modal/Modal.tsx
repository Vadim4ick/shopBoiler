import { ReactNode, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const modal = cva("modal", {
    variants: {
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
        light:[
            "bg-white",
            "text-gray-800",
            "border-4",
            "border-red-400",
        ],
        dark:[
            "bg-gray-400",
            "text-white",
            "border-4",
            "border-gray-400",
        ],
      }
    },
    defaultVariants: { 
        position: "top", 
        size: "medium", 
        appearance: "light" 
    },    
  });

  interface ModalProps extends React.HTMLAttributes<HTMLDivElement>,VariantProps<typeof modal> {
    // аdditional properties that you want to add to the element <div>
    children: ReactNode;
    open: boolean;
}

const Modal:React.FC<ModalProps> = (props: ModalProps ) => {
    const {open ,children, className, position, size, ...otherProps } = props;
    
    // do not render the modal if it's not open
    if (!open) {
        return null; 
    }

    return (
        <div className={modal({ position, size, className })}>
            {children}
        </div>
    );

  };

export { Modal }