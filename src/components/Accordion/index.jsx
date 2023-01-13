import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
const Accordion = (props) => {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    console.log("Height for ", props.title, ": ", height);
  }, [height]);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <div className={styles.accordionSection}>
      <div
        className={`${styles.accordion} ${active ? styles.active : ""}`}
        onClick={toggleAccordion}
      >
        <p className={styles.accordionTitle}>{props.title}</p>
        <span style={{ marginLeft: "20px" }}>{active ? "-" : "+"}</span>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className={styles.accordionContent}
      >
        <div
          className={styles.accordionText}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
};

export default Accordion;
