import React from 'react';
import { SearchBar } from 'react-native-elements';
import  Colors from "../config/colors";
export default class App extends React.Component {
  state = {
    search: '',
  };
  updateSearch = (search) => {
    this.setState({ search });
    console.log(search);
  };
  render() {
    const { search } = this.state;
    return (
      <SearchBar
        placeholder="Search.."
        onChangeText={this.updateSearch}
        value={search}
        containerStyle ={{backgroundColor:Colors.secondary,borderRadius:15,borderWidth:0.1}}
        inputContainerStyle= {{backgroundColor:Colors.White,borderRadius:30}}
      />
    );
  }
}