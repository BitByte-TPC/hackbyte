import Accordian from "../../components/Accordion";
import styles from "./styles.module.scss";

const FAQ = () => {
  const data = [
    {
      title: "How many team members do I need ?",
      content:
        "You can participate individually or in teams of 3 to 5 members. If you are participating in the hackathon individually and looking for a team, we will help you in connecting to other individual participants to get you a team.",
    },
    {
      title: "Will the Hackathon be in person or online ?",
      content: "HackByte will be conducted in complete offline/in person mode.",
    },
    {
      title: "How much are the participation fees?",
      content:
        "Participation is absolutely free inclusive of resources.",
    },
    {
      title: "What are the prerequisites to participate in this hackathon ?",
      content:
        "No prerequisites are required to participate in this hackathon. This event is open to participants of all skill levels.",
    },
    {
      title: "How do I register ?",
      content:
        "Pre-registration will be opening in January 2024",
    },
    {
      title: "What is the venue for HackByte 2.0 ?",
      content:
        "Computer Center, IIITDM Jabalpur.",
    },
    {
      title:
        "Is the food and accommodation provided free of charge or are there any associated costs ?",
      content:
        "We've got you covered when it comes to food, water, and coffee – they're on us. However, any additional snacks can be purchased separately. As for accommodation, we will provide arrangements similar to those found in other hackathons, which typically involve a set of mattresses in a common hall.",
    },
    {
      title:
        "Can my friend join our team after we have already submitted the application for review ?",
      content:
        "Yes, your friend can join the team by submitting an individual application. Once both your friend's individual application and your team's application are accepted, you will be able to add your friend to the team.",
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
