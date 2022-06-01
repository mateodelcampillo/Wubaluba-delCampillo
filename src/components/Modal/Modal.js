import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';


const Modal = function({handleClose, open}){
return (
    <Dialog onClose={handleClose} open={open}>
        <DialogContent>
            <h1>
                Modal
            </h1>
        </DialogContent>
    </Dialog>
)
}

export default Modal
