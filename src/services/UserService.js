import axios from "axios";
import React from "react";


export default class UserService extends React.Component {

    register = (name, email, password) => {
        var request = {
            name: name,
            email: email,
            password: password
        }
        return new Promise((resolve, reject) => {
            axios.post("https://backendexample.sanbersy.com/api/register", request)
                .then(
                    (response) => {
                        resolve(response.data)
                    }
                ).catch(
                    (error) => {
                        const errorMessage = JSON.parse(error.request.response)
                        try {
                            var errorMessageObj = JSON.parse(errorMessage)
                            if (errorMessageObj.email)
                                reject(errorMessageObj.email[0])
                            if (errorMessageObj.password)
                                reject(errorMessageObj.password[0])
                        } catch (e) {
                            reject(error)
                        }
                    }
                )
        })
    }

    login = (email, password) => {
        var request = {
            email: email,
            password: password
        }
        return new Promise((resolve, reject) => {
            axios.post("https://backendexample.sanbersy.com/api/user-login", request)
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

    changePassword = (password, new_password, new_confirm_password) => {
        var request = {
            current_password: password,
            new_password: new_password,
            new_confirm_password: new_confirm_password
        }

        return new Promise((resolve, reject) => {
            axios.post("https://backendexample.sanbersy.com/api/change-password", request, { headers: { "Authorization": "Bearer " + localStorage.getItem("token") } })
                .then(
                    (response) => {
                        resolve(response)
                    }
                ).catch(
                    (error) => {
                        const errorMessage = JSON.parse(error.request.response)
                        try {
                            var errorMessageObj = JSON.parse(errorMessage)
                            if (errorMessageObj.current_password)
                                reject(errorMessageObj.current_password[0])
                            if (errorMessageObj.new_password)
                                reject(errorMessageObj.new_password[0])
                            if (errorMessageObj.new_confirm_password)
                                reject(errorMessageObj.new_confirm_password[0])
                        } catch (e) {
                            reject(error)
                        }
                    }
                )
        })

    }
}