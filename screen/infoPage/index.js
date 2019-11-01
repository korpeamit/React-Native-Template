import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, ScrollView, CheckBox, TextInput, TouchableOpacity } from 'react-native';
import { Info } from 'ReactNativeTemplate/screenNames';
import HeaderComponent from 'ReactNativeTemplate/components/HeaderComponent';
import styles from './styles';
const backgroundColor = '#e510be';
export default class InfoComponents extends Component {
    static navigationOption = ({ navigation }) => {
        let drawerLabel = "Home";
        return { drawerLabel };
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column'
            }}>
                <HeaderComponent {...this.props} />
                <ScrollView>
                    <View style={[styles.box,styles.mgBtm20]}>
                        <Text style={styles.cmpTitle}>Profile Details</Text>
                        <View style={styles.formInputWrp}>
                            <TextInput
                                //value={}
                                //onChangeText={}
                                underlineColorAndroid={'transparent'}
                                autoCapitalize="none"
                                returnKeyType="done"
                                returnKeyLabel="Done"
                                placeholder={"Name"}
                                placeholderTextColor="#2a2a2a"
                                // onSubmitEditing={}
                                autoFocus={true}
                                blurOnSubmit={true}
                                maxLength={24}
                                style={[styles.input]}
                            />
                            <TextInput
                                //value={}
                                //onChangeText={}
                                underlineColorAndroid={'transparent'}
                                autoCapitalize="none"
                                returnKeyType="done"
                                returnKeyLabel="Done"
                                placeholder={"Phone No."}
                                placeholderTextColor="#2a2a2a"
                                // onSubmitEditing={}
                                autoFocus={true}
                                blurOnSubmit={true}
                                maxLength={24}
                                style={[styles.input]}
                            />
                            <View style={styles.inputWrp}>
                                <TextInput
                                    //value={}
                                    //onChangeText={}
                                    underlineColorAndroid={'transparent'}
                                    autoCapitalize="none"
                                    returnKeyType="done"
                                    returnKeyLabel="Done"
                                    placeholder={"Gender"}
                                    placeholderTextColor="#2a2a2a"
                                    // onSubmitEditing={}
                                    autoFocus={true}
                                    blurOnSubmit={true}
                                    maxLength={24}
                                    style={[styles.input, styles.wd50]}
                                />
                                <TextInput
                                    //value={}
                                    //onChangeText={}
                                    underlineColorAndroid={'transparent'}
                                    autoCapitalize="none"
                                    returnKeyType="done"
                                    returnKeyLabel="Done"
                                    placeholder={"DOB"}
                                    placeholderTextColor="#2a2a2a"
                                    // onSubmitEditing={}
                                    autoFocus={true}
                                    blurOnSubmit={true}
                                    maxLength={24}
                                    style={[styles.input, styles.wd50]}
                                />
                            </View>
                        </View>
                        <Text style={styles.cmpTitle}>Appointment Details</Text>
                        <View style={styles.formInputWrp}>
                            <View style={styles.inputWrp}>
                                <TextInput
                                    //value={}
                                    //onChangeText={}
                                    underlineColorAndroid={'transparent'}
                                    autoCapitalize="none"
                                    returnKeyType="done"
                                    returnKeyLabel="Done"
                                    placeholder={"Date"}
                                    placeholderTextColor="#2a2a2a"
                                    // onSubmitEditing={}
                                    autoFocus={true}
                                    blurOnSubmit={true}
                                    maxLength={24}
                                    style={[styles.input, styles.wd50]}
                                />
                                <TextInput
                                    //value={}
                                    //onChangeText={}
                                    underlineColorAndroid={'transparent'}
                                    autoCapitalize="none"
                                    returnKeyType="done"
                                    returnKeyLabel="Done"
                                    placeholder={""}
                                    placeholderTextColor="#2a2a2a"
                                    // onSubmitEditing={}
                                    autoFocus={true}
                                    blurOnSubmit={true}
                                    maxLength={24}
                                    style={[styles.input, styles.wd50]}
                                />
                            </View>
                            <TextInput
                                //value={}
                                //onChangeText={}
                                underlineColorAndroid={'transparent'}
                                autoCapitalize="none"
                                returnKeyType="done"
                                returnKeyLabel="Done"
                                placeholder={"Location"}
                                placeholderTextColor="#2a2a2a"
                                // onSubmitEditing={}
                                autoFocus={true}
                                blurOnSubmit={true}
                                maxLength={24}
                                style={[styles.input]}
                            />
                            <View style={styles.inputWrp}>
                                <TextInput
                                    //value={}
                                    //onChangeText={}
                                    underlineColorAndroid={'transparent'}
                                    autoCapitalize="none"
                                    returnKeyType="done"
                                    returnKeyLabel="Done"
                                    placeholder={"Ref. By"}
                                    placeholderTextColor="#2a2a2a"
                                    // onSubmitEditing={}
                                    autoFocus={true}
                                    blurOnSubmit={true}
                                    maxLength={24}
                                    style={[styles.input, styles.wd50]}
                                />
                                <TextInput
                                    //value={}
                                    //onChangeText={}
                                    underlineColorAndroid={'transparent'}
                                    autoCapitalize="none"
                                    returnKeyType="done"
                                    returnKeyLabel="Done"
                                    placeholder={""}
                                    placeholderTextColor="#2a2a2a"
                                    // onSubmitEditing={}
                                    autoFocus={true}
                                    blurOnSubmit={true}
                                    maxLength={24}
                                    style={[styles.input, styles.wd50]}
                                />
                            </View>
                        </View>
                        <View style={[styles.btnWrp]}>
                            <TouchableOpacity style={[styles.btn, styles.wd50]}>
                                <Text style={styles.btnText}>Update</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btn, styles.wd50]}>
                                <Text style={styles.btnText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.userBox}>
                        <View style={styles.checkInWrp}>
                            <Text style={styles.checkIn}>Checked in at 10:25am</Text>
                            {/* <CheckBox
                            title='Click Here'
                            checked={true}
                            size={10}
                        /> */}
                        </View>
                        <View style={styles.patientInfoWrp}>
                            <View style={styles.patientDataWrp}>
                                <View style={styles.cost}>
                                    <Text style={styles.rupee}>₹</Text>
                                </View>
                                <View style={styles.patientData}>
                                    <Text style={styles.pName}>Demo Name M 32</Text>
                                    <Text style={styles.typePatient}>Type of App</Text>
                                    <Text style={styles.refPatient}>Ref By: ABCD</Text>
                                    <Text style={styles.roomPatient}>Room No. 1</Text>
                                </View>
                            </View>
                            <View style={styles.patientPanel}>
                                <View style={styles.timeWrp}>
                                    <Text style={styles.time}>Time</Text>
                                </View>
                                <View style={styles.patientNo}>
                                    <Text style={styles.patientAvatar}>Icon</Text>
                                    <Text style={styles.patientID}>9898/19</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}  