import React from "react";

export function NavPagination({ productItem }) {
  return (
    <nav className="pagination">
      <div>
        <ul className="page-list clearfix text-sm-center">
          <li>
            <a
              rel="prev"
              href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=category&id_category=14&id_lang=1&page=1"
              className="previous disabled js-search-link"
            >
              &lt;
            </a>
          </li>
          {productItem.map((data, i) => (
            <li className={i === 0 ? "" : "current"} key={data._id}>
              <a
                rel="nofollow"
                href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=category&id_category=14&id_lang=1&page=1"
                className="disabled js-search-link"
              >
                {i}
              </a>
            </li>
          ))}

          <li>
            <a
              rel="next"
              href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=category&id_category=14&id_lang=1&page=2"
              className="next js-search-link"
            >
              &gt;
            </a>
          </li>
        </ul>
      </div>
      <span id="back_to_top" className="btn btn-md btn-default">
        Back to top
      </span>
    </nav>
  );
}
