import axios from "axios";
import React from "react";
import { BACKEND_ENDPOINT } from "../constants/constants";


export default class UserService extends React.Component {

    register = (user_email, user_first_name, user_last_name, user_password) => {
        var request = {
            user_email: user_email,
            user_first_name: user_first_name,
            user_last_name: user_last_name,
            user_password: user_password
        }
        return new Promise((resolve, reject) => {
            axios.post(BACKEND_ENDPOINT + "/api/register", request)
                .then(
                    (response) => {
                        resolve(response.data)
                    }
                ).catch(
                    (error) => {
                        const errorMessage = JSON.parse(error.request.response)
                        try {
                            if (errorMessage.error)
                                reject(errorMessage.error)
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
            axios.post(BACKEND_ENDPOINT + "/api/login", request)
                .then(
                    (response) => {
                        resolve(response.data)
                    }
                ).catch(
                    (error) => {
                        const errorMessage = JSON.parse(error.request.response)
                        try {
                            if (errorMessage.error)
                                reject(errorMessage.error)
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
            axios.patch(BACKEND_ENDPOINT + "/api/user/profile", request, { headers: { "Authorization": "Bearer " + localStorage.getItem("token") } })
                .then(
                    (response) => {
                        resolve(response)
                    }
                ).catch(
                    (error) => {
                        const errorMessage = JSON.parse(error.request.response)
                        try {
                            if (errorMessage.error)
                                reject(errorMessage.error)
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
            axios.patch(BACKEND_ENDPOINT + "/api/change-password", request, { headers: { "Authorization": "Bearer " + localStorage.getItem("token") } })
                .then(
                    (response) => {
                        resolve(response)
                    }
                ).catch(
                    (error) => {
                        const errorMessage = JSON.parse(error.request.response)
                        try {
                            if (errorMessage.error)
                                reject(errorMessage.error)
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
            axios.patch(BACKEND_ENDPOINT + "/api/forgotPassword", request, { headers: { "Authorization": "Bearer " + localStorage.getItem("token") } })
                .then(
                    (response) => {
                        resolve(response)
                    }
                ).catch(
                    (error) => {
                        const errorMessage = JSON.parse(error.request.response)
                        try {
                            if (errorMessage.error)
                                reject(errorMessage.error)
                        } catch (e) {
                            reject(error)
                        }
                    }
                )
        })
    }
}