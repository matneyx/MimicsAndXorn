import homeObject from '../data/Intro.md'

class NavigationItem {
  constructor(name, data, homebreweryLink) {
    this.name = name;
    this.urlName = name.replace(/\s+/g).toLowerCase();
    this.key = this.urlName + '-link';
    this.data = data;
    this.homebreweryLink = homebreweryLink;
    this.path = undefined;
  }
}

const buildRoutes = (routeData, prefix='') => {
  const newRoutes = [];

  if(Array.isArray(routeData)){
    routeData.forEach(inner => {
      if(Array.isArray(inner.data)) {
        newRoutes.push(...buildRoutes(inner.data, `${prefix}/${inner.name.toLowerCase()}`));
      } else {
        newRoutes.push(...buildRoutes(inner, prefix));
      }
    });
  } else {
    routeData.path = `${prefix}/${routeData.urlName}`;

    newRoutes.push({
      [`${routeData.path}`] : () => routeData
    });
  }

  return newRoutes;
};

export const Home = new NavigationItem(
  'Home',
  homeObject,
  undefined
);

export const navigationMenus = [ Home ]

export const GetRoutes = () => {
  const routes = [{'/' : () => Home}];
  routes.push(...buildRoutes(navigationMenus));
  return routes;
};