/// <reference types="react" />
import { TextInputProps, ViewStyle } from 'react-native';
export interface ISearch {
    placeholderTextColor: string;
    onClose: () => void;
    onBackRequest?: () => void;
    forceSelect: boolean;
    setText: (text: string) => void;
    searchText: string;
    SearchInputProps?: TextInputProps;
    backButtonDisabled?: boolean;
    searchInputStyle: ViewStyle;
    leftArrowIcon?: JSX.Element;
    closeArrowIcon?: JSX.Element;
}
