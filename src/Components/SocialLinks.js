import React from "react";
export default function SocialLinks() {
  return (
    <div className="side-social-links">
   
      <a
        href="mailto:orenkl162@gmail.com"
        className={`side-social-link`}
      >
        <img src={"email.webp"} alt="Email" />
      </a>
      
      <a
        href="https://wa.me/+972549794777"
        target="_blank"
        rel="noreferrer"
        className={`side-social-link`}
      >
        <img src={"whatsapp.webp"} alt="WhatsApp" />
      </a>
      <a
        href="https://www.instagram.com/nissaniklein"
        target="_blank"
        rel="noreferrer"
        className={`side-social-link`}
      >
        <img src={"instagram.webp"} alt="Instagram" />
      </a>
    </div>
  );
}
