import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { HeaderTitle } from '../components/HeaderTitle';
import { appTheme } from '../theme/appTheme';

const { height: windowHeight, width: windowWidth } = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Title 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Title 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Title 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

export const SlidesScreen = () => {
  const { top } = useSafeAreaInsets();

  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = (item: Slide) => (
    <View style={styles.slideContainer}>
      <Image source={item.img} style={styles.image} />
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemDescription}>{item.desc}</Text>
    </View>
  );

  return (
    <View
      style={[styles.container, appTheme.container, { marginTop: top + 20 }]}
    >
      <HeaderTitle text="Slides" color="#5856D6" style={styles.headerTitle} />
      <Carousel
        data={items}
        renderItem={({ item }) => renderItem(item)}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        sliderHeight={windowHeight}
        onSnapToItem={index => {
          setActiveIndex(index);
        }}
      />
      <Pagination
        dotsLength={items.length}
        activeDotIndex={activeIndex}
        dotStyle={styles.carouselDot}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 0,
  },
  headerTitle: {
    paddingLeft: 20,
  },
  itemTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  itemDescription: {
    fontSize: 16,
  },
  slideContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
  },
  image: {
    width: 350,
    height: 400,
    resizeMode: 'center',
  },
  carouselDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#5856D6',
  },
});
