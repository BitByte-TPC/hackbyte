import Header from "../../components/Header";
import PageHeading from "../../components/PageHeading";
import styles from "./styles.module.scss";
const SponsorUs = () => {
  return (
    <div className={styles.container}>
      <Header />
      <PageHeading title='SPONSOR' subHeading='How you can help?' />
      <p>
        HackByte is the IIITDMJ's student-run hackathon, which centers on
        bringing developers and problem solvers from different foundations
        together and enables them to develop projects that can bring out an
        impact. The hackathon gives a fun yet challenging way to gain knowledge
        around various technologies and gives a lot more opportunities to
        utilize them within
      </p>
    </div>
  );
};

export default SponsorUs;
