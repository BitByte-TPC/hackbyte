import React from "react";
import styles from "./styles.module.scss";
import heading from "../../assets/headingText.svg";
import Button from "../Button";
import devfolioIcon from "../../assets/devfolio.svg";
import discordIcon from "../../assets/discord_logo.svg";
import sponsorIcon from "../../assets/sponsor-icon.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <motion.div className={styles.heroContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <img src={heading} alt='heading' className={styles.heading} />
      <p className={styles.heroSubText}>WE THINK TO INNOVATE</p>
      <div className={styles.cta}>
        <Button
          type='primary'
          text='Apply with Devfolio'
          icon={devfolioIcon}
          onClick={() => {
            navigate("/sponsor-us");
          }}
        />
        {/* <div className={styles.devfolioApplyButton}
          data-hackathon-slug="hackbyte"
          data-button-theme="light">
        </div> */}
        <Button
          type='secondary'
          text='Join Discord'
          icon={discordIcon}
          onClick={() => {
            navigate("/#");
          }}
        />
      </div>
    </motion.div>
  );
};
