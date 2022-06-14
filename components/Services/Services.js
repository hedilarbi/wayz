import React from "react";
import styles from "./Services.module.css";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      service: "Music Production",
      description:
        "Are you a Singer, Musician or Songwriter requiring top quality music production? Well, look no further. Perhaps you are someone who just can't seem to finish that song in your home studio, we will professionally produce your song to an industry standard.",
    },
    {
      service: "Mixing & Mastering",
      description:
        "Mixing and Mastering services that will leave you with high quality. If you wrote a hit song but you can’t put the finishing touches on the record, We provide full mixing from your instrumentals and vocals. Focus on your talent and let us focus on the mix!",
    },
    {
      service: "Music Video Production",
      description:
        "Music videos are one of the best ways to captivate an audience and communicate a message. Our experienced video directors, videographers and film producers at Red Diamond will collaborate with you to create an engaging music video, including providing any help with the concept, location, equipment, etc., while also skillfully directing and editing the music video to create visually stunning content.",
    },
    {
      service: "Lyric Video",
      description:
        "Lyric videos allow fans to follow the lyrics and connect with them, not just listening to the song itself. This is a great way to draw people's attention to what the song says.",
    },
    {
      service: "Campaign Strategy",
      description:
        "We work closely with artists and their teams to oversee projects and releases from start to finish. Our experienced team is responsible for marketing, public relations, creative design, and advertising planning, keeping in regular contact, and providing updates and analysis. Our campaign management team will go all out to take all measures to maximize growth and impact while continuing to focus on innovation. Combining our own creative, digital, and social services, we can carry out 360-degree campaigns that places the artist, identity, and brand.",
    },
    {
      service: "YouTube Official Artist Channel",
      description:
        "If you are a YouTube artist, then your official artist channel (OAC) will gather all the content from each YouTube channel in one place. The channel will automatically place your music catalog on two new shelves and get access to analytics and tools that will help you engage with millions of fans.",
    },
    {
      service: "Artwork Design",
      description:
        "Artwork on your new single, EP, or Album is essential for the project’s success.to distribute your project, you'll want the proper artwork. as part of our service, we always provide the highest quality",
    },
    {
      service: "Data & Analysis",
      description:
        "All these data and statistics are generated by fans and then used to generate patterns and track trends. Then, Red Diamond will further examine the data and make wise decisions and recommendations based on the data.",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Our Services For You</h2>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.services}>
        {services.map((service) => {
          return (
            <Service
              service={service.service}
              description={service.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
