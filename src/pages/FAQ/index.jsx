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
      content: "HackByte will be held on 7th-9th April at IIITDM Jabalpur.",
    },
    {
      title: "Who can participate in HackByte?",
      content:
        " HackByte is open to all individuals, including students, developers, and problem solvers from diverse backgrounds. The event is designed to be inclusive, and we welcome participation from individuals of all skill levels. The hackathon will be held in both online and offline mode, providing flexibility and accessibility for all participants, regardless of location.",
    },
    {
      title: "How do I register for HackByte?",
      content:
        "You can register for HackByte by visiting the event website and filling out the devfolio RSVP form. Additional information and instructions is provided on the website regarding this.",
    },
    {
      title: "Can I form a team for HackByte?",
      content:
        "Yes, participants are welcome to form teams for the hackathon. Team size can vary, but usually, teams consist of 1-3 members.",
    },
    {
      title: "Is Hackbyte online or offline?",
      content:
        "Hackbyte is a hybrid hackathon, so you can also participate online by submitting your project via Devfolio",
    },
    {
      title:
        " What kind of support is offered to participants during HackByte?",
      content:
        " Participants will have access to workshops, mentorship sessions, and networking opportunities with industry professionals and developer communities from around the world. Additionally, participants will have access to internet and other resources during the event.",
    },
  ];

  return (
    <div>
      <p className={styles.heading}>Frequently Asked Questions</p>
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
    </div>
  );
};
export default FAQ;
