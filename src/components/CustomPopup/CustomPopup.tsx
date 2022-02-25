import React from 'react';
import Button from '../Button/Button';
import Dialog from './Dialog';
interface Props {
    title: string;
    children: React.ReactNode;
    open: boolean;
    onClose: Function;
    onConfirm?: Function;
    className?: string;
}

const CustomPopup = (props: Props) => {
    const { open, onClose, title, children } = props;

    return (
        <Dialog open={open} onClose={onClose} className={props.className}>
            <h2 className="text-xl">{title}</h2>
            <div className="py-5 h-full">{children}</div>
        </Dialog>
    )
}

export default CustomPopup