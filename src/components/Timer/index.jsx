import React, { useEffect, useState } from 'react'
import styles from "./styles.module.scss"
import X_Icon from "../../assets/close-line-icon.svg"
const index = () => {

  const [showTimer, setShowTimer] = useState(true);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const deadline = "April, 07, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };
  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    showTimer &&
    <div className={styles.container}>
          <p>
            Hackbyte will be started in
            <div>
              <span> {days}d :</span>
              <span> {hours}h :</span>
              <span> {minutes}m :</span>
              <span> {seconds}s</span>
            </div>
          </p>
          <p>
            Starts In 
            <div>
              <span>{days}d :</span>
              <span>{hours}h :</span>
              <span>{minutes}m :</span>
              <span>{seconds}s</span>
            </div>
          </p>
          <div className={styles.cross}
            onClick={() => {
              setShowTimer(false)
            }}
          >
            <img src={X_Icon} alt="X"
              style={{
                width: "16px",
                height: "16px"
              }}
            />
          </div>
    </div>
  )
}

export default index
