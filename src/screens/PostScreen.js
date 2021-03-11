import React from 'react'
import {View, Text, StyleSheet, Image, ScrollView, Button, Alert} from 'react-native'
import { DATA } from '../data'
import { THEME } from '../theme'


export const PostScreen = ({navigation}) => {
  const postId = navigation.getParam('postId')

  const post = DATA.find(p => p.id === postId)

  const removeHandler = () => {
    Alert.alert(
      'Remove Post',
      'Do you really want to remove the post?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        { text: 'Delete', style: 'destructive', onPress: () => {} }
      ],
      { cancelable: false }
    )
  }

  return (
  <ScrollView>
    <Image source={{uri: post.img}}	style={styles.image}/>
    <View style={styles.textWrap}>
      <Text>{post.text}</Text>
    </View>
    <Button title='Delete' color={THEME.DANGER_COLOR} onPress={removeHandler}/>
  </ScrollView>
  )
}

PostScreen.navigationOptions = ({navigation}) => {
  const date = navigation.getParam('date')
  return {
    headerTitle: 'Post from ' + new Date(date).toLocaleDateString()
  }
}


const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  textWrap: {
    padding: 10
  }
})