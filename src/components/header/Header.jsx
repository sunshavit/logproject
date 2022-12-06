import { useState } from "react";
import { Button } from "../inputs/button.style";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import * as Style from "./Header.style";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import { TextField } from "../inputs/textField.style";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);
    const handleOpen = () => setIsOpen(true);

    return (
    <Style.Header>
        <h1>Logo</h1>
        <div>
          <Button onClick={handleOpen}><UploadFileIcon />UPLOAD</Button>
            </div>
            <Dialog open={isOpen} onClose={handleClose}>
                <DialogTitle>File Upload</DialogTitle>
                <DialogContent>
                    <TextField />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button>Upload</Button>
                </DialogActions>
            </Dialog>
    </Style.Header>
    )
}