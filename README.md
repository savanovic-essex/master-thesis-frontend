# Master Thesis Frontend

## Description
This repository hosts the frontend for my Master's thesis project, titled "Optimising Fire Emergency Response in Urban Environments: A Machine Learning Approach to Predict Unit Deployment".
The Firefighter Unit Prediction App is a Preact-based web application designed to predict the number of firefighter units required at a scene.
Developed using TypeScript and powered by Vite, this application integrates various technologies for a responsive and efficient user experience.
This application showcases the practical use of a predictive model for fire incident response. Users can input incident details, and the app, using a Flask-based API and a LightGBM model,
predicts the required number of response units. It features a map visualization for the incident location and a 'Use Test Data' button for easy demonstration.

The map component focuses on New York City and displays all fire boxes, provided by NYC Open Data's (2019) "In-Service Alarm Box Locations" dataset.
City's boundaries are also visualised, in a form of a mask, with the help of another NYC Open Data (2018) dataset called "Borough Boundaries".

## Features
- **Incident Data Input**: Users can input various incident parameters to predict the required number of units.
- **Map Visualization**: The app includes a map view, showing the location of the incident.
- **Unit Prediction**: Once the parameters have been inserted, the app communicated with the backend and returns the number of units needed on the scene.  

## Technology Stack
- **Preact**: A fast 3kB alternative to React with the same modern API.
- **TypeScript**: Ensures type safety and enhances the development experience.
- **Vite**: A build tool that significantly improves the frontend development experience.
- **Bootstrap & Reactstrap**: For responsive UI components.
- **Mapbox GL**: For map rendering and geographic functionalities.

## Folder & file structure
   ```
   .
├── .env
├── index.html
├── package-lock.json
├── package.json
├── patches
│   └── reactstrap+9.2.1.patch
├── public
│   └── vite.svg
├── src
│   ├── app.tsx
│   ├── assets
│   │   ├── BOROUGH_DESC.json
│   │   ├── FIRE_BOX.json
│   │   ├── INCIDENT_DAY_OF_WEEK.json
│   │   ├── INCIDENT_HOUR.json
│   │   ├── INCIDENT_MONTH.json
│   │   ├── INCIDENT_TYPE_DESC.json
│   │   ├── PROPERTY_TYPE_DESC.json
│   │   ├── PROPERTY_USE_DESC.json
│   │   ├── STREET_HIGHWAY.json
│   │   ├── YEAR.json
│   │   ├── ZIP_CODE.json
│   │   ├── geo
│   │   │   ├── borough_boundaries.json
│   │   │   └── in_service_alarm_box_locations.json
│   │   ├── preact.svg
│   │   ├── style
│   │   │   └── main.css
│   │   └── testData.json
│   ├── components
│   │   ├── Borough.tsx
│   │   ├── FireBox.tsx
│   │   ├── FloorComponent.tsx
│   │   ├── IncidentDay.tsx
│   │   ├── IncidentHour.tsx
│   │   ├── IncidentKey.tsx
│   │   ├── IncidentMonth.tsx
│   │   ├── IncidentType.tsx
│   │   ├── IncidentYear.tsx
│   │   ├── LatitudeComponent.tsx
│   │   ├── LongitudeComponent.tsx
│   │   ├── Map.tsx
│   │   ├── ParameterComponent.tsx
│   │   ├── PropertyType.tsx
│   │   ├── ResponseTime.tsx
│   │   ├── ResponseTimeMinutes.tsx
│   │   ├── StreetHighway.tsx
│   │   └── ZipCode.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── types
│   │   └── DummyDataItem.ts
│   ├── utils
│   │   └── api.ts
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
   ```

## Installation and Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/savanovic-essex/master-thesis-frontend.git
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run the Application**:
    - Development mode: `npm run dev`
    - Build for production: `npm run build`
    - Preview production build: `npm run preview`

## Usage
- Input the required incident parameters in the provided form.
- Alternatively, click the "Use Test Data" button, which will populate the form with test data.
- The application will display the predicted number of units and the firebox location on the map.


## Contact
For any queries or further information, please contact Djordje Savanovic at [dsavanovic@yahoo.com](mailto:dsavanovic@yahoo.com).

## References
Axios (2023) Getting Started | Axios Docs. axios-http.com. Available from: https://axios-http.com/docs/intro [Accessed 21 November 2023].

Mapbox. (n.d.) Mapbox GL JS. Available from: https://docs.mapbox.com/mapbox-gljs/guides/ [Accessed 27 October 2023].

Meta Open Source (n.d.) React. react.dev. Available from: https://react.dev/ [Accessed 11 November 2023].

npm. (n.d.). dotenv. Available from: https://www.npmjs.com/package/dotenv [Accessed 13 December 2023].

NYC Open Data (2018) Borough Boundaries | NYC Open Data. Available from: https://data.cityofnewyork.us/City-Government/Borough-Boundaries/tqmj-j8zm  [Accessed 26 October 2023].

NYC Open Data (2019) In-Service Alarm Box Locations. Available from: https://data.cityofnewyork.us/Public-Safety/In-Service-Alarm-Box-Locations/v57i-gtxb [Accessed 17 October 2023].

Otto, M. (2022) Bootstrap. Getbootstrap.com. Available from: https://getbootstrap.com/ [Accessed 17 October 2023].

preactjs.com. (n.d.) Preact. Available from: https://preactjs.com/ [Accessed 11 November 2023].

reactstrap.github.io. (n.d.) reactstrap - React Bootstrap 4 components. Available from: https://reactstrap.github.io/ [Accessed 11 November 2023].

React-Select. (n.d.) React-Select. Available from: https://react-select.com/home. [Accessed 11 November 2023].

Sheldrick, D. (n.d.) ds300/patch-package. GitHub. Available from: https://github.com/ds300/patch-package [Accessed 14 Jan. 2024].

Microsoft (2015) TypeScript - JavaScript that scales. Typescriptlang.org. Available from: https://www.typescriptlang.org/ [Accessed 11 November 2023].

vitejs.dev. (n.d.) Vite. Available fromm: https://vitejs.dev/ [Accessed 11 November 2023]

