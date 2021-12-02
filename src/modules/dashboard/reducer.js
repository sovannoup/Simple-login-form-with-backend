import { success, error, abort } from "redux-saga-requests";

export const GET_MENU_ADMIN = "GET_MENU_ADMIN"
export const ADD_MENU_ADMIN = "ADD_MENU_ADMIN"
export const UPDATE_MENU_ADMIN = "UPDATE_MENU_ADMIN"
export const DELETE_MENU_ADMIN = "DELETE_MENU_ADMIN"
export const GET_MENU_ADMIN_PAGE = "GET_MENU_ADMIN_PAGE"
export const GET_USER = "GET_USER"
export const ADD_USER = "ADD_USER"
export const UPDATE_USER = "UPDATE_USER"
export const DELETE_USER = "DELETE_USER"
export const GET_USER_PERMISSION = "GET_USER_PERMISSION"
export const UPDATE_USER_PERMISSION = "UPDATE_USER_PERMISSION"
export const GET_SITE_DESCRIPTION = "GET_SITE_DESCRIPTION"
export const ADD_SITE_DESCRIPTION = "ADD_SITE_DESCRIPTION"
export const UPDATE_SITE_DESCRIPTION = "UPDATE_SITE_DESCRIPTION"



export const getMenuAdmin = () => ({
  type: GET_MENU_ADMIN,
});

export const getMenuAdminPage = () => ({
  type: GET_MENU_ADMIN_PAGE,
});


export const addMenuAdmin = (payload) => ({
  type: ADD_MENU_ADMIN,
  payload
});

export const updateMenuAdmin = (payload) => ({
  type: UPDATE_MENU_ADMIN,
  payload
});

export const deleteMenuAdmin = (payload) => ({
  type: DELETE_MENU_ADMIN,
  payload
});

export const getUser = () => ({
  type: GET_USER,
});

export const addUser = (payload) => ({
  type: ADD_USER,
  payload
});

export const updateUser = (payload) => ({
  type: UPDATE_USER,
  payload
});

export const deleteUser = (payload) => ({
  type: DELETE_USER,
  payload
});

export const getUserPermission = (payload) => ({
  type: GET_USER_PERMISSION,
  payload
});

export const updatePermission = (payload) => ({
  type: UPDATE_USER_PERMISSION,
  payload
});

export const getSiteDescription = () =>({
  type: GET_SITE_DESCRIPTION
});
export const addSiteDescription = () =>({
  type: ADD_SITE_DESCRIPTION
});
export const updateSiteDescription = (payload) =>({
  type: UPDATE_SITE_DESCRIPTION,
  payload
});



