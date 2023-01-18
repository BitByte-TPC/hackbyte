import Header from "../../components/Header";
import PageHeading from "../../components/PageHeading";
import Accordian from "../../components/Accordion";
import styles from "./styles.module.scss";
import PageContainer from "../../components/PageContainer";
import { motion } from "framer-motion";

const FAQ = () => {
  const data = [
    {
      title: "HackByte is the IIITDMJ's student-run hackathon?",
      content:
        "which centers on bringing developers and problem solvers rom different foundations together and enables them to develop projects that can bring out an impact. The hackathon gives a fun yet challenging way to gain knowledge around various technologiesn and gives a lot more opportunities to utilize them within.",
    },
    {
      title: "What is the theme of HackByte 2021?",
      content:
        "The theme of HackByte 2021 is 'Sustainable Development Goals'. The Sustainable Development Goals (SDGs) are a collection of 17 global goals set by the United Nations in 2015 to be achieved by 2030. The SDGs are an urgent call for action by all countries - developed and developing - in a global partnership. They recognize that ending poverty and other deprivations must go hand-in-hand with strategies that improve health and education, reduce inequality, and spur economic growth - all while tackling climate change and working to preserve our oceans and forests.",
    },
    {
      title: "What is the duration of HackByte 2021?",
      content: "The duration of HackByte 2021 is 24 hours.",
    },
    {
      title: "What is the date of HackByte 2021?",
      content: "The date of HackByte 2021 is 27th February 2021.",
    },
    {
      title: "What is the time of HackByte 2021?",
      content: "The time of HackByte 2021 is 10:00 AM.",
    },
  ];

  return (
    <motion.div
      animate={{
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <PageContainer>
        <Header />
        <PageHeading title='FAQs' subHeading='Frequently Asked Questions' />
        <div className={styles.accordian}>
          {data.map((item, index) => (
            <Accordian
              title={item.title}
              content={item.content}
              key={item.title}
              index={index}
            />
          ))}
        </div>
      </PageContainer>
    </motion.div>
  );
};
export default FAQ;
