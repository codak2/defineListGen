import React, { useState } from 'react';

// MUI Imports
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import downloadAsFile from "../utils/downloadAsFile.js"
import copyToClipboard from "../utils/copyToClipboard.js"

const OutputContainer = (props) => {

  // State to manage Snackbar for copy to clipboard message
  const [ctcMsgOpen, setCtcMsgOpen] = useState(false);

  // Function to handle copy to clipboard button click
  // It copies the outputValue to clipboard and shows a Snackbar message
  // The Snackbar will automatically close after 5 seconds
  // or can be closed by clicking away
  const handleCTCClick = () => {
    //validate if outputValue is not empty
    if (!props.outputValue || props.outputValue.trim() === "") {
      alert("Output is empty. Please generate the list first.");
      return;
    }

    //validate if there is an error
    if (props.isError) {
      alert("Please fix the error before copying list to clipboard.");
      return;
    }

    copyToClipboard(props.outputValue)
    setCtcMsgOpen(true);
  };

  // Function to handle Snackbar close event
  // It checks if the reason for closing is 'clickaway' and does nothing in that case
  // Otherwise, it sets the Snackbar open state to false
  // This will close the Snackbar when the user clicks away or after the autoHideDuration
  // which is set to 5000 milliseconds (5 seconds)
  const handlectcMsgClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setCtcMsgOpen(false);
  };

  // Function to handle the download as file button click
  const handleDownloadAsFile = () => {
    //validate if outputValue is not empty
    if (!props.outputValue || props.outputValue.trim() === "") {
      alert("Output is empty. Please generate the list first.");
      return;
    }
    //validate if listFileName is not empty
    if (!props.listFileName || props.listFileName.trim() === "") {
      alert("Please provide a valid List Name which can be used as file name.");
      return;
    }
    //download the outputValue as a file with listFileName
    if (props.isError) {
      alert("Please fix the error before downloading.");
      return;
    }
    // Call the downloadAsFile function with outputValue and listFileName
    downloadAsFile(props.outputValue, props.listFileName);
  }

  return (
    <>
      <div id="outputContainer" className='container2' style={{ "width": "20rem" }}>
        <label htmlFor=""> Output <br />
          <textarea name="" id=""
            placeholder='Output will be generated here....'
            cols="40" rows="30"
            value={props.isError ? "Please fix the Error and Try Again." : props.outputValue}
            readOnly
          />
        </label>

        <div className="container1">
          <Button
            variant="contained"
            sx={{ borderRadius: "8px"}}
            onClick={props.handleGenList}>Generate List</Button>

          <button type="button"
            onClick={handleDownloadAsFile}
          >Download as File</button>
          <button type="button"
            onClick={handleCTCClick}
          >Copy to Clipboard</button>
          <button type="button"
            onClick={props.handleClearOutput}
          >Clear Output</button>
          <Snackbar open={ctcMsgOpen} autoHideDuration={5000} onClose={handlectcMsgClose}>
            <Alert
              onClose={handlectcMsgClose}
              severity="success"
              variant="filled"
              sx={{ width: '100%' }}
            >
              Define List is copied to clipboard!
            </Alert>
          </Snackbar>

        </div>
      </div>
    </>
  )
}

export default OutputContainer