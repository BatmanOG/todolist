//creating new list item 
function newItem(){
    
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
    
    
    // crossing an item out
    function crossOut(){
        li.toggleClass("strike");
    }
    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });
    
    // delete button
    
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);
    
    // adding delete function
    
    crossOutButton.on("click", deleteListItem);
       function deleteListItem(){
             li.addClass("delete")
         }
    
    
    $('#list').sortable();
    };