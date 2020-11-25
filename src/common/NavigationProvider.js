import React, {
  createContext,
  useState
} from 'react';
import MarkdownRenderer from './MarkdownRenderer';

/* eslint-disable import/no-webpack-loader-syntax */
import intro from '!!raw-loader!../data/Intro.md';
import acf from '!!raw-loader!../data/character/archetypes/AlternateClassFeatures.md';
import gae from '!!raw-loader!../data/rules/combat/GolarionActionEconomy.md';
import ur from '!!raw-loader!../data/character/archetypes/ranger/UrbanRanger.md';
/* eslint-enable */

export const home = {
  name: 'Home',
  key: 'home',
  data: intro,
};

const golarionActionEconomy = {
  name: 'Golarion Action Economy',
  key: 'golarion-action-economy',
  data: gae,
  homebreweryLink: 'https://www.google.com'
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
  homebreweryLink: 'https://www.nfl.com'
};

export const navigationMenus = [
  home,
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
  '/': () => < MarkdownRenderer page = {
    home
  }
  />,
  '/home': () => < MarkdownRenderer page = {
    home
  }
  />,
  '/character/class-archetypes/archetypes-and-class-features': () => < MarkdownRenderer page = {
    alternateClassFeatures
  }
  />,
  '/character/class-archetypes/ranger/urban-ranger': () => < MarkdownRenderer page = {
    urbanRanger
  }
  />,
  '/rules/combat/golarion-action-economy': () => < MarkdownRenderer page = {
    golarionActionEconomy
  }
  />,
};

export const NavigationContext = createContext();

const NavigationProvider = ({
  children
}) => {
  const [activePage, setActivePage] = useState(home);

  const store = {
    activePage,
    setActivePage
  };

  return ( <
    NavigationContext.Provider value = {
      store
    } > {
      children
    } <
    /NavigationContext.Provider>
  );
}

export default NavigationProvider;
