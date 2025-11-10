import { useState } from "react";

interface ImageUploaderProps {
  title: string;
  setFile;
}

export default function ImageUploader(props: ImageUploaderProps) {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };

    reader.readAsDataURL(file);
    props.setFile(file);
  };

  return (
    <div className="max-w-md p-6 rounded-2xl shadow-md mx-auto w-1/4">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        {props.title}
      </h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-blue-50 file:text-blue-700
                   hover:file:bg-blue-100"
      />

      {preview && (
        <div className="mt-4">
          <p className="text-gray-600 text-sm mb-2">Podgląd:</p>
          <img
            src={preview}
            alt="Podgląd"
            className="max-h-60 rounded-xl shadow"
          />
        </div>
      )}
    </div>
  );
}
