export interface URIGist {
	id: NonNullable<string>
	title: string
	text: string
}

export type URIGistList = Array<URIGist>
