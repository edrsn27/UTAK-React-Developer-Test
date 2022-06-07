import React from "react";

// components


// layout for page

import Admin from "layouts/Admin.js";

export default function PointOfSales() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          {/* <CardTable /> */}
        </div>
      </div>
    </>
  );
}

PointOfSales.layout = Admin;
