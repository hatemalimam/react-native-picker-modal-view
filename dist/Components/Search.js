import * as React from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import { SearchStyle } from '../Assets/Styles';
export class SearchComponent extends React.PureComponent {
    render() {
        const { SearchInputProps, placeholderTextColor, onClose, setText, forceSelect, searchText, onBackRequest, backButtonDisabled, searchInputStyle, leftArrowIcon, closeArrowIcon } = this.props;
        return (React.createElement(View, { style: SearchStyle.searchArea },
            !backButtonDisabled &&
                this.touchableOpacityButton(onBackRequest, require('../Assets/Images/left-arrow.png'), SearchStyle.leftBtn, SearchStyle.backButton, leftArrowIcon),
            React.createElement(TextInput, Object.assign({ placeholder: searchText, placeholderTextColor: placeholderTextColor, style: [SearchStyle.textInput, forceSelect && SearchStyle.nonCloseButton, backButtonDisabled && SearchStyle.nonBackButton, searchInputStyle && searchInputStyle], underlineColorAndroid: 'transparent', onChangeText: (text) => setText(text) }, SearchInputProps)),
            !forceSelect &&
                this.touchableOpacityButton(onClose, require('../Assets/Images/close.png'), SearchStyle.leftBtn, SearchStyle.closeButton, closeArrowIcon)));
    }
    touchableOpacityButton(onPress, imgSrc, buttonStyle, imgStyle, Component) {
        return (React.createElement(TouchableOpacity, { onPress: () => onPress(), style: buttonStyle }, Component ? React.createElement(Component, { style: imgStyle }) : React.createElement(Image, { source: imgSrc, style: imgStyle })));
    }
}
//# sourceMappingURL=Search.js.map