const JobDetail = ({ job }) => {
  return <td dangerouslySetInnerHTML={{ __html: job }} />;
};

export default JobDetail;
