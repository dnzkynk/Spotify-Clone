import SongItem from "./SongItem";
import Title from "./Title";

export interface Items {
  id: number;
  title: string;
  singer: string;
  image: string;
  type: string;
  src: string;
}

export default function BoxSection({
  title,
  more = false,
  items,
}: {
  title: string;
  more: boolean;
  items: Items[];
}) {
  return (
    <section>
      <Title title={title} more={more} />
      <div className="grid grid-cols-5 gap-x-6  ">
        {items.map((item) => (
          <SongItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
