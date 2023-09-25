// error handling using try and catch block
function freezeObj()
{
    "use strict";
    const value=
    {
        pi:3.14,
    };
    try//handles the error part
    {
        value=77;
    }
    catch(ex)//catch the error which is thrown by try
    {
        console.log(ex);
    }
    return value;
}
console.log(freezeObj());