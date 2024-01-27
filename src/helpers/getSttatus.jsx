const getStatus = (status) => {
  switch (status) {
    case "important":
      return <span className="bg-danger badge">Onemli</span>;

    case "daily":
      return <span className="badge bg-primary">Gunluk</span>;

    case "job":
      return <span className="badge bg-warning">Is</span>;

    default:
      return <span className="badge bg-secondary">Varsayilan</span>;
  }
};
export default getStatus;
