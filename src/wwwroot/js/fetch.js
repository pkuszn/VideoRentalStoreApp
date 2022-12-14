import { api } from './constants.js'

async function fetchVideos() {
    return await fetch(api.getVideos, {
        method: 'GET',
        dataType: 'JSON',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then((result => { return result.json(); }))
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => console.error('Unable to get videos', error));
}

async function fetchVideoRentals() {
    return await fetch(api.getVideoRentals, {
        method: 'GET',
        dataType: 'JSON',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then((result => { return result.json(); }))
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => console.error('Unable to get video rentals', error));
}

async function fetchListOfAllRentals() {
    return await fetch(api.getListOfRents, {
        method: 'GET',
        dataType: 'JSON',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then((result => { return result.json(); }))
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => console.error('Unable to get list of all rents', error));
}

async function fetchLoginUsers() {
    return await fetch(api.getLoginUsers, {
        method: 'GET',
        dataType: 'JSON',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then((result => { return result.json(); }))
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => console.error('Unable to get login users', error));
}

async function fetchUsers() {
    return await fetch(api.getUsers, {
        method: 'GET',
        dataType: 'JSON',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then((result => { return result.json(); }))
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => console.error('Unable to get login users', error));
}

async function fetchAvailableVideos() {
    return await fetch(api.getAvailableVideos, {
        method: 'GET',
        dataType: 'JSON',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then((result => { return result.json(); }))
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => console.error('Unable to get login users', error));
}

async function fetchMyVideos(id) {
    return await fetch(api.getMyVideos + id, {
        method: 'GET',
        dataType: 'JSON',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then((result => { return result.json(); }))
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => console.error('Unable to get login users', error));
}

async function fetchUserWhoHaveRentedVideos() {
    return await fetch(api.getUsersWhoHaveRentedVideos, {
        method: 'GET',
        dataType: 'JSON',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then((result => { return result.json(); }))
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => console.error('Unable to get login users', error));
}

async function fetchVideosShort(){
    return await fetch(api.getAvailableVideosShort, {
        method: 'GET',
        dataType: 'JSON',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then((result => { return result.json(); }))
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => console.error('Unable to get login users', error));
}



export {
    fetchVideos,
    fetchVideoRentals,
    fetchListOfAllRentals,
    fetchLoginUsers,
    fetchUsers,
    fetchAvailableVideos,
    fetchMyVideos,
    fetchUserWhoHaveRentedVideos,
    fetchVideosShort
}