import { TPosition } from './types';
import { TFunc } from '../../types';

export const calculatePosition: TFunc<[HTMLDivElement, HTMLDivElement, TPosition], TPosition> = (
    block,
    body,
    defaultPosition,
) => {
    const blockEdges = block.getBoundingClientRect();
    const bodyEdges = body.getBoundingClientRect();

    if (blockEdges.left > window.innerWidth - bodyEdges.width) return 'left';

    if ((blockEdges.left + (blockEdges.width / 2)) < bodyEdges.width) return 'right';

    if (blockEdges.top > window.innerHeight - bodyEdges.height) return 'top';

    if ((blockEdges.top + (blockEdges.height / 2)) < bodyEdges.height) return 'bottom';

    return calculateDefaultPosition(blockEdges, bodyEdges, defaultPosition);
};

const calculateDefaultPosition: TFunc<[DOMRect, DOMRect, TPosition], TPosition> = (
    blockEdges,
    bodyEdges,
    defaultPosition,
) => {
    switch (defaultPosition) {
        case 'left':
            return (blockEdges.left > bodyEdges.width + (blockEdges.width / 2))
                ? 'left'
                : 'right';
        case 'right':
            return (blockEdges.left < window.innerWidth - bodyEdges.width - blockEdges.width)
                ? 'right'
                : 'left';
        case 'top':
            return (blockEdges.top > bodyEdges.height + (blockEdges.height / 2))
                ? 'top'
                : 'bottom';
        case 'bottom':
            return (window.innerHeight - blockEdges.bottom > bodyEdges.height + (blockEdges.height / 2))
                ? 'bottom'
                : 'top';
        default:
            return 'top';
    }
};