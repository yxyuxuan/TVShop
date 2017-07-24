//the first item in main menu: when we tab it , go back to the default focus
document.getElementById("firNav").onkeydown = mainMenuEve;
function mainMenuEve(event)
{
    if(event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40){
        event.preventDefault();
        switch(event.keyCode){
            case 37: //left
                document.getElementById('ocnLogo').focus();
                break;
            case 39: //right
            document.getElementById('secNav').focus();
            break;
            case 40: //down
            document.getElementById('activities').focus();
            break;
            default:
            break;
        }
        return false;
    }
}

//brands menu: focus on the first item of it's sub menu
document.getElementById("brands").onkeydown = braMenuEve;
function braMenuEve(event)
{
    if(event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40){
        event.preventDefault();
        switch(event.keyCode){
            case 38: //up
            document.getElementById('activities').focus();
            break;
            case 39: //right
            document.getElementById('bra-item-01').focus();
            break;
            case 40: //down
            document.getElementById('products').focus();
            break;
            default:
            break;
        }
        return false;
    }
}

//products menu: focus on the first item of it's sub menu
document.getElementById("products").onkeydown = proMenuEve;
function proMenuEve(event)
{
    if(event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40){
        event.preventDefault();
        switch(event.keyCode){
            case 38: //up
            document.getElementById('brands').focus();
            break;
            case 39: //right
            document.getElementById('pro-item-01').focus();
            break;
            default:
            break;
        }
        return false;
    }
}