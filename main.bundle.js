webpackJsonp([1,4],{

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 122;


/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(136);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_module_auth_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(220),
        styles: [__webpack_require__(210)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__auth_module_auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_module_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_module_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__firebase__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__resolvers_auth_resolver__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_module_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_users_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_groups_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_messages_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__resolvers_group_messages_resolver__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__resolvers_user_messages_resolver__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__routes__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__groups_groups_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__message_message_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__users_users_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__profile_profile_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_animations__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_hammerjs__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__register_register_component__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















//material designs




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_18__groups_groups_component__["a" /* GroupsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__message_message_component__["a" /* MessageComponent */],
            __WEBPACK_IMPORTED_MODULE_20__users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_21__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_24__register_register_component__["a" /* RegisterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__firebase__["a" /* FirebaseModule */],
            __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__routes__["a" /* routes */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__resolvers_auth_resolver__["a" /* AuthResolver */], __WEBPACK_IMPORTED_MODULE_11__auth_module_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_12__core_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_13__core_groups_service__["a" /* GroupsService */], __WEBPACK_IMPORTED_MODULE_14__core_messages_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_16__resolvers_user_messages_resolver__["a" /* UserMessagesResolve */], __WEBPACK_IMPORTED_MODULE_15__resolvers_group_messages_resolver__["a" /* GroupMessagesResolve */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseModule; });

var firebaseConfig = {
    apiKey: "AIzaSyDzBG5ErnfBtDJ0tJ0w5IGNtQbsrgaCYC0",
    authDomain: "blogdesign-f58de.firebaseapp.com",
    databaseURL: "https://blogdesign-f58de.firebaseio.com",
    projectId: "blogdesign-f58de",
    storageBucket: "blogdesign-f58de.appspot.com",
    messagingSenderId: "284917816696"
};
var firebaseAuthConfig = {
    method: __WEBPACK_IMPORTED_MODULE_0_angularfire2__["c" /* AuthMethods */].Popup,
    remember: 'default'
};
var FirebaseModule = __WEBPACK_IMPORTED_MODULE_0_angularfire2__["d" /* AngularFireModule */].initializeApp(firebaseConfig, firebaseAuthConfig);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_groups_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupsComponent = (function () {
    function GroupsComponent(groupsService, router) {
        this.groupsService = groupsService;
        this.router = router;
        this.newGroup = {
            name: ''
        };
    }
    GroupsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var groups = this.groupsService.getAll;
        groups.subscribe(function (snapshot) {
            console.log(snapshot);
            _this.groups = snapshot;
        });
    };
    GroupsComponent.prototype.createGroup = function () {
        if (this.newGroup.name !== '') {
            this.groupsService.createGroup(this.newGroup.name);
            this.newGroup.name = '';
        }
    };
    GroupsComponent.prototype.onSelect = function (id) {
        this.router.navigate(['/a', id]);
    };
    return GroupsComponent;
}());
GroupsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-groups',
        template: __webpack_require__(221),
        styles: [__webpack_require__(203)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_groups_service__["a" /* GroupsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_groups_service__["a" /* GroupsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], GroupsComponent);

var _a, _b;
//# sourceMappingURL=groups.component.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_register_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resolvers_auth_resolver__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_message_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resolvers_group_messages_resolver__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resolvers_user_messages_resolver__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });








var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__resolvers_auth_resolver__["a" /* AuthResolver */]],
        children: [
            {
                path: '',
                redirectTo: 'Profile',
                pathMatch: 'full'
            },
            {
                path: 'Profile',
                component: __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__["a" /* ProfileComponent */]
            },
            {
                path: 'group/:groupName/messages',
                component: __WEBPACK_IMPORTED_MODULE_4__message_message_component__["a" /* MessageComponent */],
                resolve: {
                    type: __WEBPACK_IMPORTED_MODULE_5__resolvers_group_messages_resolver__["a" /* GroupMessagesResolve */]
                }
            },
            {
                path: 'user/:userName/messages',
                component: __WEBPACK_IMPORTED_MODULE_4__message_message_component__["a" /* MessageComponent */],
                resolve: {
                    type: __WEBPACK_IMPORTED_MODULE_6__resolvers_user_messages_resolver__["a" /* UserMessagesResolve */]
                }
            }
        ]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_1__register_register_component__["a" /* RegisterComponent */]
    }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_users_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = (function () {
    function UsersComponent(usersService) {
        this.usersService = usersService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var users = this.usersService.getAll;
        users.subscribe(function (snapshot) {
            _this.users = snapshot;
        });
        this.loggedInUser = this.usersService.getloggedInUser;
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-users',
        template: __webpack_require__(227),
        styles: [__webpack_require__(209)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_users_service__["a" /* UsersService */]) === "function" && _a || Object])
], UsersComponent);

