import React, { createContext, useState } from 'react';

/* eslint-disable import/no-webpack-loader-syntax */
import intro from '!!raw-loader!../data/Intro.md';
import acf from '!!raw-loader!../data/character/archetypes/AlternateClassFeatures.md';
import gae from '!!raw-loader!../data/rules/combat/GolarionActionEconomy.md';
import ur from '!!raw-loader!../data/character/archetypes/ranger/UrbanRanger.md';
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
  name: 'Archetypes and Class Features',
  key: 'acf-link',
  data: acf
};

const urbanRanger = {
  name: 'Urban Ranger',
  key: 'urban-ranger-link',
  data: ur
};

export const navigationMenus = [
  home,
  {
    name: 'Character',
    key: 'character-dropdown',
    data: [
      {
        name: 'Class Archetypes',
        key: 'archtype-dropdown',
        data: [
            alternateClassFeatures,
            {
              name: 'Ranger',
              key: 'ranger-archetype-dropdown',
              data: [
                urbanRanger
              ]
            }
        ]
      }
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

const NavigationProvider = ({children}) => {
  const [activePage, setActivePage ] = useState(home);

  const store = { activePage, setActivePage };

  return (
    <NavigationContext.Provider value={store}>
      {children}
    </NavigationContext.Provider>
  );
}

export default NavigationProvider;