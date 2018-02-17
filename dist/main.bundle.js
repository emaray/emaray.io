webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".update-note {\r\n    color: #717958;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-5 col-md-6 col-sm-12 col-xs-12\">\n    <div class=\"card\">\n      <!-- <div class=\"card-block\"> -->\n      <div class=\"card-img\">\n        <img src=\"../assets/megan.jpg\" alt=\"Megan Adams\" />\n      </div>\n      <!-- </div> -->\n    </div>\n  </div>\n  <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <h3 class=\"card-title\">About Megan</h3>\n        <p class=\"card-text\">\n          I am a second-year student in the Masters of Library and Information Studies program at the University of Wisconsin–Madison.\n          I currently work as a reference and interlibrary loan assistant at Edgewood College Library and as a library assistant\n          at the U.S. Geological Survey National Wildlife Health Center. My professional interests include user-centered\n          library instruction, information literacy instruction, digital humanities, and information visualization. </p>\n        <p>\n        Prior to library school, I worked as a freelance academic editor, assessed standardized test responses, and taught\n          first-year composition. My academic background is in English literature, but my interests include the humanities\n          and naturalist exploration of the world. </p>\n        <p> During the summer, I can be found paddling a canoe through Northwoods lakes, traipsing through prairies, and staring\n          at trees hoping for a glimpse of their tiny resident songbirds. I’m also an enthusiastic home cook inclined toward\n          ambitious canning exploits.\n        </p>\n\n        <p class=\"update-note\" align=\"right\"><i>– January 2018</i></p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .title{\r\n    text-align: center !important;\r\n    padding: 10px;\r\n    display:table;\r\n    margin:0 auto;\r\n} */\r\n\r\n/* .clr-header, header {\r\n    text-align: center !important;\r\n    height: 80px !important;\r\n} */\r\n\r\n/* .header, header{\r\n    display:inline-block !important;\r\n    color: #fafafa;\r\n    height: 5rem !important;\r\n    white-space: nowrap;\r\n} */\r\n\r\n.nav {\r\n    text-align: center !important;\r\n    display:table;\r\n    margin:0 auto;\r\n}\r\n\r\n.banner {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex; \r\n    -webkit-box-orient: vertical; \r\n    -webkit-box-direction: normal; \r\n        -ms-flex-direction: column; \r\n            flex-direction: column;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    width: 100%;\r\n    height: 30%;\r\n    min-height: 30%;\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/emaray_banner.png") + ");\r\n    background-size: cover;\r\n    background-position: center 50%;\r\n    background-blend-mode: multiply;\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n    .banner {\r\n        height: 20%;\r\n        min-height: 20%;\r\n    }\r\n}\r\n\r\n.bold-span {\r\n    font-weight: bold;\r\n}\r\n\r\nfooter.footer {\r\n    display: block;\r\n    width: 100%;\r\n    background-color: #CCCCCC;\r\n    box-sizing: border-box;\r\n    padding: 3px 5%;\r\n}\r\n\r\n/* .rights {\r\ntext-align: right;\r\nfont-size: 85%;\r\nmargin: 0px;\r\ndisplay: inline-block;\r\n} */\r\n\r\n.footer-links {\r\n    margin: auto;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    padding: 4px;\r\n}\r\n\r\n.nav .nav-link.active, .nav .nav-link:active, .nav .nav-link:focus, .nav .nav-link:hover {\r\n    text-decoration: none;\r\n    -webkit-text-decoration-line: none;\r\n            text-decoration-line: none;\r\n    -webkit-text-decoration-style: initial;\r\n            text-decoration-style: initial;\r\n    -webkit-text-decoration-color: initial;\r\n            text-decoration-color: initial;\r\n    box-shadow: inset 0 -3px 0 #57a581 !important;\r\n    transition: box-shadow .2s ease-in !important;\r\n    font-weight: 500;\r\n}\r\n\r\n\r\n#li {\r\npadding-top: 1.5px;\r\npadding-right: 4px;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<clr-main-container>\n  <div class=\"banner\"></div>\n  <nav class=\"subnav\">\n    <ul class=\"nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['about']\">About Megan</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['cv']\">CV</a>\n      </li>\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/interests']\">Professional Interests</a>\n      </li> -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['portfolio']\">Portfolio</a>\n      </li>\n    </ul>\n  </nav>\n\n  <div class=\"content-container\">\n    <div class=\"content-area\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n\n  <footer class=\"footer\">\n    <div class=\"footer-links\">\n      <a href=\"http://linkedin.com/in/meganradams\" target=\"_blank\">\n        <img alt=\"LinkedIn icon\" src=\"../assets/In-White-28px-R.png\" id=\"li\">\n      </a>\n      <a href=\"https://github.com/emaray\" target=\"_blank\">\n        <img alt=\"GitHub icon\" src=\"../assets/GitHub-Mark-Light-32px.png\" id=\"gh\">\n      </a>\n      <!-- <a href=\"https://ebird.org/ebird/profile/NTQ5Njg3/US-WI\">\n        <img alt=\"eBird icon\" src=\"../assets/ebird-16px.png\">\n      </a> -->\n    </div>\n  </footer>\n</clr-main-container>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clarity_angular__ = __webpack_require__("../../../../clarity-angular/clarity-angular.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cv_cv_component__ = __webpack_require__("../../../../../src/app/cv/cv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__interests_interests_component__ = __webpack_require__("../../../../../src/app/interests/interests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__kirtlandswarblerviz_kirtlandswarblerviz_component__ = __webpack_require__("../../../../../src/app/kirtlandswarblerviz/kirtlandswarblerviz.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__cv_cv_component__["a" /* CVComponent */],
                __WEBPACK_IMPORTED_MODULE_8__interests_interests_component__["a" /* InterestsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__portfolio_portfolio_component__["a" /* PortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_10__kirtlandswarblerviz_kirtlandswarblerviz_component__["a" /* KirtlandswarblervizComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_clarity_angular__["a" /* ClarityModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* ROUTING */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ROUTES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTING; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cv_cv_component__ = __webpack_require__("../../../../../src/app/cv/cv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interests_interests_component__ = __webpack_require__("../../../../../src/app/interests/interests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__kirtlandswarblerviz_kirtlandswarblerviz_component__ = __webpack_require__("../../../../../src/app/kirtlandswarblerviz/kirtlandswarblerviz.component.ts");






var ROUTES = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__about_about_component__["a" /* AboutComponent */] },
    { path: 'cv', component: __WEBPACK_IMPORTED_MODULE_2__cv_cv_component__["a" /* CVComponent */] },
    { path: 'interests', component: __WEBPACK_IMPORTED_MODULE_3__interests_interests_component__["a" /* InterestsComponent */] },
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_4__portfolio_portfolio_component__["a" /* PortfolioComponent */] },
    { path: 'kirtlandswarblerviz', component: __WEBPACK_IMPORTED_MODULE_5__kirtlandswarblerviz_kirtlandswarblerviz_component__["a" /* KirtlandswarblervizComponent */] }
];
var ROUTING = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(ROUTES);


/***/ }),

