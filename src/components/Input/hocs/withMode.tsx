import {
    type IInputWithMode,
    type IInputWithModeProps,
} from '../types';

export const withMode = (Component: IInputWithMode) => (props: IInputWithModeProps) => {
    const { isReadonly } = props;

    if (isReadonly) return <Component.View {...props} />;

    return <Component.Edit {...props} />;
};
