/* eslint-disable no-constructor-return */
import Route from './Route';

export default class Router {
  routes: any;

  __instance: any;

  history: any;

  _currentRoute: any;

  _rootQuery: any;

  static __instance: any;

  constructor(rootQuery: any) {
    if (Router.__instance!) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: any, block: any) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });

    this.routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = (event) => {
      this._onRoute((event.currentTarget as Window).location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: any) {
    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;

    route.render(route, pathname);
  }

  go(pathname: any) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: any) {
    return this.routes.find((route: any) => {
      return route.match(pathname);
    });
  }
}
