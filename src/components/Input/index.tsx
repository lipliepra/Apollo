import { withMode } from './hocs/withMode';
import { withSkeleton } from './hocs/withSkeleton';
import { ComponentEdit } from './parts/ComponentEdit';
import { ComponentView } from './parts/ComponentView';

/** Компонент текстового поля */
export const Input = withSkeleton(withMode({
    Edit: ComponentEdit,
    View: ComponentView,
}));
