import { useContext } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import "../styles/job-page.css";
import  Missing  from "../pages/Missing";

export default function JobPage() {
  const { filteredJobs } = useContext(DataContext);

  const { id } = useParams();

  if (!filteredJobs || filteredJobs.length === 0) {
    return <h2>Loading job...</h2>;
  }

  const job = filteredJobs.find((job) => job.id.toString() === id);

  if (!job) {
    return <Missing />;
  }

  const location = useLocation();

  if (!location.state?.fromHome) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="job-page">
      <article className="job-card">
        <section className="job-hero">
          <h1>{job.title}</h1>

          <div className="job-meta">
            <span>{job.department}</span>
            <span>{job.location}</span>
            <span>{job.experience}</span>
          </div>
        </section>

        <section className="job-section">
          <h2>About the Role</h2>
          <p>{job.description}</p>
        </section>

        <section className="job-section">
          <h2>Your Responsibilities</h2>
          <ul>
            <li>Build and maintain React applications</li>
            <li>Collaborate with designers and developers</li>
            <li>Write clean and maintainable code</li>
            <li>Participate in code reviews</li>
          </ul>
        </section>

        <section className="job-section">
          <h2>What You Bring</h2>
          <ul>
            <li>JavaScript and React experience</li>
            <li>Problem solving skills</li>
            <li>Good communication</li>
            <li>Passion for learning</li>
          </ul>
        </section>

        <section className="job-section">
          <h2>What We Offer</h2>
          <ul>
            <li>Flexible working hours</li>
            <li>Modern tech stack</li>
            <li>Training opportunities</li>
            <li>Friendly team culture</li>
          </ul>
        </section>

        <section className="job-section">
          <h2>Contact</h2>
          <p>careers@example.com</p>
        </section>

        <div className="job-actions">
          <Link className="btn-secondary" to="/">
            Back to Jobs
          </Link>

          <Link className="btn-primary" to="apply" state={{ fromHome: true }}>
            Apply Now
          </Link>
        </div>
      </article>
    </div>
  );
}