var _a;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".group {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  background-color: #00bcd4; }\n  .group ul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    list-style-type: none;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin: 0;\n    padding: 0; }\n    .group ul li {\n      padding: 10px 20px;\n      background-color: #00bcd4; }\n      .group ul li:hover {\n        background-color: #00bca4; }\n      .group ul li .form-control:focus {\n        background-color: transparent; }\n      .group ul li:nth-last-child(1) {\n        margin-left: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".home {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 100%; }\n  .home .side-bar {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 300px;\n    background-color: honeydew; }\n    .home .side-bar app-groups, .home .side-bar app-users {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1; }\n  .home .main-section {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".main-section {\n  width: 800px;\n  margin: 20px auto;\n  background-color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  @media screen and (max-width: 800px) {\n    .main-section {\n      width: auto; } }\n\nmd-input-container {\n  width: 100%; }\n\n.input-cointainer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .input-cointainer div:first-child {\n    margin-right: 10px; }\n  .input-cointainer div:not(:first-child) {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n\n.header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  height: 50px; }\n\n.footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  height: 50px;\n  position: absolute;\n  right: 0;\n  bottom: 14px;\n  left: 0;\n  text-align: center; }\n\n.form-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-width: 800px;\n  margin: 10px auto;\n  padding: 10px 40px;\n  background-color: white;\n  -webkit-transition: 1s;\n  transition: 1s; }\n  @media screen and (max-width: 800px) {\n    .form-wrapper {\n      min-width: 560px;\n      padding: 10px 10px;\n      margin: 0 0; } }\n  .form-wrapper .oauth-section {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    margin: 25px auto; }\n    .form-wrapper .oauth-section div {\n      padding: 10px 30px; }\n    .form-wrapper .oauth-section .btn:hover, .form-wrapper .oauth-section .btn:focus, .form-wrapper .oauth-section .btn.focus {\n      color: #fff;\n      text-decoration: none; }\n  .form-wrapper .seperator {\n    color: #AAAAAA; }\n    .form-wrapper .seperator:before, .form-wrapper .seperator:after {\n      content: '';\n      display: block;\n      width: 1px;\n      height: 45%;\n      border: 1px solid #DDDDDD;\n      margin: 0 15px; }\n    .form-wrapper .seperator div {\n      padding: 5px;\n      border: 2px solid #DDDDDD;\n      border-radius: 50%; }\n  .form-wrapper .classic-login {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 0 20px;\n    margin: 25px 0; }\n  @media screen and (max-width: 600px) {\n    .form-wrapper {\n      min-width: auto;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      margin: 0 0; }\n      .form-wrapper .oauth-section {\n        -webkit-box-ordinal-group: 4;\n            -ms-flex-order: 3;\n                order: 3;\n        margin: 0 0; }\n        .form-wrapper .oauth-section div {\n          padding: 10px 25px; }\n      .form-wrapper .seperator {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-ordinal-group: 3;\n            -ms-flex-order: 2;\n                order: 2;\n        color: #AAAAAA; }\n        .form-wrapper .seperator:before, .form-wrapper .seperator:after {\n          content: '';\n          display: inline-block;\n          width: 50%;\n          height: 1px;\n          border: 1px solid #DDDDDD;\n          margin: 0 0; }\n        .form-wrapper .seperator div {\n          display: inline;\n          padding: 5px;\n          border: 2px solid #DDDDDD;\n          border-radius: 50%; } }\n  @media screen and (max-width: 360px) {\n    .form-wrapper .oauth-section div {\n      padding: 10px 5px; } }\n\n.form-control:focus {\n  background-color: transparent; }\n\n.remember-me {\n  padding: 10px 2px; }\n\n.login-btn {\n  padding: 10px 0; }\n\n/* Icons Colors*/\n.person {\n  color: red; }\n\n.lock {\n  color: green; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".users {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  background-color: #00bcd4; }\n  .users ul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    list-style-type: none;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin: 0;\n    padding: 0; }\n    .users ul li {\n      padding: 10px 20px;\n      background-color: #00bcd4; }\n      .users ul li:hover {\n        background-color: #00bca4; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<!-- Routed views go here -->\n"

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports = "<div class=\"group\">\n  <ul>\n    <li *ngFor=\"let group of groups\">\n      <a [routerLink]=\"['group',group.Name,'messages']\">{{\n            group.Name\n            }}</a>\n    </li>\n    <li>\n            <md-input-container class=\"example-full-width\">\n                <input mdInput type=\"text\" placeholder=\"Create Group.. \" class=\"form-control\" [(ngModel)]=\"newGroup.name\" name=\"groupName\">\n                <div mdSuffix md-raised-button (click)=\"createGroup()\">\n                    <md-icon>\n                        playlist add\n                    </md-icon>\n                </div>\n            </md-input-container>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n  <div class=\"side-bar\">\n      <md-toolbar color=\"primary\">\n          <span>List</span>\n      </md-toolbar>\n      <app-groups></app-groups>\n      <app-users></app-users>\n  </div>\n  <div class=\"main-section\">\n      <md-toolbar color=\"primary\">\n          <span>Messages</span>\n      </md-toolbar>\n      <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n    <md-toolbar color=\"primary\">\n        \n    </md-toolbar>\n</header>\n<div class=\"main-section\">\n\n    <div class=\"info-section\">\n    </div>\n    <div class=\"login-section\">\n\n        <div layout=\"column\" ng-cloak>\n            <div class=\"form-wrapper\">\n                <div class=\"oauth-section\">\n\n                    <div>\n                        <a class=\"btn btn-block btn-social btn-twitter\" (click)='signIn(\"Twitter\")'>\n                            <span class=\"fa fa-twitter\"></span> Sign in with Twitter\n                        </a>\n                    </div>\n                    <div>\n                        <a class=\"btn btn-block btn-social btn-facebook\" (click)='signIn(\"Facebook\")'>\n                            <span class=\"fa fa-facebook\"></span> Sign in with Facebook\n                        </a>\n                    </div>\n                    <div>\n                        <a class=\"btn btn-block btn-social btn-google\" (click)='signIn(\"Google\")'>\n                            <span class=\"fa fa-google\"></span> Sign in with Google\n                        </a>\n                    </div>\n                    <div>\n                        <a class=\"btn btn-block btn-social btn-github\" (click)='signIn(\"Github\")'>\n                            <span class=\"fa fa-github\"></span> Sign in with Github\n                        </a>\n                    </div>\n                </div>\n                <div class=\"seperator\">\n                    <div>OR</div>\n                </div>\n                <div class=\"classic-login\">\n                    <form class=\"example-form\" (ngSubmit)=\"login()\">\n                        <div class=\"input-cointainer\">\n                            <div><md-icon mdPrefix class=\"person\">person</md-icon></div>\n                            <div><md-input-container class=\"example-full-width\">\n                                <input required mdInput type=\"email\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\">\n                                </md-input-container></div>\n                            \n                        </div>\n                        <div class=\"input-cointainer\">\n                            <div><md-icon mdPrefix class=\"lock\">lock</md-icon></div>\n                            <div><md-input-container class=\"example-full-width\">\n                                <input required mdInput type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\" required>\n                                </md-input-container>\n                            </div>\n                            \n                        </div>\n                        <div>\n                            <div class=\"remember-me\">\n                                <md-checkbox> Remember Me </md-checkbox>\n                            </div>\n                            \n                        </div>\n                        <div>\n                            <div class=\"login-btn\">\n                                <button md-raised-button type=\"submit\">LOGIN</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n<footer class=\"footer\">\n    <md-toolbar color=\"primary\">\n        <div>Build with <span class=\"love\">♥</span> by the&nbsp;\n            <a href=\"https://github.com/ashwinlagji\">\n                Lagji's  </a> &copy; 2017   </div>\n        \n    </md-toolbar>\n</footer>\n"

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n      <h4>{{userToChat.Name}}</h4>\n    </div>\n    <ul>\n        <li *ngFor=\"let message of messages\">\n            {{message.userName}}  {{message.timestamp | date : \"shortTime\"}} : {{message.body}}\n        </li>\n    </ul>\n</div>\n<form (ngSubmit)=\"addMessage()\">\n    <div >\n        <input type=\"text\"  placeholder=\"New Message\" [(ngModel)]=\"newMessage\" name=\"newMessage\">\n    </div>\n    <input type=\"submit\"  value=\"add message\">\n</form>"

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n<form (ngSubmit)=\"register()\">\n    <div class=\"input-group\">\n        <input type=\"email\" class=\"form-control\" placeholder=\"Register Email\" [(ngModel)]=\"email\" name=\"email\">\n    </div>\n    <div class=\"input-group\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\">\n    </div>\n    <input type=\"submit\" class=\"btn btn-default\" value=\"Register\">\n</form>"

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"users\">\n    <ul>\n        <li *ngFor=\"let user of users\">\n             <a [routerLink]=\"['user',user.Id,'messages']\">{{user.Name}}</a>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(af) {
        var _this = this;
        this.af = af;
        this.authState = null;
        this.af.auth.subscribe(function (auth) {
            _this.authState = auth;
        });
    }
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.authState !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "id", {
        get: function () {
            return this.authenticated ? this.authState.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.registerUser = function (email, password) {
        return this.af.auth.createUser({
            email: email,
            password: password
        });
    };
    AuthService.prototype.signIn = function (user) {
        return this.af.auth.login({
            email: user.email,
            password: user.password,
        }, {
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AuthProviders */].Password,
            method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthMethods */].Password,
        }).catch(function (error) { return console.log('ERROR @ AuthService#signIn() :', error); });
    };
    AuthService.prototype.signInAnonymously = function () {
        return this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AuthProviders */].Anonymous,
            method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthMethods */].Anonymous
        })
            .catch(function (error) { return console.log('ERROR @ AuthService#signInAnonymously() :', error); });
    };
    AuthService.prototype.signInWithGithub = function () {
        return this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AuthProviders */].Github,
            method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthMethods */].Popup
        }).catch(function (error) { return console.log('ERROR @ AuthService#signInWithGithub() :', error); });
    };
    AuthService.prototype.signInWithGoogle = function () {
        return this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AuthProviders */].Google,
            method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthMethods */].Popup,
        }).catch(function (error) { return console.log('ERROR @ AuthService#loginWithGoogle() :', error); });
    };
    AuthService.prototype.signInWithFacebook = function () {
        return this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AuthProviders */].Facebook,
            method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthMethods */].Popup,
        }).catch(function (error) { return console.log('ERROR @ AuthService#loginWithFacebook() :', error); });
    };
    AuthService.prototype.signInWithTwitter = function () {
        return this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AuthProviders */].Twitter,
            method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthMethods */].Popup,
        }).catch(function (error) { return console.log('ERROR @ AuthService#loginWithTwitter() :', error); });
    };
    AuthService.prototype.signOut = function () {
        this.af.auth.logout();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersService = (function () {
    function UsersService(af) {
        this.af = af;
        this.loggedInUser = null;
        this.Users = this.af.database.list('/users');
    }
    UsersService.prototype.saveLoggedInUserDetails = function (userDetails) {
        this.loggedInUser = userDetails;
    };
    Object.defineProperty(UsersService.prototype, "getloggedInUser", {
        get: function () {
            return this.loggedInUser;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersService.prototype, "getAll", {
        get: function () {
            return this.Users;
        },
        enumerable: true,
        configurable: true
    });
    UsersService.prototype.getDisplayName = function (id) {
        var US = this.Users;
        return new Promise(function (resolve, reject) {
            var displayName = "";
            US.subscribe(function (users) {
                for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
                    var user = users_1[_i];
                    if (id === user.Id)
                        resolve(user);
                }
                reject("not found");
            });
        });
    };
    UsersService.prototype.saveDisplayName = function (Id, Name, Email, AvatarUrl) {
        var _this = this;
        var user = this.af.database.list('/users', { query: { orderByChild: 'Id', equalTo: Id } });
        user.subscribe(function (snapshot) {
            if (snapshot.length === 0) {
                _this.Users.push({
                    Id: Id,
                    Name: Name,
                    Email: Email,
                    AvatarUrl: AvatarUrl
                });
            }
            _this.saveLoggedInUserDetails({
                Id: Id,
                Name: Name,
                Email: Email,
                AvatarUrl: AvatarUrl
            });
        });
    };
    return UsersService;
}());
UsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */]) === "function" && _a || Object])
], UsersService);

