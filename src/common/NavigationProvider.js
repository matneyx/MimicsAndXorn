import React, { createContext, useState } from 'react';

/* eslint-disable import/no-webpack-loader-syntax */
import intro from '!!raw-loader!../data/Intro.md';
import acf from '!!raw-loader!../data/character/AlternateClassFeatures.md';
import gae from '!!raw-loader!../data/rules/combat/GolarionActionEconomy.md';
/* eslint-enable */

const home = {
  name: 'Home',
  key: 'home-link',
  data: intro,
};

const golarionActionEconomy = {
  name: 'Golarion Action Economy',
  key: 'gae-link',
  data: gae
};

const alternateClassFeatures = {
  name: 'Alternate Class Features',
  key: 'acf-link',
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