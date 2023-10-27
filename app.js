const profile = new Profile()
const ui = new UI()

const searhProfile = document.getElementById("searhProfile")

searhProfile.addEventListener("keyup", (event) =>{
    const text = event.target.value
    if(event.keyCode >= 65 && event.keyCode <= 222){
        if(text !== ""){
            profile.getProfile(text)
            .then(res =>{
                if(res.profile.length !== 0){
                    ui.showProfile(res.profile[0])
                    ui.showTodo(res.todo)
                    ui.alert.classList.add("dissplayNone")
                    ui.profileContainer.classList.remove("dissplayNone")
                }else{
                    ui.showAlert(text)
                    ui.alert.classList.remove("dissplayNone")
                    ui.profileContainer.classList.add("dissplayNone")
                }
            })
            .catch(err =>{
                ui.showAlert(text)
                ui.profileContainer.classList.add("dissplayNone")
            })
        }
    }else if(event.keyCode === 8){
        if(text !== ""){
            profile.getProfile(text)
            .then(res =>{
                if(res.profile.length !== 0){
                    ui.showProfile(res.profile[0])
                    ui.showTodo(res.todo)
                    ui.alert.classList.add("dissplayNone")
                    ui.profileContainer.classList.remove("dissplayNone")
                }else{
                    ui.showAlert(text)
                    ui.alert.classList.remove("dissplayNone")
                    ui.profileContainer.classList.add("dissplayNone")
                }
            })
            .catch(err =>{
                ui.showAlert(text)
                ui.profileContainer.classList.add("dissplayNone")
            })
        }

        if(text === ""){
            ui.alert.classList.add("dissplayNone")
            ui.profileContainer.classList.add("dissplayNone")
            
        }else{
            ui.alert.classList.remove("dissplayNone")
            ui.profileContainer.classList.add("dissplayNone")
            ui.showAlert(text)
        }
        
    }
})

// profileContainer