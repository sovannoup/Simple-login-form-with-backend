import { call, put, takeLatest } from "redux-saga/effects";
import { error, success } from "redux-saga-requests";
import { axios } from "../app";
import {
    GET_MENU_ADMIN,
    ADD_MENU_ADMIN,
    UPDATE_MENU_ADMIN,
    DELETE_MENU_ADMIN,
    GET_MENU_ADMIN_PAGE,

    GET_USER,
    ADD_USER,
    UPDATE_USER,
    DELETE_USER,

    GET_USER_PERMISSION,
    UPDATE_USER_PERMISSION,

    GET_SITE_DESCRIPTION,
    ADD_SITE_DESCRIPTION,
    UPDATE_SITE_DESCRIPTION

} from "./reducer";
import { normalize, normalizeData } from './../../utils/normalize'


export function* getMenuAdminWorker() {
    console.log('admin')
    try {
        const menu_admin = yield call(axios.get, "/drawer");
        console.log('menu_admin', menu_admin);

        yield put({
            type: success(GET_MENU_ADMIN),
            payload: {
                menu_admin: normalizeData(menu_admin)
            }
        });
    } catch (e) {
        const parseError = yield JSON.parse(JSON.stringify(e));
        const message = parseError;
        console.log('message ad', message);

        yield put({
            type: error(GET_MENU_ADMIN),
            payload: message.data ? message.data : message
        });
    }
}

export function* getMenuAdminPageWorker() {
    console.log('get admin menu')
    try {
        const menu_admin_page = yield call(axios.get, "/menu-admin/view");
        console.log('menu_admin_page', menu_admin_page);

        yield put({
            type: success(GET_MENU_ADMIN_PAGE),
            payload: {
                menu_admin_page: normalizeData(menu_admin_page)
            }
        });
    } catch (e) {
        const parseError = yield JSON.parse(JSON.stringify(e));
        const message = parseError;
        console.log('message', message);

        yield put({
            type: error(GET_MENU_ADMIN_PAGE),
            payload: {
                menu_admin: []
            }
        });
    }
}

export function* AddMenuAdminWorker({ payload }) {
    try {
        const add_menu_admin = yield call(axios.post, "/menu-admin/insert", payload);
        console.log('add_menu_admin', add_menu_admin);

        yield put({
            type: success(ADD_MENU_ADMIN),
            payload: {
                add_menu_admin: true
            }
        });
    } catch (e) {
        const parseError = yield JSON.parse(JSON.stringify(e));
        const message = parseError;
        console.log('message', message);

        yield put({
            type: error(ADD_MENU_ADMIN),
            payload: message.data ? message.data : message
        });
    }
}

export function* updateMenuAdminWorker({ payload }) {
    try {
        const update_menu_admin = yield call(axios.post, "/menu-admin/update", payload);
        console.log('update_menu_admin', update_menu_admin);

        yield put({
            type: success(UPDATE_MENU_ADMIN),
            payload: {
                update_menu_admin: true
            }
        });
    } catch (e) {
        const parseError = yield JSON.parse(JSON.stringify(e));
        const message = parseError;
        console.log('message', message);

        yield put({
            type: error(UPDATE_MENU_ADMIN),
            payload: message.data ? message.data : message
        });
    }
}

export function* deleteMenuAdminWorker({ payload }) {
    try {
        const delete_menu_admin = yield call(axios.post, "/menu-admin/delete", payload);
        console.log('delete_menu_admin', delete_menu_admin);

        yield put({
            type: success(DELETE_MENU_ADMIN),
            payload: {
                delete_menu_admin: true
            }
        });
    } catch (e) {
        const parseError = yield JSON.parse(JSON.stringify(e));
        const message = parseError;
        console.log('message', message);

        yield put({
            type: error(DELETE_MENU_ADMIN),
            payload: message.data ? message.data : message
        });
    }
}

export function* getUserWorker() {
    try {
        const user_list = yield call(axios.get, "/user-admin/view");
        console.log('user_list', user_list);

        yield put({
            type: success(GET_USER),
            payload: {
                user_list: normalizeData(user_list)
            }
        });
    } catch (e) {
        const parseError = yield JSON.parse(JSON.stringify(e));
        const message = parseError;
        console.log('message', message);

        yield put({
            type: error(GET_USER),
            payload: {
                user_list: []
            }
        });
    }
}

export function* addUserWorker({ payload }) {
    try {
        const add_user = yield call(axios.post, "/user-admin/insert", payload);
        console.log('add_user', add_user);

        yield put({
            type: success(ADD_USER),
            payload: {
                add_user: true
            }
        });
    } catch (e) {
        const parseError = yield JSON.parse(JSON.stringify(e));
        const message = parseError;
        console.log('message', message);

        yield put({
            type: error(ADD_USER),
            payload: message.data ? message.data : message
        });
    }
}

export function* updateUserWorker({ payload }) {
    try {
        const update_user = yield call(axios.post, "/user-admin/update", payload);
        console.log('update_user', update_user);

        yield put({
            type: success(UPDATE_USER),
            payload: {
                update_user: true
            }
        });
    } catch (e) {
        const parseError = yield JSON.parse(JSON.stringify(e));
        const message = parseError;
        console.log('message', message);

        yield put({
            type: error(UPDATE_USER),
            payload: message.data ? message.data : message
        });
    }
}

