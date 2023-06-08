//creating new list item 
let li = $('<li></li>');
let imputValue = $('#imput').val();
li.append(inputValue);

//checking for imput from user

if (imputValue === '' ){
    alert("Not a valid item, please write something to continue.");
}
    else{
        $('#list').append(li);
    }



