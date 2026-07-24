const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-20">

      <p className="text-sky-400 font-semibold mb-3">
        {subtitle}
      </p>

      <h2 className="text-5xl font-black text-white">
        {title}
      </h2>

    </div>
  );
};

export default SectionTitle;