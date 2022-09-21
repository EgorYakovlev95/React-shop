import axios from 'axios';
import {AuthSlice} from '../slices/AuthSlice';
import { AppDispatch } from './../index';

interface AuthResponse {
    access: string
    refresh: string
}

interface AuthData {
    username: string
    password: string
}

export const register = (data: AuthData) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.post<AuthResponse>(`http://docker.digital-spectr.ru:8888/api/auth/register`, data)
            dispatch(AuthSlice.actions.login({
                username: data.username, // из локальных данных
                access: response.data.access
            }))
        } catch (error) {
            throw error as Error
        }
    }
}

export const login = (data: AuthData) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.post<AuthResponse>(`http://docker.digital-spectr.ru:8888/api/auth/login`, data)
            dispatch(AuthSlice.actions.login({
                username: data.username, // из локальных данных
                access: response.data.access
            }))
        } catch (error) {
            throw error as Error
        }
    }
}