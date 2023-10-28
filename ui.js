class UI{
    constructor(){
        this.profileContainer = document.getElementById("profileContainer")
        this.alert = document.getElementById("alert")
    }

    showProfile(profile){
        this.profileContainer.innerHTML = `
            <div class="card card-body">
                <div class="row">
                    <div class="col-md-3">
                        <a href="https://placeholder.com">
                            <img src="https://placehold.co/600x400" class="img-thumbnail">
                        </a>
                    </div>
                    <div class="col-md-9">
                        <h4>Contact</h4>
                        <ul class="list-group mb-4">
                            <li class="list-group-item">
                                name: ${profile.name}
                            </li>
                            <li class="list-group-item">
                                username: ${profile.username}
                            </li>
                            <li class="list-group-item">
                                email: ${profile.email}
                            </li>
                            <li class="list-group-item">
                                address: ${profile.address.street}
                                ${profile.address.city}
                                ${profile.address.zipcode}
                                ${profile.address.suite}
                            </li>
                            <li class="list-group-item">
                                phone: ${profile.phone}
                            </li>
                            <li class="list-group-item">
                                website: ${profile.website}
                            </li>
                            <li class="list-group-item">
                                company: ${profile.company.name}
                            </li>
                        </ul>
                        <h4>Todo list</h4>
                        <ul id="todo" class="list-group">

                        </ul>
                    </div>
                </div>
            </div>
        `;
    }

    showTodo(todo){
        let html = "";

        todo.forEach(item => {
            if(item.completed){
                html += `
                    <li class="list-group-item bg-success">
                        ${item.title}
                    </li>
                `
            }else{
                html += `
                    <li class="list-group-item bg-secondary">
                        ${item.title}
                    </li>
                `
            }
        });
        
        this.profileContainer.querySelector("#todo").innerHTML = html
    }

    showAlert(text){
        this.alert.innerHTML = `${text} is not found`
        this.alert.classList.remove("dissplayNone")
    }
    showAlNonePrCont(){
        this.alert.classList.remove("dissplayNone")
        this.profileContainer.classList.add("dissplayNone")
    }
    showPrContNoneAl(){
        this.alert.classList.add("dissplayNone")
        this.profileContainer.classList.remove("dissplayNone")
    }
}
