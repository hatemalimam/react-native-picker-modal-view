// Global Imports
import {
	FlatListProps,
	TextInputProps,
	ModalBaseProps,
	ModalPropsIOS,
	ModalPropsAndroid,
	ViewProps,
	ViewPropsAndroid,
	ViewPropsIOS,	
	ViewStyle
} from 'react-native';

// Local Imports
import { AnimationTypeEnum } from '@Enum';
import { IModalListInDto } from '@Interfaces';

type ModalProps = ModalBaseProps | ModalPropsIOS | ModalPropsAndroid;

type ContainerProps = ViewProps | ViewPropsAndroid | ViewPropsIOS;

type ListType = IModalListInDto[];

export interface IModalProps {
	modalAnimationType?: AnimationTypeEnum;
	showAlphabeticalIndex: boolean;
	onClosed: () => void;
	onBackButtonPressed?: () => void;
	onSelected: (selected: IModalListInDto) => IModalListInDto;
	items: ListType;
	alphabeticalIndexChars?: string[];
	searchInputTextColor?: string;
	keyExtractor?: (key: any, index: number) => string;
	autoGenerateAlphabeticalIndex?: boolean;
	sortingLanguage?: string;
	showToTopButton?: boolean;
	onEndReached: () => void;
	removeClippedSubviews: boolean;
	FlatListProps?: FlatListProps<any>;
	selectPlaceholderText: string;
	selected?: IModalListInDto;
	searchPlaceholderText: string;
	SearchInputProps?: TextInputProps;
	ModalProps?: ModalProps;
	ContainerProps?: ContainerProps;
	autoSort?: boolean;
	disabled: boolean;
	requireSelection: boolean;
	renderListItem?: (selectedItem: IModalListInDto, listItem: IModalListInDto) => JSX.Element
	renderSelectView?: (disabled: boolean, selected: IModalListInDto, showModal: () => void) => React.ReactElement
	backButtonDisabled?: boolean,
	renderSearch?: (onClose: () => void, onBack: () => void ) =>  JSX.Element,
	searchInputStyle?: ViewStyle,
	alphabetsStyle?: ViewStyle
}

export interface IModalState {
	modalVisible: boolean;
	searchText: string;
	alphabeticalIndexChars?: string[];
	stickyBottomButton?: boolean;
	selectedAlpha?: string;
	selectedObject?: IModalListInDto;
}
