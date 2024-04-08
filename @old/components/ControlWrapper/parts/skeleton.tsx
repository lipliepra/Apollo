import { type CFC } from '../../../types';
import { generateCLassNames } from '../../../utils/generateClassNames';
import { type IControlWrapperProps } from '../types';

export const Skeleton: CFC<IControlWrapperProps> = ({
    children,
    label,
}) => {
    const generatedCls = generateCLassNames({
        block: 'apollo-control-wrapper',
        elem: 'skeleton',
    });

    return (
        <div className={generatedCls}>
            {label && <div className={`${generatedCls}_label`} />}

            {children}
        </div>
    );
};
