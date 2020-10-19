import React, { useState } from "react";
import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";

function App() {
  const [params, setParams] = useState();
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);
  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try refreshing</h1>}
      {jobs.map((job) => {})}
      <h1>{jobs.length}</h1>
    </Container>
  );
}

export default App;
