  // Function to Download List Output as a File 
  const downloadAsFile = (outputValue) => {
    const blob = new Blob([outputValue], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'DefineListOutput.txt'; // You can set your preferred file name here
    link.click();
    URL.revokeObjectURL(url); // Clean up the URL object after use
  };

  export default downloadAsFile;