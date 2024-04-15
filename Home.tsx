import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = nav => {
  const {name, surname, age, course} = nav.route.params;
  return (
    <View style={styles.homebutton}>
      <Text style={styles.textOfButton}>---Home---</Text>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.comingDetails}> Name:- {name}</Text>
        <Text style={styles.comingDetails}>Surname:- {surname}</Text>
        <Text style={styles.comingDetails}>Age:- {age}</Text>
        <Text style={styles.comingDetails}>Course:- {course}</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homebutton: {
    flex: 1,
    backgroundColor: '#059fdc',
  },
  textOfButton: {
    fontSize: 30,
    color: 'lightgreen',
    textAlign: 'center',
    backgroundColor: 'green',
    marginHorizontal: 70,
    borderRadius: 4,
    marginBottom: 12,
    marginTop: 12,
  },
  comingDetails: {
    fontSize: 20,
    marginHorizontal: 40,
    marginBottom: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    color: 'black',
  },
});
// bgcolor,barstyle== dark , light ,default  hidden prop to hide  it
