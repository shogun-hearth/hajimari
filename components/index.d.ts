/// <reference types="react" />
import { BoxProps as BoxProps$1 } from '@mui/material/Box';
import React$1 from 'react';
import { ButtonProps as ButtonProps$1 } from '@mui/material/Button';
import { LinkProps } from 'react-router-dom';
import { IconButtonProps as IconButtonProps$1 } from '@mui/material/IconButton';
import { CardProps as CardProps$1 } from '@mui/material/Card';
import { CardHeaderProps as CardHeaderProps$1 } from '@mui/material/CardHeader';
import { CardContentProps as CardContentProps$1 } from '@mui/material/CardContent';
import { TypographyProps as TypographyProps$1 } from '@mui/material/Typography';
import { ImageListItemProps } from '@mui/material/ImageListItem';
import { ImageListProps } from '@mui/material/ImageList';
import { AccordionProps } from '@mui/material/Accordion';
import { ListProps as ListProps$1, ListItemProps as ListItemProps$1 } from '@mui/material';
import { TextFieldProps as TextFieldProps$1 } from '@mui/material/TextField';

interface BoxProps extends BoxProps$1 {
}
declare const Box: (props: BoxProps) => JSX.Element;

declare type HTMLAnchorProps = React$1.HTMLProps<HTMLAnchorElement>;
interface ButtonProps<C> extends ButtonProps$1 {
    /**
     *
     * This prop is only relevant for the `text` variant.
     *
     * The background type on which this Button is appears. Since we don't
     * currently support light vs dark mode on web as a theme variant, we can
     * use this prop to determine relevant styles.
     *
     * @default 'light'
     */
    bg?: BackgroundMode;
    /**
     * In order to use certain props that one would expect to have available on a button
     * while satisfying typescript in accordance with MUI's component 'composition'
     * rules, we have to do some forwardRef + generics shenanigans:
     *
     * https://mui.com/material-ui/guides/composition/#with-typescript
     * https://github.com/mui/material-ui/issues/15827#issuecomment-809209533
     *
     */
    component?: C | string;
    to?: LinkProps['to'];
    css?: any;
    noStopPropagation?: boolean;
    /**
     * It appears there are some type limitations when it comes to passing in
     * props that an HTML anchor element would accept as attributes; so for now,
     * we'll manually declare these types so that they can be accessed.
     */
    download?: HTMLAnchorProps['download'];
    target?: HTMLAnchorProps['target'];
    rel?: HTMLAnchorProps['rel'];
    /**
     * If `true`, shows the button in a "loading state" with a circular progress indicator
     * @default false
     */
    loading?: boolean;
    /**
     * Text to display in the button when `loading` is `true`.
     * @default false
     */
    loadingIndicator?: string;
}
declare const Button: React$1.ForwardRefExoticComponent<Pick<ButtonProps<React$1.ComponentType<any>>, "className" | "style" | "classes" | "color" | "translate" | "form" | "slot" | "title" | "children" | "component" | "sx" | "key" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "css" | "size" | "disabled" | "name" | "target" | "type" | "href" | "to" | "download" | "rel" | "autoFocus" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "value" | "action" | "loading" | "fullWidth" | "disableElevation" | "startIcon" | "endIcon" | "variant" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableFocusRipple" | "bg" | "noStopPropagation" | "loadingIndicator"> & React$1.RefAttributes<HTMLButtonElement>>;

declare type IconButtonProps = {
    /**
     * The background type that this IconButton is appearing on. Since we don't
     * currently support light vs dark mode on web as a theme variant, we can
     * use this prop to determine relevant styles.
     *
     * @default 'light'
     */
    bg?: BackgroundMode;
} & IconButtonProps$1;
declare const IconButton: (props: IconButtonProps) => JSX.Element;

interface CardColorProperty {
    border?: CommonColor;
    bg?: CommonColor;
}
interface CardProps extends CardProps$1, CardColorProperty {
}
declare const Card: ({ border, children, bg, sx, ...props }: CardProps) => JSX.Element;

