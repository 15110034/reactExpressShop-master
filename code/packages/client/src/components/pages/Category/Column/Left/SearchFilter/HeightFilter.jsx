// import React module from react for JSX
import React from 'react';

/**
 *
 *
 * @export
 * @param {*} { categoryHeight = [] }
 * @returns
 */
export function HeightFilter({ categoryHeight = [] }) {
  return (
    <section className="facet clearfix">
      <h3 className="facet-title hidden-sm-down">Height</h3>
      <div
        className="title hidden-md-up"
        data-target="#facet_45985"
        data-toggle="collapse"
      >
        <h3 className="facet-title">Height</h3>
        <span className="navbar-toggler collapse-icons">
          <i className="material-icons add"></i>
          <i className="material-icons remove"></i>
        </span>
      </div>
      <ul id="facet_45985" className="collapse">
        {categoryHeight.map(({ value = null, _id }) => {
          if (value !== null) {
            return (
              <li key={_id}>
                <label className="facet-label" htmlFor="facet_input_45985_0">
                  <span className="custom-checkbox">
                    <input id="facet_input_45985_0" type="checkbox" />
                    <span className="ps-shown-by-js">
                      <i className="material-icons checkbox-checked"></i>
                    </span>
                  </span>
                  <a
                    href="#0"
                    className="_gray-darker search-link js-search-link"
                    rel="nofollow"
                  >
                    {value}
                    <span className="magnitude">(5)</span>
                  </a>
                </label>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </section>
  );
}
