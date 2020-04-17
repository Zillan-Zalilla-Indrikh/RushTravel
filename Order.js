import React from 'react'
import { View, Text,StyleSheet, TextInput, Picker,  Dimensions } from 'react-native'
import DatePicker from 'react-native-datepicker'
import {Button} from 'react-native-paper'
let width = Dimensions.get('window').width

export default class Order extends React.Component{
    constructor(){
        super();
        this.state={
            PickerValue:'',
            pickup:'',
            location:'',
            seat: '',
        }
    };

    updateValue(text,field,itemValue){
        
        if(field=='pickup')
        {
            this.setState({
                pickup:text,
            })
        }
        else if(field=='location')
        {
            this.setState({
                location:text,
            })
        }
        else if(field=='seat')
        {
            this.setState({
                seat: text,
                seat:text,
            })
        }else if(field == 'date'){
            this.setState({
                date: text,
                due_date: text,
            })
        }else if(field=='payment')
        {
            this.setState({
                payment: text,
                PickerValue: text,
            })
        }
    }

    // Button Press
    Order()
    {
        //tampung data form
        let itemData = {}
        //get data from function UpdateValue
        itemData.pickup_location = this.state.pickup
        itemData.destination_location = this.state.location
        itemData.no_off_seat = this.state.seat
        itemData.date = this.state.date
        itemData.payment_method = this.state.payment

        //send data
        var url = 'https://rushowl.siostium.id/public/api/orders';
        fetch(url, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemData),
        })
        .then((response) => response.json())
        .then((data) => {
            //if data success go to HomeOrder
            if(data){
                this.props.navigation.navigate('HomeOrder')
            }
            // console.warn('Success:', data);
        })
        .catch((error) => {
            //if send data not success or have problem on backend
            alert('The App Under Maintance Try Again Later');
            // console.warn('Error:', error);
        });
    }
    
    render(){
        // check value isPickup
        // alert(this.state.due_date);
        let dt = new Date()
        let date = dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate()
        return(
            <View style={style.container}>
                <Text style={{fontSize:30, color: '#3E454D' , paddingTop: 8, paddingLeft: 20, fontWeight:'bold'}}>Order</Text>
                <View style={{paddingTop: 10, paddingBottom: 10, alignItems: 'center'}} >
                <TextInput 
                style={ this.state.pickup != '' ? style.changeColorInput : style.textInput} 
                placeholder="Pickup Location" 
                underlineColorAndroid={'transparent'}
                onChangeText={(text) => this.updateValue(text, 'pickup')}
                />

                <TextInput 
                style={this.state.location != '' ? style.changeColorInput : style.textInput} 
                placeholder="Destination Location" 
                underlineColorAndroid={'transparent'}
                onChangeText={(text) => this.updateValue(text,'location')}
                />
                
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <Picker
                        selectedValue={this.state.seat}
                        style={this.state.seat !='' ? style.xColorInput: style.xInput}
                        onValueChange={
                            (itemValue, itemIndex) => this.setState({PickerValue: itemValue}),
                            (itemValue) => this.updateValue(itemValue,'seat')
                        }>
                        <Picker.Item label="People" placeholder="Time" color='grey' />
                        <Picker.Item label="6 People" value="6"/>
                        <Picker.Item label="13 People" value="13"/>
                        <Picker.Item label="25 People" value="25"/>
                        <Picker.Item label="45 People" value="45"/>
                    </Picker>
                    <DatePicker 
                        style={this.state.due_date != undefined? style.datetimeColor: style.datetime}
                        customStyles={{dateText:{color:'#3E454D'}, paddingLeft:30}}
                        date={this.state.due_date}
                        mode="datetime"
                        format="YYYY-MM-DD HH:mm"
                        placeholder="Date"
                        minDate={date}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={
                            (text) => this.updateValue(text,'date')
                        }/>
                </View>
                <View>
                <Text style={{paddingLeft:30, paddingTop: 10, color: '#3E454D'}}>Price</Text>
                </View>
                <View>
                <Text style={{paddingLeft:30, paddingTop: 10, color: '#3E454D', fontWeight: 'bold', fontSize: 25}}>Rp.-</Text>
                </View>
                <View>
                <Text style={{paddingLeft:30, color: '#3E454D', fontWeight: 'bold', fontSize: 25}}>_______________________________</Text>  
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{paddingLeft:30, paddingTop: 10, color: '#3E454D', fontSize: 17}}>Payment Method</Text>
                    <Picker
                    selectedValue={this.state.PickerValue}
                    style={style.cashInput}
                    onValueChange={
                        (itemValue) => this.updateValue(itemValue,'payment')
                    }>
                    <Picker.Item label="Choose"/>
                    <Picker.Item label="Cash" value="cash" />
                    <Picker.Item label="Transfer" value="transfer" />
                    <Picker.Item label="Ovo" value="ovo" />
                    </Picker>
                    </View>
                    <View>
                <Button 
                    onPress={
                        // this.props.navigation.navigate('HomeOrder') can see on function Order()
                        () => this.Order()
                    }
                    style={
                    {backgroundColor:"grey", 
                    width: 350, 
                    alignSelf:'center', marginBottom:10, padding:7}
                    }>
                    <Text style={{color:'rgba(0,0,0,0.9)'}}>Order</Text>
                </Button>
                </View>
            </View>
        )
    }
}
 Order.navigationOptions={
    headerStyle: {
        backgroundColor: "white",
        shadowColor:'transparent', 
        elevation:0,
      },
 }
let style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffff'
    },
    textInput:{
        marginBottom:10, 
        backgroundColor:'#dedede',
        borderRadius:8,
        paddingTop:10,
        width: 350,
    },
    changeColorInput:{
        marginBottom:10, 
        backgroundColor:'yellow',
        borderRadius:8,
        paddingTop:10,
        width: 350,
    },
    xInput:{
        marginBottom:10, 
        backgroundColor:'#dedede',
        borderRadius:8,
        padding:10,
        width: 100,
    },
    xColorInput:{
        marginBottom:10, 
        backgroundColor:'yellow',
        borderRadius:8,
        padding:10,
        width: 100,
    },
    cashInput:{
        marginBottom:3, 
        backgroundColor:'white',
        borderRadius:8,
        padding:10,
        width: 150,
        fontSize: 6
    },
    datetime:{
        width: 200
    },
    datetimeColor:{
        width: 200,
        backgroundColor:'yellow',
    }
})