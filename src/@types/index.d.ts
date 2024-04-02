declare module '*.svg' {
    import type React from 'react';

    const content: React.FC<React.SVGProps<SVGSVGElement>>;
    export default content;
}

declare module '*.jpg' {
    const content: string;
    export default content;
}

declare module '*.png' {
    const content: string;
    export default content;
}

declare module '*.json' {
    const content: string;
    export default content;
}
