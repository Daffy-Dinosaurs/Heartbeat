# [Heartbeat](https://abvolt.herokuapp.com/)

Heartbeat is a tool to enhance the awareness of issues that affect us as a society. Heartbeat uses data visualization to convert the complexity of large datasets into an alluring visual experience that anyone can connect with and enjoy.

<span class="snapshot"><img src="/images/Heartbeat1.png" alt=""></span>

## Team

  - __Product Owner__: Blaine Degannes, Jon Tippens
  - __Scrum Master__: Juan Guardado
  - __Development Team Members__: Karun Siddana, Juan Guardado, Blaine Degannes, Jon Tippens  

## Table of Contents
1. [Tech Stack](#tech-stack)
2. [Development](#development)
3. [Installing Dependencies](#installing-dependencies)
4. [Developing](#developing)
5. [Team](#team)
6. [Contributing](#contributing)

## Purpose

Heartbeat is an interactive visualization platform that allows users to represent their data in a graphical format that is useful in performing trend analysis across the dataset. Heartbeat uses the data that is collected by the World Bank and the WHO for all countries since the 1990's to date on the following issues:

* POVERTY: Percentage of population who survive on $3.90 USD per day.
* SAFE DRINKING WATER: Percentage of the population that is using improved water resource.
* FOOD SECURITY   

---
##### SAFE DRINKING WATER
Data received from the World Bank shows the percentage of population that has access to improved drinkable water. Access to an improved water resources within households includes the use of standard pipes, tube wells, boreholes, fresh water reservoirs that are able to provide clean water for cooking and drinking.

The dataset includes the improved water resource since the year 1960, however this includes a very small subset of countries. Since 1990, all countries have been reporting their indicator for improved water resource to the [World Health Organization](http://data.worldbank.org/indicator/SH.H2O.SAFE.ZS) (WHO).

"The Global water crisis also includes water pollution, because to be useful for drinking, cooking and irrigation, water must not be polluted. According to the World Health Organization, in 2008 approximately 880 million people in the world (or 13% of world population) did not have access to safe drinking water." At the same time, about 2.6 billion people (or 40% of the world population) lived without improved sanitation.

References: [_Water Pollution_](http://cnx.org/contents/F0Hv_Zza@43.4:L4NPRKrh@8/Water-Pollution) _by Steve Altaner_


##### POVERTY 

##### FOOD SCARCITY: Prevalence of Undernourishment
The FAO measure of food deprivation, which is referred to as the prevalence of undernourishment, is based on a comparison of usual food consumption expressed in terms of dietary energy (kcal) with certain energy requirement norms. The part of the population with food consumption below the energy requirement norm is considered undernourished ("underfed"). [More info about POU](http://www.fao.org/docrep/005/y4249e/y4249e06.htm)

We have also integrated the usage of Twitter and various news outlets to give our users a holistic understanding of the factual evidence, the media representation, and on the ground reality of the people experiencing the effects of these issues.

## Usage

Checkout the application [Heartbeat](https://abvolt.herokuapp.com/)

## Tech Stack

The application uses the following tech stack:
* React.js
* Redux
* D3.js
* webpack
* Node.js/Express.js
* Sequelize (ORM)
* mySQL

## Development

### Installing Dependencies

To get started with the project, download the project and run the following commands from your terminal. The `package.json` files has all the necessary dependencies to run the application.

```
npm install
npm start
```

Once you have installed all of the dependencies the webpack configuration allows for you to run Heartbeat directly from your host computer. Simply go to http://localhost:3001 in your browser.

## Contributing

Contributors should upload changes to their own fork and make a pull request

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## License
The MIT License (MIT)
Copyright (c) 2016 Daffy-Dinosaurs
