const SummaryCard = ({ title, value }) => {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-100/70 p-4 text-amber-800 shadow-sm transition hover:shadow-md">
      <p className="text-sm font-gilroy-md uppercase tracking-wide opacity-80">
        {title}
      </p>
      <h3 className="mt-2 text-2xl font-gilroy-bold">{value}</h3>
    </div>
  );
};

export default SummaryCard;
