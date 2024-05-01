import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      },
      text: {
        fontSize:20,
        fontWeight: "bold",
        color: "#ebebeb",
        marginVertical: 10
      },
      containerProfile: {
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      containerButton: {
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      button: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: "#00619a",
        backgroundColor: "#0077C2",
        width: '50%',
        borderRadius: 10,
        margin: 30
      },
      colorSkill: {
        color: '#FF4081'
      }
})

export default styles