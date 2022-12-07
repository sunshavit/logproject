import { useState } from "react";
import { Button } from "../inputs/button.style";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import * as Style from "./Header.style";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import { TextField } from "../inputs/textField.style";
import { Logo } from "./logo";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [caseId, setCaseSetId] = useState("");
  const { pathname } = useLocation();

  const handleClose = () => {
    setIsOpen(false);
    setFile(null);
  };
  const handleOpen = () => setIsOpen(true);
  const handleFileChange = (e) => {
    const [file] = e.target.files;
    setFile(file);
  };

  const isHomePage = pathname === "/";
  return (
    <Style.Header>
      <Style.LogoWrap>
        <Logo />
        <Style.LogoName>Logirex</Style.LogoName>
      </Style.LogoWrap>

      <div>
        {isHomePage && (
          <Button onClick={handleOpen}>
            <UploadFileIcon />
            UPLOAD
          </Button>
        )}
      </div>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle style={{ background: "#1F3242", color: "#EEEEEE" }}>
          File Upload
        </DialogTitle>
        <DialogContent
          style={{ background: "#142230", paddingBlockStart: "20px" }}
        >
          <div style={{ marginBottom: "10px", color: "white" }}>
            Enter Case ID:
          </div>
          <TextField
            onChange={(e) => setCaseSetId(e.target.value)}
            value={caseId}
          />
          <div
            style={{ marginTop: "10px", marginBottom: "10px", color: "white" }}
          >
            Choose a file to upload:
          </div>
          <Style.Label isFileSelected={file?.name}>
            <div className="file-input">
              {file?.name}
              <UploadFileIcon />
            </div>
            {file && (
              <div
                style={{ color: "white", marginTop: "10px", fontSize: "14px" }}
              >
                Selected File Size: {formatBytes(file.size)}
              </div>
            )}
            <TextField type="file" onChange={handleFileChange} />
          </Style.Label>
        </DialogContent>
        <DialogActions style={{ background: "#1F3242" }}>
          <Button variant={"outline"} onClick={handleClose}>
            Cancel
          </Button>
          <Button>Upload</Button>
        </DialogActions>
      </Dialog>
    </Style.Header>
  );
};

function formatBytes(bytes) {
  var marker = 1024; // Change to 1000 if required
  var decimal = 2; // Change as required
  var kiloBytes = marker; // One Kilobyte is 1024 bytes
  var megaBytes = marker * marker; // One MB is 1024 KB
  var gigaBytes = marker * marker * marker; // One GB is 1024 MB

  // return bytes if less than a KB
  if (bytes < kiloBytes) return bytes + " Bytes";
  // return KB if less than a MB
  else if (bytes < megaBytes)
    return (bytes / kiloBytes).toFixed(decimal) + " KB";
  // return MB if less than a GB
  else if (bytes < gigaBytes)
    return (bytes / megaBytes).toFixed(decimal) + " MB";
  // return GB if less than a TB
  else return (bytes / gigaBytes).toFixed(decimal) + " GB";
}