/***/ "../../../../../src/app/cv/cv.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cv/cv.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-10 col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"btn-group\">\n      <a target=\"_blank\" href=\"https://s3.amazonaws.com/emaray.io/MeganAdamsCV2018.pdf\">\n        <button class=\"btn\">\n          <clr-icon shape=\"download\"></clr-icon>Download CV (PDF)</button>\n      </a>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <h2 class=\"card-title\">Curriculum Vitae/Résumé </h2>\n        <h4 class=\"card-title\">Education</h4>\n\n        <div class=\"card-media-block\">\n          <img src=\"../../assets/uw-logo-centered-web.svg \" onerror=\"this.onerror=null; this.src='uw-logo-centered-web.png'\" class=\"card-media-image\">\n          <div class=\"card-media-description\">\n            <span class=\"card-media-title\" style=\"font-weight:bold\">\n              Master of Arts, Library &amp; Information Studies (Projected May 2018)\n            </span>\n            <span class=\"card-media-text\">\n              University of Wisconsin&ndash;Madison\n            </span>\n          </div>\n        </div>\n\n        <div class=\"card-media-block\">\n          <img src=\"../../assets/USF_seal.png\" class=\"card-media-image\">\n          <div class=\"card-media-description\">\n            <span class=\"card-media-title\" style=\"font-weight:bold\">\n              Master of Arts, English &amp; American Literature (2010)\n            </span>\n            <span class=\"card-media-text\">\n              University of South Florida\n            </span>\n            <a href=\"http://www.worldcat.org/oclc/742050823\" target=\"_blank\">\n              <span class=\"card-media-text\">\n                Thesis: \"A border is a veil not many people can wear\": Testimonial fiction and transnational healing in Edwidge Danticat's\n                <i>The Farming of Bones</i> and Nelly Rosario's\n                <i>Song of the Water Saints</i>\n              </span>\n            </a>\n          </div>\n        </div>\n\n        <div class=\"card-media-block\">\n          <img src=\"../../assets/USF_seal.png\" class=\"card-media-image\">\n          <div class=\"card-media-description\">\n            <span class=\"card-media-title\" style=\"font-weight:bold\">\n              Bachelor of Arts, English &amp; American Literature (2007)\n            </span>\n            <span class=\"card-media-text\">\n              University of South Florida\n            </span>\n          </div>\n        </div>\n        <br>\n        <hr>\n\n        <h4 class=\"card-title\">Work Experience</h4>\n        <ul class=\"list\">\n          <li>\n            <span style=\"font-weight:bold\">Graduate Assistant</span>\n            <ul class=\"list-unstyled\">\n              <li>Reference and Interlibrary Loan, Evening and Weekend Supervisor</li>\n              <li>\n                Oscar Rennebohm Library at Edgewood College\n              </li>\n              <li>August 2016 – Present</li>\n            </ul>\n          </li>\n\n          <li>\n            <span style=\"font-weight:bold\">Library Assistant </span>\n            <ul class=\"list-unstyled\">\n              <li>\n                National Wildlife Health Center, U.S. Geological Survey\n              </li>\n              <li>November 2016 – Present</li>\n            </ul>\n          </li>\n\n          <li>\n            <span style=\"font-weight:bold\">Field Placement</span>\n            <ul class=\"list-unstyled\">\n              <li>\n                College Library, University of Wisconsin–Madison\n              </li>\n              <li>August 2017 – December 2017</li>\n            </ul>\n          </li>\n\n          <li>\n            <span style=\"font-weight:bold\">Reader/Grader </span>\n            <ul class=\"list-unstyled\">\n              <li>\n                Information School, University of Wisconsin–Madison\n              </li>\n              <li>October 2017 – Present</li>\n            </ul>\n          </li>\n\n          <li>\n            <span style=\"font-weight:bold\">Constructed Response Rater</span>\n            <ul class=\"list-unstyled\">\n              <li>\n                Educational Testing Services\n              </li>\n              <li>GRE, TOEIC, TOEFL Junior, TOEFL Primary, SAWS </li>\n              <li>May 2010 – October 2016</li>\n            </ul>\n          </li>\n\n          <li>\n            <span style=\"font-weight:bold\">Freelance Writer/Editor</span>\n            <ul class=\"list-unstyled\">\n              <li>(Self-employed)</li>\n              <li>May 2010 – Present</li>\n            </ul>\n          </li>\n\n          <li>\n            <span style=\"font-weight:bold\">ESL Tutor</span>\n            <ul class=\"list-unstyled\">\n              <li>(Self-employed)</li>\n              <li>July 2011 – June 2014</li>\n            </ul>\n          </li>\n\n          <li>\n            <span style=\"font-weight:bold\">Graduate Teaching Assistant</span>\n            <ul class=\"list-unstyled\">\n              <li>\n                Department of English, University of South Florida\n              </li>\n              <li>August 2008 – May 2010 </li>\n            </ul>\n          </li>\n\n        </ul>\n        <br>\n        <hr>\n        <p class=\"card-text\">\n          <h4 class=\"card-title\">Technology Skills</h4>\n\n          <ul class=\"list\">\n            <li>\n              <span style=\"font-weight:bold\">Languages</span> | HTML, CSS, JavaScript, MySQL</li>\n            <li>\n              <span style=\"font-weight:bold\">Course Management</span> | Blackboard, Canvas</li>\n            <li>\n              <span style=\"font-weight:bold\">Content Management</span> | LibGuides, ContentDM</li>\n            <li>\n              <span style=\"font-weight:bold\">Library</span> | Millennium, Alma, Koha; ILLiad and WorldShare</li>\n            <li>\n              <span style=\"font-weight:bold\">Virtual Reference</span> | LibAnswers, LibChat, LibraryH3lp</li>\n            <li>\n              <span style=\"font-weight:bold\">eLearning and Screen Capture</span> | Adobe Captivate, Screencast-O-Matic, Jing</li>\n            <li>\n              <span style=\"font-weight:bold\">Visualization</span> | Tableau</li>\n            <li>\n              <span style=\"font-weight:bold\">Data</span> | OpenRefine</li>\n\n          </ul>\n          <br>\n          <hr>\n\n          <h4 class=\"card-title\">Presentations</h4>\n          <ul class=\"list-unstyled\">\n            <li>\n              <span style=\"font-weight:bold\">\"Academic Freedom and the Library: Employing a Social Justice Lens for Understanding Intellectual Freedom\"</span>\n              <ul class=\"list-unstyled\">\n                <li>Wisconsin Association of Academic Libraries Annual Conference 2018 Co-presenter</li>\n              </ul>\n            </li>\n          </ul>\n          <br>\n          <hr>\n\n          <h4 class=\"card-title\">Projects</h4>\n          <ul class=\"list-unstyled\">\n            <li>\n              <span style=\"font-weight:bold\">Website Design</span>\n              <ul class=\"list\">\n                <li>\n                  <a href=\"http://scotchhillfarm.com\" target=\"_blank\">Scotch Hill Farm</a>\n                </li>\n                <li>\n                  <a href=\"https://www.hilltopcommunityfarm.org\" target=\"_blank\">Hilltop Community Farm</a>\n                </li>\n              </ul>\n            </li>\n          </ul>\n          <br>\n          <hr>\n\n          <h4 class=\"card-title\">Affiliations</h4>\n          <ul>\n            <li>American Library Association (ALA)</li>\n            <li>Wisconsin Library Association (WLA)</li>\n            <li>WLA Student Special Interest Group</li>\n            <li>REFORMA Student Group</li>\n          </ul>\n          <br>\n          <hr>\n\n          <h4 class=\"card-title\">Volunteer Experience</h4>\n          <ul>\n            <li>University of Wisconsin\n              <a href=\"https://gobigread.wisc.edu/\" target=\"_blank\">Go Big Read</a> Discussion Facilitator (Fall 2016, Fall 2017)</li>\n            <li>\n              <a href=\"Wisconsin Association of Academic Libraries\" target=\"_blank\">Wisconsin Association of Academic Libraries</a> 2018 Conference Planning Committee- UW–Madison Liaison</li>\n            <li>Wisconsin Library Association 2017 Conference Planning Committee- UW–Madison Liaison</li>\n            <li>Wisconsin Library Association Student Special Interest Group- Chair 2017-2018</li>\n          </ul>\n          <hr>\n\n          <h4 class=\"card-title\">Certificates</h4>\n          <ul>\n            <li>\n              <a href=\"https://projectenable.syr.edu/\" target=\"_blank\">Project ENABLE</a> Accessibility Training</li>\n          </ul>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/cv/cv.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CVComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CVComponent = (function () {
    function CVComponent() {
    }
    CVComponent.prototype.ngOnInit = function () {
    };
    CVComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cv',
            template: __webpack_require__("../../../../../src/app/cv/cv.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cv/cv.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], CVComponent);
    return CVComponent;
}());



