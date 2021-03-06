import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const UserView = ({user = {}}) => {
  return (
    <View
      style={{
        borderRadius: 8,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        marginHorizontal: 10,
        alignItems: 'center',
        paddingTop: 30,
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 100,
          backgroundColor: '#F9F9F9',
          borderBottomColor: '#C5C5C5',
          borderBottomWidth: 1,
        }}
      />
      <View
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          backgroundColor: 'white',
          borderColor: '#C5C5C5',
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{uri: user.picture}}
          style={{
            width: 180,
            height: 180,
            borderRadius: 90,
            backgroundColor: 'gray',
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'column',
          marginHorizontal: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#999999', fontSize: 17, marginTop: 30}}>
          My address is
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 22,
            textAlign: 'center',
            marginBottom: 20,
          }}>
          {user.address}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          // backgroundColor: 'yellow',
          alignSelf: 'stretch',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 60,
          marginBottom: 30,
        }}>
        <Icon name={'md-person'} color="black" size={34} />
        <Icon name={'ios-calendar'} color="black" size={34} />
        <Icon name={'ios-map'} color="black" size={34} />
        <Icon name={'md-call'} color="black" size={34} />
        <Icon name={'ios-lock'} color="black" size={34} />
      </View>
    </View>
  );
};

export default UserView;
