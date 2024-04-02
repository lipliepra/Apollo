import React, {
    useState,
    useRef,
    useEffect,
} from 'react';

import { calculatePosition } from './utils';
import { useAdaptive } from '../../hooks/useAdaptive';
import { generateCLassNames } from '../../utils/generateClassNames';
import { NOOP } from '../../constants';
import { CFC } from '../../types';
import {
    ITooltipProps,
    TPosition,
} from './types';
import './index.scss';

export const Tooltip: CFC<ITooltipProps> = ({
    content,
    children,
    dataTestId,
    defaultPosition = 'top',
    id = '',
    delay = 0,
    className = '',
    onHover = NOOP,
    onHide = NOOP,

}) => {
    const [isReadyForShow, setIsReadyForShow] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [position, setPosition] = useState<TPosition>(defaultPosition);

    const { isMobile } = useAdaptive();

    const blockRef = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<HTMLDivElement>(null);

    const generatedBlockCls = generateCLassNames({
        block: 'apollo-tooltip',
        mods: { hidden: !isVisible },
        className,
    });

    const generatedBodyCls = generateCLassNames({
        block: 'apollo-tooltip',
        elem: 'body',
        mods: { position },
    });

    const changeReadyForShowHandler = (value: boolean) => () => {
        setIsReadyForShow(value);
    };

    useEffect(() => {
        setIsVisible(isReadyForShow);
        setPosition(calculatePosition(blockRef.current, bodyRef.current, defaultPosition));
    }, [
        !!(blockRef.current && bodyRef.current),
        isReadyForShow,
        defaultPosition,
        content,
    ]);

    useEffect(() => {
        if (isVisible && onHover) onHover();
    }, [isVisible]);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        if (isVisible && isMobile && delay) {
            timeout = setTimeout(() => {
                changeReadyForShowHandler(false);

                if (onHide) onHide();
            }, delay);
        }

        return () => {
            if (timeout) clearTimeout(timeout);
        };
    }, [
        isVisible,
        isMobile,
        delay,
    ]);

    return (
        <div
            id={id}
            ref={blockRef}
            className={generatedBlockCls}
            onTouchEnd={changeReadyForShowHandler(true)}
            onMouseEnter={changeReadyForShowHandler(true)}
            onMouseLeave={changeReadyForShowHandler(false)}
            data-test-id={`${dataTestId}Tooltip`}
        >
            {children}

            <div
                ref={bodyRef}
                className={generatedBodyCls}
            >
                {content}
            </div>
        </div>
    );
};
