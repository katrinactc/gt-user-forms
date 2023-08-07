export type FormField = {
    label: string;
    name: string;
    as: string;
    defaultValue?: string | boolean | string[];
    type?: string;
    placeholder?: string;
    children?: any[];
    disabled?: boolean;
};