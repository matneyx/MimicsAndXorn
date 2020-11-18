import React, { createContext, useState } from 'react';

/* eslint-disable import/no-webpack-loader-syntax */
import GAE from '!!raw-loader!../data/rules/combat/GolarionActionEconomy.md';
import intro from '!!raw-loader!../data/Intro.md';
/* eslint-enable */

const home = {
  name: 'Home',
  key: 'home-link',
  data: intro,
};

const golarionActionEconomy = {
  name: 'Golarion Action Economy',
  key: 'gae-link',
  data: GAE
};

export const navigationMenus = [
  home,
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

export const NavigationContext = createContext();

export default ({children}) => {
  const [activePage, setActivePage ] = useState(home);

  const store = { activePage, setActivePage };

  return (
    <NavigationContext.Provider value={store}>
      {children}
    </NavigationContext.Provider>
  );
}