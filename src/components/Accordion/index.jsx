import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

const Accordion = (props) => {
  const [active, setActive] = useState(props.index == 0 ? true : false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    setHeight(active ? `${content.current.scrollHeight}px` : "0px");
  }, []);

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
        <div className={styles.icon}>
          <span className={styles.accordionIcon}>{active ? "-" : "+"}</span>
        </div>
        <p className={styles.accordionTitle}>{props.title}</p>
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
