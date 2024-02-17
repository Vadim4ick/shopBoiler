import React from 'react'


interface ModalCommonProps { }

export interface ModalProps extends ModalCommonProps {
    /** Whether the modal dialog is visible or not */
    open?: boolean;
    /** The modal dialog's title */
    title?: React.ReactNode;
    /** Whether a close (x) button is visible on top right of the modal dialog or not. Recommend to use closeIcon instead. */
    closable?: boolean;
    /** Specify a function that will be called when a user clicks the OK button */
    onOk?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    /** Specify a function that will be called when a user clicks mask, close button on top right or Cancel button */
    onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    /** Centered Modal */
    centered?: boolean;
    /** Width of the modal dialog */
    width?: string | number;
    /** Text of the OK button */
    okText?: React.ReactNode;
    /** Text of the Cancel button */
    cancelText?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    zIndex?: number;
    bodyStyle?: React.CSSProperties;
    closeIcon?: React.ReactNode;
    children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = (props) => {
    const {
        open,
        title,
        closable,
        onOk,
        onCancel,
        centered,
        okText,
        cancelText,
        style,
        className,
        zIndex,
        bodyStyle,
        closeIcon,
        children,
        width = 520,
        ...otherProps
    } = props;

    const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { onCancel } = props;
        onCancel?.(e);
    };

    const handleOk = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { onOk } = props;
        onOk?.(e);
    };

    if (!open) {
        return null; // Do not render the modal if it's not open
    }

    return (
        <div className={`modal ${centered ? 'centered' : ''} ${className}`} style={{ width, zIndex, ...style }}>
            <div className="modal-content" style={bodyStyle}>
                {closable && closeIcon}
                {title && <div className="modal-title">{title}</div>}
                <div className="modal-body">{children}</div>
                <div className="modal-footer">
                    <button onClick={onOk}>{okText || 'OK'}</button>
                    <button onClick={onCancel}>{cancelText || 'Cancel'}</button>
                </div>
            </div>
        </div>
    )
}

export { Modal }