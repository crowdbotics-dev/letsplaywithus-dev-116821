import axios from "axios"
const letsplaywithusdevAPI = axios.create({
  baseURL: "https://letsplaywithus-dev-116821.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return letsplaywithusdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return letsplaywithusdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return letsplaywithusdevAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_simao_list(payload) {
  return letsplaywithusdevAPI.get(`/api/v1/simao/`)
}
function api_v1_simao_create(payload) {
  return letsplaywithusdevAPI.post(`/api/v1/simao/`, payload)
}
function api_v1_simao_retrieve(payload) {
  return letsplaywithusdevAPI.get(`/api/v1/simao/${payload.id}/`)
}
function api_v1_simao_update(payload) {
  return letsplaywithusdevAPI.put(`/api/v1/simao/${payload.id}/`, payload)
}
function api_v1_simao_partial_update(payload) {
  return letsplaywithusdevAPI.patch(`/api/v1/simao/${payload.id}/`, payload)
}
function api_v1_simao_destroy(payload) {
  return letsplaywithusdevAPI.delete(`/api/v1/simao/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return letsplaywithusdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return letsplaywithusdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return letsplaywithusdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return letsplaywithusdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return letsplaywithusdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return letsplaywithusdevAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload
  )
}
function rest_auth_registration_create(payload) {
  return letsplaywithusdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return letsplaywithusdevAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return letsplaywithusdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return letsplaywithusdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return letsplaywithusdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_simao_list,
  api_v1_simao_create,
  api_v1_simao_retrieve,
  api_v1_simao_update,
  api_v1_simao_partial_update,
  api_v1_simao_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
