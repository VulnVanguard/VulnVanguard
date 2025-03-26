import React from "react";
import { mentors } from "../../lib/mentors";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function MentorCard() {
  const mentorList = mentors.map((mentor, index) => {
    return (
      <div key={index} id="card-area">
        <div className="wrapper">
          <div className="box-area">
            <div className="box">
              <img src={mentor.image} alt={mentor.name} loading="lazy" />
              <div className="overlay">
                <h3>{mentor.name}</h3>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {(mentor.linkedin) && <Link href={mentor.linkedin}><FaLinkedin style={{ fontSize: "24px", margin: "0 10px" }} /></Link>}
                  {(mentor.github) && <Link href={mentor.github}><FaGithub style={{ fontSize: "24px", margin: "0 10px" }} /></Link>}
                  {(mentor.twitter) && <Link href={mentor.twitter}><FaSquareXTwitter
                    style={{ fontSize: "24px", margin: "0 10px" }}
                  /></Link>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-wrap items-center w-full justify-center">
      {mentorList}
    </div>
  );
}
