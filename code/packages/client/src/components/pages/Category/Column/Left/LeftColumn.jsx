import React from "react";

import {
  FilterBy,
  ColorFilter,
  HeightFilter,
  AvailabilityFilter,
  BrandFilter,
  PriceFilter
} from "./SearchFilter";
import { SearchFilterControler } from "./SearchFilterControler";

const LeftColumn = () => {
  return (
    <div id="left-column" className="col-12 col-md-3">
      <div id="search_filters_wrapper">
        <SearchFilterControler />
        <div id="search_filters">
          <FilterBy />
          <ColorFilter />
          <HeightFilter />
          <AvailabilityFilter />
          <BrandFilter />
          <PriceFilter />
        </div>
      </div>
    </div>
  );
};

export { LeftColumn };