interface CardHeaderProps extends CardHeaderProps$1 {
    bottomDivider?: boolean;
    border?: CommonColor;
    bg?: CommonColor;
}
declare const CardHeader: ({ bottomDivider, children, bg, sx, ...otherProps }: CardHeaderProps) => JSX.Element;

interface CardContentProps extends CardContentProps$1 {
    border?: CommonColor;
    bg?: CommonColor;
}
declare const CardContent: ({ children, bg, ...props }: CardContentProps) => JSX.Element;

declare type FontWeightVariant = 'regular' | 'medium' | 'semibold';
declare type FontWeightValue = 400 | 500 | 600;
declare type FontWeight = {
    [w in FontWeightVariant]: FontWeightValue;
};
declare const fontWeights: FontWeight;
interface TypographyProps extends TypographyProps$1 {
    /**
     * @default 'regular'
     */
    weight?: FontWeightVariant;
    /**
     * When using MUI in combination with styled/emotion, we lose access
     * to the component prop. This appears to be a limitation of Typescript;
     * doing this is a workaround:
     *
     * https://github.com/mui/material-ui/issues/15695#issuecomment-1026602904
     */
    component?: React$1.ElementType;
}
declare const Typography: (props: TypographyProps) => JSX.Element;

interface LineItemProps {
    leftContent: React$1.ReactNode;
    rightContent: React$1.ReactNode;
    width?: number | string;
}
declare const LineItem: ({ leftContent, rightContent, width, }: LineItemProps) => JSX.Element;

interface InformationCardProps {
    title: string;
    children: React.ReactNode;
}
declare const InformationCard: ({ title, children }: InformationCardProps) => JSX.Element;

interface ImageItem {
    /**
     * The source string of an image, accepts the same values as the src prop
     * of a the standard HTML img element
     */
    src: string;
    /**
     * A useful description of the image
     */
    alt: string;
}
interface ImageGridItemProps extends ImageListItemProps {
    src: ImageItem['src'];
    alt: ImageItem['alt'];
    action?: React.ReactNode;
}
declare const ImageGridItem: ({ src, alt, action, ...props }: ImageGridItemProps) => JSX.Element;

interface ImageGridProps extends ImageListProps {
}
declare const ImageGrid: ({ children, ...props }: ImageGridProps) => JSX.Element;

declare type SuggestedActionVariant = 'green' | 'yellow' | 'red' | 'greyscale';
interface SuggestedActionProps {
    variant: SuggestedActionVariant;
    description: React$1.ReactNode;
    onClickMenu: () => void;
    dueDate?: string;
    cta: string;
    ctaAction: () => void;
    secondaryCta?: string;
    secondaryCtaAction?: () => void;
}
declare const SuggestedAction: ({ variant, description, onClickMenu, dueDate, cta, ctaAction, secondaryCta, secondaryCtaAction, }: SuggestedActionProps) => JSX.Element;

declare type SuggestedActionAccordionVariant = 'green' | 'yellow' | 'red' | 'greyscale';
interface SuggestedActionAccordionProps extends Omit<AccordionProps, 'variant'> {
    variant: SuggestedActionAccordionVariant;
    groupTitle: string;
    numItems: number;
    highlightNumber?: boolean;
}
declare const SuggestedActionAccordion: ({ variant, groupTitle, numItems, highlightNumber, children, ...otherProps }: SuggestedActionAccordionProps) => JSX.Element;

interface ListProps extends ListProps$1 {
    /**
     * pass in list items as children
     * @default undefined
     */
    children: React$1.ReactNode;
    /**
     * if a hajimari color is specified, the list will have a border
     * @default undefined
     */
    border?: HajimariColor;
}
declare const List: ({ children, border }: ListProps) => JSX.Element;

interface ListItemProps extends ListItemProps$1 {
    /**
     * The main text of list item row
     * @default undefined
     * @optional
     */
    headerText?: string;
    /**
     * a sorta subheader or more text to supplement main header
     * @optional
     */
    description?: string;
    /**
     * primary actions are passed in as children. current use cases include button, toggle, and expand.
     * if no children is passed in, list item will display text row.
     * @optional
     */
    children?: React$1.ReactNode;
    /**
     * if true, headerText will be bolded
     * @optional
     * @default false
     */
    isHeader?: boolean;
}
declare const ListItem: ({ headerText, description, children, divider, isHeader, }: ListItemProps) => JSX.Element;