export function* deleteUserWorker({ payload }) {
    console.log('payload', payload);

    try {
        const delete_user = yield call(axios.post, "/user-admin/delete", payload);
        console.log('delete_user', delete_user);

        yield put({
            type: success(DELETE_USER),
            payload: {
                delete_user: true
            }
        });
    } catch (e) {
        const parseError = yield JSON.parse(JSON.stringify(e));
        const message = parseError;
        console.log('message', message);

        yield put({
            type: error(DELETE_USER),
            payload: message.data ? message.data : message
        });
    }
}

export function* getUserPermissionWorker({ payload }) {
    console.log('payload', payload);

    try {
        const user_permission = yield call(axios.get, "/user-permission/view/" + payload);
        console.log('user_permission', user_permission);

        yield put({
            type: success(GET_USER_PERMISSION),
            payload: {
                user_permission: normalizeData(user_permission)
            }
        });
    } catch (e) {
        const parseError = yield JSON.parse(JSON.stringify(e));
        const message = parseError;
        console.log('message', parseError);

        yield put({
            type: error(GET_USER_PERMISSION),
            payload: {
                user_permission: []
            }
        });
    }
}

export function* updatePermissionWorker({ payload }) {
    try {
        const update_permission = yield call(axios.post, "/user-permission/update/", payload);
        console.log('update_permission', update_permission);

        yield put({
            type: success(UPDATE_USER_PERMISSION),
            payload: {
                update_permission: true
            }
        });
    } catch (e) {
        const parseError = yield JSON.parse(JSON.stringify(e));
        const message = parseError;
        console.log('message', message);

        yield put({
            type: error(UPDATE_USER_PERMISSION),
            payload: message.data ? message.data : message
        });
    }
}

export function* getSiteDescriptionWorker() {
    try {
        const dataGetSiteDescription = yield call(axios.get, "/site-description/view");
        console.log('dataGetSiteDescription', dataGetSiteDescription);

        yield put({
            type: success(GET_SITE_DESCRIPTION),
            payload: {
                dataGetSiteDescription: normalizeData(dataGetSiteDescription)
            }
        });
    } catch (e) {
        const parseError = yield JSON.parse(JSON.stringify(e));
        const message = parseError;
        console.log('message', message);

        yield put({
            type: error(GET_SITE_DESCRIPTION),
            payload: {
                errorGetSiteDescription: message.data ? message.data : message
            }
        });
    }
}

export function* updateSiteDescriptionWorker({ payload }) {
    try {
        var data = new FormData
        for (var key in payload) {
            data.append(key, payload[key])
        }
        const dataUpdateSiteDescription = yield call(axios.post, "/site-description/update", data,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            }
        );
        console.log('dataUpdateSiteDescription', dataUpdateSiteDescription);

        yield put({
            type: success(UPDATE_SITE_DESCRIPTION),
            payload: {
                dataUpdateSiteDescription: true
            }
        });
    } catch (e) {
        const parseError = yield JSON.parse(JSON.stringify(e));
        const message = parseError;
        console.log('message', message);

        yield put({
            type: error(UPDATE_SITE_DESCRIPTION),
            payload: {
                errorUpdateSiteDescription: message.data ? message.data : message
            }
        });
    }
}

export function* addSiteDescriptionWorker({ payload }) {
    try {
        const dataAddSiteDescription = yield call(axios.post, "/site-description/insert", payload);
        console.log('dataAddSiteDescription', dataAddSiteDescription);

        yield put({
            type: success(ADD_SITE_DESCRIPTION),
            payload: {
                dataAddSiteDescription: true
            }
        });
    } catch (e) {
        const parseError = yield JSON.parse(JSON.stringify(e));
        const message = parseError;
        console.log('message', message);

        yield put({
            type: error(ADD_SITE_DESCRIPTION),
            payload: {
                errorAddSiteDescription: message.data ? message.data : message
            }
        });
    }
}



export function* dashboardSaga() {
    yield takeLatest(GET_MENU_ADMIN, getMenuAdminWorker);
    yield takeLatest(ADD_MENU_ADMIN, AddMenuAdminWorker);
    yield takeLatest(UPDATE_MENU_ADMIN, updateMenuAdminWorker);
    yield takeLatest(DELETE_MENU_ADMIN, deleteMenuAdminWorker);
    yield takeLatest(GET_MENU_ADMIN_PAGE, getMenuAdminPageWorker);

    yield takeLatest(GET_USER, getUserWorker);
    yield takeLatest(ADD_USER, addUserWorker);
    yield takeLatest(UPDATE_USER, updateUserWorker);
    yield takeLatest(DELETE_USER, deleteUserWorker);

    yield takeLatest(GET_USER_PERMISSION, getUserPermissionWorker);
    yield takeLatest(UPDATE_USER_PERMISSION, updatePermissionWorker);

    yield takeLatest(GET_SITE_DESCRIPTION, getSiteDescriptionWorker);
    yield takeLatest(UPDATE_SITE_DESCRIPTION, updateSiteDescriptionWorker);
    yield takeLatest(ADD_SITE_DESCRIPTION, addSiteDescriptionWorker);
}
