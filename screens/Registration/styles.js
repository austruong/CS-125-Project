import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    subtitle: {
      fontSize: 16,
      textAlign: 'center',
      marginHorizontal: 32,
    },
    searchBar: {
      height: 40,
      width: '80%',
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginTop: 20,
    },
  
    image: {
      width: '100%',
      height: '30%',
      marginTop: 20,
    },
  })

  export { styles }