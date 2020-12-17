import React, {
  createContext,
  useState
} from 'react';

import {
  Home,
  GetRoutes
} from '../modules/navigation'

import acf from '../data/character/archetypes/AlternateClassFeatures.md';
import gae from '../data/rules/combat/GolarionActionEconomy.md';
import ur from '../data/character/archetypes/ranger/UrbanRanger.md';

export const home = Home;
export const navigationRoutes = GetRoutes();

const golarionActionEconomy = {
  name: 'Golarion Action Economy',
  key: 'golarion-action-economy',
  data: gae,
  homebreweryLink: 'https://homebrewery.naturalcrit.com/print/1C1qVXiiGvutfDjl79baihNsRXxhrx6hucoEY-uyzXZu8?dialog=true'
};

const alternateClassFeatures = {
  name: 'Archetypes and Class Features',
  key: 'acf-link',
  data: acf
};

const urbanRanger = {
  name: 'Urban Ranger',
  key: 'urban-ranger-link',
  data: ur,
  homebreweryLink: 'https://homebrewery.naturalcrit.com/print/1pfwW2vADyEwMgeHpgjxqR0IpqFpU88AA_xyoaL4ZMSO4?dialog=true'
};

export const navigationMenus = [
  Home,
  {
    name: 'Character',
    key: 'character-dropdown',
    data: [{
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
    }]
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

const NavigationProvider = ({
  children
}) => {
  const [activePage, setActivePage] = useState(home);

  const store = {
    activePage,
    setActivePage
  };

  return ( <NavigationContext.Provider value = {store}>
    {children} </NavigationContext.Provider>
  );
}

export default NavigationProvider;
