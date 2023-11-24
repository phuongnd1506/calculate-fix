const { TouchableOpacity, SafeAreaView } = require("react-native")
import { StyleSheet, Text, View } from "react-native"
import { useState } from "react"


const Button = (props) => {


    return (
        <View>


            <TouchableOpacity
                onPress={props.onPress}
                style={{

                    backgroundColor: props.backgroundColorC,
                    width: 80,
                    height: 80,
                    borderRadius: 40,
                    justifyContent: 'center',
                    alignItems: 'center'

                }}
            >
                <Text style={{ fontSize: 30, fontWeight: props.fontweight, color: props.color }}>
                    {props.name}
                </Text>
            </TouchableOpacity>

        </View>

    )



}

const Body = () => {

    const [firstValue, setFirstValue] = useState('');
    const [operator, setOperetor] = useState('');
    const [secondValue, setSecondValue] = useState('');

    const [value, setValue] = useState('0')


    const secondOperatorPressHandle = (newOperator) => {
        switch (operator) {
            case '/':
                var newValue = Number.parseFloat(firstValue) / Number.parseFloat(secondValue);
                setValue(newValue);
                setFirstValue(newValue);
                setSecondValue('');
                setOperetor(newOperator);
                break;
            case 'x':
                var newValue = Number.parseFloat(firstValue) * Number.parseFloat(secondValue);
                setValue(newValue);
                setFirstValue(newValue);
                setSecondValue('');
                setOperetor(newOperator);
                break;
            case '-':
                var newValue = Number.parseFloat(firstValue) - Number.parseFloat(secondValue);
                setValue(newValue);
                setFirstValue(newValue);
                setSecondValue('');
                setOperetor(newOperator);
                break;
            case '+':
                var newValue = Number.parseFloat(firstValue) + Number.parseFloat(secondValue);
                setValue(newValue);
                setFirstValue(newValue);
                setSecondValue('');
                setOperetor(newOperator);
                break;
            default:
                break;
        }
    }

    var handlePress = (val) => {

        console.log('pressed1', val);

        if (val == 'AC') {
            setValue('0')
            setFirstValue('');
            setSecondValue('');
            setOperetor('');
        }
        else if (val == '=') {
            if (!firstValue || !operator || !secondValue) {
                return;
            }

            switch (operator) {
                case '/':
                    setValue(((Number.parseFloat(firstValue) * 1000) / (Number.parseFloat(secondValue)* 1000)));
                    setFirstValue(((Number.parseFloat(firstValue) * 1000) / (Number.parseFloat(secondValue)* 1000)));
                    setSecondValue('');
                    setOperetor('');
                    break;
                case 'x':
                    const nhan = Number.parseFloat(firstValue) * Number.parseFloat(secondValue);
                    const nhann = nhan.toFixed(14).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1')
                    setValue(nhann);
                    setFirstValue(nhann);
                    setSecondValue('');
                    setOperetor('');
                    break;
                case '-':
                    setValue(((Number.parseFloat(firstValue) * 1000) - (Number.parseFloat(secondValue)* 1000)) / 1000);
                    setFirstValue(((Number.parseFloat(firstValue) * 1000) - (Number.parseFloat(secondValue)* 1000)) / 1000);
                    setSecondValue('');
                    setOperetor('');
                    break;
                case '+':
                    setValue(((Number.parseFloat(firstValue) * 1000) + (Number.parseFloat(secondValue) * 1000)) / 1000);
                    setFirstValue(((Number.parseFloat(firstValue) * 1000) + (Number.parseFloat(secondValue) * 1000)) / 1000);
                    setSecondValue('');
                    setOperetor('');
                    break;
                default:
                    break;
            }
        }

        else if (val == '%') {
            if (!value) {
                return;
            }
            if(value && !operator){
            setValue(Number.parseFloat(value) / 100);
            setFirstValue(Number.parseFloat(value) / 100);
            }
            if(secondValue){
                setValue(Number.parseFloat(value) / 100);
                setSecondValue(Number.parseFloat(value) / 100);
            }
             
           }

        else {

            switch (val) {
                case '/':
                    if (!firstValue) {
                        return;
                    }
                     if(firstValue && secondValue && operator){
                         secondOperatorPressHandle(val);
                     }
                    setOperetor(val);
                    break;
                case 'x':
                    if (!firstValue) {
                        return;
                    }
                     if(firstValue && secondValue && operator){
                         secondOperatorPressHandle(val);
                     }
                    setOperetor(val);
                    break;
                case '-':
                    if (!firstValue) {
                        return;
                    }
                     if(firstValue && secondValue && operator){
                         secondOperatorPressHandle(val);
                     }
                    setOperetor(val);
                    break;
                case '+':
                    if (!firstValue) {
                        return;
                    }
                     if(firstValue && secondValue && operator){
                         secondOperatorPressHandle(val);
                     }
                    setOperetor(val);
                    break;
                case '+/-':
                    if (firstValue && !operator && !secondValue) {
                        let newValue = 0 - Number.parseFloat(firstValue);
                        setFirstValue(newValue + '');
                        setValue(newValue + '');
                    }

                    if (firstValue && operator && secondValue) {
                        let newValue = 0 - Number.parseFloat(secondValue);
                        setSecondValue(newValue + '');
                        setValue(newValue + '');
                    }
                    if (!firstValue) {
                        let newValue = 0 - Number.parseFloat(value);
                        setFirstValue(newValue);
                        setValue(newValue);
                    }
                    break;
                case '.':
                    if (!firstValue || firstValue =='0') {
                       
                        setFirstValue(value + '.')
                        setValue(value + '.')
                    } 
                    
                    if(firstValue && !operator)
                    {
                        if(firstValue.includes('.')){
                            return
                        }
                        else{
                            setFirstValue(value + '.')
                            setValue(value + '.')
                        }                  
                    }
                    if(secondValue){
                        if(secondValue.includes('.')){
                            return
                        }
                        else{
                            setSecondValue(value + '.')
                            setValue(value + '.')
                        }
                    }
                
                    break;
                default:
                    console.log(firstValue, ' ;;', secondValue, ' ;;', operator);

                    if (!firstValue) {
                        setValue(val)
                        setFirstValue(val)
                    } else if (firstValue && !operator) {
                        setValue(value + val);
                        setFirstValue(value + val);
                    }

                    if (firstValue && operator) {
                        if (!secondValue) {
                            setValue(val);
                            setSecondValue(val);
                        } else {
                            setValue(value + val);
                            setSecondValue(value + val);
                        }
                    }

                    break;
            }
        }

    }
    console.log("first: " + firstValue, ";\t operator: " + operator, "\t;second: " + secondValue,  "\t value: "+value );

    return (
        <View >
            <View style={styles.viewText}>
                <Text style={styles.textResult} adjustsFontSizeToFit={true}>{value}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-evenly", marginBottom: 10 }}>
                <Button name='AC' color='#000' fontweight='400' backgroundColorC='#BBBBBB' onPress={() => handlePress('AC')}></Button>
                <Button name='+/-' color='#000' fontweight='400' backgroundColorC='#BBBBBB' onPress={() => handlePress('+/-')} ></Button>
                <Button name='%' color='#000' fontweight='400' backgroundColorC='#BBBBBB' onPress={() => handlePress('%')} ></Button>
                <Button name='/' color='#fff' fontweight='700' backgroundColorC='#FF9900' onPress={() => handlePress('/')}></Button>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: "space-evenly", marginBottom: 10 }}>
                <Button name='7' color='#fff' fontweight='400'  backgroundColorC='#555' onPress={() => handlePress('7')}></Button>
                <Button name='8' color='#fff' fontweight='400'  backgroundColorC='#555' onPress={() => handlePress('8')}></Button>
                <Button name='9' color='#fff' fontweight='400'  backgroundColorC='#555' onPress={() => handlePress('9')}></Button>
                <Button name='x' color='#fff' fontweight='700'  backgroundColorC='#FF9900' onPress={() => handlePress('x')}></Button>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: "space-evenly", marginBottom: 10 }}>
                <Button name='4' color='#fff' fontweight='400'  backgroundColorC='#555' onPress={() => handlePress('4')}></Button>
                <Button name='5' color='#fff' fontweight='400'  backgroundColorC='#555' onPress={() => handlePress('5')} ></Button>
                <Button name='6' color='#fff' fontweight='400'  backgroundColorC='#555' onPress={() => handlePress('6')}></Button>
                <Button name='-' color='#fff' fontweight='700'  backgroundColorC='#FF9900' onPress={() => handlePress('-')}></Button>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: "space-evenly", marginBottom: 10 }}>
                <Button name='1' color='#fff' fontweight='400'  backgroundColorC='#555' onPress={() => handlePress('1')}></Button>
                <Button name='2' color='#fff' fontweight='400'  backgroundColorC='#555' onPress={() => handlePress('2')}></Button>
                <Button name='3' color='#fff' fontweight='400'  backgroundColorC='#555' onPress={() => handlePress('3')}></Button>
                <Button name='+' color='#fff' fontweight='700'  backgroundColorC='#FF9900' onPress={() => handlePress('+')} ></Button>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: "space-evenly" }}>
                <TouchableOpacity onPress={() => handlePress('0')}>
                    <View style={{ height: 80, width: 174, backgroundColor: '#555', borderRadius: 58, color: '#fff', justifyContent: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 28, fontweight: 'bold', marginLeft: 32, }}>0</Text>
                    </View>
                </TouchableOpacity>
                <Button name=',' color='#fff' fontweight='400'  backgroundColorC='#555' onPress={() => handlePress('.')}></Button>
                <Button name='=' color='#fff' fontweight='700'  backgroundColorC='#FF9900' onPress={() => handlePress('=')}></Button>
            </View> 


        </View>



    )


}





const Appp = () => {
    return (
        <SafeAreaView style={styles.container}>

            <Body>

            </Body>

        </SafeAreaView>
    )


}


const styles = StyleSheet.create({
    viewText: {
        height: 300
    },
    textResult: {
        fontSize: 86,
        
        fontWeight: '200',
        color: '#fff',
        textAlign: 'right',
        marginTop: 182,
        marginRight: 12,
      
    },
    container: {
        flex: 1,
        backgroundColor: '#000'
    }
})


export default Appp