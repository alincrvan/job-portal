import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { JOB_SOURCES } from "../constants/jobSources";
import { DataContext } from "../context/DataContext";
import { signUpSchema } from "../schemas/signUpSchema";
import "../styles/form.css";

export default function JobForm() {
  const { id } = useParams();
  const { filteredJobs } = useContext(DataContext);
  const job = filteredJobs.find((job) => job.id.toString() === id);

  const {
    register, handleSubmit, formState: { errors, isSubmitting }, reset,
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    console.log("✅ Submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };

  return (
    <div className="form-container">
      <h1>{job?.title ?? "Position"}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="job-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input id="fullName" type="text" {...register("fullName")} />
          {errors.fullName && <p>{errors.fullName.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            autoComplete="email"
            id="email"
            type="email"
            {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            autoComplete="tel"
            id="phone"
            type="tel"
            {...register("phone")} />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="referrer">Where did you hear about us?</label>
          <select id="referrer" {...register("referrer")}>
            <option value="">Select an option</option>
            {JOB_SOURCES.map((site) => (
              <option key={site} value={site}>
                {site}
              </option>
            ))}
          </select>
          {errors.referrer && <p>{errors.referrer.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="salaryExpectation">
            What are your salary expectations?
          </label>
          <input
            id="salaryExpectation"
            type="number"
            {...register("salaryExpectation")} />
          {errors.salaryExpectation && (
            <p>{errors.salaryExpectation.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="startDate">When can you start?</label>
          <input id="startDate" type="date" {...register("startDate")} />
          {errors.startDate && <p>{errors.startDate.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message to Hiring Team? (Optional)</label>
          <textarea id="message" rows="4" {...register("message")} />
        </div>

        <div className="form-group">
          <label htmlFor="resume">Upload your resume</label>
          <input
            id="resume"
            type="file"
            accept="application/pdf"
            {...register("resume")} />
          {errors.resume && <p>{errors.resume.message}</p>}
        </div>

        <div className="form-group checkbox-group">
          <label htmlFor="agreement" className="checkbox-label">
            <input id="agreement" type="checkbox" {...register("agreement")} />
            <span>
              You agree to the privacy statement{" "}
              <span className="required">*</span>
            </span>
          </label>
          {errors.agreement && <p>{errors.agreement.message}</p>}
        </div>

        <button
          type="submit"
          className="btn-submit btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
}
