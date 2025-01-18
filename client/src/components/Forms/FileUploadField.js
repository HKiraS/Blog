import React from 'react';

const FileUploadField = ({
  label,
  onClick,
  inputRef,
  accept,
  multiple,
  required,
}) => {
  return (
    <div>
      <label className="title-s">{label}</label>
      <button
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={onClick}
      >
        Upload
      </button>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        className="hidden"
        required={required}
      />
    </div>
  );
};

export default FileUploadField;
