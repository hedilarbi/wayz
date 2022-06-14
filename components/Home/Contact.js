import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.contact}>
      <h2 className={styles.title}>Contact US</h2>
      <div className={styles.underline}></div>
      <div className={styles.contactContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <img src="/contact.png" alt="" />
          </div>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h3>Get in touch</h3>
            <h6>Leave us a message</h6>
          </div>
          <form action="" className={styles.form}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Mail" />
            <textarea type="textarea" placeholder="Subject" />
            <div className={styles.buttons}>
              <button className={styles.submitForm}>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
