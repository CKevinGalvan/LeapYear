function isLeap(year) {
    
/**************Don't change the code above****************/    
    var ver = "";
    //Write your code here.    
    if(year%4===0)
    {
        ver = "Leap year.";
        if(year%100===0)
        {
            ver = "Not leap year.";
            if(year%400===0)
            {
                ver = "Leap year.";
            }
            else
            {
                ver = "Not leap year.";
            }
        }
        else{
            ver = "Leap year.";
        }
    }
    else
    {
        ver = "Not leap year.";
    }
    return ver;
   
/**************Don't change the code below****************/    
}
var ver = isLeap(2000);
console.log(ver);
