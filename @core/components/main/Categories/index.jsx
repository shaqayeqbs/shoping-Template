import React, { useState } from "react";
import Categories from "./Categories";

function Index({ data }) {
  return (
    <section className="grid ltr gap-x-10 grid-cols-6 w-full mb-8">
      <div className="col-span-6">
        <Categories data={data} />
      </div>
    </section>
  );
}

export default Index;
