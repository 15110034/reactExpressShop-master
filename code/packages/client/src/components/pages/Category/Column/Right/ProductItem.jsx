import React from "react";

export function ProductItem({
  imageUrl,
  galleryImage,
  name,
  newPrice,
  regularPrice
}) {
  return (
    <article
      className="product-miniature js-product-miniature"
      data-id-product={9}
      data-id-product-attribute={0}
      itemScope
      itemType="http://schema.org/Product"
    >
      <div className="thumbnail-container">
        <a
          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_product=9&id_product_attribute=0&rewrite=autumn-shades-perfect-gift&controller=product&id_lang=1"
          className="thumbnail product-thumbnail"
        >
          <img src={imageUrl} alt="Autumn Shades Perfect Gift" />
        </a>
        <div className="gallery-wrapper">
          <ul className="gallery-thumb-list">
            {galleryImage.map(imageGalleryUrl => (
              <li
                className="gallery-image-thumb active"
                style={{ width: "20%" }}
                id={imageGalleryUrl}
              >
                <span
                  data-href={imageGalleryUrl}
                  data-title="Autumn Shades Perfect Gift"
                  data-alt="Autumn Shades Perfect Gift"
                >
                  <img
                    className="img-fluid"
                    src={imageGalleryUrl}
                    alt="Autumn Shades Perfect Gift"
                    title="Autumn Shades Perfect Gift"
                    itemProp="image"
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="product-description">
          <div className="left">
            <h3 className="product-title" itemProp="name">
              <a href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_product=9&id_product_attribute=0&rewrite=autumn-shades-perfect-gift&controller=product&id_lang=1">
                {name}
              </a>
            </h3>
            <div className="product-price-and-shipping">
              <span className="sr-only">Price</span>
              <span itemProp="price" className="price new-price">
                {newPrice}
              </span>
              <span className="sr-only">Regular price</span>
              <span className="regular-price" />
            </div>
          </div>
          <div className="right" />
        </div>
        <ul className="product-flags">
          <li className="product-flag new">New</li>
          <li className="product-flag on-sale">On sale!</li>
          <li className="product-flag pack">Pack</li>
          <li className="product-flag on-sale">-20%</li>
        </ul>
        {/* <a
        className="quick-view fl-chapps-eye95"
        href="#"
        data-link-action="quickview"
      /> */}
      </div>
    </article>
  );
}