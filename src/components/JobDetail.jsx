const JobDetail = ({ job, title }) => {
  return (
    <main
      id="jobDetailPage"
      // style={{
      //   position: "fixed",
      //   top: "100px",
      //   overflow: "auto",
      //   height: "80vh",
      // }}
    >
      <h2>{title} </h2>
      {job.toLowerCase().includes("<script>") ? (
        alert("DANGER , SCRIPT INSIDE THE HTML!!")
      ) : (
        <td dangerouslySetInnerHTML={{ __html: job }} />
      )}
    </main>
  );
};

export default JobDetail;
