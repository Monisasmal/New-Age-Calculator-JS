function calculateAge(){
    const DOB = document.getElementById("date-input").value;
    
    // if user not set DOB
    if(!DOB){
        alert("please select a valid Date");
        return;
    }

    let currentDate = new Date();
    let birthDate = new Date(DOB);

    // calculatre the year month and day
    let year = currentDate.getFullYear() - birthDate.getFullYear();
    let month = currentDate.getMonth() - birthDate.getMonth();
    let day = currentDate.getDate() - birthDate.getDate();
    let hour = currentDate.getHours() - birthDate.getHours();
    let minutes = currentDate.getMinutes() - birthDate.getMinutes();

    

    // if day is -ve
    if(day < 0){
        month--;
        day += new Date(currentDate.getFullYear(), currentDate.getMonth(),0). getDate;
    }

    // if month is -ve
    if(month < 0){
        year--;
        month += 12;
    }

    // if hours is -ve
    if(hour < 0){
        day--;
        hour += 24;
    }

    // if minutes is -ve
    if(minutes < 0){
        hour--;
        minutes += 60;
    }


    document.getElementById("year").textContent = year;
    document.getElementById("month").textContent = month;
    document.getElementById("day").textContent = day;
    document.getElementById("hour").textContent = hour;
    document.getElementById("minutes").textContent = minutes;
}