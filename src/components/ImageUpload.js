import React, { useState } from 'react';

function ImageUpload(props) {
  const [selectedFile, setSelectedFile] = useState(null);

  const fileSelectedHandler = event => {
    setSelectedFile(event.target.files[0]);
    props.onFileSelect(event.target.files[0]);  // Pass file back to parent
  }

  return (
    <div>
      <input type="file" onChange={fileSelectedHandler} />
      {selectedFile && <img src={URL.createObjectURL(selectedFile)} alt="Selected" />}
    </div>
  );
}

export default ImageUpload;
