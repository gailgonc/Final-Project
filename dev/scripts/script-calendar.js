// Responsive Menu - Dropdown
window.onload=function(){

    const body = document.body;
    const listButton = document.getElementById('listButton');
    const calendarButton = document.getElementById('calendarButton');
    const todayButton = document.getElementById('todayButton');
    const sticker = document.querySelector('.rotating-sticker');
    const hamburger = document.getElementById('hamburger');
    const h3s = document.getElementsByTagName('h3');
    const h4s = document.getElementsByTagName('h4');
    const divs = document.getElementsByTagName('div');
    const flexItems = document.getElementsByClassName('flex-standard');
    const flexItemsLarge = document.getElementsByClassName('flex-large');
    
    
    hamburger.addEventListener('click', openMenu);

    listButton.addEventListener('click', toggleToListView);
    calendarButton.addEventListener('click', toggleToCalendarView);
    todayButton.addEventListener('click', showToday);
    
    var startWidth = document.body.clientWidth;
    adjustDueToSize(startWidth);
    window.addEventListener("resize", function(event) {
        adjustDueToSize(document.body.clientWidth);
        
    })
    function adjustDueToSize(screenWidth)
    {
        var inListView = false;
        for ( let i = 0; i < divs.length; i++)
        {
            if ( divs[i].className == 'row-list' | divs[i].className == 'row-list-small')
            {
                inListView = true;
                i = divs.length;
            }
        }
        if ( inListView)
        {
            if (screenWidth <= 645 )
            {
                console.log('in list small view');
                var inSmallView = false;
                for ( let i = 0; i < h4s.length; i++)
                {
                    if ( h4s[i].className == 'h4-list grey')
                    {
                        inSmallView = true;
                        i = h4s.length;
                    }
                }
                if ( inSmallView == false)
                {
                    console.log('in list and large view');
                    for ( let i = 0; i < h4s.length; i++)
                    {
                        h4s[i].classList.add('grey'); 
                    }
                    for ( let i = 0; i < flexItems.length; i++)
                    {
                        flexItems[i].classList.remove('flex-standard-size');  
                    }
                    for ( let i = 0; i < flexItemsLarge.length; i++)
                    {
                        flexItemsLarge[i].classList.remove('flex-large-size');  
                    }
                    
                }
                else
                {
                    console.log('in list and not in small view ');
                    for ( let i = 0; i < h4s.length; i++)
                    {
                        h4s[i].classList.add('grey'); 
                    }
                    for ( let i = 0; i < flexItems.length; i++)
                    {
                        flexItems[i].classList.remove('flex-standard-size');  
                    }
                    for ( let i = 0; i < flexItemsLarge.length; i++)
                    {
                        flexItemsLarge[i].classList.remove('flex-large-size');  
                    }
                    
                }
            }
            
            else
            {
                console.log("we are in list view and screen > 765");
                for ( let i = 0; i < h4s.length; i++)
                {
                    h4s[i].classList.remove('grey'); 
                }
                //for ( let i = 0; i < flexItems.length; i++)
                //{
                //    flexItems[i].classList.add('flex-standard-size');  
                //}
                //for ( let i = 0; i < flexItemsLarge.length; i++)
                //{
                //    flexItemsLarge[i].classList.add('flex-large-size');  
                //}
                //for ( let i = 0; i < ps.length; i++)
                //{
                //    ps[i].classList.add('p-listview');   
                //    ps[i].classList.remove('bold');  
                //    ps[i].classList.remove('calendar-date'); 
                //}
                //for ( let i = 0; i < flexItems.length; i++)
                //{
                //    flexItems[i].classList.add('flex-standard-size');  
                //}
                //for ( let i = 0; i < flexItemsLarge.length; i++)
                //{
                //    flexItemsLarge[i].classList.add('flex-large-size');  
                //}
                
                //for ( let i = 0; i < h4s.length; i++)
                //{
                //    h4s[i].classList.remove('hide');
                //    h4s[i].classList.remove('grey');
                //    h4s[i].classList.add('h4-list');
                //    h4s[i].classList.remove('h4-calendar');
                //}
                
            }
        
        }
        else
        {
            console.log('we are not in list view');
            if (screenWidth <= 645 )
            {
                for ( let i = 0; i < h3s.length; i++)
                {
                    h3s[i].classList.add('hide');
                }
                for ( let i = 0; i < h4s.length; i++)
                {
                    h4s[i].classList.remove('hide'); 
                }
                for ( let i = 0; i < h4s.length; i++)
                {
                    h4s[i].classList.add('grey'); 
                }
            }
            else
            {
                for ( let i = 0; i < h4s.length; i++)
                {
                    h4s[i].className = 'hide';
                    h4s[i].classList.add('h4-calendar');
            
                }
                for ( let i = 0; i < h3s.length; i++)
                {
                    h3s[i].classList.remove('hide');
                }
            }
        }
        
        
    }
        

    function openMenu(){
        body.classList.toggle('show');
    }
    function getWidth() {
        if (self.innerWidth) {
          return self.innerWidth;
        }
      
        if (document.documentElement && document.documentElement.clientWidth) {
          return document.documentElement.clientWidth;
        }
      
        if (document.body) {
          return document.body.clientWidth;
        }
      }

    function toggleToListView()
    {
        const divs = document.getElementsByTagName('div');
        const h3s = document.getElementsByTagName('h3');
        const h4s = document.getElementsByTagName('h4');
        const ps = document.getElementsByTagName('p');
        const flexItems = document.getElementsByClassName('flex-standard');
        const flexItemsLarge = document.getElementsByClassName('flex-large');

        const tempCalendarButton = document.getElementById('calendarButton');
        const tempListButton = document.getElementById('listButton');
        
        
        tempCalendarButton.className='show';
        tempListButton.className='hide';

        for ( let i = 0; i < divs.length; i++)
        {
            if ( divs[i].className == 'column-calendar')
            {
               
                divs[i].classList.add('column-list');
                divs[i].classList.remove('column-calendar');
                
            }
            else if (divs[i].className == 'row-calendar')
            {
               
                divs[i].classList.add('row-list');
                divs[i].classList.remove('row-calendar');
            }
        }
        for ( let i = 0; i < ps.length; i++)
        {
            ps[i].classList.add('p-listview');   
            ps[i].classList.remove('bold');  
            ps[i].classList.remove('calendar-date'); 

            
            
        }
        for ( let i = 0; i < flexItems.length; i++)
        {
            flexItems[i].classList.add('flex-standard-size');  
        }
        for ( let i = 0; i < flexItemsLarge.length; i++)
        {
            flexItemsLarge[i].classList.add('flex-large-size');  
        }

            
            
       
        for ( let i = 0; i < h3s.length; i++)
        {
            h3s[i].classList.add('hide');
            
        }
        for ( let i = 0; i < h4s.length; i++)
        {
            h4s[i].classList.remove('hide');
            h4s[i].classList.remove('grey');
            h4s[i].classList.add('h4-list');
            h4s[i].classList.remove('h4-calendar');

            
        }
       
    }
    function toggleToCalendarView()
    {
        const divs = document.getElementsByTagName('div');
        const h3s = document.getElementsByTagName('h3');
        const h4s = document.getElementsByTagName('h4');
        const ps = document.getElementsByTagName('p');
        const flexItems = document.getElementsByClassName('flex-standard');
        const flexItemsLarge = document.getElementsByClassName('flex-large');
        
        const tempCalendarButton = document.getElementById('calendarButton');
        const tempListButton = document.getElementById('listButton');
       
        tempCalendarButton.className='hide';
        tempListButton.className='show';
           
        for ( let i = 0; i < divs.length; i++)
        {
            if ( divs[i].className == 'column-list')
            {
                divs[i].className = 'column-calendar';
                
            }
            else if (divs[i].className == 'row-list')
            {
                divs[i].className = 'row-calendar';
              
            }
           
        }
        for ( let i = 0; i < flexItems.length; i++)
        {
            flexItems[i].classList.remove('flex-standard-size');  
        }
        for ( let i = 0; i < flexItemsLarge.length; i++)
        {
            flexItemsLarge[i].classList.remove('flex-large-size');  
        }
        for ( let i = 0; i < h3s.length; i++)
        {
            h3s[i].classList.remove('hide');   
            
        }
        for ( let i = 0; i < ps.length; i++)
        {
            ps[i].classList.remove('p-listview');   
            ps[i].classList.add('bold');  
            ps[i].classList.add('calendar-date'); 
            
        }
        for ( let i = 0; i < h4s.length; i++)
        {
            h4s[i].classList.remove('show');
            
            h4s[i].classList.add('hide');

            h4s[i].classList.add('h4-calendar');
            h4s[i].classList.remove('h4-list');
            

            
        }
    }
    function showToday(){
       
        var dateFound = false;
        var today = new Date();
        var dd = today.getDate();
        var yyyy = today.getFullYear();

        var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
        var mmm = month[today.getMonth()];
        
        var fullDateString = mmm + ' ' + dd + ', ' + yyyy;
        
        
        const allDates = document.getElementsByClassName('calendar-date');
        
        for ( let i = 0; i < allDates.length; i++)
        {
            if ( allDates[i].innerHTML == fullDateString)
            {
                allDates[i].classList.add('calendar-date','highlight', 'bold');
                allDates[i].scrollIntoView();
                i = allDates.length;
                
            }
            
        }


        //document.getElementById("calendar-date").innerHTML = n;
    }

}