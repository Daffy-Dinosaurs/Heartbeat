import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

//initialize with data / state
  //


  export default class Bar extends Component {
    render() {
        return (
          <input type="range" min="0" max="100" step="4" list="steplist" defaultValue={50} >
            <datalist id="steplist">
              <option>0</option>
              <option>3</option>
              <option>7</option>
              <option>12</option>
              <option>16</option>
              <option>20</option>
              <option>24</option>
              <option>28</option>
              <option>32</option>
              <option>36</option>
              <option>40</option>
              <option>44</option>
              <option>48</option>
              <option>52</option>
              <option>56</option>
              <option>60</option>
              <option>64</option>
              <option>68</option>
              <option>72</option>
              <option>78</option>
              <option>82</option>
              <option>86</option>
              <option>90</option>
              <option>94</option>
              <option>98</option>
            </datalist>
          </input>
        );

    }
  }
