import { NavPagination } from "./NavPagination";
import { TopProductNav } from "./TopProductNav";
import { Description } from "./Description";
import React from "react";
import { ProductItem } from "./ProductItem";
import { data } from "./data";

export const RightColumn = ({ productItem }) => (
  <div id="content-wrapper" className="left-column col-12 col-md-9">
    <section id="main">
      <Description />
      <section id="products">
        <TopProductNav data={productItem} />
        <div className="hidden-sm-down">
          <section id="js-active-search-filters" className="hide">
            <h5 className="hidden-xs-up">Active filters</h5>
          </section>
        </div>
        <div>
          <div id="js-product-list">
            <div className="products row">
              {productItem.map(dataItem => (
                <ProductItem key={dataItem._id} {...dataItem} />
              ))}
            </div>
            <NavPagination productItem={productItem} />
          </div>
        </div>
        <div id="js-product-list-bottom" />
      </section>
    </section>
  </div>
);