const initialState = {
  loading: false,
  error: false,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    /**
    * GET_MENU_ADMIN
    */
    case GET_MENU_ADMIN:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case success(GET_MENU_ADMIN):
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case error(GET_MENU_ADMIN):
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: true
      };
    case abort(GET_MENU_ADMIN):
      return { ...state, loading: false };

    /**
 * GET_MENU_ADMIN_PAGE
 */
    case GET_MENU_ADMIN_PAGE:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case success(GET_MENU_ADMIN_PAGE):
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case error(GET_MENU_ADMIN_PAGE):
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: true
      };
    case abort(GET_MENU_ADMIN_PAGE):
      return { ...state, loading: false };

    /**
  * ADD_MENU_ADMIN
  */
    case ADD_MENU_ADMIN:
      return {
        ...state,
        loading: true,
        error: false,
        add_menu_admin: false
      };
    case success(ADD_MENU_ADMIN):
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case error(ADD_MENU_ADMIN):
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: true
      };
    case abort(ADD_MENU_ADMIN):
      return { ...state, loading: false };


    /**
  * UPDATE_MENU_ADMIN
  */
    case UPDATE_MENU_ADMIN:
      return {
        ...state,
        loading: true,
        error: false,
        update_menu_admin: false
      };
    case success(UPDATE_MENU_ADMIN):
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case error(UPDATE_MENU_ADMIN):
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: true
      };
    case abort(UPDATE_MENU_ADMIN):
      return { ...state, loading: false };


    /**
  * DELETE_MENU_ADMIN
  */
    case DELETE_MENU_ADMIN:
      return {
        ...state,
        loading: true,
        error: false,
        delete_menu_admin: false
      };
    case success(DELETE_MENU_ADMIN):
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case error(DELETE_MENU_ADMIN):
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: true
      };
    case abort(DELETE_MENU_ADMIN):
      return { ...state, loading: false };

    /**
  * GET_USER
  */
    case GET_USER:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case success(GET_USER):
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case error(GET_USER):
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: true
      };
    case abort(GET_USER):
      return { ...state, loading: false };

    /**
 * ADD_USER
 */
    case ADD_USER:
      return {
        ...state,
        loading: true,
        error: false,
        add_user: false
      };
    case success(ADD_USER):
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case error(ADD_USER):
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: true
      };
    case abort(ADD_USER):
      return { ...state, loading: false };

    /**
 * UPDATE_USER
 */
    case UPDATE_USER:
      return {
        ...state,
        loading: true,
        error: false,
        update_user: false
      };
    case success(UPDATE_USER):
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case error(UPDATE_USER):
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: true
      };
    case abort(UPDATE_USER):
      return { ...state, loading: false };

    /**
 * DELETE_USER
 */
    case DELETE_USER:
      return {
        ...state,
        loading: true,
        error: false,
        delete_user: false
      };
    case success(DELETE_USER):
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case error(DELETE_USER):
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: true
      };
    case abort(DELETE_USER):
      return { ...state, loading: false };

    /**
 * GET_USER_PERMISSION
 */
    case GET_USER_PERMISSION:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case success(GET_USER_PERMISSION):
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case error(GET_USER_PERMISSION):
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: true
      };
    case abort(GET_USER_PERMISSION):
      return { ...state, loading: false };

    /**
 * UPDATE_USER_PERMISSION
 */
    case UPDATE_USER_PERMISSION:
      return {
        ...state,
        loading: true,
        error: false,
        update_permission: false
      };
    case success(UPDATE_USER_PERMISSION):
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case error(UPDATE_USER_PERMISSION):
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: true
      };
    case abort(UPDATE_USER_PERMISSION):
      return { ...state, loading: false };

    /**
  * GET_SITE_DESCRIPTION
  */
     case GET_SITE_DESCRIPTION:
      return {
        ...state,
        loading: true,
        error: false,
        dataGetSiteDescription:false,
        errorGetSiteDescription:false
      };
    case success(GET_SITE_DESCRIPTION):
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case error(GET_SITE_DESCRIPTION):
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: true
      };
    case abort(GET_SITE_DESCRIPTION):
      return { ...state, loading: false };

    /**
 * ADD_SITE_DESCRIPTION
 */
    case ADD_SITE_DESCRIPTION:
      return {
        ...state,
        loading: true,
        error: false,
        dataAddSiteDescription:false
      };
    case success(ADD_SITE_DESCRIPTION):
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case error(ADD_SITE_DESCRIPTION):
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: true
      };
    case abort(ADD_SITE_DESCRIPTION):
      return { ...state, loading: false };

    /**
 * UPDATE_SITE_DESCRIPTION
 */
    case UPDATE_SITE_DESCRIPTION:
      return {
        ...state,
        loading: true,
        error: false,
        dataUpdateSiteDescription:false,
        errorUpdateSiteDescription:false
      };
    case success(UPDATE_SITE_DESCRIPTION):
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case error(UPDATE_SITE_DESCRIPTION):
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: true
      };
    case abort(UPDATE_SITE_DESCRIPTION):
      return { ...state, loading: false };

    /**
     * DEFAULT CASE
     */
    default:
      return state;
  }
}

export default dashboardReducer;