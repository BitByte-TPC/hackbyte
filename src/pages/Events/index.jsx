import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import styles from "./styles.module.scss";
import PageHeading from "../../components/PageHeading";
import PageContainer from "../../components/PageContainer";

const About = () => {
    return (
        <PageContainer>
            <Header />
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className={styles.container}
            >
                <PageHeading title='EVENTS' subHeading='Events' />

            </motion.div>
        </PageContainer>
    );
};
export default About;