var _a;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(123);


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = (function () {
    function MessageService(af) {
        this.af = af;
    }
    MessageService.prototype.getGroupMessages = function (group) {
        return this.af.database.list('/messages/group/' + group);
    };
    MessageService.prototype.getUserMessages = function (user1, user2) {
        var databasePathref = (user1 > user2) ? (user1 + user2) : (user2 + user1);
        return this.af.database.list('/messages/users/' + databasePathref);
    };
    MessageService.prototype.sendGroupMessage = function (type, message) {
        this.af.database.list('/messages/group/' + type).push(message);
    };
    MessageService.prototype.sendUserMessage = function (user1, user2, message) {
        var databasePathref = (user1 > user2) ? (user1 + user2) : (user2 + user1);
        this.af.database.list('/messages/users/' + databasePathref).push(message);
    };
    return MessageService;
}());
MessageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */]) === "function" && _a || Object])
], MessageService);

var _a;
//# sourceMappingURL=messages.service.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroupsService = (function () {
    function GroupsService(af) {
        this.af = af;
        this.Groups = this.af.database.list('/groups');
    }
    GroupsService.prototype.createGroup = function (Name) {
        this.Groups.push({
            Name: Name
        });
    };
    Object.defineProperty(GroupsService.prototype, "getAll", {
        get: function () {
            return this.Groups;
        },
        enumerable: true,
        configurable: true
    });
    return GroupsService;
}());
GroupsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */]) === "function" && _a || Object])
], GroupsService);

