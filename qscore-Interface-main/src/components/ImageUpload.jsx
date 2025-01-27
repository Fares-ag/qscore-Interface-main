import React, { useState, useRef } from "react";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Store base64 image data
      };
      reader.readAsDataURL(file);
    }
  };

  // Open the camera
  const openCamera = async () => {
    setIsCameraOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  // Capture photo from the camera
  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL("image/png");
    setImage(imageData);

    // Stop the camera after capturing the image
    const stream = video.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
    setIsCameraOpen(false);
  };

  // Close the camera
  const closeCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
    setIsCameraOpen(false);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload or capture an image first.");
      return;
    }

    // Create FormData to include the image data
    const formData = new FormData();
    formData.append("uploadedImage", image); // Add image data as base64

    try {
      // Send the form data via POST request
      const response = await fetch("/your-server-endpoint", {
        method: "POST",
        body: formData,
      });

      // Check the response
      if (response.ok) {
        const data = await response.json();
        console.log("Image uploaded successfully:", data);
      } else {
        console.error("Image upload failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={styles.container}>
        <label style={styles.label}>Photo</label>
        <div
          style={styles.uploadBox}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const file = e.dataTransfer.files[0];
            if (file) {
              handleImageUpload({ target: { files: [file] } });
            }
          }}
        >
          {image ? (
            <img
              src={image}
              alt="Uploaded or Captured Preview"
              style={styles.uploadedImage}
            />
          ) : (
            <p style={styles.placeholderText}>
              Drag and drop image here, or click add image
            </p>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={styles.fileInput}
            ref={fileInputRef} // Reference to the input
          />
        </div>

        <button type="button" style={styles.button} onClick={openCamera}>
          Take Picture
        </button>
        <button
          type="button"
          style={styles.button}
          onClick={() => fileInputRef.current.click()} // Trigger file input on button click
        >
          Add New Image
        </button>

        {/* Camera Modal */}
        {isCameraOpen && (
          <div style={styles.cameraModal}>
            <video ref={videoRef} style={styles.video} />
            <canvas ref={canvasRef} style={{ display: "none" }} />
            <div style={styles.cameraControls}>
              <button style={styles.captureButton} onClick={capturePhoto}>
                Capture
              </button>
              <button style={styles.closeButton} onClick={closeCamera}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      <button type="submit" style={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    border: "2px solid #d3d3d3",
    borderRadius: "10px",
    maxWidth: "400px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
  },
  label: {
    display: "block",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#555",
  },
  uploadBox: {
    position: "relative",
    border: "2px dashed #d3d3d3",
    borderRadius: "10px",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15px",
    backgroundColor: "#fff",
    cursor: "pointer",
  },
  placeholderText: {
    fontSize: "14px",
    color: "#aaa",
  },
  uploadedImage: {
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: "50%",
  },
  fileInput: {
    position: "absolute",
    inset: 0,
    opacity: 0,
    cursor: "pointer",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#002d9c",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "5px",
  },
  cameraModal: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    width: "100%",
    maxWidth: "500px",
    borderRadius: "10px",
  },
  cameraControls: {
    marginTop: "20px",
    display: "flex",
    gap: "10px",
  },
  captureButton: {
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#28a745",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  closeButton: {
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#dc3545",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  submitButton: {
    marginTop: "20px",
    padding: "12px 24px",
    fontSize: "18px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ImageUpload;
