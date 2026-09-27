import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { JOB_SOURCES } from "../constants/jobSources";
import { DataContext } from "../context/DataContext";
import { signUpSchema } from "../schemas/signUpSchema";
import "../styles/form.css";

export default function JobForm() {
  const { id } = useParams();
  const { filteredJobs } = useContext(DataContext);
  const job = filteredJobs.find((job) => job.id.toString() === id);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
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

        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="fullName">Full Name<span className="required">*</span></label>

          <input
            id="fullName"
            type="text"
            {...register("fullName")}
            className={errors.fullName ? "input-error" : ""}
          />

          {errors.fullName && (
            <p className="error-text">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email<span className="required">*</span></label>

          <input
            autoComplete="email"
            id="email"
            type="email"
            {...register("email")}
            className={errors.email ? "input-error" : ""}
          />

          {errors.email && (
            <p className="error-text">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number<span className="required">*</span></label>

          <input
            autoComplete="tel"
            id="phone"
            type="tel"
            {...register("phone")}
            className={errors.phone ? "input-error" : ""}
          />

          {errors.phone && (
            <p className="error-text">{errors.phone.message}</p>
          )}
        </div>

        {/* Referrer */}
        <div className="form-group">
          <label htmlFor="referrer">
            Where did you hear about us?<span className="required">*</span>
          </label>

          <select
            id="referrer"
            {...register("referrer")}
            className={errors.referrer ? "input-error" : ""}
          >
            <option value="">Select an option</option>

            {JOB_SOURCES.map((site) => (
              <option key={site} value={site}>
                {site}
              </option>
            ))}
          </select>

          {errors.referrer && (
            <p className="error-text">{errors.referrer.message}</p>
          )}
        </div>

        {/* Salary */}
        <div className="form-group">
          <label htmlFor="salaryExpectation">
            What are your salary expectations?<span className="required">*</span>
          </label>

          <input
            id="salaryExpectation"
            type="number"
            {...register("salaryExpectation")}
            className={errors.salaryExpectation ? "input-error" : ""}
          />

          {errors.salaryExpectation && (
            <p className="error-text">
              {errors.salaryExpectation.message}
            </p>
          )}
        </div>

        {/* Start Date */}
        <div className="form-group">
          <label htmlFor="startDate">
            When can you start?<span className="required">*</span>
          </label>

          <input
            id="startDate"
            type="date"
            {...register("startDate")}
            className={errors.startDate ? "input-error" : ""}
          />

          {errors.startDate && (
            <p className="error-text">{errors.startDate.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message">
            Message to Hiring Team? (Optional)
          </label>

          <textarea
            id="message"
            rows="4"
            {...register("message")}
          />
        </div>

        {/* Resume */}
        <div className="form-group">
          <label htmlFor="resume">
            Upload your resume<span className="required">*</span>
          </label>

          <input
            id="resume"
            type="file"
            accept="application/pdf"
            {...register("resume")}
            className={errors.resume ? "input-error" : ""}
          />

          {errors.resume && (
            <p className="error-text">{errors.resume.message}</p>
          )}
        </div>

        {/* Agreement */}
        <div className="form-group checkbox-group">
          <label htmlFor="agreement" className="checkbox-label">
            <input
              id="agreement"
              type="checkbox"
              {...register("agreement")}
            />

            <span>
              You agree to the privacy statement{" "}
              <span className="required">*</span>
            </span>
          </label>

          {errors.agreement && (
            <p className="error-text">
              {errors.agreement.message}
            </p>
          )}
        </div>

        {/* Submit */}
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

