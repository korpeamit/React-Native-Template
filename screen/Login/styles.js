import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    container:{
        flex: 1
    },
    logoContainer:{
        flex: 0.3,
        alignItems:'center',
        justifyContent:'flex-start',
    },
    logoStyle:{
        flex: 1,
        resizeMode:'contain'
    },
    formWrp:{
        flex: 0.7,
        alignItems:'center',
        justifyContent:'flex-start',
        paddingHorizontal: 32,
        paddingVertical: 30
    },
    textInputStyle:{
        width:'100%',
        height: 50,
        color:'#000',
        fontSize: 18,
        borderColor:'#ddd',
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 50,
        marginBottom: 30
    },
    loginBtn:{
        width:'100%',
        height: 50,
        paddingHorizontal: 15,
        backgroundColor: '#4e6de5',
        borderRadius: 50,
        alignItems:'center',
        justifyContent:'center'
    },
    loginText:{
        color:'#fff',
        fontSize: 18,
        textAlign:'center'
    }

})