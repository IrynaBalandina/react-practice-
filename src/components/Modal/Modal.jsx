import { useEffect, useRef, useState } from "react";
import css from "./Modal.module.css";


const Modal = ({ onCloseModal }) => {
  const [count, setCount] = useState(() => {
    const val = localStorage.getItem("countValue");
    const parsedVal = JSON.parse(val) ?? 0;

    return parsedVal;
  });
  const textRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.code === "Escape") {
        onCloseModal();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onCloseModal]);

  useEffect(() => {
    const stringifiedValue = JSON.stringify(count);
    localStorage.setItem("countValue", stringifiedValue);
  }, [count]);

  const onBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  useEffect(() => {
    if(!inputRef.current) return;

    inputRef.current.focus();
  }, [])

  return (
    <div onClick={onBackdropClick} className={css.backdrop}>
      <div className={css.modal}>
        <button onClick={onCloseModal} className={css.closeBtn} type="button">
          ❌
        </button>
        <h2>Additional bar info</h2>
        <input type="text" ref={inputRef} />
        <p ref={textRef}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ut
          tempore sapiente ea? Alias, rerum dolore nesciunt error nostrum porro!
        </p>
        <button
          onClick={() => {
            setCount(count + 1);
            inputRef.current.focus();
          }}
          type="button"
        >
          Click to increment: {count}
        </button>
      </div>
    </div>
  );
};

export default Modal;

// win + . як викликати символ-іконку