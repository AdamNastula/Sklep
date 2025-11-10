import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-stone-700/40 z-50">
      <div className="bg-main-color overflow-auto w-[500px] h-[500px] p-6 rounded-2xl text-black relative flex flex-col items-center border border-brown shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 hover:cursor-pointer"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
