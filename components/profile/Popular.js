import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Octicons, FontAwesome } from '@expo/vector-icons';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'osoro-weather',
    description: 'Weather application',
    language: 'CSS',
    stars: 6,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Shoply',
    description: 'CRUD Shop App',
    language: 'C#',
    stars: 5,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Notes',
    description: 'Console Note-taking Application with Node',
    language: 'Javascript',
    stars: 5,
  },
];

const Repository = ({
  name = 'osoro-weather',
  description = 'Weather application',
  language = 'Javascript',
  stars = 3,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.repoWrapper}>
      <View style={{ paddingBottom: 30 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10 }}>
          <View style={{ flex: 1 }}>
            <Image source={require('../../assets/images/avatar.png')} style={styles.imageStyle} />
          </View>
          <View style={{ flex: 8 }}>
            <Text>eustacequartey</Text>
          </View>
        </View>
        <View style={{ paddingBottom: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: '600' }}>{name}</Text>
        </View>
        <View style={{ paddingBottom: 10 }}>
          <Text style={{ fontSize: 17 }}>{description}</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Octicons name="primitive-dot" size={24} color="#543F78" />
          <Text style={{ paddingHorizontal: 5, color: '#7f7f7f' }}>{language}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome name="star" size={18} color="#FFDA63" />
          <Text style={{ paddingHorizontal: 5, color: '#7f7f7f' }}>{stars}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Popular = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerStyle}>
        <View style={{ flex: 0.5 }}>
          <FontAwesome name="star-o" size={25} color="#7f7f7f" />
        </View>
        <View style={{ flex: 5 }}>
          <Text style={{ fontSize: 18, fontWeight: '600' }}>Popular</Text>
        </View>
      </View>
      <View style={styles.bodyStyle}>
        <FlatList
          data={DATA}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Repository {...item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Popular;
const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 15,
    backgroundColor: '#FBFBFD',
    borderBottomWidth: 0.5,
    borderColor: '#C6C6C8',
  },
  headerStyle: {
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
  },
  repoWrapper: {
    width: 320,
    borderWidth: 0.5,
    borderColor: '#C6C6C8',
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: '#fff',
  },
  imageStyle: {
    height: 20,
    width: 20,
  },
  bodyStyle: {
    paddingLeft: 20,
  },
});
