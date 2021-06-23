const JobDetail = ({ job, title }) => {
  return (
    <main id="jobDetailPage">
      <h2>{title} </h2>
      <td dangerouslySetInnerHTML={{ __html: job }} />
    </main>
  );
};

export default JobDetail;
