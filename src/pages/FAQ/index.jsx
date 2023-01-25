import Header from "../../components/Header";
import PageHeading from "../../components/PageHeading";
import Accordian from "../../components/Accordion";
import styles from "./styles.module.scss";
import PageContainer from "../../components/PageContainer";
import { motion } from "framer-motion";

const FAQ = () => {
  const data = [
    {
      title: "What is HackByte?",
      content:
        "HackByte is an annual student-run hackathon organized by The Programming Club at IIIT JABALPUR. The event brings together developers and problem solvers from diverse backgrounds to collaborate on innovative projects, providing a unique and challenging learning experience for participants.",
    },
    {
      title: "When and where will HackByte be held",
      content: "HackByte will be held on 25th-26th March at IIITDM Jabalpur.",
    },
    {
      title: "Who can participate in HackByte?",
      content:
        " HackByte is open to all individuals, including students, developers, and problem solvers from diverse backgrounds. The event is designed to be inclusive, and we welcome participation from individuals of all skill levels. The hackathon will be held in both online and offline mode, providing flexibility and accessibility for all participants, regardless of location.",
    },
    {
      title: "Can I form a team for HackByte?",
      content:
        "Yes, participants are welcome to form teams for the hackathon. Team size can vary, but usually, teams consist of 2-4 members.",
    },
    {
      title: "Is Hackbyte online or offline?",
      content:
        "Hackbyte is a hybrid hackathon, so you can also participate online by submitting your project via Devfolio",
    },
    {
      title: " How can my company get involved in HackByte?",
      content:
        "Companies can get involved in HackByte by becoming a sponsor of the event. Sponsors will have the opportunity to showcase their products and services to a highly engaged and motivated audience of tech-savvy students. Additionally, sponsors will be given priority according to the level of sponsorship and have the opportunity to advertise any events or competitions they plan to host on our social media channels and in offline sessions.",
    },
  ];

  return (
    <PageContainer>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        // exit={{ y: 100 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
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
      </motion.div>
    </PageContainer>
  );
};
export default FAQ;
