import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import CommentInput from '../components/CommentInput';
import CommentItem from '../components/CommentItem';

export function HomeScreen({ route, navigation }) {
  //deklaracija state varjable
  const [comment, setComment] = useState([]);

  //uzima vrijednost koju smo unijeli u textInput i dodaje istu u niz, dodjeljuje id (generirani) i value (vrijednost koju upišemo u textInput)
  const addCommentHandler = (commentTitle) => {
    setComment((currentComment) => [
      ...currentComment,
      { id: Math.random().toString(), value: commentTitle },
    ]);
  };

  //uzima id vrijednosti na koju smo kliknuli i briše tu vrijednost iz niza
  const removeCommentHandler = (commentId) => {
    setComment((currentComment) => {
      return currentComment.filter((comment) => comment.id !== commentId);
    });
  };
  function handleHomePress() {
    navigation.navigate('Home');
  }
  return (
    <View style={styles.container}>
      <View style={styles.profileWrapper}>
        <Text style={styles.profileText}>Sing in</Text>
        <Text style={styles.profileTextNormal}>Stay updated on your professional world
        </Text>
      </View>

      <View style={styles.dateWrapper}>
        <View style={styles.emailWrapper}>
        <Text style={styles.data}>Email or Phone</Text>
        </View>
      </View>

      <View style={styles.dateWrapper}>
        <View style={styles.emailWrapper}>
        <Text style={styles.data}>Password</Text>
        <Text style={styles.show}>show</Text>
        </View>
        <Text style={styles.pass}>Forgot password?</Text>

      </View>

      <TouchableOpacity style={styles.gameCommentsJumbotron}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>

        
      <Text style={styles.or}>or</Text>
      
      <TouchableOpacity style={styles.gameCommentsJumbotronApple}>
      <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/0/747.png',
          }}
          style={{ height: 24, borderRadius: 80, width: 24 }}
        />
        <Text style={styles.buttonTextApple}>Sign in with Apple</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 20
  },
  gameCommentsJumbotron: {
    marginTop: 20,
    padding: 12,
    marginHorizontal: 20,
    borderRadius: 30,
    backgroundColor: "#0077b5"
  },

  gameCommentsJumbotronApple: {
    flexDirection: "row",
    marginTop: 10,
    padding: 12,
    marginHorizontal: 20,
    borderRadius: 30,
    borderColor: "#B0B0B0",
    borderWidth: 2,
    backgroundColor: "#FFFFFF",
    justifyContent: 'center',
    alignItems: 'center',
  },

    buttonTextApple:{
    textAlign: "center",
    fontSize: 16,
    color: "grey",
    fontWeight: 500,
    marginLeft: 10
  },

  buttonText:{
    textAlign: "center",
    fontSize: 16,
    color: "white",
    fontWeight: 500
  },
  profileWrapper: {
    margin: 20,
    alignItems: 'left',
  },
  profileText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  profileTextNormal: {
    alignItems: 'center',
    marginTop: 10,
    color: '#303030',
    marginBottom: -5
  },

  dateWrapper: {
    paddingTop: 15,
    paddingLeft: 20,
  },

  emailWrapper:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 20,
    padding: 5,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#B0B0B0",
    height: 50,
  },

  data: {
    color: "grey",
    marginLeft: 5,
  },

  or: {
    color: "#303030",
    textAlign: "center",
    marginTop: 5,

  },

  show: {
    color: "#0077b5",
    fontWeight: "bold",
    marginRight: 5,
  },

    pass: {
    color: "#0077b5",
    fontWeight: "bold",
    marginTop: 10
  },
});
