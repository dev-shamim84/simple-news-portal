import { use } from "react";
import { NavLink } from "react-router";
const categoriesPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoriesPromise);
  return (
    <div>
      <h2 className="font-bold text-center">All Categories</h2>
      <div className="grid grid-cols-1 gap-3 mt-3">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className="btn text-accent border-0 bg-white hover:bg-base-200 font-semibold"
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default Categories;
