import React, {
    FC,
    useState,
} from 'react';
import {
    AnimatePresence,
    motion,
} from 'framer-motion';
import cn from 'classnames';

import { Icon } from '../../Icon';
import { ICONS } from '../../../assets';
import { generateCLassNames } from '../../../utils/generateClassNames';
import {
    ACCORDION_DESCRIPTION_TRANSITION,
    ACCORDION_DESCRIPTION_VARIANTS,
} from '../constants';
import { IAccordionProps } from '../types';

const AccordionComponent: FC<IAccordionProps> = ({
    title,
    description,
    dataTestId,
    className = '',
    iconPrefix = null,
    reactRef = null,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const generatedCls = generateCLassNames({
        block: 'apollo-accordion',
        className,
    });

    const changeIsOpenHandler = () => {
        setIsOpen((state) => !state);
    };

    return (
        <div
            ref={reactRef}
            className={generatedCls}
            data-test-id={`${dataTestId}Accordion`}
        >
            <div
                className={cn('apollo-accordion__header', { 'apollo-accordion__header_active': isOpen })}
                onClick={changeIsOpenHandler}
            >

                <span className='apollo-accordion__title'>
                    {iconPrefix && (
                        <Icon
                            path={iconPrefix}
                            className={cn('apollo-accordion__icon', 'apollo-accordion__icon_left')}
                            dataTestId={`${dataTestId}Accordion`}
                        />
                    )}

                    {title}
                </span>

                <Icon
                    path={ICONS.ChevronDown}
                    className={cn('apollo-accordion__icon', 'apollo-accordion__icon_right')}
                    dataTestId={`${dataTestId}Accordion`}
                />
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className='apollo-accordion__description'
                        initial='collapsed'
                        animate='open'
                        exit='collapsed'
                        variants={ACCORDION_DESCRIPTION_VARIANTS}
                        transition={ACCORDION_DESCRIPTION_TRANSITION}
                    >
                        <div className='apollo-accordion__content'>{description}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AccordionComponent;