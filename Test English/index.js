const wordsTrns = document.querySelectorAll('.wordsTranslation');

const objWords = {
    
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

wordsTrns[1].addEventListener('click', () => {
    editWords(wordsTrns, objWords[2]);
});

addHidd(...wordsTrns);

const a = newNumber(objWords[2].length);

function editWords(where, what) {

    console.log('a', a);

    const i = a.next();

    console.log('a', a);

    console.log('i', i);

    console.log(where, what[i], i);

    if (i.done === false) {   
        where[0].innerText = what[i.value][1];
        where[1].innerText = what[i.value][0];
    }else {
        console.log(i);
    }
    
}

function addHidd(ClassAdd, ClassRem) {
    wordsTrns.forEach(elem => {
        elem.addEventListener('click', () => {
            ClassAdd.classList.toggle('hidd');
            ClassRem.classList.toggle('hidd');
        });
    });
}


function newNumber(count) {
    let randomArray = [];
    
    for (;;) {
        
        if (randomArray.length < count) {
            
            let random = Math.floor(Math.random() * count);
            
            if(randomArray.indexOf(random) === -1) {
                
                randomArray.push(random);
                
            } else {
                continue;
            }
        }
        else {
            break;
        }
    }
    console.log('randomArray', randomArray);
    return generator(randomArray);
}


function* generator(array) {
    for (const key in array) {
        yield array[key];
    }
}