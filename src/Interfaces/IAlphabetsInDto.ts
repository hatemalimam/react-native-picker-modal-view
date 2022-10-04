import {  ViewStyle } from 'react-native';

export interface IAlphabetsInDto {
	alphabets: string[];
	showAlphabeticalIndex: boolean;
	selectedAlpha?: string;

	setAlphabet: (alphabet: string) => void;
	alphabetsStyle: ViewStyle;
}
