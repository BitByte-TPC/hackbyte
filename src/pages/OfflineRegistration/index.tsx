import React from 'react'
import Button from '../../components/Button'
import Header from '../../components/Header'
import PageContainer from '../../components/PageContainer'
import PageHeading from '../../components/PageHeading'
import styles from './styles.module.scss'
import formIcon from '../../assets/formIcon.svg'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
 const OfflineRegistration = () => {
  return (
    <PageContainer>
        <Header />
        <PageHeading title="Offline" subHeading="Steps to register Offline" />
        <div className={styles.container}>
          <div className={styles.content}>
           <p className={styles.text}>
            Hackbyte is the annual hackathon of IIIT Jabalpur taking place from
            <span className={styles.detail}> 7th to 9th April</span> and is
            organised by
            <span className={styles.detail}> The Programming Club (TPC)</span>{" "}
            run by students of our institute. This will bring together
            developers and problem solvers from diverse backgrounds to
            collaborate on innovative projects.
          </p>
          <div className={styles.buttonContainer}>
          <Button type="primary" text="Fill the form" icon={formIcon} link={undefined} />
            </div>
        </div>
        </div>
        <div className={styles.section}>
          <h1 className={styles.heading}>Live the experience offline at IIIT Jabalpur</h1>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h2>Workshops and Sessions</h2>
              <p>The chance to attend additional sessions, like the ones led by Sandeep Jain and Anchal Mishra, can offer beneficial chances for skill development and learn from subject-matter experts</p>
              <Link to="speakers">
                See speakers
              </Link>
            </div>
            <div className={styles.card}>
              <h2>Enjoy the mini events</h2>
              <p>You will have the opportunity to participate in small-scale activities and events that can inspire and spark creativity, which can result in more original and significant ideas</p>
              <Link className={styles.link} to="/events">
                See Events
              </Link>
            </div>
            <div className={styles.card}>
              <h2>Refreshments are important</h2>
              <p>The availability of food vendors and side events can improve the overall hackathon experience. Participants can take breaks and participate in a variety of activities to break up the hackathon's intensity.</p>
            </div>
              <div className={styles.card}>
              <h2>Networking</h2>
              <p>Additional events and features may increase networking opportunities with other participants, mentors, judges, and sponsors. This can assist participants in developing relationships and learning about potential career opportunities.</p>
            </div>
            
          </div>
        </div>
        <div className={styles.section}>
          <h1 className={styles.heading}>Steps to register offline</h1>
          <div className={styles.steps}>
            <h3><span>1.</span>Register on devfolio along with your team. Look for the hackathon registration link on the website or  <a href="https://hackbyte.devfolio.co/" target='_blank'>Click here</a></h3>
            <h3><span>2.</span>After registering for the hackathon, fill out the Google form to attend the hackathon offline. <a href="">Click here</a></h3>
            <h3><span>3.</span>The registration form requests your contact information, the name of your team, and the necessary information about each team member. Please be sure to accurately and completely fill out the form. Note: Only one team member should complete the form.</h3>
            <h3><span>4.</span>You will be given the choice between two packages, one of which includes food coupons and the other which does not. The prices for each can be found in the form.</h3>
            <h3><span>5.</span>Attend the check-in on the day of the hackathon to get your Id-card and any other pertinent information. Bring a copy of your registration confirmation with you.</h3>
          </div>
        </div>
        <Footer />
    </PageContainer>
  )
}
export default OfflineRegistration