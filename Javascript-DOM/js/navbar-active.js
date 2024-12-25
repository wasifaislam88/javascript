
const ulTag = document.getElementById("nav-container")


const listItems  = ulTag.getElementsByTagName("li")

for (let singleListItem of listItems){

    singleListItem.addEventListener("click",function(){
        console.log(lastClicked)

        if(lastClicked == null){

            //style purpose
            //red hoyte nibo
        

        singleListItem.style.backgroundColor = "red"
        singleListItem.style.color = "white"
        lastClicked = singleListItem
        
    } else{
        lastClicked.style.backgroundColor = "transparent"
        singleListItem.style.color = "#eee"
        lastClicked = singleListItem

    }
})

}