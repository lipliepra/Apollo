import React, {
    useRef,
    useState,
} from 'react';
import {
    motion,
    AnimatePresence,
} from 'framer-motion';
import { createPortal } from 'react-dom';

import { useDisableScroll } from '../../hooks/useDisableScroll';
import { getGuid } from '../../utils/getGuid';
import {
    IBottomSheetInfo,
    IBottomSheetProps,
} from './types';
import {
    CFC,
    TFunc,
} from '../../types';
import './index.scss';

const guid = getGuid();

const rootElement = document.createElement('div');
const bodyElement = document.querySelector('body');

rootElement.setAttribute('id', `portal-root-${guid}`);
bodyElement?.appendChild(rootElement);

const portalRoot = document.getElementById(`portal-root-${guid}`);

export const BottomSheet: CFC<IBottomSheetProps> = ({
    children,
    isShow,
    setIsShow,
    maxWidth = 1024,
    reactRef = null,
    dataTestId,
}) => {
    const [allowDrag, setAllowDrag] = useState<boolean>(true);
    const [isDragListener, setIsDragListener] = useState<boolean>(true);

    const ref = useRef<HTMLDivElement>(null);

    useDisableScroll(isShow);

    const dragDirection = allowDrag && isDragListener
        ? 'y'
        : false;

    const closeBottomSheetHandler = () => {
        setIsShow(false);
    };

    const onDragHandler: TFunc<[PointerEvent, IBottomSheetInfo]> = (event, info) => {
        setAllowDrag(info.offset.y > 0);
    };

    const onDragStartHandler: TFunc<[PointerEvent, IBottomSheetInfo]> = (event, info) => {
        setAllowDrag(info.delta.y > 0);
    };

    const onDragEndHandler: TFunc<[PointerEvent, IBottomSheetInfo]> = (event, info) => {
        const containerHeight = ref.current?.scrollHeight;
        const isNeedClose = containerHeight && (info.offset.y > containerHeight * 0.6 || info.velocity.y > containerHeight);

        if (allowDrag && isDragListener && isNeedClose) {
            setIsShow(false);
        }

        setAllowDrag(true);
    };

    const setIsDragListenerHandler: TFunc<[boolean], TFunc<[]>> = (value) => () => {
        setIsDragListener(value);
    };

    return createPortal(
        <AnimatePresence>
            {portalRoot && isShow && (
                <motion.div
                    ref={reactRef}
                    className='apollo-bottom-sheet'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    data-test-id={`${dataTestId}BottomSheet`}
                >
                    <div
                        className='apollo-bottom-sheet__backdrop'
                        onClick={closeBottomSheetHandler}
                    />

                    <motion.div
                        drag={dragDirection}
                        dragSnapToOrigin
                        dragConstraints={{ top: 0 }}
                        dragListener={isDragListener}
                        onDrag={onDragHandler}
                        onDragStart={onDragStartHandler}
                        onDragEnd={onDragEndHandler}
                        className='apollo-bottom-sheet__container'
                        ref={ref}
                        style={{ maxWidth: `${maxWidth}px` }}
                    >
                        <div className='apollo-bottom-sheet__header' />

                        <div
                            className='apollo-bottom-sheet__content'
                            onTouchStart={setIsDragListenerHandler(false)}
                            onTouchEnd={setIsDragListenerHandler(true)}
                            onMouseDown={setIsDragListenerHandler(false)}
                            onMouseLeave={setIsDragListenerHandler(true)}
                        >
                            {children}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        portalRoot,
    );
};