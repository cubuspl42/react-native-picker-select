import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PickerStateContext } from '../PickerStateProvider';
import { IOS_MODAL_HEIGHT } from '../constants';

/**
 * PickerAvoidingView is a React component that adjusts the view layout to avoid
 * being covered by an open iOS picker modal. It's meant to be similar to
 * the built-in KeyboardAvoidingView component, but specifically tailored for
 * iOS picker modals.
 *
 * In order for this component to work correctly, all the pickers and the
 * PickerAvoidingView should have a PickerStateProvider ancestor.
 *
 * @param {React.ReactNode} props.children - The child components that should be
 * protected from obstruction by the picker modal
 */
export function PickerAvoidingView(props) {
    const context = React.useContext(PickerStateContext);
    const isModalShown = context && context.isModalShown;

    const style = props.enabled
        ? StyleSheet.compose(props.style, {
              paddingBottom: isModalShown ? IOS_MODAL_HEIGHT : 0,
          })
        : props.style;

    return <View style={style}>{props.children}</View>;
}

PickerAvoidingView.defaultProps = {
    enabled: true,
};
