import React, { useEffect, useState } from "react";
import { IconX } from "@tabler/icons-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  footerContent?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  footerContent,
}) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  useEffect(() => {
    setModalOpen(isOpen);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeModal = () => {
    if (modalOpen) {
      setModalOpen(false);
      setTimeout(onClose, 300);
    }
  };

  if (!modalOpen) {
    return null;
  }

  return (
    <>
      <div
        className={`fixed bottom-0 left-0 right-0 top-0 bg-black bg-opacity-75 transition-opacity duration-500 ${
          modalOpen ? "opacity-1 z-999999" : "-z-10 opacity-0"
        }`}
      >
        <div className="flex min-h-screen items-center justify-center px-5">
          <div className="mx-auto h-fit w-full max-w-2xl overflow-hidden rounded-md bg-white dark:bg-boxdark">
            <div className="mb-4 flex justify-between border-b border-stroke px-5 py-4 dark:border-form-strokedark">
              <h2 className={`text-lg font-bold`}>{title}</h2>
              <button onClick={closeModal}>
                <IconX stroke={2} width={20} height={20} />
              </button>
            </div>
            <div
              className="mb-4 overflow-y-auto px-5"
              style={{ maxHeight: "calc(100vh - 200px)" }}
            >
              {children}
            </div>
            <div className="border-t border-stroke px-5 py-4 dark:border-form-strokedark">
              {footerContent}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
