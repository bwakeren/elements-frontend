export const TeamItem = ({ name, job, illustration, socialMedia }) => {
  return (
    <div
      className="flex flex-col items-center w-72 bg-white py-8 rounded-3xl relative hover:shadow-product"
      style={{ height: 340, width: 278 }}
    >
      {illustration}
      <h5 className="font-bold text-2xl mt-3 text-primary mb-2">{name}</h5>
      <p className="text-sm text-secondary">{job}</p>
      <div className="w-full absolute py-6 bg-blue left-0 bottom-0 rounded-bl-3xl rounded-br-3xl flex items-center justify-center">
        {socialMedia.map((social) => (
          <a
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className="mx-2"
            key={social.title}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
