/// <reference types="react" />
export interface InformationCardProps {
    title: string;
    children: React.ReactNode;
}
declare const InformationCard: ({ title, children }: InformationCardProps) => JSX.Element;
export default InformationCard;
