webpackJsonp([0],{

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Asante Adarkwa Usman'
    };
    return _this;
  }

  _createClass(Filter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'filter' },
        _react2.default.createElement(
          'div',
          { className: 'inside' },
          _react2.default.createElement(
            'h4',
            null,
            'Filter'
          ),
          _react2.default.createElement(
            'select',
            { className: ' Neighbourhood', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'Ashtown' },
              'Ashtown'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Atonsu' },
              'Atonsu'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Berlin' },
              'Berlin Top'
            )
          ),
          _react2.default.createElement(
            'select',
            { className: ' Housetype', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'Storey' },
              'Storey'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Ranch' },
              'Ranch'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Compound' },
              'Compound'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Apartment' },
              'Apartment'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Studio' },
              'Studio'
            )
          ),
          _react2.default.createElement(
            'select',
            { className: ' Bedrooms', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: '1 BR' },
              '1 BR'
            ),
            _react2.default.createElement(
              'option',
              { value: '2 BR' },
              '2 BR'
            ),
            _react2.default.createElement(
              'option',
              { value: '3 BR' },
              '3 BR'
            ),
            _react2.default.createElement(
              'option',
              { value: '4 BR' },
              '4 BR'
            ),
            _react2.default.createElement(
              'option',
              { value: '5 BR' },
              '5 BR'
            ),
            _react2.default.createElement(
              'option',
              { value: '6 BR' },
              '6 BR'
            ),
            _react2.default.createElement(
              'option',
              { value: '7 BR' },
              '7 BR'
            ),
            _react2.default.createElement(
              'option',
              { value: '8 BR' },
              '8 BR'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'filter prices' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Price'
            ),
            _react2.default.createElement('input', { type: 'text', className: 'min_price', onChange: this.props.change,
              value: this.props.globalState.min_price }),
            _react2.default.createElement('input', { type: 'text', className: 'max_price', onChange: this.props.change,
              value: this.props.globalState.max_price })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filter floor-space' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Floor Price'
            ),
            _react2.default.createElement('input', { type: 'text', className: 'min_floor_space', onChange: this.props.change,
              value: this.props.globalState.min_floor_space }),
            _react2.default.createElement('input', { type: 'text', className: 'max_floor_space', onChange: this.props.change,
              value: this.props.globalState.max_floor_space })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filter extras' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Extras'
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Elevators'
              ),
              _react2.default.createElement('input', { type: 'checkbox', className: 'elevator', value: 'elevator', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Swimming Pool'
              ),
              _react2.default.createElement('input', { type: 'checkbox', className: 'swimming_pool', value: 'swimming pool', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Finished Basement'
              ),
              _react2.default.createElement('input', { type: 'checkbox', className: 'finished_basement', value: 'finished basement', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Gym'
              ),
              _react2.default.createElement('input', { type: 'checkbox', className: 'gym', value: 'gym', onChange: this.props.change })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Create Ads'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'About Us'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Log in'
          ),
          _react2.default.createElement(
            'a',
            { href: '#', className: 'register_btn' },
            'Register'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.loopListings = function () {
      var listingsData = _this.props.listingsData;


      if (listingsData == undefined || listingsData.length == 0) {
        return "Sorry your filter didn't match any listing";
      }

      _react2.default.createElement(
        'div',
        { className: 'col-md-3' },
        _react2.default.createElement(
          'div',
          { className: 'listing' },
          _react2.default.createElement(
            'div',
            { className: 'listing-img' },
            _react2.default.createElement(
              'span',
              { className: 'address' },
              'Dr Asante St'
            ),
            _react2.default.createElement(
              'div',
              { className: 'details' },
              _react2.default.createElement(
                'div',
                { className: 'col-md-3 ' },
                _react2.default.createElement('div', { className: 'user-img' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-09' },
                _react2.default.createElement(
                  'div',
                  { className: 'user-details' },
                  _react2.default.createElement(
                    'span',
                    { className: 'user-name' },
                    'Asante Emmanuel'
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'post-date' },
                    '05/06/2019'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'listing-details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'floor-space' },
                    _react2.default.createElement('i', { className: 'fa fa-square-o', 'aria-hidden': 'true' }),
                    _react2.default.createElement(
                      'span',
                      null,
                      '1000 ft\xB2'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'bedrooms' },
                    _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                    _react2.default.createElement(
                      'span',
                      null,
                      '4 bedrooms'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'view-btn' },
                  'View listing'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'bottom-info' },
            _react2.default.createElement(
              'span',
              { className: 'price' },
              ' $1000 / month '
            ),
            _react2.default.createElement(
              'span',
              { className: 'location' },
              _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
              ' Atonsu, Kumasi'
            )
          )
        )
      );

      return listingsData.map(function (listings, index) {
        return _react2.default.createElement(
          'div',
          { className: 'col-md-3', key: index },
          _react2.default.createElement(
            'div',
            { className: 'listing' },
            _react2.default.createElement(
              'div',
              { className: 'listing-img', style: { background: 'url("' + listings.image + '") no-repeat center center' } },
              _react2.default.createElement(
                'span',
                { className: 'address' },
                listings.address
              ),
              _react2.default.createElement(
                'div',
                { className: 'details' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-3 ' },
                  _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("' + listings.ownerImage + '") center center' } })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-09' },
                  _react2.default.createElement(
                    'div',
                    { className: 'user-details' },
                    _react2.default.createElement(
                      'span',
                      { className: 'user-name' },
                      listings.owner
                    ),
                    _react2.default.createElement(
                      'span',
                      { className: 'post-date' },
                      listings.date
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'listing-details' },
                    _react2.default.createElement(
                      'div',
                      { className: 'floor-space' },
                      _react2.default.createElement('i', { className: 'fa fa-square-o', 'aria-hidden': 'true' }),
                      _react2.default.createElement(
                        'span',
                        null,
                        '1000 ft\xB2'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'bedrooms' },
                      _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                      _react2.default.createElement(
                        'span',
                        null,
                        listings.rooms
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'view-btn' },
                    'View listing'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'bottom-info' },
              _react2.default.createElement(
                'span',
                { className: 'price' },
                ' $',
                listings.price,
                ' '
              ),
              _react2.default.createElement(
                'span',
                { className: 'location' },
                _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
                ' ',
                listings.city,
                ', ',
                listings.state
              )
            )
          )
        );
      });
    };

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe'
      //  this.loopListings = this.loopListings.bind(this)
    };return _this;
  }

  _createClass(Listings, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'listings' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search' })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { className: 'results' },
            '390 results found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-option' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortby' },
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'Highest Price'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                'Lowest Price'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fa fa-th-list', 'aria-hidden': 'true' }),
              _react2.default.createElement('i', { className: 'fa fa-th', 'aria-hidden': 'true' })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings-results' },
          this.loopListings()
        ),
        _react2.default.createElement(
          'section',
          { id: 'pagination' },
          _react2.default.createElement(
            'ul',
            { className: 'pages' },
            _react2.default.createElement(
              'li',
              null,
              'Prev'
            ),
            _react2.default.createElement(
              'li',
              { className: 'active' },
              '1'
            ),
            _react2.default.createElement(
              'li',
              null,
              '2'
            ),
            _react2.default.createElement(
              'li',
              null,
              '3'
            ),
            _react2.default.createElement(
              'li',
              null,
              '4'
            ),
            _react2.default.createElement(
              'li',
              null,
              '5'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Next'
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var listingsData = [{

  owner: 'Asante Adarkwa Usman',
  ownerImage: 'http://pngimg.com/uploads/student/student_PNG86.png',
  date: '14/12/2019',
  address: '30-35 Nkruma ave',
  city: 'Atonsu',
  state: 'Agogo',
  rooms: 4,
  price: 23222,
  floorSpace: 20,
  extras: ['elevator', 'gym'],
  homeType: 'Ranch',
  image: 'https://assets.wallpapersin4k.org/uploads/2017/04/Real-Estate-HD-Wallpapers-11.jpg'
}, {
  owner: 'Ntiamiah Julia',
  ownerImage: 'https://uploads.pl-internal.com/ZGE5NWI5MjMtNjczZS00NTEyLWJjMTgtMDNkOTEyYzcyNmNm/content/2018/08/Jeff%20Lock%20-%20agent.jpg',
  date: '7/1/2019',
  address: '35 Katanka st',
  city: 'Ashtown',
  state: 'Gyinyase',
  rooms: 3,
  price: 35000,
  floorSpace: 100,
  extras: ['Swimming Pool', 'gym'],
  homeType: 'Storey',
  image: 'https://wonderfulengineering.com/wp-content/uploads/2013/12/home-wallpaper-26.jpg'
}, {
  owner: 'Asante Agyei Elijah',
  ownerImage: 'https://i.ytimg.com/vi/260vdp5CZzM/maxresdefault.jpg',
  date: '4/7/2019',
  address: '45 Nhyiaso st',
  city: 'Berlin Top',
  state: 'High Tension',
  rooms: 8,
  price: 53222,
  floorSpace: 500,
  extras: ['elevator', 'gym', 'Swimming Pool'],
  homeType: 'Compound',
  image: 'https://assets.wallpapersin4k.org/uploads/2017/04/Real-Estate-HD-Wallpapers-22.jpg'
}, {
  owner: 'Saanaa Mastura',
  ownerImage: 'http://2.bp.blogspot.com/-z6vG8XPUh4Q/U617sotUQZI/AAAAAAAALmE/_kilY4WRcv4/s1600/cute-and-beautiful-girls-wallpapers-005.jpg',
  date: '28/5/2019',
  address: '65 ElJhay ave',
  city: 'Ashtown',
  state: 'Esreso',
  rooms: 6,
  price: 1356,
  floorSpace: 20,
  extras: ['gym'],
  homeType: 'Storey',
  image: 'https://assets.wallpapersin4k.org/uploads/2017/04/Real-Estate-Wallpaper-20.jpg'
}, {
  owner: 'Asante Emmanuel',
  ownerImage: 'http://2.bp.blogspot.com/-Gjn0R9kzfbw/U052fz_uE5I/AAAAAAAALVc/ngtAiGS7G7Q/w1200-h630-p-k-nu/59840_gun-li_or_li-gong_1600x1200_(www.GdeFon.ru).jpg',
  date: '14/10/2019',
  address: '3 Tanka st',
  city: 'Berlin Top',
  state: 'Dompoase',
  rooms: 7,
  price: 65000,
  floorSpace: 200,
  extras: ['Swimming Pool', 'gym', 'Finished Basement', 'elevator'],
  homeType: 'Ranch',
  image: 'https://propertiesinbudapest.com/wp-content/uploads/2014/12/bg-1.jpg'
}, {
  owner: 'Anakwa Priscilla',
  ownerImage: 'https://images5.alphacoders.com/366/366638.jpg',
  date: '19/6/2019',
  address: '74 Juliet ave',
  city: 'Atonsu',
  state: 'Kotei',
  rooms: 5,
  price: 45000,
  floorSpace: 100,
  extras: ['Swimming Pool', 'gym', 'Finished Basement'],
  homeType: 'Compound',
  image: 'http://www.hdnicewallpapers.com/Walls/Big/House%20and%20Bungalow/Luxury_Home_HD_Photo.jpg'
}];

exports.default = listingsData;

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(232);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(231);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(233);

var _Listings2 = _interopRequireDefault(_Listings);

var _ListingsData = __webpack_require__(234);

var _ListingsData2 = _interopRequireDefault(_ListingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.change = function (event) {
      // hundles event change

      var name = event.target.className;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

      _this.setState(_defineProperty({}, name, value), function () {
        console.log(_this.state);
        _this.filteredData();
      });
    };

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.filteredData = function () {
      var newData = _this.state.listingsData.filter(function (item) {
        return item.price >= _this.state.min_price && item.price <= _this.state.max_price && item.floorSpace >= _this.state.min_floor_space && item.floorSpace <= _this.state.max_floor_space;
      });

      _this.setState({
        filteredData: newData
      });
    };

    _this.state = {
      name: 'Asante Adarkwa Usman',
      listingsData: _ListingsData2.default,
      min_price: 0,
      max_price: 1000000,
      min_floor_space: 1,
      max_floor_space: 5000,
      elevator: false,
      finished_basement: false,
      gym: false,
      swimming_pool: false,
      filteredData: _ListingsData2.default
      //  this.change = this.change.bind(this);
    };return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state }),
          _react2.default.createElement(_Listings2.default, { listingsData: this.state.filteredData })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[238]);