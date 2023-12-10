dayjs.extend(window.dayjs_plugin_advancedFormat);

let date ; //used for local storage
let currentHour ;
let allTextareas = $('.textarea');


currentDateAndTime();
colourSchedule();


/************************ CAPTURE THE CURRENT DATE & TIME **********************************/

function currentDateAndTime(){
        
        const displayedDate = $('#currentDay');
        const todaysDate = dayjs().format('Do MMMM YYYY');
        displayedDate.text(todaysDate); //renders current date to top of webpage
        date = dayjs().format('DD-MM-YYYY'); //used for local storage

        currentHour = dayjs().format('HH'); //gives the current hour in 2 figure 24hr time i.e. 5pm = 17
};

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

const refreshSchedule = setInterval(function(){
        currentDateAndTime();
        colourSchedule();

        storedSchedule = (JSON.parse(localStorage.getItem('storedSchedule')) || storedSchedule); // update storedSchedule with local storage info - OR - keep as blank object as initialised above
        if (storedSchedule.date != date){
                renderLocalStorage();
        };
}, 10000); //run functions every 10secs


/************************* COLOUR TIME SLOTS *************************/
//colour the textarea based on the current time 

function colourSchedule(){
        for(let i = 9; i < 18; i++){
                let textareaID = $(`#${i}`)
                let textareaDataAttr = textareaID.data('hour'); //get data attribute of textarea

                if(currentHour < 9){
                        allTextareas.attr('class', 'textarea col-sm-10 future'); 
                }else if(textareaDataAttr == currentHour){
                        textareaID.attr('class', 'textarea col-sm-10 present');
                }else if(textareaDataAttr < currentHour){
                        textareaID.attr('class', 'textarea col-sm-10 past');
                }else{
                        textareaID.attr('class', 'textarea col-sm-10 future');
                };
        };
};

/*************************** LOCAL STORAGE **********************************/

 //retrive any previous textarea input already in local storage

function renderLocalStorage(){
        storedSchedule = (JSON.parse(localStorage.getItem('storedSchedule')) || storedSchedule); // update storedSchedule with local storage info - OR - keep as blank object as initialised above

        if(storedSchedule.date == date){ //if the stored schedule date = today's date - render info from local storage
                for(let i = 9; i < 18; i++){
                        let textareaID = $(`#${i}`);
                        let storedTodo = storedSchedule.schedule[i];
                        textareaID.val(storedTodo);
                };
        }else{ //else if the stored date doesn't equal today, delete local storage as not relevant now and page will be blank/ready for today's schedule to be added
                localStorage.clear();
                allTextareas.val('');
                storedSchedule.date = date;
        };
};

 // add further textarea input to the local storage array
 //add updated local storage array to local storage

function saveToLocalStorage(e){
        let target = $(e.target); // the element the user clicked on
        let parent = $(e.currentTarget); // the parent of the element the user clicked on
        let todo = parent.children('textarea');
        let todoHour = todo.data('hour');
        let saveMsg = $('#saved');

        if(target.is('button') || target.is('i')){
                storedSchedule.schedule[todoHour] = todo.val();
                localStorage.setItem('storedSchedule', JSON.stringify(storedSchedule));
                saveMsg.css('display', 'flex');
        };

        const removeSavedMsg = setTimeout(() => {
                saveMsg.css('display', 'none');
            }, 3000); //hides the saved msg after 3secs
};

$('.row').on('click', saveToLocalStorage);

