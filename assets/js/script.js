dayjs.extend(window.dayjs_plugin_advancedFormat);

// renderLocalStorage();

/************************ CAPTURE THE CURRENT DATE & TIME **********************************/
const todaysDate = $('#currentDay');
const displayedDate = dayjs().format('Do MMMM YYYY');
todaysDate.text(displayedDate); //renders current date to top of webpage
const storedDate = dayjs().format('DD-MM-YYYY'); //used for local storage
let currentHour ;

function updateTime(){
        currentHour = dayjs().format('HH'); //gives the current hour in 2 figure 24hr time i.e. 5pm = 17
        return currentHour;
};

const refreshTime = setInterval(updateTime, 10000); //refresh time every 10secs


/************************* COLOUR CODING TIME SLOTS *************************/

//colour code the textarea based on current time
        //how to update the currentHour ---> set time interval --> every 20secs...? or do a loop?

function colourSchedule(){
        
        for(let i = 9; i < 18; i++){
                let elementId = $(`#${i}`)
                let plannerTime = elementId.data('hour');

                if(plannerTime == updateTime()){
                        elementId.addClass('present');
                }else if(plannerTime < updateTime()){
                        elementId.addClass('past');
                }else{
                        elementId.addClass('future');
                };
        };
};
colourSchedule();


/*************************** LOCAL STORAGE**********************************/

 //retrive any previous textarea input already in local storage
 // add further textarea input to the local storage array
 //add updated local storage array to local storage

                                                        //***OLD***
                                                        //capture textarea input and save it to local storage
                                                        //pull info from local storage
                                                        //when date changes - wipe localstorage

let storedSchedule = {
        date: storedDate,
        schedule: {
                9: '',
                10: '',
                11: '',
                12: '',
                13: '',
                14: '',
                15: '',
                16: '',
                17: '',
        }
};

function saveToLocalStorage(e){
        let target = $(e.target);
        let parent = $(e.currentTarget);
        let todo = parent.children('textarea');
        let todoHour = todo.data('hour');
        // let todoItem = storedSchedule.schedule[todoHour];

        if(target.is('button') || target.is('i')){
                console.log('I Clicked on the saveBtn');
                console.log(todo.val());
                console.log(todoHour);
                // console.log(`first value = ${todoItem}`);
                
                storedSchedule.schedule[todoHour] = todo.val();
                
                localStorage.setItem('storedSchedule', JSON.stringify(storedSchedule));
                renderLocalStorage();
        };
};

$('.row').on('click', saveToLocalStorage);


function renderLocalStorage(){
        let localStoredSchedule = JSON.parse(localStorage.getItem('storedSchedule'));
        console.log(localStoredSchedule.today);

        if(localStoredSchedule.today === storedDate){ //if the date stored in local storage is the same as today's date then render saved schedule
                return
                //render each time periods todo that has been stored
        }else{ //otherwise clear local storage
                localStorage.clear();
        }
};