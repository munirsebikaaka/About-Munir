const DashboardCards = () => {
  const cardsData = [
    { status: "complete", number: 30 },
    { status: "active", number: 126 },
    { status: "at risk", number: 30 },
    { status: "in progress", number: 30 },
  ];
  return (
    <div className="flex justify-between items-center bg-white p-[0.7rem] rounded-sm">
      {cardsData.map((c) => (
        <div className="flex flex-col items-center">
          <h1>{c.status}</h1>
          <p>{c.number}</p>
        </div>
      ))}
    </div>
  );
};
export default DashboardCards;
