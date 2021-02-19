import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function useShowForm() {
  const collapsingRef = useRef(null);
  const hideRef = useRef(null);
  const formRef = useRef(null);
  const t = useRef(gsap.timeline()).current;

  useLayoutEffect(() => {
    t.set(formRef.current, { autoAlpha: 0 });
    t.to(hideRef.current, { autoAlpha: 0 });
    t.to(collapsingRef.current, { width: "60vw" });
    t.to(formRef.current, { autoAlpha: 1 });
    t.pause();
  }, []);

  function handleShowFormClick() {
    t.play();
  }

  return { collapsingRef, handleShowFormClick, hideRef, formRef };
}
