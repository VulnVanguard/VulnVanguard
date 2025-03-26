import React from "react";
import { judges } from "../../lib/judges";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function JudgeCard() {
  const judgesList = judges.map((judge, index) => {
    return (
      <div key={index} id="card-area">
        <div className="wrapper">
          <div className="box-area">
            <div className="box">
              <img src={judge.image} alt={judge.name} loading="lazy" />
              <div className="overlay">
                <h3>{judge.name}</h3>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {(judge.linkedin) && <Link href={judge.linkedin}><FaLinkedin style={{ fontSize: "24px", margin: "0 10px" }} /></Link>}
                  {(judge.github) && <Link href={judge.github}><FaGithub style={{ fontSize: "24px", margin: "0 10px" }} /></Link>}
                  {(judge.twitter) && <Link href={judge.twitter}><FaSquareXTwitter
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
      {judgesList}
    </div>
  );
}
