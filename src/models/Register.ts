export interface RegistrationDetails {
	name: string
	email: string
	username: string
	password: string
	confirmationPassword: string
}

export interface RegistrationErrors extends RegistrationDetails {
	other?: Array<string>
}
