import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './Components/NewsCard/NewsCard';
import news_banner_data from './news_banner_data.json';

const App = () => {
  const renderNews = ({item}) => <NewsCard news={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>
          NEWS
        </Text>
        <FlatList
          ListHeaderComponent={() => (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {news_banner_data.map(bannerNews => (
                <Image
                  style={styles.banner_image}
                  source={{uri: bannerNews.imageUrl}}
                />
              ))}
            </ScrollView>
          )}
          data={news_data}
          renderItem={renderNews}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
    margin: 10,
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  headerText:{
    fontWeight:'bold',
    fontSize: 36,
  }
});

export default App;
