import { useEffect, useState } from "react";

export const useProgressModal = () => {
  const LOCAL_STORAGE_KEY = "showProgressModal";
  const [showProgressModal, setProgressModal] = useState<boolean>(false);

  const closeModal = () => {
    setProgressModal(false);
    localStorage.setItem(LOCAL_STORAGE_KEY, "false")
  }

  const openModal = () => {
    setProgressModal(true);
  }

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? "true")) {
      return;
    }
    setProgressModal(true);
  }, [])

  return {
    showProgressModal,
    closeModal,
    openModal
  }
}