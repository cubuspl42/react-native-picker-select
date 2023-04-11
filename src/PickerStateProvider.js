import React, { useState } from 'react';

/**
 * @typedef {Object} PickerStateData
 * @property {boolean} isModalOpen - Indicates whether a picker-related modal is
 * currently being shown. Note that currently modal is opened for pickers only
 * on iOS.
 *
 * PickerStateContext is a context that gives access to PickerStateData.
 */
export const PickerStateContext = React.createContext();

/**
 * PickerStateProvider provides PickerStateContext and manages the necessary
 * state.
 *
 * This component should be used as a single top-level provider for all picker
 * instances in your application.
 */
export function PickerStateProvider(props) {
    const [isModalShown, setIsModalShown] = useState(false);

    const context = {
        isModalShown,
        setIsModalShown,
    };

    return (
        <PickerStateContext.Provider value={context}>{props.children}</PickerStateContext.Provider>
    );
}
