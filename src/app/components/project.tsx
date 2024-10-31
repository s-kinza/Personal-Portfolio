

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <section className="projects-section" id="project">
      <h3 className="projects-heading">
        Projects
      </h3>
      <div className="projects-grid">
        <div className="project-card">
          <h4 className="project-title">Iphone Website</h4>
          <p className="project-description">An e-commerce platform designed for iPhone 14 Pro Max.</p>
          <div className="project-image-container">
            <Image
              src="/images/iphone.png"
              height={700}
              width={700}
              alt="Iphone-Website"
              className="project-image"
            />
          </div>
          <Link target="_blank" href={
                      "https://i-phone-store-e-commerce-website-5i7k.vercel.app"
                    } className="project-link">
            <p className="project-button">Live project</p>
          </Link>
        </div>

        <div className="project-card">
          <h4 className="project-title">FaceBook Clone Page</h4>
          <p className="project-description">this is a facebook clone page i create next.js and tailwind css.</p>
          <div className="project-image-container">
            <Image
              src="/images/facebook.png"
              height={700}
              width={700}
              alt="Facebook-Clone"
              className="project-image"
            />
          </div>
          <Link target="_blank" href={
                      "https://facebook-clone-page-main.vercel.app"
                    } className="project-link">
            <p className="project-button">Live project</p>
          </Link>
        </div>

        <div className="project-card">
          <h4 className="project-title">Shopping Website</h4>
          <p className="project-description">this is a shopping website i create next.js and tailwind css.</p>
          <div className="project-image-container">
            <Image
              src="/images/shopping.png"
              height={700}
              width={700}
              alt="Shopping-Website"
              className="project-image"
            />
          </div>
          <Link target="_blank" href={
                      "https://shopping-website-main.vercel.app"
                    } className="project-link">
            <p className="project-button">Live project</p>
          </Link>
        </div>
        <div className="project-card">
          <h4 className="project-title">My Personal Portfolio</h4>
          <p className="project-description">this is my Personal portfolio i create next.js and tailwind css.</p>
          <div className="project-image-container">
            <Image
              src="/images/portfolio.png"
              height={700}
              width={700}
              alt="Portfolio"
              className="project-image"
            />
          </div>
          <Link target="_blank" href={
                      "my-prortfolio-p9qa.vercel.app"
                    } className="project-link">
            <p className="project-button">Live project</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Project;