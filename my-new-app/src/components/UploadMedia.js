import React, { useState } from 'react';

const UploadMedia = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    fetch('/upload', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Subir imagen o video</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Subir</button>
    </div>
  );
};

export default UploadMedia;
