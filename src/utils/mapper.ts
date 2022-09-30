import { IData } from "../interfaces";

export const mapper = (data: { result: Partial<IData>[] }) => {
  return data.result.map(
    ({ id, title, overwiev, genre_ids, vote_average, name }):Partial<IData> => ({
      id,
      title,
      overwiev,
      genre_ids,
      vote_average,
      name,
    })
  );
};

