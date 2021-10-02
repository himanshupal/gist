export interface LoginDetails {
	username: string
	password: string
}

export interface LoginErrors extends LoginDetails {
	other?: Array<string>
}
