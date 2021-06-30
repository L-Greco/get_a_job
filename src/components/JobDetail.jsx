const JobDetail = ({ job, title }) => {
  return (
    <main id="jobDetailPage">
      <h2>{title} </h2>
      {job.toLowerCase().includes("<script") ? (
        alert("DANGER , SCRIPT INSIDE THE HTML!!")
      ) : (
        <td dangerouslySetInnerHTML={{ __html: job }} />
      )}
    </main>
  );
};

export default JobDetail;
