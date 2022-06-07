import React from "react";

// components


// layout for page

import Admin from "layouts/Admin.js";

export default function PointOfSales() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4 mb-12">
          {/* <CardTable /> */}
        </div>
      </div>
    </>
  );
}

PointOfSales.layout = Admin;