declare enum NotificationVariant {
    info = "info",
    warning = "warning",
    error = "error"
}
interface InlineNotificationProps extends BoxProps {
    /**
     * Inline notifications are constrained to `info`, `warning`, or `error`.
     * Since the default value is `info`, the default component will have styles
     * related to that variant.
     * @default `info`
     */
    variant?: NotificationVariant;
    onClose?: (args?: any) => void;
    /**
     *
     * @default false
     */
    showStartIcon?: boolean;
    /**
     * @optional function to do some kind of action
     */
    action?: (args?: any) => void;
    /**
     * the text of the actual button. If an `action` is provided without an `actionLabel`,
     * a standalone arrow icon will appear as the CTA
     *
     * @default undefined
     *  */
    actionLabel?: string;
}
declare const InlineNotification: ({ children, variant, onClose, showStartIcon, action, actionLabel, ...props }: InlineNotificationProps) => JSX.Element;

interface BannerProps extends BoxProps {
    /**
     * the bolded title at the top of the banner
     *
     * @optional
     * */
    title?: string;
    /** the description within the banner; the only required prop */
    description: string;
    /**
     * determines whether the `InfoOutlinedIcon` appears to the left of the title
     *
     * @default false
    */
    showStartIcon?: boolean;
    /**
     * if defined, renders a `CloseIcon` at the top right of the banner, which
     * will call the function passed to `onClose` on click
     *
     * @optional
     */
    onClose?: (args?: any) => void;
    /**
     * if defined in conjunction with `primaryActionLabel`, renders a primary
     * `Button` for a primary action
     *
     * @optional
     */
    primaryAction?: (args?: any) => void;
    /**
     * `Button` label for the primary action
     *
     * @optional
     */
    primaryActionLabel?: string;
    /**
     * if defined in conjunction with `secondaryActionLabel`, renders a text
     * `Button` for a secondary action
     *
     * @optional
     */
    secondaryAction?: (args?: any) => void;
    /**
     * `Button` label for the secondary action
     *
     * @optional
     */
    secondaryActionLabel?: string;
}
declare const Banner: ({ title, description, showStartIcon, onClose, primaryAction, primaryActionLabel, secondaryAction, secondaryActionLabel, }: BannerProps) => JSX.Element;

declare type Mask = 'money' | 'moneyWithCents' | 'ssn' | 'lastFourSsn' | 'bankNumber' | 'phone' | 'percent' | 'taxId' | 'year' | 'default' | 'search' | 'date';

declare type TextFieldProps = {
    mask: Mask;
    value?: string;
} & TextFieldProps$1;
declare const TextField: ({ mask, value, onChange, ...otherProps }: TextFieldProps) => JSX.Element;

declare const StatefulTextField: (props: TextFieldProps) => JSX.Element;

interface DatePickerProps {
    name: string;
    label?: string;
    helperText?: string;
    textFieldProps?: Partial<TextFieldProps$1>;
    error?: string;
    onChangeCallback?: (date: any, keyboardInputValue?: string | undefined) => void;
    onBlurCallback?: () => void;
}
declare const DatePickerField: ({ name, label, helperText, textFieldProps, onChangeCallback, onBlurCallback, error, ...otherProps }: DatePickerProps) => JSX.Element;

export { Banner, BannerProps, Box, BoxProps, Button, ButtonProps, Card, CardColorProperty, CardContent, CardContentProps, CardHeader, CardHeaderProps, CardProps, DatePickerField as DatePicker, DatePickerProps, FontWeightValue, FontWeightVariant, IconButton, IconButtonProps, ImageGrid, ImageGridItem, ImageGridItemProps, ImageGridProps, ImageItem, InformationCard, InformationCardProps, InlineNotification, InlineNotificationProps, LineItem, LineItemProps, List, ListItem, ListItemProps, ListProps, NotificationVariant, StatefulTextField, SuggestedAction, SuggestedActionAccordion, SuggestedActionAccordionProps, SuggestedActionProps, TextField, TextFieldProps, Typography, TypographyProps, fontWeights };
