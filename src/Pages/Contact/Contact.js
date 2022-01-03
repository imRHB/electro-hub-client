import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <>
            <div className={`${styles.contactContainer}`}>
                <div className={`${styles.contactBox}`}>
                    <div className={`${styles.left1}`}></div>
                    <div className={`${styles.right1}`}>
                        <h2>Contact Us</h2>
                        <input type="text" className={`${styles.field}`} placeholder="Your Name " />
                        <input type="text" className={`${styles.field}`} placeholder="Your Email " />
                        <input type="text" className={`${styles.field}`} placeholder="Phone" />
                        <textarea placeholder="Message" className={`${styles.field}`}></textarea>

                        <button className={`${styles.btn1}`}>Send</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;