import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      },
      containerProfile: {
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        fontSize:20,
        fontWeight: "bold",
        color: "#ebebeb",
        marginVertical: 10
      },
      textSkill: {
        fontSize:20,
        fontWeight: "bold",
        color: '#333333',
        marginVertical: 10,
        marginLeft: 10
      },
      containerButton: {
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      containerSkill: {
        width:'90%',
        backgroundColor: '#f5f5f5',
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 20
      },
      button: {
        alignItems: 'center',
        color: "#F5F5F5",
        backgroundColor: "#0077C2",
        width: '50%',
        borderRadius: 10,
        margin: 30
      }
})

export default styles