import { AuthErrorCodes } from 'firebase/auth'

export const appName = 'Gist'
export const URI_STORAGE_KEY = 'uri-gists'
export const LOGIN_STATUS_KEY = 'user-is-login'
export const notifyDuration = 1500

export const authErrorMessages: Record<string, string> = {
	[AuthErrorCodes.USER_DELETED]: 'There is no account with this email',
	[AuthErrorCodes.INVALID_PASSWORD]: 'Invalid Password! Please try again',
	[AuthErrorCodes.CREDENTIAL_ALREADY_IN_USE]: 'Email or Password already in use',
	[AuthErrorCodes.EMAIL_EXISTS]: 'An account with this email address already exists',
	[AuthErrorCodes.NETWORK_REQUEST_FAILED]: 'There was some network issue. Please try again',
	[AuthErrorCodes.CREDENTIAL_TOO_OLD_LOGIN_AGAIN]: 'Request failed. Please try again after logging in once again'
}