var _a;
//# sourceMappingURL=groups.service.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_module_auth_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
        this.title = 'app works!';
        this.message = "home Component";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'home',
        template: __webpack_require__(222),
        styles: [__webpack_require__(204)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__auth_module_auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_module_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_module_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_module_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_users_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, usersService, router) {
        this.authService = authService;
        this.usersService = usersService;
        this.router = router;
        this.title = 'app works!';
        this.message = "Login Component";
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.signIn = function (name) {
        var _this = this;
        if (name === 'Google') {
            var promise = this.authService.signInWithGoogle();
            promise.then(function (result) {
                _this.usersService.saveDisplayName(result.uid, result.auth.displayName, result.auth.email, result.auth.photoURL);
                _this.router.navigate(['home']);
            });
        }
        else if (name === 'Twitter') {
            var promise = this.authService.signInWithTwitter();
            promise.then(function (result) {
                _this.usersService.saveDisplayName(result.uid, result.auth.displayName, result.auth.email, result.auth.photoURL);
                _this.router.navigate(['home']);
            });
        }
        else if (name === 'Facebook') {
            var promise = this.authService.signInWithFacebook();
            promise.then(function (result) {
                _this.usersService.saveDisplayName(result.uid, result.auth.displayName, result.auth.email, result.auth.photoURL);
                _this.router.navigate(['home']);
            });
        }
        else if (name === 'Github') {
            var promise = this.authService.signInWithGithub();
            promise.then(function (result) {
                _this.usersService.saveDisplayName(result.uid, result.auth.displayName, result.auth.email, result.auth.photoURL);
                _this.router.navigate(['home']);
            });
        }
        else {
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var promise = this.authService.signIn({
            email: this.email,
            password: this.password
        });
        promise.then(function (result) {
            console.log(result);
            _this.usersService.saveDisplayName(result.uid, result.auth.displayName, result.auth.email, result.auth.photoURL);
            _this.router.navigate(['home']);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'login',
        template: __webpack_require__(223),
        styles: [__webpack_require__(205)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__auth_module_auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_module_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_module_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_messages_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_users_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessageComponent = (function () {
    function MessageComponent(route, messageService, usersService) {
        this.route = route;
        this.messageService = messageService;
        this.usersService = usersService;
        this.id = '';
        this.types = '';
        this.newMessage = '';
        this.personalMessage = false;
        this.userToChat = {
            Name: "Loading ..",
            Id: "Loading ..",
            AvatarUrl: "",
            Email: ""
        };
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sub = this.route.params.subscribe(function (params) {
            if (params['groupName']) {
                _this.id = params['groupName'];
                console.log(_this.id);
                _this.listAllMes = _this.messageService.getGroupMessages(_this.id);
                _this.listAllMes.subscribe(function (data) {
                    _this.messages = data;
                });
            }
            else if (params['userName']) {
                _this.id = params['userName'];
                console.log(_this.id);
                _this.personalMessage = true;
                _this.user = _this.usersService.getloggedInUser;
                _this.listAllMes = _this.messageService.getUserMessages(_this.id, _this.user.Id);
                _this.listAllMes.subscribe(function (data) {
                    _this.messages = data;
                });
                var userToChatPromise = _this.usersService.getDisplayName(_this.id);
                var self_1 = _this;
                userToChatPromise.then(function (user) {
                    self_1.userToChat = user;
                });
            }
            _this.user = _this.usersService.getloggedInUser;
        });
    };
    MessageComponent.prototype.addMessage = function () {
        var newMessages = {
            userID: this.user.Id,
            userName: this.user.Name,
            body: this.newMessage,
            timestamp: null
        };
        newMessages.timestamp = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"].ServerValue.TIMESTAMP;
        if (!this.personalMessage)
            this.messageService.sendGroupMessage(this.id, newMessages);
        else
            this.messageService.sendUserMessage(this.id, this.user.Id, newMessages);
        this.newMessage = '';
    };
    return MessageComponent;
}());
MessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-message',
        template: __webpack_require__(224),
        styles: [__webpack_require__(206)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_messages_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_messages_service__["a" /* MessageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_users_service__["a" /* UsersService */]) === "function" && _c || Object])
], MessageComponent);

var _a, _b, _c;
//# sourceMappingURL=message.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__(225),
        styles: [__webpack_require__(207)]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_module_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_users_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(authService, usersService, router) {
        this.authService = authService;
        this.usersService = usersService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var promise = this.authService.registerUser(this.email, this.password);
        promise.then(function (result) {
            _this.usersService.saveDisplayName(result.uid, result.auth.email, result.auth.email, result.auth.photoURL);
            _this.router.navigate(['login']);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__(226),
        styles: [__webpack_require__(208)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_module_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_module_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_module_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthResolver = (function () {
    function AuthResolver(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthResolver.prototype.canActivate = function () {
        console.log(this.auth.authenticated);
        if (!this.auth.authenticated) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    return AuthResolver;
}());
AuthResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_module_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_module_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthResolver);

var _a, _b;
//# sourceMappingURL=auth.resolver.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_messages_service__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupMessagesResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroupMessagesResolve = (function () {
    function GroupMessagesResolve(messageService) {
        this.messageService = messageService;
    }
    GroupMessagesResolve.prototype.resolve = function (route) {
        return "group";
    };
    return GroupMessagesResolve;
}());
GroupMessagesResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_messages_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_messages_service__["a" /* MessageService */]) === "function" && _a || Object])
], GroupMessagesResolve);

var _a;
//# sourceMappingURL=group-messages.resolver.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_messages_service__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMessagesResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserMessagesResolve = (function () {
    function UserMessagesResolve(messageService) {
        this.messageService = messageService;
    }
    UserMessagesResolve.prototype.resolve = function (route) {
        return "user";
    };
    return UserMessagesResolve;
}());
UserMessagesResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_messages_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_messages_service__["a" /* MessageService */]) === "function" && _a || Object])
], UserMessagesResolve);

var _a;
//# sourceMappingURL=user-messages.resolver.js.map

/***/ })

},[281]);
//# sourceMappingURL=main.bundle.js.map