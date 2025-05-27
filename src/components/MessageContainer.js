import { useEffect } from "react";

export default function MessageContainer({ type, message, onClear }) {
  // Quando message mudar, dispara o timeout para sumir
  useEffect(() => {
    if (!message) return;
    const id = setTimeout(onClear, 5000);
    return () => clearTimeout(id);
  }, [message, onClear]);

  if (!message) return null;
  return (
    <div id="message-container" className={type}>
      {message}
    </div>
  );
}