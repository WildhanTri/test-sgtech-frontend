import axios from "axios";
import React from "react";
import { BACKEND_ENDPOINT } from "../constants/constants";


export default class UserService extends React.Component {

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


    getProfile = () => {

        return new Promise((resolve, reject) => {
            axios.get(BACKEND_ENDPOINT + "/v1/user/profile", { headers: { "Authorization": "Bearer " + localStorage.getItem("token") } })
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

    updateProfile = (user) => {
        var request = {
            user_first_name: user.user_first_name,
            user_last_name: user.user_last_name,
            user_email: user.user_email,
            user_birthday: user.user_birthday,
            user_gender: user.user_gender
        }

        return new Promise((resolve, reject) => {
            axios.patch(BACKEND_ENDPOINT + "/v1/user/profile", request, { headers: { "Authorization": "Bearer " + localStorage.getItem("token") } })
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

    updatePassword = (old_password, new_password) => {
        var request = {
            old_password: old_password,
            new_password: new_password
        }

        return new Promise((resolve, reject) => {
            axios.patch(BACKEND_ENDPOINT + "/v1/user/change-password", request, { headers: { "Authorization": "Bearer " + localStorage.getItem("token") } })
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

    forgotPassword = (user_email, user_password, user_password_confirm) => {
        var request = {
            user_email: user_email,
            user_password: user_password,
            user_password_confirm: user_password_confirm
        }

        return new Promise((resolve, reject) => {
            axios.patch(BACKEND_ENDPOINT + "/v1/user/forgotPassword", request, { headers: { "Authorization": "Bearer " + localStorage.getItem("token") } })
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

    getMyLibrary = () => {
        return new Promise((resolve, reject) => {
            axios.get(BACKEND_ENDPOINT + "/v1/library", { headers: { "Authorization": "Bearer " + localStorage.getItem("token") } })
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

    startMembership = () => {
        return new Promise((resolve, reject) => {
            axios.post(BACKEND_ENDPOINT + "/v1/membership/start", {}, { headers: { "Authorization": "Bearer " + localStorage.getItem("token") } })
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

    cancelMembership = () => {
        return new Promise((resolve, reject) => {
            axios.delete(BACKEND_ENDPOINT + "/v1/membership/cancel", { headers: { "Authorization": "Bearer " + localStorage.getItem("token") } })
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