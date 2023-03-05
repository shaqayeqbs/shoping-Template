import React from "react";
import Categories from "./Categories";

function Index({ data=[] }) {
  return (
    <section className="grid ltr gap-x-2 grid-cols-3 w-full mb-8">
      <div className="col-span-6">
        <Categories data={data} />
      </div>
    </section>
  );
}

export default Index;
