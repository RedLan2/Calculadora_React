import { Calculadora, Container, Linha } from "./styles"; 
import Button  from "./components/button";
import Input from './components/input'
import {useState} from 'react';
const App=()=> {
    const [currentNumber, setCurrentNumber]=useState(0);
    const[firstNumber, setFirstNumber]=useState('0');
    const[operation,setOperation]=useState('');

    const handleAddNumber=(number)=>{
        setCurrentNumber(prev =>`${prev === '0'? '': prev}${number}`)
    }

    const limparTela=()=>{
        setCurrentNumber('0')
        setFirstNumber('0')
    }

    const somaNumeros=()=>{
        if(firstNumber==='0'){
            setFirstNumber(currentNumber);
            setCurrentNumber('0')
            setOperation('+')
        }else{
            const sun=Number(firstNumber) + Number(currentNumber);
            setCurrentNumber(String(sun))
        }
    
    }
    const subtrairNumeros=()=>{
        if(firstNumber==='0'){
            setFirstNumber(currentNumber);
            setCurrentNumber('0')
            setOperation('-')
        }else{
            const sun=Number(firstNumber) - Number(currentNumber);
            setCurrentNumber(String(sun))
        }
    }

        const multiplicarNumeros=()=>{
            if(firstNumber==='0'){
                setFirstNumber(currentNumber);
                setCurrentNumber('0')
                setOperation('x')
            }else{
                const sun=Number(firstNumber) * Number(currentNumber);
                setCurrentNumber(String(sun))
            }
        }

        const divisao=()=>{
            if(firstNumber==='0'){
                setFirstNumber(currentNumber);
                setCurrentNumber('0')
                setOperation('/')
            }else{
                const sun=Number(firstNumber) / Number(currentNumber);
                setCurrentNumber(String(sun))
            }
        }
    
    

    const Igual=()=>{
        if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
            switch(operation){
              case '+':
                somaNumeros();
                break;
                case '-':
                subtrairNumeros();
                break;
                case 'x':
                multiplicarNumeros();
                break;
                case '/':
                    divisao();
                    break;
             default: 
               break;

            }
    }
}

  return (
    <Container>
      <Calculadora>
      <Input  value={currentNumber}/>
      <Linha>
              <Button label="0"onClick={()=>handleAddNumber('0')}/>
              <Button label='/'onClick={divisao}/>
              <Button label='C' onClick={limparTela}/>
              <Button label="x" onClick={multiplicarNumeros}/>
          </Linha>
          <Linha>
              <Button label="1"onClick={()=>handleAddNumber('1')}/>
              <Button label='2'onClick={()=>handleAddNumber('2')}/>
              <Button label='3'onClick={()=>handleAddNumber('3')}/>
              <Button label="+"onClick={somaNumeros}/>
          </Linha>
          <Linha>
              <Button label="4"onClick={()=>handleAddNumber('4')}/>
              <Button label='5'onClick={()=>handleAddNumber('5')}/>
              <Button label='6'onClick={()=>handleAddNumber('6')}/>
              <Button label="-"onClick={subtrairNumeros}/>
          </Linha>
          <Linha>
          <Button label="7"onClick={()=>handleAddNumber('7')}/>
              <Button label='8'onClick={()=>handleAddNumber('8')}/>
              <Button label='9' onClick={()=>handleAddNumber('9')}/>
              <Button label="=" onClick={Igual}/>
          </Linha>
      </Calculadora>
      </Container>
  );
}


export default App;
