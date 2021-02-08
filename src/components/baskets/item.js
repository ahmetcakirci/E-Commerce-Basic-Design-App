import React from 'react'
import { Text, View, FlatList, Image } from 'react-native'
import { Icon } from 'native-base'
import { colors } from '../../utils/theme'

const image1 = require('../../assets/img/basket/orange.jpg')
const image2 = require('../../assets/img/basket/tomato.jpg')
const image3 = require('../../assets/img/basket/salmon.jpg')
const image4 = require('../../assets/img/basket/greens.jpg')
const image5 = require('../../assets/img/basket/rye-bread.jpg')

const data = [
  {
    id: 1,
    image: image1,
    name: 'Portakal',
    price: 5,
    amountTaken: 3
  },
  {
    id: 2,
    image: image2,
    name: 'Domates',
    price: 4,
    amountTaken: 4
  },
  {
    id: 3,
    image: image3,
    name: 'Somon Balık',
    price: 16,
    amountTaken: 2
  },
  {
    id: 4,
    image: image4,
    name: 'Yeşillik',
    price: 3,
    amountTaken: 3
  },
  {
    id: 5,
    image: image5,
    name: 'Çavdar Ekmek',
    price: 3,
    amountTaken: 1
  }
]

const Item = () => {
  const _renderItem = ({ item, index }) => {
    const { containerStyle, lastItemStyle, imageStyle, textStyle, counterStyle, priceStyle } = styles

    return (
      <View style={index + 1 === data.length ? lastItemStyle : containerStyle}>
        <Image source={item.image} style={imageStyle} />

        <View style={textStyle}>
          <Text style={{ color: '#2e2f30' }}>{item.name}</Text>
          <View style={priceStyle}>
            <Text style={{ color: '#2e2f30', fontSize: 12 }}>{item.price} TL</Text>
          </View>
        </View>

        <View style={counterStyle}>
          <Icon name={'ios-remove'} style={{ color: colors.ORANGE.default, fontSize: 23 }} />
          <Text>{item.amountTaken}</Text>
          <Icon name={'ios-add'} style={{ color: colors.ORANGE.default, fontSize: 23 }} />
        </View>
      </View>
    )
  }

  return <FlatList data={data} renderItem={_renderItem} keyExtractor={(item) => item.id} />
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
    padding: 10,
    paddingLeft: 15,
    backgroundColor: '#fff'
  },
  lastItemStyle: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    paddingLeft: 15,
    backgroundColor: '#fff'
  },
  imageStyle: {
    width: 50,
    height: 50,
    marginRight: 20
  },
  textStyle: {
    flex: 2,
    justifyContent: 'center'
  },
  priceStyle: {
    backgroundColor: '#ddd',
    width: 40,
    alignItems: 'center',
    marginTop: 3,
    borderRadius: 3
  },
  counterStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}

export default Item