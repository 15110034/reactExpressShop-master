// import Axios module from axios for Promise based HTTP request
import Axios from 'axios';

// import React module from react for JSX
import React, { PureComponent } from 'react';

// import Route module from react-router-dom for router in react
import { Link } from 'react-router-dom';

const linkImage = [
  'https://ld-prestashop.template-help.com/prestashop_13106/modules/tmhtmlcontent/img/7fd2279725df0e252f7a621a780dea60ef67aade_top-banner-1.jpg',
  'https://ld-prestashop.template-help.com/prestashop_13106/modules/tmhtmlcontent/img/68cd47e008afd9a9fa1d3024f8bc9780fa513466_top-banner-2.jpg',
  'https://ld-prestashop.template-help.com/prestashop_13106/modules/tmhtmlcontent/img/0c1b2755fa48a10764dc2ec243cbd29ec62500e7_top-banner-3.jpg',
];

/**
 *
 *
 * @class TopThreeCategory
 * @extends {PureComponent}
 */
class TopThreeCategory extends PureComponent {
  /**
   *
   *
   * @memberof TopThreeCategory
   */
  state = {
    category: [],
  };
  _isMounted = false;

  /**
   *
   *
   * @memberof TopThreeCategory
   */
  componentDidMount = () => {
    this._isMounted = true;
    this.getTopThreeProduct();
  };

  getTopThreeProduct = async () => {
    try {
      const { data = null } = await Axios.get('/api/categories/topthree').catch(
        error => {
          return console.log(error.response);
        }
      );
      if (data !== null) {
        this.setState({
          category: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  /**
   *
   *
   * @returns
   * @memberof TopThreeCategory
   */
  render() {
    const { category = [] } = this.state;
    return (
      <div className="wrapper it_YZMTHKOFREBE container">
        <div className="row it_QZOWDVFIGJLN ">
          <div className="it_QVIPIXAXPCPH col-12     ">
            <div className="module ">
              {' '}
              <div id="tmhtmlcontent_topColumn">
                <ul className="tmhtmlcontent-topColumn row">
                  {category.map((data, i) => (
                    <li
                      key={`tmhtmlcontent_topColumn-${data._id}-${i}`}
                      className="tmhtmlcontent-item-1 col-12 col-sm-4 "
                    >
                      <Link to="/category" className="item-link">
                        <img
                          src={linkImage[i]}
                          className="item-img img-responsive"
                          title="true"
                          alt=""
                          width={567}
                          height={583}
                        />
                        <div className="item-html">
                          <h6>New collection</h6>
                          <h3>
                            {data.name} {data.value}
                          </h3>
                          <span className="btn btn-md btn-primary">
                            Shop now!
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export component
export { TopThreeCategory };
