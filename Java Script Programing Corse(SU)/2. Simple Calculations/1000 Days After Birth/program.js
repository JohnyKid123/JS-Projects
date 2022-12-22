function thousandDaysOnEarth([dateAsString]) 
{
    var [year,month,day] = dateAsString.split('-');
    month = month.split('').filter(w=> w!= 0).map(Number).join('');
    month = month - 1;
    var myDate = new Date(day,month,year);
    myDate.setDate(myDate.getDate() + 1000);
    var[days,months,years] = [myDate.getDate(),myDate.getMonth()+1,myDate.getFullYear()];
    days < 10 ? days="0"+days : days = days
    months < 10 ? months="0" + months: months = months
    return days+"-"+months+"-"+years;
}
