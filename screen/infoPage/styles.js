import EStyleSheet from 'react-native-extended-stylesheet';
// import {StyleSheet} from 'react-native';

import COLORS from 'ReactNativeTemplate/themes/colors';
export default EStyleSheet.create({
    innerContainer:{
        flex:1,
    },
    backgroundImage:{
        position:'absolute',
        top:0,
        left:0,
        width:'100%',
        height:'100%'
    },
    overlay:{
        position:'absolute',
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,0.5)',
        left:0,
        top:0
    },
    playerList:{
        flex:1,
        padding:20
    },
    title:{
        fontSize:25,
        color:'white',
        marginBottom:15,
    },
    plyName:{
        fontSize:18,
        color:'white',
        marginVertical:10
    },

    userBox:{
        // flex: 1,
        backgroundColor:'white',
        borderColor:'#000',
        borderWidth: 1,
        borderRadius: 5,
        width:'100%'
    },
    checkInWrp:{
        width:'100%',
        alignItems:'center',
        justifyContent:'flex-end',
        flexDirection:'row'
    },
    checkIn:{
        color:'#000',
        fontSize: 14,
        padding: 5,
        textAlign:'right'
    },
    patientInfoWrp:{
        // flex: 1,
        flexDirection:'row',
        width:'100%',
        
    },
    patientDataWrp:{
        // flex: 0.6,
        width:'60%',
        flexDirection:'row',
    },
    cost:{
        // flex: 0.2,
        width:'20%',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    patientData:{
        width:'80%',
    },
    patientPanel:{
        // flex: 0.4
        width:'40%',
        flexDirection:'row'
    },
    timeWrp:{
        width:'50%',
        alignItems:'flex-start',
        justifyContent:'flex-end'
    },
    patientNo:{
        width:'50%',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    ////////////////////profile///////////////
    box:{
        padding: 30,
        backgroundColor:'#ddd'
    },
    cmpTitle:{
        color:'#000',
        fontSize: 22,
        marginBottom: 20
    },
    formInputWrp:{
        marginBottom: 25
    },
    input:{
        width:'100%',
        height: 50,
        color:'#000',
        fontSize: 18,
        borderColor:'#fff',
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 2,
        marginBottom: 10
    },
    inputWrp:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        flex: 1
    },
    wd50:{
        flex: 0.48
    },
    btnWrp:{
        flex: 1,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row'
    },
    btn:{
        flex:1,
        height: 50,
        paddingHorizontal: 15,
        backgroundColor: '#4e6de5',
        borderRadius: 50,
        alignItems:'center',
        justifyContent:'center'
    },
    btnText:{
        color:'#fff',
        fontSize: 18,
        textAlign:'center'
    },
    mgBtm20:{
        marginBottom: 20
    }
    
})