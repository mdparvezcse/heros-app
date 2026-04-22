const getStoredAppsData = () =>{
 const storedStringData = localStorage.getItem('apps');
 if(storedStringData){
    const storedApps = JSON.parse(storedStringData);
    return storedApps;
 }  
 return []; 
}

const saveAppsDataLocalStore = data => {
    const appStringify = JSON.stringify(data)
    localStorage.setItem('apps',appStringify)
}

const addAppFromLocalStore = id =>{
    const appsData = getStoredAppsData();
    if(appsData.includes(id)){
        alert('already exist')
    }
    else{
        const newAppData = [...appsData, id]
        saveAppsDataLocalStore(newAppData)
    }
}

export {
    addAppFromLocalStore as addAppsData, 
    getStoredAppsData
}