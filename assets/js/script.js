dayjs.extend(window.dayjs_plugin_advancedFormat);

// renderLocalStorage();

const todaysDate = $('#currentDay');
const displayedDate = dayjs().format('Do MMMM YYYY');
const storedDate = dayjs().format('DD-MM-YYYY');
let currentHour = dayjs().format('HH'); //gives the current hour in 2 figure 24hr time i.e. 5pm = 17

todaysDate.text(displayedDate); //renders current date to top of webpage

/**************************** KEEP TIME UPDATING ********************************/


/************************* COLOUR CODING TIME SLOTS *************************/

//colour code the textarea based on current time
        //how to update the currentHour ---> set time interval --> every 20secs...? or do a loop?

function colourSchedule(){
        
        for(let i = 9; i < 18; i++){
                let elementId = $(`#${i}`)
                let plannerTime = elementId.data('hour');

                if(plannerTime == currentHour){
                        elementId.addClass('present');
                }else if(plannerTime < currentHour){
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

