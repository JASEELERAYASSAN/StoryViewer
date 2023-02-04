import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Modal, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Status = () => {

  const [stories, setStories] = useState([])
  const [selectedStory, setSelectedstory] = useState(null)

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/shakeebM/StoriesApi/stories').then((response) => {
      setStories(response.data)
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.statusContainer}>
        <Image
          style={styles.dp}
          source={{ uri: 'https://img.freepik.com/premium-vector/brunette-man-avatar-portrait-young-guy-vector-illustration-face_217290-1035.jpg' }} />
        <View style={styles.addStatus} >
          <Text style={styles.add}>＋</Text>
        </View>
        <Text style={styles.text1}>My status</Text>
        <Text style={styles.text2}>Tap to add status update</Text>
      </View>
      <View style={styles.recentContainer}>
        <Text style={styles.text3}>Recent updates</Text>
      </View>
      {stories.map((story, index) => (
        <View style={{ flex: 1 }} key={index}>
          <TouchableOpacity
            onPress={() => setSelectedstory(story)} >
            <View style={styles.imageContainer}>
              <Image
                style={styles.storyDp}
                source={{ uri: story.profile.image }} />
              <Text style={styles.text4}>{story.profile.name}</Text>
            </View>
          </TouchableOpacity>
          {selectedStory && (
            <Modal animationType='fade' transparent={false} visible={!!selectedStory} onRequestClose={() => { setSelectedstory(null) }} >
              <View style={styles.storyContainer}>
                <Image source={{ uri: selectedStory.image }} style={styles.storyImage} />
                <Text style={styles.text5}>{selectedStory.title}</Text>
              </View>
            </Modal>
          )}
        </View>
      ))}
      <View style={styles.recentContainer}>
        <Text style={styles.text3}>Viewed updates</Text>
      </View>
      {stories.map((story, index) => (
        <View style={{ flex: 1 }} key={index}>
          <TouchableOpacity
            onPress={() => setSelectedstory(story)} >
            <View style={styles.imageContainer}>
              <Image
                style={styles.storyDp1}
                source={{ uri: story.profile.image }} />
              <Text style={styles.text4}>{story.profile.name}</Text>
            </View>
          </TouchableOpacity>
          {selectedStory && (
            <Modal animationType='fade' transparent={false} visible={!!selectedStory} onRequestClose={() => { setSelectedstory(null) }} >
              <View style={styles.storyContainer}>
                <Image source={{ uri: selectedStory.image }} style={styles.storyImage} />
                <Text style={styles.text5}>{selectedStory.title}</Text>
              </View>
            </Modal>
          )}
        </View>
      ))}
      {selectedStory && (
            <Modal animationType='fade' transparent={false} visible={!!selectedStory} onRequestClose={() => { setSelectedstory(null) }} >
              <View style={styles.storyContainer}>
                <Image source={{ uri: selectedStory.image }} style={styles.storyImage} />
                <Text style={styles.text5}>{selectedStory.title}</Text>
              </View>
            </Modal>
          )}
    </ScrollView>
  )
}

export default Status

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  statusContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: 5
  },
  dp: {
    height: 75,
    width: 75,
    borderRadius: 37.5,
    marginTop: 20,
    marginLeft: 20,
  },
  addStatus: {
    backgroundColor: '#25d366',
    marginTop: 57.5,
    width: 30,
    height: 30,
    borderRadius: 17.5,
    marginLeft: -30
  },
  add: {
    textAlign: 'center',
    color: 'white',
    marginTop: 6,
    fontWeight: '900'
  },
  text1: {
    color: '#000',
    fontSize: 20,
    marginTop: 30,
    marginLeft: 40,
    fontWeight: '600'
  },
  text2: {
    color: '#789',
    fontSize: 15,
    marginTop: 65,
    marginLeft: -88
  },
  recentContainer: {
    height: 35,
    width: '100%',
    flexDirection: 'row'
  },
  text3: {
    color: '#789',
    fontWeight: '500',
    marginTop: 10,
    marginLeft: 15
  },
  imageContainer: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
  },
  text4: {
    color: '#000',
    fontWeight: 'bold',
    marginTop: 40,
    marginLeft: 20,
    fontSize: 15
  },
  text5: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 15,
    marginTop: 550,
    backgroundColor: '#000'
  },
  storyDp: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginLeft: 20,
    marginTop: 10,
    borderWidth: 3,
    resizeMode: 'stretch',
    borderColor: '#25d366',
  },
  storyDp1: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginLeft: 20,
    marginTop: 10,
    borderWidth: 3,
    resizeMode: 'stretch',
    borderColor: '#789',
  },
  storyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  storyImage: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  }
})