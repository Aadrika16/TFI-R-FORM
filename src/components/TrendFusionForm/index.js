import { useState } from "react";
import { useDropzone } from "react-dropzone";
import emailjs from "@emailjs/browser";

import "./index.css";

const TrendFusionForm = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    height: "",
    shoeSize: "",
    hairColor: "",
    eyeColor: "",
    mobile: "",
    email: "",
  });

  const [selectedImage, setSelectedImage] =
    useState(null);

  const [preview, setPreview] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];

    if (!file) return;

    setSelectedImage(file);

    setPreview(
      URL.createObjectURL(file)
    );
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    accept: {
      "image/*": [
        ".jpg",
        ".jpeg",
        ".png",
        ".webp",
      ],
    },
    multiple: false,
    onDrop,
  });

  const convertToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () =>
        resolve(reader.result);

      reader.onerror = reject;
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedImage) {
      alert(
        "Please upload a passport size photo"
      );
      return;
    }

    try {
      setLoading(true);

      const imageBase64 =
        await convertToBase64(
          selectedImage
        );

      const templateParams = {
        ...formData,
        image: imageBase64,
      };

      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_PUBLIC_KEY"
      );

      alert(
        "Registration submitted successfully!"
      );

      setFormData({
        fullName: "",
        age: "",
        gender: "",
        height: "",
        shoeSize: "",
        hairColor: "",
        eyeColor: "",
        mobile: "",
        email: "",
      });

      setSelectedImage(null);
      setPreview("");
    } catch (error) {
      console.log(error);

      alert(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="registration-form"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="form-label">
          FULL NAME
        </label>

        <input
          type="text"
          name="fullName"
          placeholder="Enter Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid-two">
        <div>
          <label className="form-label">
            AGE
          </label>

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="form-label">
            GENDER
          </label>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">
              Select Gender
            </option>

            <option value="Male">
              Male
            </option>

            <option value="Female">
              Female
            </option>

            <option value="Other">
              Other
            </option>
          </select>
        </div>
      </div>

      <div className="grid-two">
        <div>
          <label className="form-label">
            HEIGHT (CM)
          </label>

          <input
            type="text"
            name="height"
            placeholder="Height"
            value={formData.height}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="form-label">
            SHOE SIZE
          </label>

          <input
            type="text"
            name="shoeSize"
            placeholder="Shoe Size"
            value={formData.shoeSize}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid-two">
        <div>
          <label className="form-label">
            HAIR COLOR
          </label>

          <input
            type="text"
            name="hairColor"
            placeholder="Hair Color"
            value={formData.hairColor}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="form-label">
            EYE COLOR
          </label>

          <input
            type="text"
            name="eyeColor"
            placeholder="Eye Color"
            value={formData.eyeColor}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label className="form-label">
          MOBILE NUMBER
        </label>

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="form-label">
          EMAIL ADDRESS
        </label>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="form-label">
          PASSPORT SIZE PHOTO
        </label>

        <div
          {...getRootProps()}
          className={`upload-box ${
            isDragActive
              ? "active"
              : ""
          }`}
        >
          <input
            {...getInputProps()}
          />

          {!preview ? (
            <>
              <h3>
                Upload Passport Photo
              </h3>

              <p>
                JPG • PNG • WEBP
              </p>

              <p>
                Click or Drag & Drop
              </p>
            </>
          ) : (
            <img
              src={preview}
              alt="preview"
              className="preview-image"
            />
          )}
        </div>
      </div>

      <button
        type="submit"
        className="submit-btn"
        disabled={loading}
      >
        {loading
          ? "SUBMITTING..."
          : "REGISTER NOW"}
      </button>
    </form>
  );
};

export default TrendFusionForm;