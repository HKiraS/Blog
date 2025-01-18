import React from 'react';

const FileUploadField = ({
  label,
  onClick,
  accept,
  multiple = false,
  required,
}) => {
  return (
    <div>
      <label className="title-s mb-4">{label}</label>
      <button
        className="btn-secundary-s rounded"
        onClick={onClick}
      >
        Upload {label}
      </button>
      <input
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
