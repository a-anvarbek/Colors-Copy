import React, { useState, useEffect } from "react";

function CopyToast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return <div className="toast">{message}</div>;
}

export default CopyToast;
