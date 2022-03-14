# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you will need to first run\
to install all the project dependencies.

### `yarn install`

When it ends, you can now run:

### `yarn start`

to start the aplication in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\

# Code used

### `REACT and TYPESCRIPT`

On this project the base coding standarts where React, usign `React Function Components` and `Typescript`.

### `STATE`

For state managment, it was used a based component state, the react hook `useState` and `useEffect` to side effects managment.

### `SASS`

On Styling it has a preprocessor SASS, all the css was coded in a hierarchical structure.

### `API`

For API request it was used the simple and native browser fetch API, witch in this particular case covers all the requisits.

# Fonts, Assets and Styling

### `CSS`

This project has styling with SASS, witch are distributed in several files.
The entry file is located in "src/assets/styles/index.scss" and it imports all other styling file dependencies.

The most important files are in "base" folder:

- `variables.scss` - where are declared all the styling variables used throughout the project;
- `mixins.scss` - where are stored some scss helpers
- `animations.scss` - where are declared animation styling

### `FONTS`

This project is using google cdn web fonts:

- `Source Sans Pro` (not serifed)
- `Merriweather` (serifed)

See more in [Google Fonts](https://fonts.google.com/)

### `ICONS`

On this project has a set of icons, to complement the styling and user experience, by using ther Fontawesome library.

See more in [Font Awesome - The Internet's icon library](https://fontawesome.com/)

# Arquiture and Folder Structure

This project has a basic folder structure. It is distributed by:

- `assets`: witch has fonts, img and styles folders
- `components`: where are stored the agnostic and reusable components
- `data`: where are located the constants, helpers, interfaces and services

# Technical Trade-offs

For adding the functionality of Read/NotRead on each article news, it was used a manipulation of the response array. This approach clearly fullfill the requirements, but its more cpu costage and it works on the array level, and not on a state level.
A better approach is to use a global state managment like Redux, witch is a more stable and organized, and can improve application stability.

# Adicional Features Missed

Due to lack of time, there were some feature that i would like to add, like:

- More Animations: Menu Item animations, or even an `onHover highlight` on each menu item;
- Page transitions: On each News article showned on the right panel, it was nice to have a `transition fadeIn`, ore even a transform sliding from the side;
- Better `scroll` management, on each Detailed Article viewed;
- Better `error handling`, for example, create an Image component with better fallback image in case of a request error or broken url;
- Better and more acurate `Jest` testing coverage;
- Mobile suport, styling the entire apllication using `media queries` to proper visualization on mobile devices;
- Better `favicon` presentation icons;
- Improve `metatags` an adding Open Graph metatags for increase crawllers visibility;
