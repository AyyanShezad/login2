// App.js
import React, { useState } from 'react';
import { View, Text, FlatList, Switch, StyleSheet, TextInput } from 'react-native';
import SurahDetails from './SurahDetails';
import { surahNames, surahDetails } from './QuranData';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const filteredSurahs = surahNames.filter(
    (surah) =>
      surah.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
      surah.arabic.includes(searchQuery)
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? 'gray' : 'white',
      padding: 10,
    },
    header: {
      flex:0.27,
      justifyContent:'center',
      alignItems:'center',
      marginTop:50,
      marginLeft:100,
      fontSize:30,
      color: isDarkMode ? 'white' : 'black',
    },
    searchInput: {
      borderBottomRightRadius:10,
      borderBottomLeftRadius:10,
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      backgroundColor: 'lightgray',
      padding: 5,
      marginVertical: 10,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quran App</Text>
      <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search Surah"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredSurahs}
        keyExtractor={(item) => item.english}
        renderItem={({ item }) => (
          <SurahDetails
            surah={surahDetails.find((surah) => surah.name === item.english)}
            isDarkMode={isDarkMode}
          />
        )}
      />
    </View>
  );
};

export default App;
