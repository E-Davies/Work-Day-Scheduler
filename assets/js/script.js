dayjs.extend(window.dayjs_plugin_advancedFormat);


/************************ CAPTURE THE CURRENT DATE & TIME **********************************/
const todaysDate = $('#currentDay');
const displayedDate = dayjs().format('Do MMMM YYYY');
todaysDate.text(displayedDate); //renders current date to top of webpage
const date = dayjs().format('DD-MM-YYYY'); //used for local storage
let currentHour ;

function currentTime(){
        currentHour = dayjs().format('HH'); //gives the current hour in 2 figure 24hr time i.e. 5pm = 17
        return currentHour;
};

const refreshTime = setInterval(currentTime, 10000); //refresh time every 10secs

/*****************************************************************************************/

let storedSchedule = {
        date: date,
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

renderLocalStorage();

/************************* COLOUR TIME SLOTS *************************/
//colour the textarea based on the current time 

function colourSchedule(){
        for(let i = 9; i < 18; i++){
                let textareaID = $(`#${i}`)
                let textareaDataAttr = textareaID.data('hour'); //get data attribute of textarea
                let allTextareas = $('.textarea');

                if(currentTime() < 9){
                        allTextareas.addClass('future');
                }else if(textareaDataAttr == currentTime()){
                        textareaID.addClass('present');
                }else if(textareaDataAttr < currentTime()){
                        textareaID.addClass('past');
                }else{
                        textareaID.addClass('future');
                };
        };
};
colourSchedule();


/*************************** LOCAL STORAGE **********************************/

 //retrive any previous textarea input already in local storage

function renderLocalStorage(){
        storedSchedule = (JSON.parse(localStorage.getItem('storedSchedule')) || storedSchedule); // update storedSchedule with local storage info - OR - keep as blank object as initialised above

        if(!storedSchedule){ // if there is no stored schedule - return
                return;
        }else if(storedSchedule.date == date){ //if the stored schedule = today's date - render info in local storage
                for(let i = 9; i < 18; i++){
                        let textareaID = $(`#${i}`);
                        let storedTodo = storedSchedule.schedule[i];
                        textareaID.val(storedTodo);
                };
        }else{ //else if the stored date doesn't equal today (is a previous day), delete local storage as not relevant now and page will be blank/ready for today's schedule to be added
                localStorage.clear();
        };
};

 // add further textarea input to the local storage array
 //add updated local storage array to local storage

function saveToLocalStorage(e){
        let target = $(e.target); // the element the user clicked on
        let parent = $(e.currentTarget); // the parent of the element the user clicked on
        let todo = parent.children('textarea');
        let todoHour = todo.data('hour');

        if(target.is('button') || target.is('i')){
                storedSchedule.schedule[todoHour] = todo.val();
                localStorage.setItem('storedSchedule', JSON.stringify(storedSchedule));
        };
};

$('.row').on('click', saveToLocalStorage);