/***/ }),

/***/ "../../../../../src/app/interests/interests.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/interests/interests.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  interests works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/interests/interests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InterestsComponent = (function () {
    function InterestsComponent() {
    }
    InterestsComponent.prototype.ngOnInit = function () {
    };
    InterestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-interests',
            template: __webpack_require__("../../../../../src/app/interests/interests.component.html"),
            styles: [__webpack_require__("../../../../../src/app/interests/interests.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], InterestsComponent);
    return InterestsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/kirtlandswarblerviz/kirtlandswarblerviz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/kirtlandswarblerviz/kirtlandswarblerviz.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"tableauViz\"></div>"

/***/ }),

/***/ "../../../../../src/app/kirtlandswarblerviz/kirtlandswarblerviz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KirtlandswarblervizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KirtlandswarblervizComponent = (function () {
    function KirtlandswarblervizComponent() {
    }
    KirtlandswarblervizComponent.prototype.ngOnInit = function () {
        var placeholderDiv = document.getElementById('tableauViz');
        //var url = 'https://public.tableau.com/profile/megan.adams#!/vizhome/KirtlandswarblerConservationeffortsandcitizenscience/KirtlandsWarblerConservationandCitizenScience?:embed=y&:display_count=yes';
        var url = 'https://public.tableau.com/views/KirtlandswarblerConservationeffortsandcitizenscience/KirtlandsWarblerConservationandCitizenScience?:embed=y&:display_count=yes';
        var options = {
            hideTabs: true,
            width: '1000px',
            height: '4250px',
            onFirstInteractive: function () {
                // The viz is now ready and can be safely used.
            }
        };
        this.tableauViz = new tableau.Viz(placeholderDiv, url, options);
    };
    KirtlandswarblervizComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-kirtlandswarblerviz',
            template: __webpack_require__("../../../../../src/app/kirtlandswarblerviz/kirtlandswarblerviz.component.html"),
            styles: [__webpack_require__("../../../../../src/app/kirtlandswarblerviz/kirtlandswarblerviz.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], KirtlandswarblervizComponent);
    return KirtlandswarblervizComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row1 {\r\n    height: 540px;\r\n}\r\n\r\n.row2 {\r\n    height:550px;\r\n}\r\n\r\n\r\n.card.clickable:hover {\r\n    box-shadow: 0 0.125rem 0 0 #9A9A9A !important;\r\n    border: 1px solid #9A9A9A !important;\r\n\r\n}\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"card row1\">\n      <div class=\"card-block\">\n        <h3 class=\"card-title\">Kirtland's Warbler Data Visualization</h3>\n        <a href=\"#\" [routerLink]=\"['/kirtlandswarblerviz']\" class=\"card clickable\" target=\"_blank\">\n          <div class=\"card-img\">\n              <img src=\"../assets/kirtlandswarblerviz.PNG\">\n          </div>\n        </a>\n        <div class=\"card-block\">\n          <p class=\"card-text\">\n            A data visualization on Kirtland's Warbler conservation efforts and citizen science, created with Tableau.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"card row1\">\n      <div class=\"card-block\">\n        <h3 class=\"card-title\">Digital Illustration Collection (Content DM)</h3>\n        <a href=\"http://cdm15842.contentdm.oclc.org/cdm/landingpage/collection/p15842coll11\" class=\"card clickable\" target=\"_blank\">\n          <div class=\"card-img\">\n              <img src=\"../assets/BirdsofWisconsin.png\">\n          </div>\n        </a>\n        <div class=\"card-block\">\n          <p class=\"card-text\">\n            A digital collection of illustrations built in ContentDM. Images in the collection were digitized from physical materials\n            using a flatbed scanner and processed in PhotoShop.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"card row1\">\n      <div class=\"card-block\">\n        <h3 class=\"card-title\">Digital Illustration Collection (Omeka)</h3>\n        <a href=\"http://birdsofwisconsin.omeka.net/\" class=\"card clickable\" target=\"_blank\">\n          <div class=\"card-img\">\n            <img src=\"../assets/OmekaBirdsofWisconsin.png\">\n          </div>\n        </a>\n        <div class=\"card-block\">\n          <p class=\"card-text\">\n            A digital collection of illustrations built in Omeka. Images in the collection were digitized from physical materials using\n            a flatbed scanner and processed in PhotoShop.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"card row2\">\n      <div class=\"card-block\">\n        <h3 class=\"card-title\">Undergraduate Research Guide: Refugees</h3>\n        <a href=\"#\" class=\"card clickable\">\n          <div class=\"card-img\">\n            <img src=\"../assets/UndergraduateResearchGuideRefugeesCollegeLibrary.png\">\n          </div>\n        </a>\n        <div class=\"card-block\">\n          <p class=\"card-text\">\n            A research guide for undergraduate researchers. This guide was built on the LibGuides platform following College Library's\n            in-house style documentation.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"card row2\">\n      <div class=\"card-block\">\n        <h3 class=\"card-title\">Resource Guide: Masters of Educational Leadership</h3>\n        <a href=\"https://library.edgewood.edu/med\" class=\"card clickable\" target=\"_blank\">\n          <div class=\"card-img\">\n            <img src=\"../assets/MastersofEducationalLeadership.png\">\n          </div>\n        </a>\n        <div class=\"card-block\">\n          <p class=\"card-text\">\n            A resource guide designed to introduce library and professional resources to distance graduate students. This guide was built\n            on the LibGuides platform following Edgewood College Library's in-house style documentation.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"card row2\">\n      <div class=\"card-block\">\n        <h3 class=\"card-title\">Scotch Hill Farm Website</h3>\n        <a href=\"https://scotchhillfarm.com\" class=\"card clickable\" target=\"_blank\">\n          <div class=\"card-img\">\n            <img src=\"../assets/ScotchHillFarm.png\">\n          </div>\n        </a>\n        <div class=\"card-block\">\n          <p class=\"card-text\">\n            A website designed and built for a local business using SquareSpace.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-portfolio',
            template: __webpack_require__("../../../../../src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portfolio/portfolio.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/emaray_banner.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "emaray_banner.94c66fde6a2e76729150.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map