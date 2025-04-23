export interface inputProps {
    name: string;
    type: string;
    placeholder: string;
    value?: string;
}

export interface formProps {
    children: React.ReactNode;
    action: (formaData: FormData) => void;
    className?: string;
    onSubmit?: () => void;
}

export interface buttonProps {
    type?: 'button' | 'submit' | 'reset';
    text: string | React.ReactNode;
    onClick?: () => void;
    actionButton?: boolean;
    bgColor?: string;
}

export interface todoProps {
    id: string;
    title?: string;
    isCompleted: boolean;
    createdAt?: Date;
}