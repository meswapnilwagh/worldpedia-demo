import React from 'react';
import Button from '../Button/Button';
import Dialog from './Dialog';
interface Props {
    title: string;
    children: React.ReactNode;
    open: boolean;
    onClose: Function;
    onConfirm?: Function;
}

const CustomPopup = (props: Props) => {
    const { open, onClose, title, children } = props;

    return (
        <div>
            <Dialog open={open} onClose={onClose}>
                <h2 className="text-xl">{title}</h2>
                <div className="py-5">{children}</div>
            </Dialog>
        </div>
    )
}

export default CustomPopup