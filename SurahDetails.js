// SurahDetails.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SurahDetails = ({ surah, isDarkMode }) => {
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: isDarkMode ? 'white' : 'black',
    },
    names: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    name: {
      color: isDarkMode ? 'white' : 'black',
      fontSize: 18,
      fontWeight: 'bold',
    },
    detail: {
      color: isDarkMode ? 'white' : 'black',
      fontSize: 14,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.names}>
        <Text style={styles.name}>{surah.english}</Text>
        <Text>{surah.arabic}</Text>
      </View>
      <Text style={styles.detail}>Total Verses: {surah.verses.length}</Text>
    </View>
  );
};

export default SurahDetails;
