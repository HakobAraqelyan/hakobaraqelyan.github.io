import React from 'react';
import './App.css';
import { useState } from 'react';
console.log('aaa');
const objWords = {
  lang: ['English', 'Հայերեն'],
  1: [
      ['big', 'Մեծ'],
      ['small', 'Փոքքր'],
      ['old', 'Հին, Ծեր'],
      ['new', 'Նոր'],
      ['fast', 'Արագ'],
      ['slow', 'Դանդաղ'],
      ['beautiful', 'Գեղեցիկ'],
      ['ugly', 'Տգեղ'],
      ['cheap', 'Էժան'],
      ['expensive', 'Թանկ'],
      ['long', 'Եկար'],
      ['short', 'Կարճ'],
      ['tall', 'Բաձրահաակ'],
      ['easy', 'Հեշտ'],
      ['difficult', 'Դժվար'],
  ],
  2: [
      ['who', 'Ով, Ովքեր'],
      ['what', 'Ինչ'],
      ['where', 'Որտեղ'],
      ['when', 'Երբ'],
      ['why', 'Ինչու'],
      ['which', 'Որը'],
      ['what kind of', 'Ինչպիսի, Ինչ տեսակի'],
      ['how', 'Ինչպես'],
  ],
}


// function stateFunc(stateVal, funcState) {
//   const arry = useState('en');
//   arry[0] = stateVal;
//   arry[1] = funcState;

// }


function WordList(params) {
  const [worldEn, setWorldEn] = useState(objWords['lang'][0]);
  
  return (
    <div>
      <div className='world_list' onClick={elem => {
        document.querySelectorAll('.world').forEach(elem => elem.classList.toggle('hidden'))

      }
      }>
    <span className='world hidden' >{worldEn}</span>
    <span className='world' onClick={() => {
      // setWorldEn(objWords['1'][0][0])
    }

    }>{objWords['lang'][1]}</span>
    </div>
      <div>
        <form onChange={elem => {
          console.log(elem );
        }}>
          <input id="en_am" name="translate" type="radio" value='1' defaultChecked />
          <label for="en_am">English - Հայսերեն</label><br/>
          <input id="am_en" name="translate" type="radio" value='2' />
          <label for="am_en">Հայսերեն - English</label>
        </form>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <WordList/> 
    </div>
  );
}




export default App;
