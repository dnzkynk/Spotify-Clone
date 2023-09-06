import Title from "../components/Title";
import categories from "../data/Categories";
import favCategories from "../data/FavoriteCategories";
import ScrollContainer from "react-indiana-drag-scroll";

interface ICategory {
  id: number;
  title: string;
  cover: string;
  color: string;
}

function Category({ category }: { category: ICategory }) {
  return (
    <div
      style={{ background: category.color }}
      className="rounded-md before:pt-[100%] before:block relative overflow-hidden group cursor-pointer hover:scale-[1.05] transition-all duration "
    >
      <div className="absolute inset-0 overflow-hidden">
        <h3 className="p-4 text-2xl tracking-tighter font-semibold">
          {category.title}
        </h3>
        <img
          src={category.cover}
          className="w-[6.25rem] h-[6.25rem] rotate-[25deg] shadow-spotify translate-x-[18%] translate-y-[5%] absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
}

function WideCategory({ category }: { category: ICategory }) {
  return (
    <div
      style={{ background: category.color }}
      className="rounded-lg flex-shrink-0 relative w-[27.375rem] h-[13.75rem] overflow-hidden group cursor-pointer hover:scale-[1.05] transition-all duration "
    >
      <div className="absolute inset-0 overflow-hidden">
        <h3 className="p-4 text-[2.5rem] tracking-tighter font-semibold">
          {category.title}
        </h3>
        <img
          src={category.cover}
          className="w-32 h-32 rotate-[25deg] shadow-spotify translate-x-[18%] translate-y-[5%] absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
}

export default function Search() {
  return (
    <>
      <section className="mb-4">
        <Title title="En Çok Dinlenenler" more={false} />
        <ScrollContainer className="flex overflow-x gap-x-6 scrollable">
          {favCategories.map((category, index) => (
            <WideCategory key={index} category={category} />
          ))}
        </ScrollContainer>
      </section>
      <section>
        <Title title="Hepsine göz at" more={false} />
        <div className="grid grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Category key={index} category={category} />
          ))}
        </div>
      </section>
    </>
  );
}
