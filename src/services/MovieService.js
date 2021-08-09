import axios from "axios";
import React from "react";
import { BACKEND_ENDPOINT } from "../constants/constants";


export default class MovieService extends React.Component {

    getMovie = () => {
        return new Promise((resolve, reject) => {
            axios.get(BACKEND_ENDPOINT + "/v1/movie", { headers: { "Authorization": "Bearer " + localStorage.getItem("token") } })
                .then(
                    (response) => {
                        resolve(response.data)
                    }
                ).catch(
                    (error) => {
                        const errorMessage = JSON.parse(error.request.response)
                        try {
                            if (errorMessage.message)
                                reject(errorMessage.message)
                        } catch (e) {
                            reject(error)
                        }
                    }
                )
        })
    }
    
    getMovieDetail = (movie_uuid) => {
        return new Promise((resolve, reject) => {
            axios.get(BACKEND_ENDPOINT + "/v1/movie/" + movie_uuid, { headers: { "Authorization": "Bearer " + localStorage.getItem("token") } })
                .then(
                    (response) => {
                        resolve(response.data)
                    }
                ).catch(
                    (error) => {
                        const errorMessage = JSON.parse(error.request.response)
                        try {
                            if (errorMessage.message)
                                reject(errorMessage.message)
                        } catch (e) {
                            reject(error)
                        }
                    }
                )
        })
    }
    
    buyMovie = (movie_uuid) => {
        return new Promise((resolve, reject) => {
            axios.post(BACKEND_ENDPOINT + "/v1/movie/" + movie_uuid + "/buy", { headers: { "Authorization": "Bearer " + localStorage.getItem("token") } })
                .then(
                    (response) => {
                        resolve(response.data)
                    }
                ).catch(
                    (error) => {
                        const errorMessage = JSON.parse(error.request.response)
                        try {
                            if (errorMessage.message)
                                reject(errorMessage.message)
                        } catch (e) {
                            reject(error)
                        }
                    }
                )
        })
    }
    
    getHomeRow = () => {
        return new Promise((resolve, reject) => {
            axios.get(BACKEND_ENDPOINT + "/v1/home", { headers: { "Authorization": "Bearer " + localStorage.getItem("token") } })
                .then(
                    (response) => {
                        resolve(response.data)
                    }
                ).catch(
                    (error) => {
                        console.log(error.request.response)
                        const errorMessage = JSON.parse(error.request.response)
                        try {
                            if (errorMessage.message)
                                reject(errorMessage.message)
                        } catch (e) {
                            reject(error)
                        }
                    }
                )
        })
    }
    
    getHomeRowMovies = async (movie_uuid) => {
        return new Promise((resolve, reject) => {
            axios.get(BACKEND_ENDPOINT + "/v1/home/"+movie_uuid, { headers: { "Authorization": "Bearer " + localStorage.getItem("token") } })
                .then(
                    (response) => {
                        resolve(response.data)
                    }
                ).catch(
                    (error) => {
                        const errorMessage = JSON.parse(error.request.response)
                        try {
                            if (errorMessage.message)
                                reject(errorMessage.message)
                        } catch (e) {
                            reject(error)
                        }
                    }
                )
        })
    }

    register = (user) => {
        var request = {
            user_email: user.user_email,
            user_first_name: user.user_first_name,
            user_last_name: user.user_last_name,
            user_password: user.user_password,
            user_birthday: user.user_birthday,
            user_gender: user.user_gender
        }
        return new Promise((resolve, reject) => {
            axios.post(BACKEND_ENDPOINT + "/v1/user/registration", request)
                .then(
                    (response) => {
                        resolve(response.data)
                    }
                ).catch(
                    (error) => {
                        const errorMessage = JSON.parse(error.request.response)
                        try {
                            if (errorMessage.message)
                                reject(errorMessage.message)
                        } catch (e) {
                            reject(error)
                        }
                    }
                )
        })
    }

    login = (user_email, user_password) => {
        var request = {
            user_email: user_email,
            user_password: user_password
        }
        return new Promise((resolve, reject) => {
            axios.post(BACKEND_ENDPOINT + "/v1/user/login", request)
                .then(
                    (response) => {
                        resolve(response.data)
                    }
                ).catch(
                    (error) => {
                        const errorMessage = JSON.parse(error.request.response)
                        try {
                            if (errorMessage.message)
                                reject(errorMessage.message)
                        } catch (e) {
                            reject(error)
                        }
                    }
                )
        })
    }
}