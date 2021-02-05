import { TeamItem } from "./TeamItem/TeamItem";
import { datas } from "./data";

export const Teams = () => {
  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-7 mb-10 sm:grid-cols-2 lg:grid-cols-4">
      {datas.map((data) => (
        <TeamItem
          key={data.name}
          name={data.name}
          job={data.job}
          illustration={data.illustration}
          socialMedia={data.socialMedia}
        />
      ))}
    </div>
  );
};
