import React from 'react';
import { StyleSheet, View, Text, Alert, FlatList, } from 'react-native';
import { ImageCard } from './ImageCard';

const API_KEY = 'd3d0a73e3cb945dab216ede989e69d78';

export const MainScreen = ({ route }) => {
  const selectedCategory = route.params.selectedCategory;

  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const getData = (category = '') => {
		setIsLoading(true);
    const cat = `category=${category}`;
    fetch(`https://newsapi.org/v2/top-headlines?country=ru&${cat}&apiKey=${API_KEY}`)
      .then(response => {
        return response.json();
      })
      .then(dataResponse => {
        setData(dataResponse.articles);
      })
      .finally(() => {
        setIsLoading(false);
        moveToTop();
      })
      .catch(dataResponse => {
        if (dataResponse.status !== 'ok') {
          Alert.alert('Отсутствует интернет соединение');
        }
      });
  };

  const renderItem = ({ item }) => <ImageCard key={item.id} {...item} />;

  const flatList = React.useRef();
  const moveToTop = () => flatList.current.scrollToIndex({ index: 0 });

  React.useEffect(() => {
    getData(selectedCategory);
  }, []);

  return (
    <View style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.textStyle}>ТОП Новости</Text>
      </View>
      <FlatList
        ref={flatList}
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        onRefresh={() => getData(selectedCategory)}
        refreshing={isLoading}
        columnWrapperStyle={styles.mainContent}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    backgroundColor: '#30d0fe',
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 60,
    paddingHorizontal: 16,
    paddingBottom: 4,
  },
  mainContent: {
    marginHorizontal: -4,
    padding: 8,
    backgroundColor: '#fff',
  },
  textStyle: {
    fontFamily: 'AvenirNext-DemiBold', fontSize: 28, color: '#fff',
  },
  dropdown: {
    paddingHorizontal: 8, marginBottom: 8, marginTop: 8,
  },
});