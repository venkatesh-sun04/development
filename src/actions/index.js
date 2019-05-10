import axios from 'axios';
const host = "http://private-639950-devops8.apiary-mock.com";
export function getLabels(dispatch){
    var config = {headers:{oath_token:"kdsjfa8735kjfha86er345njf8a"}};
    var url = host+"/api/e/v1/restaurant/settings/meta";
    return function(dispatch){
        axios.get(url,config).then((response) =>{
            dispatch({type:"GET_LABELS",payload:response.data});
        })
        .catch((err) =>{
            console.log(err);
        })
    }
}
export function addLabel(data){
    var config = {headers:{oath_token:"kdsjfa8735kjfha86er345njf8a"}};
    var url = host+"/api/e/v1/restaurant/settings/meta";
    return function(dispatch){
        axios.put(url,data,config).then((response)=>{
            dispatch(getLabels());
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}

export function updateLabel(data){
    var config = {headers:{oath_token:"kdsjfa8735kjfha86er345njf8a"}};
    var url = host+"/api/e/v1/restaurant/settings/meta";
    return function(dispatch){
        axios.post(url,data,config).then((response)=>{
            dispatch(getLabels());
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}

export function deleteLabel(data){
    var config = {headers:{oath_token:"kdsjfa8735kjfha86er345njf8a"}};
    var url = host+"/api/e/v1/restaurant/settings/meta";
    return function(dispatch){
        axios.delete(url,data,config).then((response)=>{
            dispatch(getLabels());
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}

export function fgetLabels(){
    var url = host+"/api/e/v1/restaurant/settings/meta";
    return function(dispatch){
        fetch(url,{
            method:"GET",
            headers:{oath_token:"dklfj984534kngf843945"}
        }).then(function(response){
            console.log(response)
        },function(err){
            console.log(err);
        });
    }
}
export function faddLabel(data){
    var url = host+"/api/e/v1/restaurant/settings/meta";
    return function(dispatch){
        fetch(url,{
            method:"PUT",
            headers:{oath_token:"dklfj984534kngf843945"},
            body:JSON.stringify(data)
        }).then(function(response){
            dispatch(fgetLabels());
        },function(err){
            console.log(err);
        })
    }
}
export function fupdateLabel(data){
    var url = host+"/api/e/v1/restaurant/settings/meta";
    return function(dispatch){
        fetch(url,{
            method:"POST",
            headers:{oath_token:"dklfj984534kngf843945"},
            body:JSON.stringify(data)
        }).then(function(response){
            dispatch(fgetLabels());
        },function(err){
            console.log(err);
        })
    }
}
export function fdeleteLabel(data){
    var url = host+"/api/e/v1/restaurant/settings/meta";
    return function(dispatch){
        fetch(url,{
            method:"DELETE",
            headers:{oath_token:"jifu9845i3498fj"},
            body:JSON.stringify(data)
        }).then(function(response){
            dispatch(fgetLabels());
        },function(err){
            console.log(err);
        })
    }
}