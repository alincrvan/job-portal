import JobFilters from "../components/filter/JobFilters";
import JobTable from "../components/table/JobTable";
import JobSearch from "../components/JobSearch";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="home">
      <Hero/>
      <JobSearch />
      <JobFilters />
      <JobTable />
    </main>
  );
}
