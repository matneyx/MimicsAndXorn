import React, { createContext, useState } from 'react';
import MarkdownRenderer from './MarkdownRenderer';

/* eslint-disable import/no-webpack-loader-syntax */
import intro from '!!raw-loader!../data/Intro.md';
import acf from '!!raw-loader!../data/character/AlternateClassFeatures.md';
import gae from '!!raw-loader!../data/rules/combat/GolarionActionEconomy.md';
/* eslint-enable */

const home = {
  name: 'Home',
  key: 'home',
  data: intro,
};

const golarionActionEconomy = {
  name: 'Golarion Action Economy',
  key: 'golarion-action-economy',
  data: gae
};

const alternateClassFeatures = {
  name: 'Alternate Class Features',
  key: 'alternate-class-features',
  data: acf
}

export const navigationMenus = [
  home,
  {
    name: 'Character',
    key: 'character-dropdown',
    data: [
      alternateClassFeatures
    ]
  },
  {
    name: 'Rules',
    key: 'rules-dropdown',
    data: [{
      name: 'Combat',
      key: 'combat-dropdown',
      data: [
        golarionActionEconomy
      ]
    }]
  }
];

// TODO: Figure out how to Pre-render this
/*
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
    newRoutes.push({
      [`${prefix}/${routeData.key}`] : () => <MarkdownRenderer data={routeData.data} />
    });
  }

  return newRoutes;
};
*/

export const navigationRoutes = {
  '/': () => <MarkdownRenderer data={intro} />,
  '/home': () => <MarkdownRenderer data={intro} />,
  '/character/alternate-class-features': () => <MarkdownRenderer data={acf} />,
  '/rules/combat/golarion-action-economy': () => <MarkdownRenderer data={gae} />,
};

export const NavigationContext = createContext();

const NavigationProvider =  ({children}) => {
  const [activePage, setActivePage ] = useState(home);

  const store = { activePage, setActivePage };

  return (
    <NavigationContext.Provider value={store}>
      {children}
    </NavigationContext.Provider>
  );
}

export default NavigationProvider;