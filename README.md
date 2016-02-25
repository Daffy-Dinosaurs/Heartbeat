# Heartbeat

Heartbeat is a tool to enhance the awareness of issues that effect us as a society.

## Team

  - __Product Owner__: Blaine Degannes, Jon Tippens
  - __Scrum Master__: Juan Guardado
  - __Development Team Members__: Karun Siddana

## Table of Contents

1. [Purpose](#purpose)
1. [Usage](#usage)
1. [Tech Stack](#tech-stack)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Developing](#developing)
1. [Team](#team)
1. [Contributing](#contributing)

## Purpose

Heartbeat is an interactive global map that allows our users to see visual representations of key data sets provided to the application. Currently Heartbeat is set to display data from acquired from the world back (add something). We hope this can be used as a tool to highlight important issues and be leveraged to produce educational value and awareness toward these key topics.

#####The three datasets represent:

###### POVERTY: Percentage of population who survive on $3.90 USD per day

##### Safe Drinking Water
Data received from the World Bank shows the percentage of population that has access to improved drinkable water. Access to an improved water resources within households includes the use of standard pipes, tube wells, boreholes, fresh water reservoirs that are able to provide clean water for cooking and drinking.

The dataset includes the improved water resource since the year 1960, however this includes a very small subset of countries. Since 1990, all countries have been reporting their indicator for improved water resource to the [World Health Organization](http://data.worldbank.org/indicator/SH.H2O.SAFE.ZS) (WHO).

"The Global water crisis also includes water pollution, because to be useful for drinking, cooking and irrigation, water must not be polluted. According to the World Health Organization, in 2008 approximately 880 million people in the world (or 13% of world population) did not have access to safe drinking water." At the same time, about 2.6 billion people (or 40% of the world population) lived without improved sanitation.

[_Water Pollution_](http://cnx.org/contents/F0Hv_Zza@43.4:L4NPRKrh@8/Water-Pollution) _by Steve Altaner_

######-FOOD SCARCITY(Jon I forget the actual data set): (Jon... please elaborate)


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
Copyright (c) 2016 Breakaway-Bikers
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
