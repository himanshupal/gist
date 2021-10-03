import { ColorRange } from '@/models'

const getLuminance = (numericColors: Array<number>) => {
	const [r, g, b] = numericColors.map((value) => {
		const luminance = value / 255
		return luminance <= 0.03928 ? luminance / 12.92 : ((luminance + 0.055) / 1.055) ** 2.4
	})
	return parseFloat((0.2126 * r + 0.7152 * g + 0.0722 * b).toFixed(3))
}

export const getTextColor = (rgbHex: string) => {
	const hexValues = [rgbHex.slice(1, 3), rgbHex.slice(3, 5), rgbHex.slice(5, 7)]
	const numericValues = hexValues.map((color) => parseInt(color[0], 16) * 16 + parseInt(color[1], 16))

	return getLuminance(numericValues) > Math.sqrt(1.05 * 0.05) ? 'black' : 'white'
}

export const randomTextColor = (range?: ColorRange) => {
	if (!range) range = { minimum: 31, maximum: 255 }

	if (!range?.minimum) range.minimum = 31
	if (!range?.maximum) range.maximum = 255

	return `#` + Math.round(Math.random() * (range?.maximum - range?.minimum) + range?.minimum).toString(16) + Math.round(Math.random() * (range?.maximum - range?.minimum) + range?.minimum).toString(16) + Math.round(Math.random() * (range?.maximum - range?.minimum) + range?.minimum).toString(16)
}
